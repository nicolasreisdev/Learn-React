from django.db import models 
from django.contrib.auth.models import AbstractUser, Permission, Group

class CustomUser(AbstractUser):
    is_student = models.BooleanField(default=True)
    is_teacher = models.BooleanField(default=False)

    def __str__(self):
        return self.username
    
    