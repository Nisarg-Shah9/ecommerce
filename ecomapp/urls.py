from ecomapp.views import *
from django.urls import path

app_name = "ecomapp"

urlpatterns = [
    path('', index, name="index"),
    path('shop/', shop, name="shop"),
    path('categories/', categ, name="category"),
    path('category/<cid>/', catprod, name="catprod"),
    path('vendors/', vendor, name="vendor"),
    path('vendor/<vid>/', vendprod, name="vendprod"),
    path('product/<pid>/', proddet, name="proddet"),
]