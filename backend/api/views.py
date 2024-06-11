import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.cache import cache
from django.views.decorators.cache import cache_page
from rest_framework.decorators import api_view

@api_view(['GET'])
@cache_page(60 * 15)  # Cache for 15 minutes
def mens_wear_view(request):
    cached_data = cache.get('mens_wear')
    if not cached_data:
        response = requests.get("https://fakestoreapi.com/products/category/men's clothing")
        if response.status_code == 200:
            cached_data = response.json()
            cache.set('mens_wear', cached_data, 60 * 15)  # Cache for 15 minutes
        else:
            return JsonResponse({'error': 'Failed to fetch men\'s wear'}, status=response.status_code)
    return JsonResponse(cached_data, safe=False)

@api_view(['GET'])
def womens_wear_view(request):
    cached_data = cache.get('womens_wear')
    if not cached_data:
      response = requests.get("https://fakestoreapi.com/products/category/women's clothing")
      if response.status_code == 200:
          cached_data = response.json()
          cache.set('womens_wear', cached_data, 60 * 15)  # Cache for 15 minutes
      return JsonResponse({'error': 'Failed to fetch women\'s wear'}, status=response.status_code)
    return JsonResponse(cached_data, safe=False)

@api_view(['GET'])
def jewelry_view(request):
    cached_data = cache.get('jewelry')
    if not cached_data:
      response = requests.get("https://fakestoreapi.com/products/category/jewelery")
      if response.status_code == 200:
          cached_data = response.json()
          cache.set('jewelry', cached_data, 60 * 15)  # Cache for 15 minutes
      return JsonResponse({'error': 'Failed to fetch jewelry catalog.'}, status=response.status_code)
    return JsonResponse(cached_data, safe=False)

@api_view(['GET'])
def product_details(request):
    product_id = request.GET.get('q', '')
    if not product_id:
      return JsonResponse({'error': 'Product ID not found.'}, status=400)
    
    cache_key = f'product_details_{product_id}'
    cached_product_data = cache.get(cache_key)
    
    if (cached_product_data):
      return JsonResponse(cached_product_data, safe=False)
    
    response = requests.get(f"https://fakestoreapi.com/products/{product_id}")
    if response.status_code == 200:
        product_data = response.json()
        # Cache the response for 15 minutes (900 seconds)
        cache.set(cache_key, product_data, 900)
        return JsonResponse(product_data, safe=False)
    else:
      return JsonResponse({'error': 'Error fetching product details'}, status=response.status_code)
  
@api_view(['GET'])
def test_redis_connection(request):
    try:
        cache.set('test', 'value', 60)
        test_value = cache.get('test')
        if test_value == 'value':
            return JsonResponse({'status': 'Redis connection is working'})
        else:
            return JsonResponse({'status': 'Redis connection failed'}, status=500)
    except Exception as e:
        return JsonResponse({'status': f'Redis connection error: {str(e)}'}, status=500)

