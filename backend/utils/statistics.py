import math

def document_stats(text, file_size=0, pages=1):

    words = len(text.split())

    characters = len(text)

    reading_time = math.ceil(words / 200)   # Average 200 words/minute

    return {
        "pages": pages,
        "words": words,
        "characters": characters,
        "reading_time": reading_time,
        "file_size": round(file_size / 1024, 2)  # KB
    }