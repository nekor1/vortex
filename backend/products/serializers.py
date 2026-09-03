from django.db import transaction
from rest_framework import serializers

from .models import Product, Order, OrderItem


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="code", read_only=True)
    cat = serializers.CharField(source="category", read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "cat",
            "description",
            "price",
            "image",
            "stock",
            "is_active",
        ]

    def get_image(self, obj):
        if not obj.image:
            return None

        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.image.url)

        return obj.image.url


class OrderItemSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(read_only=True)
    subtotal = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
        read_only=True,
    )

    class Meta:
        model = OrderItem
        fields = [
            "id",
            "product",
            "product_name",
            "price",
            "quantity",
            "subtotal",
        ]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "customer_name",
            "customer_contact",
            "total",
            "status",
            "created_at",
            "items",
        ]
        read_only_fields = [
            "total",
            "status",
            "created_at",
            "items",
        ]

    def validate_customer_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Введите имя.")
        return value

    def validate_customer_contact(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Введите телефон или другой контакт.")
        return value

    def validate(self, attrs):
        raw_items = self.initial_data.get("items")

        if not isinstance(raw_items, list) or not raw_items:
            raise serializers.ValidationError({
                "items": "Корзина пуста."
            })

        for item in raw_items:
            if not isinstance(item, dict):
                raise serializers.ValidationError({
                    "items": "Некорректный товар."
                })

            product_id = item.get("product_id")
            quantity = item.get("quantity")

            try:
                quantity = int(quantity)
            except (TypeError, ValueError):
                quantity = 0

            if not product_id or quantity <= 0:
                raise serializers.ValidationError({
                    "items": "Некорректный товар или количество."
                })

        return attrs

    @transaction.atomic
    def create(self, validated_data):
        raw_items = self.initial_data["items"]

        order = Order.objects.create(
            customer_name=validated_data["customer_name"],
            customer_contact=validated_data["customer_contact"],
        )

        total = 0

        for raw_item in raw_items:
            product_id = str(raw_item["product_id"])

            try:
                product = (
                    Product.objects
                    .select_for_update()
                    .get(code=product_id)
                )
            except Product.DoesNotExist:
                raise serializers.ValidationError({
                    "items": f"Товар с кодом {product_id} не найден."
                })

            quantity = int(raw_item["quantity"])

            if not product.is_active:
                raise serializers.ValidationError({
                    "items": f"Товар «{product.name}» недоступен."
                })

            if product.stock < quantity:
                raise serializers.ValidationError({
                    "items": (
                        f"Недостаточно товара «{product.name}». "
                        f"Остаток: {product.stock}."
                    )
                })

            price = product.price

            OrderItem.objects.create(
                order=order,
                product=product,
                product_name=product.name,
                price=price,
                quantity=quantity,
            )

            total += price * quantity

            product.stock -= quantity
            product.save(update_fields=["stock"])

        order.total = total
        order.save(update_fields=["total"])

        return order
