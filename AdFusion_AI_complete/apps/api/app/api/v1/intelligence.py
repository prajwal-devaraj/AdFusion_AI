from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.schemas.intelligence import IntelligenceSummary
from app.services.ml.intelligence_engine import IntelligenceEngine


router = APIRouter(prefix="/intelligence", tags=["AdFusion Intelligence"])
engine = IntelligenceEngine()


class CampaignIntelligenceRequest(BaseModel):
    ctr: float = Field(ge=0)
    conversion_rate: float = Field(ge=0)
    roas: float = Field(ge=0)
    brand_alignment: float = Field(ge=0, le=100)
    audience_match: float = Field(ge=0, le=100)


@router.post("/analyze", response_model=IntelligenceSummary)
async def analyze_campaign(
    payload: CampaignIntelligenceRequest,
) -> IntelligenceSummary:
    return engine.analyze_campaign(
        ctr=payload.ctr,
        conversion_rate=payload.conversion_rate,
        roas=payload.roas,
        brand_alignment=payload.brand_alignment,
        audience_match=payload.audience_match,
    )
