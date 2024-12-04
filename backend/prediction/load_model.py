import torch
from .models import MaizeModelV2

def load_model(model_path, input_shape=3, hidden_units=10, output_shape=4):
    # Load model on CPU
    model = MaizeModelV2(input_shape=input_shape, hidden_units=hidden_units, output_shape=output_shape)
    model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')), strict=False)
    model.eval()  # Set to evaluation mode
    return model
