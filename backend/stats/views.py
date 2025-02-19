from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import StudentAnswer
from activities.models import Question  # aqui a gente importa os modelos de questões

@api_view(['POST'])
@permission_classes([IsAuthenticated])  # verifica se o usuário está autenticado
def submit_answers(request):
    student = request.user
    answers = request.data.get('answers', [])

    if not isinstance(answers, list):
        return Response({"error": "Formato inválido. 'answers' deve ser uma lista"}, status=400)
    
    for answer in answers:
        try:
            question = Question.objects.get(id=answer['question_id'])
            is_correct = (answer['chosen_answer'] == question.correct_answer)                   # busca a resposta correta do banco
            
            StudentAnswer.objects.create(
                student=student,
                question=question,                                                              # use o objeto Question, não o ID
                chosen_answer=answer['chosen_answer'],
                is_correct=is_correct
            )
        except Question.DoesNotExist:
            return Response({"error": f"Questão com ID {answer['question_id']} não encontrada"}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({"status": "Respostas salvas!"}, status=status.HTTP_201_CREATED)

from rest_framework import generics
from .models import StudentStats
from .serializers import StudentStatsSerializer



# View para retornar as estatísticas do usuário logado ---->>>> Será melhor implementado posteriormente
class StudentStatsView(generics.RetrieveAPIView):
    serializer_class = StudentStatsSerializer
    permission_classes = [IsAuthenticated]                                                     
    
    def get_object(self):
        # Retorna as estatísticas do usuário logado
        return self.request.user.stats