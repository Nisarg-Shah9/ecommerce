from ecomapp.views import *
from django.urls import path

app_name = "ecomapp"

urlpatterns = [
    path('', index, name="index")
]