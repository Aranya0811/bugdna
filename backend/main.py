import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

app = FastAPI(title="BugDNA API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

class Investigation(BaseModel):
    stack_trace: str
    source_code: str

@app.get("/health")
def health():
    return {"status": "ready", "app": "BugDNA"}

@app.post("/investigate")
def investigate(data: Investigation):
    key = os.getenv("GEMINI_API_KEY")
    if not key:
        raise HTTPException(500, "API key is not configured.")

    prompt = f"""
You are BugDNA, a careful software debugging investigator.
Analyze the stack trace and source code. Do not invent evidence.
Separate confirmed facts from hypotheses.

Return a Markdown report with:
1. Incident summary
2. Evidence found
3. Likely failure chain
4. Root-cause hypothesis and confidence
5. Proposed fix
6. Regression test
7. Missing evidence

STACK TRACE:
{data.stack_trace[:12000]}

SOURCE CODE:
{data.source_code[:16000]}
"""

    try:
        client = genai.Client(api_key=key)
        response = client.models.generate_content(
            model="gemma-4-26b-a4b-it",
            contents=prompt,
        )
        if not response.text:
            raise HTTPException(502, "The model returned an empty report.")
        return {"report": response.text}
    except HTTPException:
        raise
    except Exception as exc:
        print(f"Gemma request failed: {exc}")
        raise HTTPException(
            502,
            "Gemma request failed. Check model access, API quota, and server logs."
        )
