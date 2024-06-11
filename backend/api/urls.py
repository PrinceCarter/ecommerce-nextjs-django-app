from django.urls import path
from .views import mens_wear_view, womens_wear_view, jewelry_view, product_details, test_redis_connection

urlpatterns = [
    path('mens-wear/', mens_wear_view),
    path('womens-wear/', womens_wear_view),
    path('jewelry/', jewelry_view),
    path('product-details/', product_details),
    path('test-redis-connection/', test_redis_connection, name='test_redis_connection'),
]