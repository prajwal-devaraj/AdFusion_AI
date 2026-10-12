from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.intelligence import router as intelligence_router


app = FastAPI(
    title="AdFusion AI API",
    description="Autonomous multimodal advertising intelligence platform",
    version="0.2.0",
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

app.include_router(intelligence_router, prefix="/api/v1")


@app.get("/")
async def root():
    return {
        "platform": "AdFusion AI",
        "engine": "AdFusion Brain",
        "version": "0.2.0",
        "status": "operational",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "adfusion-api",
    }
