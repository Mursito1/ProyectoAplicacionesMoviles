from django.db import models

# Create your models here.
class Usuario(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)