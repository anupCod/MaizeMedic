from PIL import Image
import torchvision.transforms as transforms

def preprocess_image(image_path):
    # Define transformations (adjust based on your training preprocessing)
    transform = transforms.Compose([
        transforms.Resize((256, 256)),  # Match training image size
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  # Example normalization
    ])
    image = Image.open(image_path)

    if image.mode != 'RGB':
        image = image.convert('RGB')

    image = transform(image).unsqueeze(0)  # Add batch dimension
    return image