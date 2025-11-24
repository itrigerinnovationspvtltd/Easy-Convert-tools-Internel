import sys
import os
from PIL import Image
from docx import Document
from fpdf import FPDF
from pdf2docx import Converter

input_path = sys.argv[1]
conversion_type = sys.argv[2]

output_dir = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(output_dir, exist_ok=True)

base_name = os.path.splitext(os.path.basename(input_path))[0]

try:
    if conversion_type == "image-to-png":
        output_path = os.path.join(output_dir, f"{base_name}_converted.png")
        img = Image.open(input_path)
        img.save(output_path, "PNG")

    elif conversion_type == "image-to-jpg":
        output_path = os.path.join(output_dir, f"{base_name}_converted.jpg")
        img = Image.open(input_path).convert("RGB")
        img.save(output_path, "JPEG")

    elif conversion_type == "pdf-to-word":
        output_path = os.path.join(output_dir, f"{base_name}_converted.docx")
        cv = Converter(input_path)
        cv.convert(output_path, start=0, end=None)
        cv.close()
        if not os.path.exists(output_path):
            raise Exception("PDF → Word conversion failed")

    elif conversion_type == "word-to-pdf":
        output_path = os.path.join(output_dir, f"{base_name}_converted.pdf")
        doc = Document(input_path)
        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        for para in doc.paragraphs:
            pdf.multi_cell(0, 10, para.text)
        pdf.output(output_path)
        if not os.path.exists(output_path):
            raise Exception("Word → PDF conversion failed")

    else:
        raise ValueError("Unknown conversion type")

    print(output_path)

except Exception as e:
    print(f"ERROR: {e}")

sys.stdout.flush()
