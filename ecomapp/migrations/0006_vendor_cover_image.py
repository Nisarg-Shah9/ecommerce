# Generated by Django 4.2 on 2023-06-17 14:33

from django.db import migrations, models
import ecomapp.models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0005_vendor_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='vendor',
            name='cover_image',
            field=models.ImageField(default='vendor.jpg', upload_to=ecomapp.models.user_directory_path),
        ),
    ]