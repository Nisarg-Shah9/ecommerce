# Generated by Django 4.2 on 2023-06-24 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0008_weightsize'),
    ]

    operations = [
        migrations.AddField(
            model_name='weightsize',
            name='old_price',
            field=models.DecimalField(decimal_places=2, default='199.99', max_digits=999999999999),
        ),
    ]
