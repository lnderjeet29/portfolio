# Quick Push Guide

## The Issue
Git is using cached credentials for a different account. Here's how to fix it:

## Solution: Clear Credentials & Re-authenticate

### Step 1: Clear Windows Credentials

1. Press `Windows Key + R`
2. Type: `control /name Microsoft.CredentialManager`
3. Click "Windows Credentials"
4. Find any entries with "github.com" or "git:"
5. Click on them and select "Remove"

### Step 2: Generate Personal Access Token

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `Portfolio Push`
4. Expiration: `90 days` (or your preference)
5. **Check the `repo` checkbox** (this gives full repository access)
6. Click **"Generate token"** at the bottom
7. **COPY THE TOKEN** - you won't see it again!

### Step 3: Push with Token

Run this command (replace YOUR_TOKEN with your actual token):

```bash
cd "d:\personal project\portfolio"
git push https://YOUR_TOKEN@github.com/lnderjeet29/portfolio.git main
```

**OR** when prompted for password during normal push, paste the token.

---

## Alternative: Use GitHub Desktop

1. Download: https://desktop.github.com/
2. Sign in with your GitHub account
3. File → Add Local Repository → Select your portfolio folder
4. Click "Publish repository"

---

## Alternative: Use GitHub CLI

```bash
# Install GitHub CLI
winget install GitHub.cli

# Login
gh auth login

# Push
git push -u origin main
```

---

**Your code is ready - just needs authentication! 🚀**

