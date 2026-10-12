# AdFusion AI

AdFusion AI is an AI-native advertising intelligence platform combining campaign analytics, predictive scoring, multimodal creative intelligence, audience intelligence, agentic workflows, experimentation, causal analysis, and optimization.

## Current milestone

- Next.js 16 + TypeScript + Tailwind company dashboard
- FastAPI backend
- AdFusion Intelligence API
- Deterministic baseline intelligence engine
- Live frontend integration with the intelligence API
- Swagger/OpenAPI docs
- PostgreSQL/Redis development services scaffold

## Architecture

```text
AdFusion_AI/
├── apps/
│   ├── api/
│   │   └── app/
│   │       ├── api/v1/
│   │       ├── core/
│   │       ├── models/
│   │       ├── schemas/
│   │       └── services/
│   └── web/
│       └── src/
│           ├── app/
│           └── lib/
├── agents/
├── docs/
├── infrastructure/
├── packages/
├── scripts/
├── services/
└── tests/
```

## Run backend

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r apps/api/requirements.txt
cd apps/api
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Swagger: `http://localhost:8000/docs`

## Run frontend

```bash
cd apps/web
npm install
npm run dev
```

Frontend: `http://localhost:3000`

## Intelligence endpoint

`POST /api/v1/intelligence/analyze`

Example body:

```json
{
  "ctr": 6.4,
  "conversion_rate": 4.1,
  "roas": 4.6,
  "brand_alignment": 94,
  "audience_match": 88
}
```

## Roadmap

- AdFusion Brain
- AdFusion Predict
- Creative Genome
- Audience Graph
- Brand Brain (RAG + knowledge graph)
- Multi-agent campaign orchestration
- Experimentation and contextual bandits
- Causal inference and incrementality
- Budget optimization
- Real ad-platform integrations
