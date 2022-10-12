from django.urls import path
from .views import createpost,getall,checkout

urlpatterns = [
    path('getallitem/',getall.as_view()),
    path('create/', createpost.as_view()),
    path('checkout/', checkout.as_view()),
   
]