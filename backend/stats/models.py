from django.db import models
from django.conf import settings  

class StudentAnswer(models.Model):
    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='student_answers'
    )
    question = models.ForeignKey(
        'activities.Question',
        on_delete=models.CASCADE,
        related_name='answers'
    )
    chosen_answer = models.CharField(max_length=1)
    is_correct = models.BooleanField(default=False)

class StudentStats(models.Model):
    student = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='stats'
    )
    total_activities = models.IntegerField(default=0)
    average_score = models.FloatField(default=0)