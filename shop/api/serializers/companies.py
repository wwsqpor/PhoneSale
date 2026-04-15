from rest_framework import serializers
from ..models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


# Plain Serializer для Company
class CompanyInfoSerializer(serializers.Serializer):
    name = serializers.CharField()
    address = serializers.CharField()
    description = serializers.CharField()