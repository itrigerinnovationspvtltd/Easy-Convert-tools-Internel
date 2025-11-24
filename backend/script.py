import sys
import os
from PIL import Image

# Get uploaded file path from Node
input_path = sys.argv[1]

# Output directory
output_dir = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(output_dir, exist_ok=True)

# Create output path with .png extension
base_name = os.path.splitext(os.path.basename(input_path))[0]
output_path = os.path.join(output_dir, f"{base_name}_converted.png")

try:
    # Open and convert to PNG
    img = Image.open(input_path)
    img.save(output_path, "PNG")
    print(output_path)  # ✅ Send path to Node
except Exception as e:
    print("Python Error:", e)

sys.stdout.flush()
