# Deployment Configuration Summary

## Repository Information
- **Repository**: https://github.com/ai-hub-2/we1
- **Branch**: cursor/clone-and-validate-output-directory-3b83
- **Commit**: $(git rev-parse HEAD)

## Build Configuration
- **Framework**: Next.js
- **Build Command**: `cd apps/we-dev-next && pnpm install && pnpm build`
- **Output Directory**: `apps/we-dev-next/.next`
- **Node Version**: v18.17.0
- **pnpm Version**: 10.11.1

## Required GitHub Secrets
Add these secrets to your GitHub repository settings:

1. **CLOUDFLARE_API_TOKEN**
   - Get from: https://dash.cloudflare.com/profile/api-tokens
   - Permissions needed: Zone:Read, Zone Settings:Read, Account:Cloudflare Pages:Edit

2. **CLOUDFLARE_ACCOUNT_ID**
   - Get from: https://dash.cloudflare.com/profile/api-tokens
   - Found in the Global API Key section

## Cloudflare Pages Configuration
- **Project Name**: we-dev
- **Framework Preset**: Next.js
- **Production Branch**: main
- **Build Command**: `cd apps/we-dev-next && pnpm install && pnpm build`
- **Build Output Directory**: `apps/we-dev-next/.next`

## Environment Variables
- **NEXT_PUBLIC_APP_NAME**: we-dev

## Next Steps
1. Add the required secrets to GitHub repository settings
2. Create Cloudflare Pages project
3. Push to main branch to trigger deployment
4. Monitor deployment in GitHub Actions

## Useful Links
- GitHub Repository: https://github.com/ai-hub-2/we1
- GitHub Actions: https://github.com/ai-hub-2/we1/actions
- Cloudflare Dashboard: https://dash.cloudflare.com

## Quick Setup Commands

### 1. Get Cloudflare API Token
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Custom token" template
4. Add permissions:
   - Zone:Zone:Read (All zones)
   - Zone:Zone Settings:Read (All zones)
   - Account:Cloudflare Pages:Edit (Your account)
5. Copy the token

### 2. Get Cloudflare Account ID
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Look for "Global API Key" section
3. Copy your Account ID

### 3. Add GitHub Secrets
1. Go to https://github.com/ai-hub-2/we1/settings/secrets/actions
2. Add `CLOUDFLARE_API_TOKEN` with your token
3. Add `CLOUDFLARE_ACCOUNT_ID` with your account ID

### 4. Create Cloudflare Pages Project
1. Go to https://dash.cloudflare.com/pages
2. Click "Create a project"
3. Connect to Git: https://github.com/ai-hub-2/we1
4. Configure:
   - Project name: we-dev
   - Production branch: main
   - Framework preset: Next.js
   - Build command: `cd apps/we-dev-next && pnpm install && pnpm build`
   - Build output directory: `apps/we-dev-next/.next`
