from fastapi import APIRouter
from pydantic import BaseModel

from services.document_store import get_document

router = APIRouter()


class Question(BaseModel):
    question: str


@router.post("/chat")
def ask(question: Question):

    document = get_document()

    if document == "":
        return {
            "answer": "Please upload a document first."
        }

    question_words = question.question.lower().split()

    sentences = document.split(".")

    matches = []

    for sentence in sentences:

        for word in question_words:

            if word in sentence.lower():

                matches.append(sentence)

                break

    if len(matches) == 0:

        return {

            "answer":"No answer found."

        }

    return {

        "answer":".".join(matches[:5])

    }