# APEX AI — Setup in 15 Minutes

## Prerequisites
- Node.js 18+ installed
- Git installed  
- GitHub account
- Vercel account (free at vercel.com)
- Claude API key (from console.anthropic.com)

---

## Step 1 — Clone & Install (2 min)

```bash
# In terminal
git clone https://github.com/YOUR_USERNAME/apex-ai.git
cd apex-ai
npm install
```

---

## Step 2 — Environment Variables (2 min)

Create `.env.local` in project root:

```env
ANTHROPIC_API_KEY=sk-ant-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://apexauto.in
```

Get your Claude API key: https://console.anthropic.com

---

## Step 3 — Connect to Vercel (3 min)

```bash
npm i -g vercel
vercel login
vercel link          # follow prompts, creates new project
vercel env pull      # syncs env vars
```

---

## Step 4 — First Deploy (1 min)

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh "Initial deploy"
```

Vercel gives you a URL like `apex-ai-xyz.vercel.app` immediately.

---

## Step 5 — Custom Domain (5 min)

1. Buy `apexauto.in` (or similar) on GoDaddy (~₹800/year)
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain → follow DNS instructions
4. Live in 10-30 minutes

---

## Step 6 — Claude Desktop Project Setup

1. Open Claude Desktop (claude.ai desktop app)
2. Click "+" → New Project → name it "APEX AI"  
3. In Project Instructions, paste contents of `DESKTOP-PROJECT-PROMPT.md`
4. Now every chat in this project knows the full context

---

## Daily Workflow After Setup

Open Claude Code in your apex-ai folder:

```bash
cd apex-ai
claude  # opens Claude Code
```

Paste your daily prompt. Examples:

```
Article: The Kia Syros is a better buy than the Creta at ₹2 lakh less | opinion | price gap, feature comparison, resale concerns
```

```
Launch: Tata Sierra EV | ₹22-32L | 500km range, Level 2 ADAS, panoramic roof | Q3 2025
```

```
Take: ADAS in India is a lie. Adaptive cruise control needs painted lane markers. How many Indian highways have those?
```

Claude Code reads `CLAUDE.md`, knows exactly what to do, writes the files, deploys. You're done.

---

## Revenue Activation Checklist

- [ ] Google AdSense: apply at adsense.google.com once site has 20+ pages
- [ ] Acko affiliate: partners.acko.com → get tracking links → add to car pages
- [ ] BankBazaar affiliate: bankbazaar.com/affiliate → EMI calc CTA
- [ ] Amazon affiliate: affiliate-program.amazon.in → accessory links

All four can be set up in one afternoon. Then passive.

---

## Support

Ask APEX AI itself: just paste your question in Claude Code or Claude Desktop project chat.
