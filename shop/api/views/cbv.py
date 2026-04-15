from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Product
from ..serializers.products import ProductSerializer


class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ProductDetail(APIView):
    def get(self, request, id):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Response({'error': 'Not found'}, status=404)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, id):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Response({'error': 'Not found'}, status=404)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Response({'error': 'Not found'}, status=404)
        product.delete()
        return Response(status=204)