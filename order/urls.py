from django.urls import path
from .views import makePayment

urlpatterns = [
    path('payment/', makePayment.as_view())
]