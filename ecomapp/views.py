from django.shortcuts import render, redirect
from ecomapp.models import *
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage, InvalidPage

def index(request):
    if request.user.is_authenticated:
        products = Product.objects.filter(product_status="published", featured=True)
        categories = Category.objects.all()
        vendors = Vendor.objects.all()
        context = {'products' : products, 'categories' : categories, 'vendors' : vendors}
        return render(request, 'mains/index.html', context)
    else:
        return redirect("userauths:login")
def categ(request):
    if request.user.is_authenticated:
        categories = Category.objects.all()
        context = {'categories' : categories}
        return render(request, 'mains/category.html', context)
    else:
        return redirect("userauths:login")
def catprod(request, cid):
    if request.user.is_authenticated:
        category = Category.objects.get(cid=cid)
        products = Product.objects.filter(product_status="published", category=category)
        context = {'category' : category, 'products' : products}
        return render(request, 'mains/catprod.html', context)
    else:
        return redirect("userauths:login")
def vendor(request):
    if request.user.is_authenticated:
        vendors = Vendor.objects.all()
        context = {'vendors' : vendors}
        return render(request, 'mains/vendors.html', context)
    else:
        return redirect("userauths:login")
def shop(request):
    if request.user.is_authenticated:
        products = Product.objects.filter(product_status="published")
        # p = Paginator(products, 1)
        # page_number = request.GET.get('page')
        # try:
        #     page_obj = p.get_page(page_number)
        # except InvalidPage:
        #     p.page(1)
        context = {'products' : products}
        return render(request, 'mains/shop.html', context)
    else:
        return redirect("userauths:login")
