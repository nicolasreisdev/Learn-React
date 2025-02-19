from rest_framework import serializers
from .models import Activity, Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text', 'options']

class ActivitySerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    class Meta:
        model = Activity
        fields = ['id', 'title', 'difficulty', 'questions']