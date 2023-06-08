from userauths.views import *
from django.urls import path

app_name = "userauths"

urlpatterns = [
    path('signup/', signup, name="signup"),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout")
]