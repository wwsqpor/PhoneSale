from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Product, Company
from ..serializers.products import ProductSummarySerializer
from ..serializers.companies import CompanyInfoSerializer


@api_view(['GET'])
def product_summary_list(request):
    products = Product.objects.all()
    serializer = ProductSummarySerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanyInfoSerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanyInfoSerializer(data=request.data)
        if serializer.is_valid():
            Company.objects.create(**serializer.validated_data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)