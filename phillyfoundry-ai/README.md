# PhillyFoundry.ai

PhillyFoundry is an **AI Operating System for Businesses**.

## Folder structure

- `app/` SaaS pages (home, dashboard, tools, agents, settings)
- `components/` shared UI components
- `api/` server endpoints (ai, tools, agents, leads, automation)
- `agents/` AI agents for marketing, SEO, content, sales, support, and lead finding
- `tools/` AI tools marketplace modules
- `automations/` background automation workers
- `database/` SQL schema for users, agents, and usage
- `lib/` integrations for AI, auth, and DB provider
- `styles/` global styles
- `public/` static assets

## Monetization tiers

- Starter — $19/month (5 AI tools)
- Pro — $49/month (all AI tools)
- Business — $99/month (automation + agents)

## Deployment

1. Push to GitHub
2. Import in Vercel
3. Add env vars (`OPENAI_API_KEY`)
4. Deploy
