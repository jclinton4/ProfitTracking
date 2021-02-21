from django.db import models

# Create your models here.
class Trades(models.Model):
    """Need to determine what fields I want here"""
    # The stock ticker symbol
    symbol = models.CharField("Symbol", max_length=255)
    # Date and time it was purchased
    buy_date = models.DateTimeField("Purchased At", auto_now_add=True)
    # Did you buy shares or options
    asset = models.CharField(max_length=255)
    # How many did you buy
    quantity = models.CharField(max_length=255)
    # Purchase price
    buy_price = models.CharField(max_length=255)
    # Sell price
    sell_price = models.CharField(max_length=255)

    def __str__(self):
        return self.symbol

class Test():
    """Test class for git compare"""
    pass