from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings # Add this import at the top


class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.PROTECT, related_name='products')
    
    # Product's characteristics
    is_lte = models.BooleanField(default=True)
    os = models.CharField(max_length=50)
    sim_cards_quantity = models.PositiveIntegerField()
    supports_5g = models.BooleanField(default=False)
    supports_nfc = models.BooleanField(default=True)
    color = models.CharField(max_length=50)
    screen_refresh_rate = models.PositiveIntegerField(help_text="Hz")

    class ScreenTechnology(models.TextChoices):
        LCD = "LCD", _("LCD")
        OLED = "OLED", _("OLED")
        AMOLED = "AMOLED", _("AMOLED")

    screen_tech = models.CharField(
        max_length=10, 
        choices=ScreenTechnology.choices, 
        default=ScreenTechnology.OLED
    )

    def __str__(self):
        return f"{self.company.name} {self.name}"

class CartItem(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # This points to the built-in User
        on_delete=models.CASCADE, 
        related_name='cart'
    )
    # ... rest of your fields ...
class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    text = models.TextField()

    class Score(models.IntegerChoices):
        EXCELLENT = 5, _("5 Stars")
        GOOD = 4, _("4 Stars")
        AVERAGE = 3, _("3 Stars")
        POOR = 2, _("2 Stars")
        TERRIBLE = 1, _("1 Star")

    rating = models.IntegerField(choices=Score.choices, default=Score.EXCELLENT)


class CartItem(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, #Built-in User
        on_delete=models.CASCADE, 
        related_name='cart'
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in {self.user.username}'s cart"