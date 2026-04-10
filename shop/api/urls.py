from django.urls import path, include
from .views.fbv import product_summary_list
from .views.auth import register, login, logout

urlpatterns = [
    path('test/', product_summary_list),
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
]