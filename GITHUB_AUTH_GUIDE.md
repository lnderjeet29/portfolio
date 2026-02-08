# How to Login with Personal GitHub Account in Cursor

## Method 1: Using GitHub Personal Access Token (Recommended)

### Step 1: Generate Personal Access Token

1. Go to GitHub: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Fill in:
   - **Note**: `Cursor Portfolio Access`
   - **Expiration**: Choose 90 days or No expiration
   - **Select scopes**: Check **`repo`** (Full control of private repositories)
4. Click **"Generate token"** at the bottom
5. **COPY THE TOKEN** - You won't see it again! Save it somewhere safe.

### Step 2: Configure Git in Cursor

1. Open Cursor Terminal (`` Ctrl + ` `` or View → Terminal)
2. Set your Git email (use your GitHub email):
   ```bash
   git config --global user.email "inderjeet-yadav@hcltech.com"
   ```
   (Or use the email associated with your GitHub account)

3. Set your Git username:
   ```bash
   git config --global user.name "lnderjeet29"
   ```

### Step 3: Use Token for Authentication

When you push/pull, use the token as password:

```bash
git push -u origin main
```

When prompted:
- **Username**: `lnderjeet29`
- **Password**: `[paste your token here]`

**OR** use token directly in URL (one-time):
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/lnderjeet29/portfolio.git
```

---

## Method 2: Using GitHub CLI (Easiest)

### Step 1: Install GitHub CLI

```bash
winget install GitHub.cli
```

Or download from: https://cli.github.com/

### Step 2: Login to GitHub

```bash
gh auth login
```

Follow the prompts:
1. **GitHub.com** → Enter
2. **HTTPS** → Enter
3. **Authenticate Git with your GitHub credentials?** → **Yes**
4. **How would you like to authenticate?** → **Login with a web browser**
5. Copy the code shown and press Enter
6. Browser will open - paste the code and authorize

### Step 3: Verify Login

```bash
gh auth status
```

You should see: `✓ Logged in to github.com as lnderjeet29`

### Step 4: Configure Git Credentials

```bash
gh auth setup-git
```

This automatically configures Git to use your GitHub credentials.

---

## Method 3: Using SSH Keys (Most Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "inderjeet-yadav@hcltech.com"
```

- Press Enter to accept default location
- Enter a passphrase (optional but recommended)
- Press Enter again to confirm

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   (Or on Windows: `type %USERPROFILE%\.ssh\id_ed25519.pub`)

2. Go to GitHub: **https://github.com/settings/keys**
3. Click **"New SSH key"**
4. Fill in:
   - **Title**: `Cursor Portfolio`
   - **Key**: Paste your public key
5. Click **"Add SSH key"**

### Step 3: Change Remote URL to SSH

```bash
git remote set-url origin git@github.com:lnderjeet29/portfolio.git
```

### Step 4: Test Connection

```bash
ssh -T git@github.com
```

You should see: `Hi lnderjeet29! You've successfully authenticated...`

---

## Method 4: Using Cursor's Built-in Git Authentication

1. In Cursor, click the **Source Control** icon (left sidebar) or press `Ctrl+Shift+G`
2. If you see authentication prompts, click them
3. Cursor will open a browser for GitHub authentication
4. Authorize Cursor to access your GitHub account

---

## Verify Your Setup

After setting up authentication, verify:

```bash
# Check Git config
git config --global user.name
git config --global user.email

# Check remote URL
git remote -v

# Test push (should work without errors)
git push -u origin main
```

---

## Troubleshooting

### If you get "Permission denied" errors:

1. **Clear old credentials:**
   ```bash
   # Windows Credential Manager
   cmdkey /list
   # Remove any GitHub entries
   ```

2. **Check which account you're using:**
   ```bash
   gh auth status
   ```

3. **Re-authenticate:**
   ```bash
   gh auth login
   ```

### If Cursor still uses wrong account:

1. Go to Cursor Settings (File → Preferences → Settings)
2. Search for "git"
3. Check "Git: Enabled" is checked
4. Restart Cursor

---

## Quick Setup (Recommended Path)

**For fastest setup, use GitHub CLI:**

```bash
# 1. Install GitHub CLI
winget install GitHub.cli

# 2. Login
gh auth login

# 3. Setup Git
gh auth setup-git

# 4. Verify
gh auth status

# 5. Push your code
cd "d:\personal project\portfolio"
git push -u origin main
```

That's it! You're now authenticated with your personal GitHub account! 🚀

