from rest_framework import serializers
from .models import post,order

class postserializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = post

class orderserializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = order