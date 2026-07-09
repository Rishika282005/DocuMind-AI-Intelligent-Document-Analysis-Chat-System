import fitz
from docx import Document
import os

import fitz

def get_pdf_pages(path):

    doc = fitz.open(path)

    return len(doc)

def extract_pdf(path):

    doc = fitz.open(path)

    text = ""

    for page in doc:

        text += page.get_text()

    return text


def extract_docx(path):

    doc = Document(path)

    return "\n".join(
        p.text for p in doc.paragraphs
    )


def extract_txt(path):

    with open(path, "r", encoding="utf-8") as f:

        return f.read()


def extract_text(path):

    extension = os.path.splitext(path)[1].lower()

    if extension == ".pdf":

        return extract_pdf(path)

    elif extension == ".docx":

        return extract_docx(path)

    elif extension == ".txt":

        return extract_txt(path)

    else:

        raise Exception("Unsupported file type")