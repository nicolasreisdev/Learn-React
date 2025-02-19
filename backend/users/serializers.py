#Serializer dos usuários
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'username', 
            'email', 
            'first_name', 
            'last_name', 
            'is_student', 
            'is_teacher'
        ]
        read_only_fields = ['id', 'is_student', 'is_teacher'] 


from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

#Serializer para registro de usuários
class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())]
    )
    password = serializers.CharField(
        write_only=True, 
        required=True, 
        validators=[validate_password]
    )
    password_confirmation = serializers.CharField(
        write_only=True, 
        required=True
    )

    class Meta:
        model = CustomUser
        fields = [
            'username', 
            'email', 
            'password', 
            'password_confirmation',
            'first_name', 
            'last_name'
        ]

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirmation']:
            raise serializers.ValidationError({"password": "As senhas não coincidem!"})
        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user
    


from django.contrib.auth import authenticate

#serializer para login de usuários ----->>>>> Será melhor implementado posteriormente
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(username=attrs['username'], password=attrs['password'])
        if not user:
            raise serializers.ValidationError({"error": "Usuário ou senha inválidos"})
        return user