from ecomapp.models import *

def default(request):
    categories = Category.objects.all()
    vendors = Vendor.objects.all()
    address = Address.objects.get(user=request.user)
    return {'categories' : categories, 'address' : address, 'vendors' : vendors}