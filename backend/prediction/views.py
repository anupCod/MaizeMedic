# views.py (in Django app)
import os
import torch
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .load_model import load_model
from .utils import preprocess_image
# Load the model (make sure this is loaded once and used globally if needed)
model_path = os.path.join(settings.BASE_DIR, 'model.pth')
model = load_model(model_path)

@api_view(['POST'])
def predict_disease(request):
    if request.method == 'POST':
        # Get image file from request
        image_file = request.FILES['image']
        image_path = os.path.join(settings.MEDIA_ROOT, 'temp_image.jpg')

        # Save the image temporarily
        with open(image_path, 'wb') as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        # Preprocess the image
        image = preprocess_image(image_path)

        # Predict
        with torch.no_grad():
            outputs = model(image)
            _, predicted = torch.max(outputs, 1)

        # Classify based on your model's classes
        class_names = ['Blight', 'Common_Rust', 'Gray_Leaf_Spot', 'Healthy']
        # class_names = ['Common Rust', 'Gray Leaf Spot', 'Blight', 'Healthy']
        predicted_class = class_names[predicted.item()]

        # Clean up temporary image
        os.remove(image_path)

        return Response({'predicted_class': predicted_class}, status=status.HTTP_200_OK)
