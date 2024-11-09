from django.contrib.auth.models import User
from rest_framework import serializers

from EmpMgr.team.models import Emp

class AdminSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class EmpSerializer(serializers.ModelSerializer):
       class Meta:
           model = Emp
           fields = '__all__'

