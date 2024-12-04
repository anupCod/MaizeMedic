from django.urls import path
# from .views import ImagePredictionView
from .views import predict_disease

urlpatterns = [
    # path('predict/', ImagePredictionView.as_view(), name='image-prediction')
    path('predict/', predict_disease, name='prediction')
]
