from rest_framework import serializers
from ..models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# Plain Serializer (не ModelSerializer) — для требований
class ProductSummarySerializer(serializers.Serializer):
    name = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    description = serializers.CharField()
    brand = serializers.CharField()
    image = serializers.CharField()