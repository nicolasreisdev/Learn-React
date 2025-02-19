from django.contrib import admin
from .models import Activity, Question

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]
    list_display = ('title', 'created_by', 'difficulty', 'created_at')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('activity', 'question_text', 'correct_answer')

