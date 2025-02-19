from django.urls import path
from .views import submit_answers, StudentStatsView 

urlpatterns = [
    path('submit/', submit_answers, name='submit-answers'),
    path('stats/', StudentStatsView.as_view(), name='student-stats'),
]