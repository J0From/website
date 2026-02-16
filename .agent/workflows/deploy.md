---
description: How to deploy to production — ALWAYS use GCP Cloud Run, NEVER use Vercel
---

# Deployment Rules

> **HARD RULE: ALL deployments go to GCP Cloud Run. NEVER use Vercel.**

## GCP Project
- Project: `jo-from-dashboard`
- Region: `us-central1`
- Artifact Registry: `us-central1-docker.pkg.dev/jo-from-dashboard/docker-repo`
- Cloud Run Service: `jofrom-website`
- Service URL: `https://jofrom-website-1069050176563.us-central1.run.app`

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
gcloud builds submit --tag us-central1-docker.pkg.dev/jo-from-dashboard/docker-repo/jofrom-website --project jo-from-dashboard
```

4. Deploy to Cloud Run:
```
gcloud run deploy jofrom-website \
  --image us-central1-docker.pkg.dev/jo-from-dashboard/docker-repo/jofrom-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --project jo-from-dashboard
```

5. Verify the deployment URL printed in the output.
