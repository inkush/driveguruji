# DriveGuruji
### *Gaadi ka har sawaal — Guruji ke paas.*

India's AI-powered automotive portal. Chatbot-first. Zero dealer dependency.

**Live at:** driveguruji.com

---

## One-Time Setup

### 1. Install Git
Download from git-scm.com → install → restart computer

### 2. Create GitHub repo
- Go to github.com → New repository
- Name: `driveguruji` → Public → Create
- Copy the repo URL

### 3. Connect this folder to GitHub
Open terminal in this folder and run:
```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/driveguruji.git
git push -u origin main
```

### 4. Connect to Vercel
- vercel.com/dashboard → Add New → Project
- Import Git Repository → select `driveguruji`
- Framework: Other
- Deploy

### 5. Domain
- Settings → Domains → Add `driveguruji.com`
- Auto-connects (purchased through Vercel)

---

## Daily Workflow

Every update is one prompt to Cowork or Claude Code:

```
"Article: [title] | [category] | [key points]"
"Launch: [Car] | ₹[price] | [specs]"
"Take: [sharp one-liner opinion]"
"Price update: [Car] | ₹[new price]"
```

Cowork writes the file → git push → Vercel deploys → done.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Single HTML file (index.html) |
| AI Chatbot | Gemini 2.0 Flash (free, 1500 req/day) |
| Hosting | Vercel |
| Domain | driveguruji.com |
| Version Control | GitHub |

---

## Revenue

1. Google AdSense — apply after 20+ articles
2. Acko Insurance affiliate — ₹300-800/conversion
3. BankBazaar loan affiliate — ₹500-2000/conversion  
4. Amazon accessories affiliate — auto-tagged

---

## Project Brain

See `CLAUDE.md` for full design system, voice guidelines, and daily command reference.
