from typing import Literal

from pydantic import BaseModel, Field


class IntelligenceMetric(BaseModel):
    name: str
    score: float = Field(ge=0, le=100)
    status: Literal["excellent", "good", "warning", "critical"]


class IntelligenceSummary(BaseModel):
    overall_score: float = Field(ge=0, le=100)

    creative_quality: IntelligenceMetric
    audience_match: IntelligenceMetric
    brand_alignment: IntelligenceMetric
    conversion_potential: IntelligenceMetric
    budget_efficiency: IntelligenceMetric
    experiment_confidence: IntelligenceMetric

    creative_fatigue_risk: float = Field(ge=0, le=100)
    policy_risk: float = Field(ge=0, le=100)

    recommendation: str