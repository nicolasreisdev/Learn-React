from django.contrib import admin

from django.contrib import admin
from .models import StudentAnswer, StudentStats

@admin.register(StudentStats)
class StudentStatsAdmin(admin.ModelAdmin):
    list_display = ('student', 'average_score', 'total_activities')

@admin.register(StudentAnswer)
class StudentAnswerAdmin(admin.ModelAdmin):
    list_display = ('student', 'question', 'chosen_answer', 'is_correct')