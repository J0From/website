---
description: How to deploy to production — ALWAYS use GCP Cloud Run, NEVER use Vercel
---

# Deployment Rules

> **HARD RULE: ALL deployments go to GCP Cloud Run. NEVER use Vercel.**

## GCP Project
- Project: `jo-from-dashboard`
- Region: `us-central1`

## Deploy the JofromWebsite

// turbo-all

1. Ensure you are in the project directory:
```
cd /Users/Jeremy/.gemini/antigravity/scratch/JofromWebsite
```

2. Commit and push all changes to `main`:
```
git add -A && git commit -m "<message>" && git push origin main
```

3. Build the Docker image via Cloud Build:
```
gcloud builds submit --tag gcr.io/jo-from-dashboard/jofrom-website --project jo-from-dashboard
```

4. Deploy to Cloud Run:
```
gcloud run deploy jofrom-website \
  --image gcr.io/jo-from-dashboard/jofrom-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --project jo-from-dashboard
```

5. Verify the deployment URL printed in the output.
