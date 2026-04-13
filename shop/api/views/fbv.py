from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from ..models import Product
from ..serializers.products import ProductSummarySerializer


@api_view(['GET'])
def product_summary_list(request):
    products_summary = Product.objects.all()
    serializer = ProductSummarySerializer(products_summary, many=True)
    return Response(serializer.data)