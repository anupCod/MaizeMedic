from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    confirmedPassword = serializers.CharField(write_only=True)
    createdPassword = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'createdPassword', 'confirmedPassword']

    # Validate that the two passwords match
    def validate(self, data):
        if data['createdPassword'] != data['confirmedPassword']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    # Create the user after validation
    def create(self, validated_data):
        validated_data.pop('confirmedPassword')  # Remove the confirmedPassword since it's not needed for creation
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['createdPassword'])  # Hash the password
        user.save()
        return user
