from locale import currency
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import post
from .serializer import orderserializer, postserializer
import stripe

secretKey ='sk_test_51LraUnEa6cgmx7JecQFATtvsq1tpCViuptOx1kRogSHDYPcvhz6R53jiBvTH0Q1JsbuSUdmhkcJChbiBPfXiqlGJ008Tr3XZoP'

# Create your views here.
class getall(APIView):
    permission_classes = []
    def get(self,request):
        queryset = post.objects.all()
        data = postserializer(queryset,many= True).data
        return Response(data) 

    def post(self, request):
        queryset = post.objects.filter(id=request.data["id"])[0]
        data = postserializer(queryset).data
        return Response(data)

class checkout(APIView):
    def post(self,request):
        data=request.datß
        data["user"] = request.user.id
        stripe.api_key=secretKey   
        stripe.Charge.create(amount=10, currency='usd',source=data.token)
        jsondata=orderserializer(data=data)
        if jsondata.is_valid():
            jsondata.save()
            return Response(status = status.HTTP_200_OK)
        else:    
            return Response(status = status.HTTP_400_BAD_REQUEST)
        

class createpost(APIView):
    def post(self,request):
        data = request.data
        data["user"] = request.user.id
        jsondata = postserializer(data = data)
        if jsondata.is_valid():
            jsondata.save()
            return Response(status = status.HTTP_200_OK)
        else:    
            return Response(status = status.HTTP_400_BAD_REQUEST)

