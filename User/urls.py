from django.contrib import admin
from django.urls import path,include, re_path
from .views import myaccount,get10users,getuseroverview,getrecommendations

urlpatterns = [
    path("myaccount/",myaccount.as_view()),
        path("getusers/",get10users.as_view()),
           path("getuseroverview/",getuseroverview.as_view()),
           path("getrecommendation/",getrecommendations.as_view()),
          
]
