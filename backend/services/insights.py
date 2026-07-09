import re


def extract_insights(text):

    words = text.split()

    # ---------- Topics ----------

    freq = {}

    stopwords = {
        "the","is","of","and","to","a","in","for","on","an",
        "that","this","with","as","by","are","was","be","or"
    }

    for word in words:

        clean = word.lower().strip(",.!?()[]{}")

        if len(clean) > 4 and clean not in stopwords:

            freq[clean] = freq.get(clean,0)+1

    topics = sorted(
        freq,
        key=freq.get,
        reverse=True
    )[:10]

    # ---------- Dates ----------

    dates = re.findall(
        r"\d{1,2}/\d{1,2}/\d{2,4}",
        text
    )

    # ---------- Emails ----------

    emails = re.findall(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    return{

        "topics":topics,

        "dates":dates,

        "emails":emails

    }