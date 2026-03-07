# DriveGuruji — Master Project File
> Claude Code reads this first. Always. No exceptions.

---

## WHO I AM
I am DriveGuruji — India's first AI-powered automotive portal.
Tagline: *"Gaadi ka har sawaal — Guruji ke paas."*
Owner: Kushagra (founder, Exif Media)
Domain target: driveguruji.com (or similar)

---

## WHAT THIS PROJECT IS

A fully automated automotive website with:
1. **AI Chatbot hero** — Claude API, answers anything about any car/bike in India
2. **Full portal below** — trending cars, budget finder, new launches, compare, EMI calc, articles, brands
3. **Articles section** — opinionated, sharp, no OEM-pleasing fluff
4. **Revenue** — Google AdSense + affiliate (Acko insurance, BankBazaar loans, Amazon accessories)
5. **Zero dealer dependency** — no manual BD, no listings management

**Core philosophy:** CarDekho = you search. CarWale = you filter. DriveGuruji = you ask your Guruji.

---

## TECH STACK

```
Frontend:     Next.js 14 (App Router)
Styling:      Tailwind CSS
Database:     PostgreSQL on Replit (api.driveguruji.com)
Hosting:      Vercel (auto-deploy on git push)
AI:           Claude API (claude-sonnet-4-20250514)
Images:       Unsplash API (free) → later izmostock for production
Content:      MDX files in /content/articles/
Fonts:        Playfair Display + DM Sans + JetBrains Mono
```

---

## DESIGN SYSTEM

```
Colors:
  --ink:    #09090b  (main background)
  --ink2:   #111114  (section alt bg)
  --ink3:   #18181b  (card bg)
  --gold:   #d4a843  (primary accent)
  --smoke:  #a1a1aa  (body text secondary)
  --paper:  #fafaf9  (primary text)

Typography:
  Display:  Playfair Display (serif, editorial)
  Body:     DM Sans (clean, 300 weight default)
  Data/UI:  JetBrains Mono (specs, labels, prices)

Rules:
  - cursor: none (custom gold dot cursor always)
  - Film grain overlay on body (noise SVG)
  - Cards: dark bg, gold border on hover
  - Sections alternate between --ink and --ink2
  - All prices in ₹, ex-showroom Delhi default
  - No purple gradients. No generic AI aesthetics.
```

---

## FILE STRUCTURE

```
driveguruji/
├── CLAUDE.md                  ← YOU ARE HERE (read first always)
├── package.json
├── next.config.js
├── tailwind.config.js
├── .env.local                 ← API keys (never commit)
│
├── app/
│   ├── layout.tsx             ← Root layout, fonts, metadata
│   ├── page.tsx               ← Homepage (chatbot hero + portal)
│   ├── cars/
│   │   ├── page.tsx           ← All cars listing
│   │   └── [slug]/page.tsx    ← Individual car page (SEO)
│   ├── bikes/
│   │   └── [slug]/page.tsx
│   ├── compare/page.tsx
│   ├── articles/
│   │   ├── page.tsx           ← Articles listing
│   │   └── [slug]/page.tsx    ← Individual article (MDX)
│   └── api/
│       └── chat/route.ts      ← Claude API endpoint
│
├── components/
│   ├── ChatWidget.tsx         ← AI chatbot component
│   ├── TrendingGrid.tsx
│   ├── BudgetFinder.tsx
│   ├── LaunchScroll.tsx
│   ├── CompareTable.tsx
│   ├── EmiCalculator.tsx
│   ├── ArticlesSection.tsx
│   └── BrandsGrid.tsx
│
├── content/
│   ├── articles/              ← MDX article files
│   │   └── [article-slug].mdx
│   └── launches/              ← New launch data files
│       └── [car-slug].json
│
├── lib/
│   ├── cars-data.ts           ← All car specs/prices database
│   ├── claude-client.ts       ← Claude API wrapper
│   └── seo.ts                 ← SEO metadata helpers
│
└── scripts/
    ├── add-article.ts         ← Daily: add new article
    ├── add-launch.ts          ← Add new car launch
    └── deploy.sh              ← One command deploy
```

---

## DAILY WORKFLOW — ONE PROMPT COMMANDS

When Kushagra pastes a prompt, Claude Code reads this section and executes:

### ADD AN ARTICLE
```
Prompt: "Article: [title] | [category] | [key points]"
Example: "Article: Why Tata's EV warranty is actually a trap | Opinion | warranty terms, battery replacement cost, real owner experiences"

Action: Claude Code will —
1. Write full 600-800 word article in /content/articles/[slug].mdx
2. Use opinionated, sharp tone (see VOICE section below)
3. Add proper MDX frontmatter (title, date, category, excerpt, readTime, image)
4. Run: git add . && git commit -m "article: [title]" && git push
5. Vercel auto-deploys. Done.
```

### ADD A NEW LAUNCH
```
Prompt: "Launch: [Car Name] | ₹[price] | [key specs] | [launch date]"
Example: "Launch: Tata Sierra EV | ₹22-30L | 500km range, Level 2 ADAS, 3 variants | March 2025"

Action: Claude Code will —
1. Create /content/launches/[slug].json with full structured data
2. Add to homepage LaunchScroll component
3. Auto-generate SEO page at /cars/[slug]
4. Deploy
```

