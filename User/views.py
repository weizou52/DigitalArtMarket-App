
from django.http import JsonResponse
from .serializers import UserSerializer,UserOverviewSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions,authentication
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.utils.decorators import method_decorator
from .models import User
# Create your views here.
class myaccount(APIView):
    permission_classes = [permissions.IsAuthenticated]
    @method_decorator(login_required)
    def get(self,request):
        qs = User.objects.filter(id=request.user.id)[0]
        if qs:
            data = UserSerializer(qs).data
          
            return Response(data)   
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class get10users(APIView):
    permission_classes = []
    def get(self,request):
        qs = User.objects.all()[:10]
        jsondata = UserSerializer(qs,many= True),
        return JsonResponse(jsondata.data)

class getuseroverview(APIView):
    permission_classes = []
    def post(self,request):
        print(request.data)
        qs = User.objects.filter(id = request.data["id"])[0]
        jsondata = UserOverviewSerializer(qs).data
        return Response(jsondata)
 

class getrecommendations(APIView):
    permission_classes = []
    def get(self,request):
        qs = User.objects.all()[:8]
        jsondata = UserSerializer(qs,many = True).data
        return Response(jsondata)