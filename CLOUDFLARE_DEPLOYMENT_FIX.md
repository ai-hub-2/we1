# Cloudflare Pages Deployment Fix

## Problem
The deployment is failing with this error:
```
Configuration file for Pages projects does not support "build"
```

## Root Cause
Cloudflare Pages doesn't support the `[build]` section in `wrangler.toml` for Pages projects. The build configuration should be set in the Cloudflare Pages dashboard instead.

## Solution Applied

### 1. Removed Problematic Files
- ❌ Removed `wrangler.toml` completely
- ✅ No build configuration in files

### 2. Added Alternative Configurations
- ✅ `vercel.json` - Alternative deployment config
- ✅ `apps/we-dev-next/public/_headers` - Security headers
- ✅ `apps/we-dev-next/public/_redirects` - Next.js routing
- ✅ `apps/we-dev-next/public/_routes.json` - Modern Pages routing

### 3. Updated Root package.json
- ✅ Build script: `"build": "cd apps/we-dev-next && pnpm install && pnpm build"`

## Cloudflare Pages Dashboard Configuration

When creating the Cloudflare Pages project, use these settings:

### Build Settings
- **Framework preset**: `Next.js`
- **Build command**: `cd apps/we-dev-next && pnpm install && pnpm build`
- **Build output directory**: `apps/we-dev-next/.next`
- **Root directory**: `/` (leave empty)

### Environment Variables
- `NEXT_PUBLIC_APP_NAME`: `we-dev`

### Node.js Version
- Set to `18` or higher

## Alternative: Use Cloudflare Pages CLI

If the dashboard configuration doesn't work, you can also use the CLI:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Pages
wrangler pages deploy apps/we-dev-next/.next --project-name=we-dev
```

## Verification Steps

1. **Check Build Locally**:
   ```bash
   cd apps/we-dev-next
   pnpm install
   pnpm build
   ```

2. **Verify Output Directory**:
   ```bash
   ls -la apps/we-dev-next/.next
   ```

3. **Test Deployment**:
   - Push changes to main branch
   - Check Cloudflare Pages dashboard
   - Monitor deployment logs

## Current Status
- ✅ Build configuration fixed
- ✅ No wrangler.toml conflicts
- ✅ Alternative configs added
- ⏳ Ready for Cloudflare Pages dashboard setup

## Next Steps
1. Create Cloudflare Pages project with correct build settings
2. Configure environment variables
3. Deploy and test