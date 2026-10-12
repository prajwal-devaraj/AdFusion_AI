from app.schemas.intelligence import IntelligenceMetric, IntelligenceSummary


class IntelligenceEngine:
    """Baseline campaign intelligence engine.

    This is intentionally deterministic for the current milestone. It provides
    a stable product/API contract that can later be backed by trained models,
    embeddings, historical campaign data, and experimentation signals.
    """

    def analyze_campaign(
        self,
        ctr: float,
        conversion_rate: float,
        roas: float,
        brand_alignment: float,
        audience_match: float,
    ) -> IntelligenceSummary:
        creative_quality_score = min(100, max(0, ctr * 12))
        conversion_score = min(100, max(0, conversion_rate * 16))
        budget_score = min(100, max(0, roas * 20))

        brand_score = min(100, max(0, brand_alignment))
        audience_score = min(100, max(0, audience_match))

        experiment_score = (
            creative_quality_score + conversion_score + audience_score
        ) / 3

        overall_score = (
            creative_quality_score * 0.20
            + audience_score * 0.20
            + brand_score * 0.15
            + conversion_score * 0.20
            + budget_score * 0.15
            + experiment_score * 0.10
        )

        fatigue_risk = max(0, 100 - creative_quality_score)
        policy_risk = 4.0

        return IntelligenceSummary(
            overall_score=round(overall_score, 2),
            creative_quality=self._metric("Creative Quality", creative_quality_score),
            audience_match=self._metric("Audience Match", audience_score),
            brand_alignment=self._metric("Brand Alignment", brand_score),
            conversion_potential=self._metric("Conversion Potential", conversion_score),
            budget_efficiency=self._metric("Budget Efficiency", budget_score),
            experiment_confidence=self._metric("Experiment Confidence", experiment_score),
            creative_fatigue_risk=round(fatigue_risk, 2),
            policy_risk=policy_risk,
            recommendation=self._recommend(
                creative_quality_score,
                audience_score,
                conversion_score,
            ),
        )

    def _metric(self, name: str, score: float) -> IntelligenceMetric:
        score = round(score, 2)

        if score >= 85:
            status = "excellent"
        elif score >= 70:
            status = "good"
        elif score >= 50:
            status = "warning"
        else:
            status = "critical"

        return IntelligenceMetric(name=name, score=score, status=status)

    def _recommend(
        self,
        creative_score: float,
        audience_score: float,
        conversion_score: float,
    ) -> str:
        lowest = min(creative_score, audience_score, conversion_score)

        if lowest == creative_score:
            return (
                "Creative performance is the weakest signal. "
                "Generate and test additional creative variants."
            )

        if lowest == audience_score:
            return (
                "Audience alignment can be improved. "
                "Test higher-intent audience segments."
            )

        return (
            "Conversion potential is below the other signals. "
            "Review landing-page relevance, offer strength, and CTA."
        )
