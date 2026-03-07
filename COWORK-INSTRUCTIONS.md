# Cowork Instructions — DriveGuruji
> Paste this in Cowork's Global Instructions (Settings → Cowork → Edit)

---

I am working on DriveGuruji — an automated Indian automotive portal at driveguruji.com.

My project folder is on my Desktop at: ~/Desktop/driveguruji/

Every time I give you a task:
1. Read CLAUDE.md in the project folder first
2. Make the required changes to index.html
3. Run: git add . && git commit -m "[describe change]" && git push origin main
4. Confirm when done — Vercel will auto-deploy

## My one-prompt commands:

**Article:** "Article: [title] | [category] | [key points]"
→ Add article to the articles section in index.html

**New launch:** "Launch: [Car] | ₹[price] | [specs] | [date]"  
→ Add card to the launches scroll in index.html

**Quick Take:** "Take: [opinion]"
→ Add to the opinion strip in index.html

**Price update:** "Price update: [Car] | ₹[price]"
→ Update the price wherever it appears in index.html

**Deploy:** "Deploy"
→ git add . && git commit -m "update" && git push

Never ask me for clarification on these — just execute.
Always push to GitHub after every change.
