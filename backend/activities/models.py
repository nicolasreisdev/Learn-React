from django.db import models
from django.conf import settings  

class Activity(models.Model):
    title = models.CharField(max_length=200)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,  
        on_delete=models.CASCADE,
        related_name='activities_created'
    )
    difficulty = models.CharField(
        max_length=20,
        choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')]
    )
    created_at = models.DateTimeField(auto_now_add=True)

class Question(models.Model):
    activity = models.ForeignKey(
        Activity,
        on_delete=models.CASCADE,
        related_name='questions'
    )
    question_text = models.TextField()
    options = models.JSONField()
    correct_answer = models.CharField(max_length=1)