from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet, OrderViewSet


router = DefaultRouter()
router.register("products", ProductViewSet, basename="products")
router.register("orders", OrderViewSet, basename="orders")


urlpatterns = [
    path("", include(router.urls)),
]
