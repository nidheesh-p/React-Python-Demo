from django.db import models

class EmpRole:
    ADMIN = 0
    REGULAR = 1

class Emp(models.Model):
    first_name = models.CharField(max_length=200, blank=False)
    last_name = models.CharField(max_length=200, blank=False)
    email = models.EmailField(blank=False)
    phone_number = models.CharField(max_length=20, blank=False)
    role = models.BooleanField(default=EmpRole.REGULAR)
