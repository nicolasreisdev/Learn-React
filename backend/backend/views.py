from django.http import HttpResponse

def home(request):
    return HttpResponse("Bem-vindo ao site de ensino de inglês da Ju! 🎉")