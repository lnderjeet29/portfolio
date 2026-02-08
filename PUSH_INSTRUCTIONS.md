# Push Code to GitHub - Authentication Guide

## Quick Solution: Use Personal Access Token

### Step 1: Generate Personal Access Token

1. Go to GitHub: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "Portfolio Push"
4. Select scopes: Check **`repo`** (full control of private repositories)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push Using Token

When you run `git push`, use your token as the password:

**Username:** `lnderjeet29`  
**Password:** `[paste your token here]`

Or use this command format:
```bash
git push https://[YOUR_TOKEN]@github.com/lnderjeet29/portfolio.git main
```

---

## Alternative: Use GitHub CLI (Easier)

1. Install GitHub CLI if not installed:
   ```bash
   winget install GitHub.cli
   ```

2. Authenticate:
   ```bash
   gh auth login
   ```
   - Select GitHub.com
   - Select HTTPS
   - Authenticate via browser

3. Push:
   ```bash
   git push -u origin main
   ```

---

## Alternative: Use SSH (Most Secure)

1. Generate SSH key (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "inderjeet-yadav@hcltech.com"
   ```

2. Add SSH key to GitHub:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste and save

3. Change remote to SSH:
   ```bash
   git remote set-url origin git@github.com:lnderjeet29/portfolio.git
   ```

4. Push:
   ```bash
   git push -u origin main
   ```

---

## Quick Fix: Clear Cached Credentials

If you want to clear old credentials and re-authenticate:

**Windows:**
```bash
# Clear credential manager
git credential-manager-core erase
# Or use Windows Credential Manager:
# Control Panel → Credential Manager → Windows Credentials → Remove GitHub entries
```

Then try pushing again - it will prompt for new credentials.

