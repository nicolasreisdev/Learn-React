from rest_framework import serializers
from .models import StudentStats

class StudentStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStats
        fields = ['average_score', 'total_activities']
        read_only_fields = fields