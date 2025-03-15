from django.db import models

class Medicine(models.Model):
    name = models.CharField(max_length=100)
    stock = models.PositiveIntegerField()
    expiry_date = models.DateField()
    img_url = models.URLField(blank=True, null=True)  # This is the URL field to store image URLs

    def __str__(self):
        return self.name
