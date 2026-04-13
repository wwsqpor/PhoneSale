import os
import django
import random
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop.settings')
django.setup()

from api.models import Company, Product, Review, CartItem
from django.contrib.auth.models import User

fake = Faker()

def populate():
    print("Creating 10 Users...")
    users = []
    for _ in range(10):
        username = fake.user_name()
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, password='password123')
            users.append(user)
    
    print("Creating 40 Companies...")
    companies = []
    for _ in range(40):
        c = Company.objects.create(
            name=fake.company(),
            address=fake.address(),
            description=fake.catch_phrase()
        )
        companies.append(c)

    print("Creating 40 Products...")
    products = []
    os_options = ['Android 14', 'iOS 17', 'HarmonyOS', 'Android 13']
    colors = ['Graphite', 'Silver', 'Alpine Blue', 'Phantom Black', 'Titanium']
    
    for _ in range(40):
        p = Product.objects.create(
            name=f"{fake.word().capitalize()} Pro",
            price=random.randint(150000, 800000),
            description=fake.paragraph(nb_sentences=3),
            company=random.choice(companies),
            is_lte=fake.boolean(),
            os=random.choice(os_options),
            sim_cards_quantity=random.choice([1, 2]),
            supports_5g=fake.boolean(),
            supports_nfc=fake.boolean(),
            color=random.choice(colors),
            screen_refresh_rate=random.choice([60, 90, 120, 144]),
            screen_tech=random.choice(['LCD', 'OLED', 'AMOLED'])
        )
        products.append(p)

    print("Creating 40 Reviews...")
    for _ in range(40):
        Review.objects.create(
            product=random.choice(products),
            text=fake.sentence(),
            rating=random.randint(1, 5)
        )

    print("Creating 40 Cart Items...")
    for _ in range(40):
        CartItem.objects.create(
            user=random.choice(User.objects.all()),
            product=random.choice(products),
            quantity=random.randint(1, 3)
        )

    print("Success! Database populated with 40 rows per category.")

if __name__ == '__main__':
    populate()