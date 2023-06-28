# Generated by Django 4.2 on 2023-06-17 19:53

from django.db import migrations, models
import django.db.models.deletion
import shortuuid.django_fields


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0006_vendor_cover_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimages',
            name='image',
            field=models.ImageField(default='product.jpg', null=True, upload_to='product-images'),
        ),
        migrations.AlterField(
            model_name='productimages',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='p_images', to='ecomapp.product'),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='vid',
            field=shortuuid.django_fields.ShortUUIDField(alphabet='abcdefghijklmnopqrstuvwxyz12345', length=10, max_length=20, prefix='ven', unique=True),
        ),
    ]