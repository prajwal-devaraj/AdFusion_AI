from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AdFusion AI API",
    description="Enterprise Multimodal Conversational Advertising Intelligence Platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "platform": "AdFusion AI",
        "message": "AdFusion AI API is running",
        "version": "1.0.0",
        "status": "operational",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "adfusion-api",
        "version": "1.0.0",
    }
