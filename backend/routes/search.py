from fastapi import APIRouter
from pydantic import BaseModel
from services.document_store import get_document

router = APIRouter()


class Search(BaseModel):
    query: str


@router.post("/search")
def search(data: Search):

    document = get_document()
    print(document[:300])

    if not document:
        return {"results": []}

    query_words = data.query.lower().split()

    results = []

    for sentence in document.split("."):

        sentence_lower = sentence.lower()

        score = 0

        for word in query_words:
            if word in sentence_lower:
                score += 1

        if score > 0:
            results.append({
                "text": sentence.strip(),
                "score": score
            })

    results.sort(key=lambda x: x["score"], reverse=True)

    return {
        "results": results
    }