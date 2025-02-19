#from django.shortcuts import render
from rest_framework import generics
from .serializers import UserLoginSerializer, UserRegistrationSerializer            #Para usar as classes de serializers que criei
from rest_framework.response import Response                                        #Para retornar respostas HTTP 
from rest_framework import status                                                   #Para usar os códigos de status HTTP
from rest_framework.authtoken.models import Token                                   #Para usar o token de autenticação
from django.contrib.auth import authenticate                                        #Para autenticar usuários
from rest_framework.permissions import AllowAny                                     #Para permitir acesso a usuários não autenticados
from django.contrib.auth.models import Group                                        #Para usar os grupos de usuários

class UserRegistrationView(generics.CreateAPIView):                                 #Recebe requisições POST, cria um novo usuário, caso os dados sejam válidos
    serializer_class = UserRegistrationSerializer                                   #Importa a classe de serialização de registro de usuários
    permission_classes = [AllowAny]                                                 #Permite acesso a usuários não autenticados

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)                         #Cria uma instância do serializador com os dados da requisição
        serializer.is_valid(raise_exception=True)                                   #Verifica se os dados são válidos
        user = serializer.save()                                                    #Salva o usuário no banco de dados

        token, created = Token.objects.get_or_create(user=user)                     #Gera token

        if not created:                                                             #Se o token já existir, atualiza a data de criação. Boa prática
            token.created = datetime.datetime.utcnow()
            token.save()
        
        alunos_group = Group.objects.get(name='Alunos')                             #Atribui ao grupo "Alunos" por padrão
        user.groups.add(alunos_group)                                               
        
        return Response(                                                            #Retorna uma resposta HTTP para o usuário depois do registro                                   
            {
                "message": "Usuário registrado com sucesso!",
                "token": token.key,
                "user_id": user.id,
                "is_student": user.is_student,
                "is_teacher": user.is_teacher
            },
            status=status.HTTP_201_CREATED
        )


class UserLoginView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        if user is None:
            return Response({"error": "Credenciais inválidas"}, status=status.HTTP_401_UNAUTHORIZED)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
