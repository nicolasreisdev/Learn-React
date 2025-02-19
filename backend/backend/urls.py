"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views                                                                     #Importa a view criada
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('user/', include('users.urls')),                                               #Rota para usuário
    path('admin/', admin.site.urls),                                                    #Rota para o admin, padrão do Django
    path('', views.home, name='home'),                                                  #Rota para a página inicial
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),        #Para obter o token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),       #Para atualizar o token


    #Teste de API
    path('api2/', include('activities.urls')),                                          #Teste de API
    path('api1/', include('stats.urls')),
]