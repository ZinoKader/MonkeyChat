from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    sender = models.CharField(max_length=255)
    message = models.CharField(max_length=1000)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}: {}".format(self.sender, self.timestamp)
