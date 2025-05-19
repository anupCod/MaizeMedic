# views.py (in Django app)
import torch
from django.http import JsonResponse
from .utils import load_model, get_transform
from PIL import Image
import io
from pathlib import Path
from torchvision import transforms
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data import disease_info

# Load the model (make sure this is loaded once and used globally if needed)
MODEL_PATH = Path("prediction/model/resnet_model.pth")
model = load_model(MODEL_PATH)
transform = get_transform()

class_names = ["Blight", "Common Rust", "Gray Leaf Spot", "Healthy"]
CONFIDENCE_THRESHOLD = 0.8

@api_view(['POST'])
def predict_disease(request):
    if request.method == "POST" and request.FILES.get("image"):
        image_file = request.FILES["image"]
        image = Image.open(image_file).convert("RGB")
        img_tensor = transform(image).unsqueeze(0)  # add batch dim

        with torch.no_grad():
            # outputs = model(img_tensor)
            # _, predicted = torch.max(outputs, 1)
            # predicted_label = class_names[predicted.item()]

            outputs = model(img_tensor)
            probs = torch.softmax(outputs, dim=1)
            max_prob, predicted = torch.max(probs, dim=1)
            max_prob = max_prob.item()
            predicted_label = class_names[predicted.item()]

            if max_prob < CONFIDENCE_THRESHOLD:
                return Response({"error": "Wrong image provided"}, status=400)

            return Response([{'predicted_class': predicted_label}, disease_info[predicted_label]], status=status.HTTP_200_OK)
            
        # return Response([{'predicted_class': predicted_label}, disease_info[predicted_label]], status=status.HTTP_200_OK)
    return Response({"error": "No image provided"}, status=400)


# @api_view(['POST'])
# def predict_disease(request):
#     if request.method == "POST" and request.FILES.get("image"):
#         image_file = request.FILES["image"]
#         image = Image.open(image_file).convert("RGB")
#         img_tensor = transform(image).unsqueeze(0)  # Add batch dim

#         with torch.no_grad():
#             outputs = model(img_tensor)
#             probs = torch.softmax(outputs, dim=1)
#             max_prob, predicted = torch.max(probs, dim=1)

#             max_prob = max_prob.item()
#             predicted_label = class_names[predicted.item()]

#             if max_prob < CONFIDENCE_THRESHOLD:
#                 return Response(
#                     {"message": "Image does not match any known class with high confidence. Try again",
#                      "confidence": round(max_prob, 3)},
#                     status=status.HTTP_200_OK
#                 )

#             return Response([{'predicted_class': predicted_label}, disease_info[predicted_label]], status=status.HTTP_200_OK)

#     return Response({"error": "No image provided"}, status=status.HTTP_400_BAD_REQUEST)