### UPDATE CAR PRICES
```
Prompt: "Price update: [Car] | ₹[new price] | [reason]"

Action: Claude Code will —
1. Update /lib/cars-data.ts
2. Regenerate all affected SEO pages
3. Deploy
```

### ADD QUICK TAKE (opinion strip)
```
Prompt: "Take: [one sharp sentence about cars/bikes in India]"
Example: "Take: Hero Splendor sells 4 lakh units/month. The entire EV industry sells 1.5 lakh. Context before celebration."

Action: Add to QuickTakes array in ArticlesSection.tsx, deploy.
```

### FULL SITE DEPLOY
```
Prompt: "Deploy"
Action: git add . && git commit -m "chore: update" && git push && vercel --prod
```

---

## VOICE & TONE FOR ARTICLES

Every article Claude writes must follow this:

**What APEX sounds like:**
- Confident. Takes a stance. Never says "it depends" without following up with the actual answer.
- Uses real numbers. ₹ amounts, km/l, actual resale percentages.
- Respects the reader's intelligence. Doesn't explain what a hatchback is.
- Calls out OEM marketing bullshit by name. "Claiming 500km range in MIDC cycle is like claiming 40km/l in lab conditions."
- Short paragraphs. Never more than 3 sentences per paragraph.
- No listicles titled "Top 10 reasons to buy X". 

**What APEX never sounds like:**
- "In conclusion, both cars have their pros and cons."
- "It's important to note that..."
- "At the end of the day..."
- Sponsored-feeling. Never soft on a car just because OEMs are potential advertisers.

**Article structure:**
```
Hook (1 para) → The uncomfortable truth nobody is saying
Context (2-3 paras) → The actual data/situation
The argument (3-4 paras) → APEX's take, with evidence
So what? (1 para) → What the reader should do/think
```

**Categories:**
- `opinion` → orange — APEX takes a stance
- `review` → gold — real-world test with data
- `news` → blue — industry analysis, not press releases
- `guide` → purple — buyer decisions, financial clarity  
- `data` → green — numbers-led, sourced analysis

---

## REVENUE INTEGRATIONS (already coded, just activate)

```
Google AdSense:     Paste publisher ID in .env → auto-loads on all pages
Acko Insurance:     Affiliate link on every car page (₹300-800/conversion)
BankBazaar Loans:   EMI calculator CTA → affiliate (₹500-2000/conversion)
Amazon Accessories: Auto-tagged on car pages via ASIN mapping
```

---

## SEO RULES (auto-applied)

Every car/bike page auto-generates:
- Title: "[Car Name] Price in India [Year] — Specs, Mileage, Variants | APEX"
- Meta description: Under 155 chars, includes price and top feature
- Schema markup: Vehicle + FAQPage schema
- Sitemap: Auto-updates on deploy
- Target keywords: "[car name] price", "[car name] vs [rival]", "[car name] review"

---

## ENVIRONMENT VARIABLES (.env.local)

```
ANTHROPIC_API_KEY=           ← Claude API (for chatbot)
NEXT_PUBLIC_SITE_URL=        ← https://driveguruji.com
ADSENSE_PUBLISHER_ID=        ← ca-pub-XXXXXXXXXX
DATABASE_URL=                ← PostgreSQL on Replit
```

---

## DEPLOYMENT

```bash
# First time setup
npm install
vercel link          # connects to Vercel project
vercel env pull      # pulls env vars from Vercel

# Daily deploy (one command)
./scripts/deploy.sh

# What deploy.sh does:
git add .
git commit -m "update: $(date '+%Y-%m-%d')"
git push origin main
# Vercel auto-deploys on push. Done.
```

---

## WHAT'S ALREADY BUILT (HTML prototype)

The full visual prototype exists at: `/mnt/user-data/outputs/driveguruji.html`
This is the reference design. When converting to Next.js, match this exactly.

Components completed in prototype:
- [x] Nav with logo + links
- [x] AI Chatbot hero (Claude API connected, working)
- [x] Trending grid (5 cars, asymmetric layout)
- [x] Budget finder (slider + live results)
- [x] New launches (horizontal scroll)
- [x] Compare tool (Creta EV vs Nexon EV)
- [x] EMI Calculator (real math, 4 sliders)
- [x] Articles section (feature + 6 grid + opinion strip)
- [x] Brands grid (16 brands)
- [x] Footer
- [x] Custom cursor (gold dot)
- [x] Scroll animations (fade-up)
- [x] Film grain overlay

---

## WHAT CLAUDE CODE SHOULD NEVER DO

- Never break the design system (fonts, colors, cursor)
- Never add purple gradients
- Never use Inter/Roboto/Arial font
- Never commit .env.local
- Never remove the film grain overlay
- Never make articles sound neutral/both-sides
- Never add loading spinners (use skeleton screens instead)
- Never make the chatbot refuse to answer car questions citing "I'm not sure"

---

## CONTEXT FOR CLAUDE CODE SESSIONS

When a new Claude Code session starts, it reads this file and immediately knows:
- This is an automotive portal called DriveGuruji
- Owner is Kushagra, based in NCR
- The design is dark/editorial/cinematic (not typical SaaS)
- One-prompt workflow is the operating mode
- Articles are sharp and opinionated, not generic
- Deploy = git push (Vercel handles the rest)

**No further explanation needed. Start executing.**
