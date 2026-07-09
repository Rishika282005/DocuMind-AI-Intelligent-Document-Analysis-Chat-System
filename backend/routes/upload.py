from fastapi import APIRouter, UploadFile, File
import shutil
import os

from services.document_store import save_document
from services.document_processor import extract_text
from services.chunker import chunk_text
from services.summarizer import summarize
from utils.statistics import document_stats
from services.document_processor import extract_text, get_pdf_pages
from services.insights import extract_insights

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)
    
    pages = 1
    file_size = os.path.getsize(file_path)
    if file.filename.lower().endswith(".pdf"):
        pages = get_pdf_pages(file_path)
        
    save_document(text)

    chunks = chunk_text(text)

    summary = summarize(text)
    
    insights = extract_insights(text)

    stats = document_stats(
        text,
        file_size=file_size,
        pages=pages
    )

    return {
        "filename": file.filename,
        
        "summary": summary,
        
        "stats": stats,
        
        "total_chunks": len(chunks),
        
        "preview": chunks[:3],
        
        "insights": insights

    }