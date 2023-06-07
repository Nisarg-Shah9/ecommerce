from userauths.views import *
from django.urls import path

app_name = "userauth"

urlpatterns = [
    path('sign-up/', signup, name="signup"),
    path('login/', login_view, name="login"),
]