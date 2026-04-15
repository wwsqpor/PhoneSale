from django.urls import path
from .views.cbv import ProductList, ProductDetail
from .views.fbv import product_summary_list, company_list
from .views.auth import register, login, logout

urlpatterns = [
    path('test/', product_summary_list),
    path('companies/', company_list),
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('products/', ProductList.as_view()),
    path('products/<int:id>/', ProductDetail.as_view()),
]