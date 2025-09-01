# Deployment Setup Guide

## Overview
This guide will help you set up automatic deployment to Cloudflare Pages using GitHub Actions.

## Prerequisites
- GitHub repository access
- Cloudflare account
- Cloudflare Pages project created

## Step 1: Get Cloudflare API Token

1. **Login to Cloudflare Dashboard**
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in to your account

2. **Create API Token**
   - Click on your profile icon (top right)
   - Select **"My Profile"**
   - Go to **"API Tokens"** tab
   - Click **"Create Token"**

3. **Configure Token Permissions**
   - Use **"Custom token"** template
   - Set permissions:
     - **Zone:Zone:Read** (for all zones)
     - **Zone:Zone Settings:Read** (for all zones)
     - **Account:Cloudflare Pages:Edit** (for your account)
   - Set **Account Resources** to your account
   - Set **Zone Resources** to "All zones"
   - Click **"Continue to summary"**
   - Click **"Create Token"**

4. **Copy the Token**
   - Save the token securely (you won't see it again)

## Step 2: Get Cloudflare Account ID

1. **Find Account ID**
   - In Cloudflare Dashboard, look at the URL
   - It will be: `https://dash.cloudflare.com/<ACCOUNT_ID>`
   - Or go to **"My Profile"** → **"API Tokens"** → **"Global API Key"** section
   - Your Account ID is displayed there

## Step 3: Configure GitHub Secrets

1. **Go to GitHub Repository**
   - Navigate to your repository: `https://github.com/ai-hub-2/we1`

2. **Access Repository Settings**
   - Click **"Settings"** tab
   - In the left sidebar, click **"Secrets and variables"**
   - Click **"Actions"**

3. **Add Required Secrets**
   - Click **"New repository secret"**
   - Add these secrets:

   ### Secret 1: CLOUDFLARE_API_TOKEN
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: Your Cloudflare API token from Step 1

   ### Secret 2: CLOUDFLARE_ACCOUNT_ID
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: Your Cloudflare Account ID from Step 2

## Step 4: Create Cloudflare Pages Project

1. **Access Cloudflare Pages**
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Click **"Pages"** in the sidebar

2. **Create New Project**
   - Click **"Create a project"**
   - Choose **"Connect to Git"**
   - Select your GitHub repository: `ai-hub-2/we1`

3. **Configure Build Settings**
   - **Project name**: `we-dev`
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `cd apps/we-dev-next && pnpm install && pnpm build`
   - **Build output directory**: `apps/we-dev-next/.next`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables**
   - Add: `NEXT_PUBLIC_APP_NAME` = `we-dev`

5. **Deploy**
   - Click **"Save and Deploy"**

## Step 5: Test Deployment

1. **Push to Main Branch**
   - Merge your current branch to main
   - Or create a pull request

2. **Monitor Deployment**
   - Check GitHub Actions tab
   - Check Cloudflare Pages dashboard

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check if all dependencies are installed
   - Verify Node.js version compatibility

2. **Deployment Fails**
   - Verify API token permissions
   - Check account ID is correct
   - Ensure project name matches in wrangler.toml

3. **404 Errors**
   - Check if .next directory is being built
   - Verify build output directory path

## Security Notes

- Never commit API tokens to your repository
- Use repository secrets for sensitive data
- Regularly rotate your API tokens
- Use minimal required permissions for tokens

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Check Cloudflare Pages deployment logs
3. Verify all secrets are correctly set
4. Ensure project configuration matches