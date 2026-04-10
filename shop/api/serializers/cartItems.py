from rest_framework import serializer
from ..models import CartItem


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ("quantity", "added_at", "user", "product")