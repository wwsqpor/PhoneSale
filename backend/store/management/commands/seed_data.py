from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from store.models import Category, Phone


class Command(BaseCommand):
    help = 'Seed database with sample phone shop data'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('admin', 'admin@phoneshop.com', 'admin123')
            self.stdout.write(self.style.SUCCESS('Created admin user (admin/admin123)'))
        if not User.objects.filter(username='testuser').exists():
            User.objects.create_user('testuser', 'test@phoneshop.com', 'test123')
            self.stdout.write(self.style.SUCCESS('Created test user (testuser/test123)'))

        categories_data = [
            ('Flagship', 'Premium flagship smartphones'),
            ('Mid-Range', 'Best value for money phones'),
            ('Budget', 'Affordable smartphones for everyone'),
            ('Foldable', 'Next-gen foldable smartphones'),
        ]
        categories = {}
        for name, desc in categories_data:
            cat, _ = Category.objects.get_or_create(name=name, defaults={'description': desc})
            categories[name] = cat

        phones_data = [
            {'category': categories['Flagship'], 'name': 'iPhone 16 Pro Max', 'brand': 'Apple', 'model': '16 Pro Max', 'price': 1299.99, 'stock': 25, 'description': 'The most powerful iPhone ever with A18 Pro chip, 48MP camera system, and titanium design.', 'ram': '8GB', 'storage': '256GB', 'battery': '4685mAh', 'camera': '48MP Triple', 'image_url': 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'},
            {'category': categories['Flagship'], 'name': 'Galaxy S25 Ultra', 'brand': 'Samsung', 'model': 'S25 Ultra', 'price': 1199.99, 'stock': 30, 'description': 'Samsung ultimate flagship with 200MP camera, built-in S Pen, and Snapdragon 8 Elite.', 'ram': '12GB', 'storage': '256GB', 'battery': '5000mAh', 'camera': '200MP Quad', 'image_url': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400'},
            {'category': categories['Flagship'], 'name': 'Pixel 9 Pro XL', 'brand': 'Google', 'model': '9 Pro XL', 'price': 1099.99, 'stock': 15, 'description': 'Google best camera phone with Tensor G4 chip and 7 years of OS updates.', 'ram': '16GB', 'storage': '128GB', 'battery': '5060mAh', 'camera': '50MP Triple', 'image_url': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400'},
            {'category': categories['Mid-Range'], 'name': 'iPhone 16', 'brand': 'Apple', 'model': '16', 'price': 799.99, 'stock': 50, 'description': 'The standard iPhone 16 with A18 chip, Action Button, and Camera Control.', 'ram': '8GB', 'storage': '128GB', 'battery': '3561mAh', 'camera': '48MP Dual', 'image_url': 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400'},
            {'category': categories['Mid-Range'], 'name': 'Galaxy A55', 'brand': 'Samsung', 'model': 'A55', 'price': 449.99, 'stock': 60, 'description': 'Premium mid-ranger with IP67 rating, 50MP OIS camera, and 5000mAh battery.', 'ram': '8GB', 'storage': '128GB', 'battery': '5000mAh', 'camera': '50MP Triple', 'image_url': 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'},
            {'category': categories['Mid-Range'], 'name': 'OnePlus 13', 'brand': 'OnePlus', 'model': '13', 'price': 899.99, 'stock': 20, 'description': 'Flagship killer with Snapdragon 8 Elite, Hasselblad cameras, and 100W charging.', 'ram': '12GB', 'storage': '256GB', 'battery': '6000mAh', 'camera': '50MP Triple', 'image_url': 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400'},
            {'category': categories['Budget'], 'name': 'Redmi Note 13', 'brand': 'Xiaomi', 'model': 'Note 13', 'price': 199.99, 'stock': 100, 'description': 'Incredible value with 200MP camera, AMOLED display, and long battery life.', 'ram': '8GB', 'storage': '256GB', 'battery': '5000mAh', 'camera': '200MP Triple', 'image_url': 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400'},
            {'category': categories['Budget'], 'name': 'Galaxy A15', 'brand': 'Samsung', 'model': 'A15', 'price': 149.99, 'stock': 80, 'description': 'Reliable Samsung experience at an affordable price with 50MP camera.', 'ram': '4GB', 'storage': '128GB', 'battery': '5000mAh', 'camera': '50MP Triple', 'image_url': 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400'},
            {'category': categories['Foldable'], 'name': 'Galaxy Z Fold 6', 'brand': 'Samsung', 'model': 'Z Fold 6', 'price': 1899.99, 'stock': 10, 'description': 'The ultimate foldable with a 7.6 inch inner display, improved hinge, and S Pen support.', 'ram': '12GB', 'storage': '256GB', 'battery': '4400mAh', 'camera': '50MP Triple', 'image_url': 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400'},
            {'category': categories['Foldable'], 'name': 'Galaxy Z Flip 6', 'brand': 'Samsung', 'model': 'Z Flip 6', 'price': 1099.99, 'stock': 12, 'description': 'Compact flip phone with larger cover screen and upgraded camera.', 'ram': '12GB', 'storage': '256GB', 'battery': '4000mAh', 'camera': '50MP Dual', 'image_url': 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400'},
        ]
        for data in phones_data:
            Phone.objects.get_or_create(name=data['name'], brand=data['brand'], defaults=data)
        self.stdout.write(self.style.SUCCESS(f'Seeded {len(phones_data)} phones in {len(categories_data)} categories'))
