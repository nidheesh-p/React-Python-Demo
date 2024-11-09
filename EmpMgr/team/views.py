from django.contrib.auth.models import User
from EmpMgr.team.models import Emp
from rest_framework import permissions, viewsets

from EmpMgr.team.serializers import EmpSerializer, AdminSerializer


class EmpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Emp.objects.all()
    serializer_class = EmpSerializer


class AdminViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = AdminSerializer
    permission_classes = [permissions.IsAdminUser]
