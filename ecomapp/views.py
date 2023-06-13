from django.shortcuts import render, redirect
from ecomapp.models import *

def index(request):
    if request.user.is_authenticated:
        products = Product.objects.all().order_by('-id')
        context = {'products':products}
        return render(request, 'mains/index.html', context)
    else:
        return redirect("userauths:login")
