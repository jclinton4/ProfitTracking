from django.db import models

# Create your models here.
class Trades(models.Model):
    # Need to determine what fields I want here
    symbol = models.CharField("Symbol", max_length=255)

    def __str__(self):
        return self.symbol
