from django.shortcuts import render, redirect
from userauths.forms import *
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.conf import settings
from userauths.models import *

# User = settings.AUTH_USER_MODEL


def signup(request):
    if request.user.is_authenticated:
        return redirect("ecomapp:index")
    if request.method == "POST":
        form = UserRegistrationForm(request.POST or None)
        if form.is_valid():
            new_user = form.save()
            username = form.cleaned_data.get("username")
            messages.success(
                request, f"Hey {username}, your account was created successfully"
            )
            new_user = authenticate(
                username=form.cleaned_data["email"],
                password=form.cleaned_data["password1"],
            )
            login(request, new_user)
            return redirect("ecomapp:index")
    else:
        form = UserRegistrationForm()

    context = {"form": form}
    return render(request, "userauths/sign-up.html", context)

def login_view(request):
    if request.user.is_authenticated:
        return redirect("ecomapp:index")
    if request.method == "POST":
        forms = UserLoginForm(request.POST or None)
        email = forms.data["email"]
        password = forms.data["password"]
        try:
            user = User.objects.get(email=email)
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "You are logged in")
                return redirect("ecomapp:index")
            else:
                messages.warning(request, "You have entered wrong email or password")
        except:
            messages.warning(request, f"User with email {email} does not exist")
    else:
        forms = UserLoginForm()
    context = {"forms":forms}
    return render(request, "userauths/login.html", context)

def logout_view(request):
    logout(request)
    messages.success(request, "You are logged out")
    return redirect("userauths:login")