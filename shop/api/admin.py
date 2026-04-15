from django.contrib import admin
from .models import Company, Product, Review, CartItem

admin.site.register(Company)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(CartItem)