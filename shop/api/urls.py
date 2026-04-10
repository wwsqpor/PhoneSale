from django.urls import path, include
from .views.fbv import product_summary_list

urlpatterns = [
    path('test/', product_summary_list),
]