import torch
from torchvision import models, transforms

def load_model(model_path):
    model = models.resnet18(pretrained=False)
    model.fc = torch.nn.Linear(in_features=512, out_features=4)
    model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
    model.eval()
    return model

def get_transform():
    return transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225])
    ])
