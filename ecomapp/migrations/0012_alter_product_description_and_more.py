# Generated by Django 4.2 on 2023-06-26 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0011_alter_product_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, default='I am a product', null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='specifications',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='description',
            field=models.TextField(blank=True, default='I am a vendor', null=True),
        ),
    ]
