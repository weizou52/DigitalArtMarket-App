from django.db import models
from User.models import User

# Create your models here.
class post(models.Model):
    title = models.CharField(max_length=60,blank =True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    postdate = models.DateField(auto_now_add=True) 
    image = models.ImageField(upload_to ="./upload", blank = True, null = True,)
    description = models.CharField(max_length=250,blank =True)
    price = models.FloatField(max_length=10)

class order(models.Model):
    post = models.ForeignKey(post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)