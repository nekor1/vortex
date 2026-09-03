from django.contrib import admin
from .models import Product, Order, OrderItem


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "code",
        "name",
        "category",
        "price",
        "stock",
        "is_active",
        "created_at",
    )

    list_filter = ("category", "is_active")
    search_fields = ("code", "name", "category")


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0

    readonly_fields = (
        "product_name",
        "price",
        "quantity",
        "item_total",
    )

    can_delete = False

    def item_total(self, obj):
        if not obj.pk:
            return "-"
        return obj.price * obj.quantity

    item_total.short_description = "Сумма"

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "customer_name",
        "customer_contact",
        "items_summary",
        "total",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "customer_name",
        "customer_contact",
        "items__product_name",
    )

    readonly_fields = (
        "total",
        "created_at",
    )

    inlines = [OrderItemInline]

    ordering = ("-created_at",)

    def items_summary(self, obj):
        items = obj.items.all()

        if not items:
            return "Нет товаров"

        return ", ".join(
            f"{item.product_name} × {item.quantity}"
            for item in items
        )

    items_summary.short_description = "Товары"