from django.contrib import admin
from .models import Company, Product, Review, CartItem

models = ([Company, Product, Review, CartItem])
admin.site.register(models)