export type IntelligenceMetric = {
  name: string;
  score: number;
  status: "excellent" | "good" | "warning" | "critical";
};

export type IntelligenceSummary = {
  overall_score: number;
  creative_quality: IntelligenceMetric;
  audience_match: IntelligenceMetric;
  brand_alignment: IntelligenceMetric;
  conversion_potential: IntelligenceMetric;
  budget_efficiency: IntelligenceMetric;
  experiment_confidence: IntelligenceMetric;
  creative_fatigue_risk: number;
  policy_risk: number;
  recommendation: string;
};

export async function getCampaignIntelligence(): Promise<IntelligenceSummary> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

  const response = await fetch(`${apiUrl}/api/v1/intelligence/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ctr: 6.4,
      conversion_rate: 4.1,
      roas: 4.6,
      brand_alignment: 94,
      audience_match: 88,
    }),
  });

  if (!response.ok) {
    throw new Error(`AdFusion API request failed: ${response.status}`);
  }

  return response.json();
}
