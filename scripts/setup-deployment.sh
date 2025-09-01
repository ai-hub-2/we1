#!/bin/bash

# Deployment Setup Script for Cloudflare Pages
# This script helps configure the necessary secrets and settings

set -e

echo "🚀 Cloudflare Pages Deployment Setup"
echo "====================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command -v pnpm &> /dev/null; then
        print_warning "pnpm is not installed. Installing pnpm..."
        npm install -g pnpm
    fi
    
    print_success "All requirements met!"
}

# Validate repository setup
validate_repo() {
    print_status "Validating repository setup..."
    
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Are you in the correct directory?"
        exit 1
    fi
    
    if [ ! -f "apps/we-dev-next/package.json" ]; then
        print_error "Next.js app not found at apps/we-dev-next/"
        exit 1
    fi
    
    if [ ! -f "wrangler.toml" ]; then
        print_error "wrangler.toml not found. Please ensure it's created."
        exit 1
    fi
    
    print_success "Repository setup is valid!"
}

# Test build process
test_build() {
    print_status "Testing build process..."
    
    cd apps/we-dev-next
    
    if ! pnpm install; then
        print_error "Failed to install dependencies"
        exit 1
    fi
    
    if ! pnpm build; then
        print_error "Failed to build Next.js application"
        exit 1
    fi
    
    cd ../..
    print_success "Build test passed!"
}

# Generate configuration summary
generate_config_summary() {
    print_status "Generating configuration summary..."
    
    cat > DEPLOYMENT_CONFIG.md << EOF
# Deployment Configuration Summary

## Repository Information
- **Repository**: \$(git remote get-url origin)
- **Branch**: \$(git branch --show-current)
- **Commit**: \$(git rev-parse HEAD)

## Build Configuration
- **Framework**: Next.js
- **Build Command**: \`cd apps/we-dev-next && pnpm install && pnpm build\`
- **Output Directory**: \`apps/we-dev-next/.next\`
- **Node Version**: \$(node --version)
- **pnpm Version**: \$(pnpm --version)

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
- **Build Command**: \`cd apps/we-dev-next && pnpm install && pnpm build\`
- **Build Output Directory**: \`apps/we-dev-next/.next\`

## Environment Variables
- **NEXT_PUBLIC_APP_NAME**: we-dev

## Next Steps
1. Add the required secrets to GitHub repository settings
2. Create Cloudflare Pages project
3. Push to main branch to trigger deployment
4. Monitor deployment in GitHub Actions

## Useful Links
- GitHub Repository: \$(git remote get-url origin)
- GitHub Actions: \$(git remote get-url origin | sed 's/\.git$//')/actions
- Cloudflare Dashboard: https://dash.cloudflare.com
EOF

    print_success "Configuration summary saved to DEPLOYMENT_CONFIG.md"
}

# Main execution
main() {
    echo ""
    print_status "Starting deployment setup..."
    
    check_requirements
    validate_repo
    test_build
    generate_config_summary
    
    echo ""
    print_success "Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Add GitHub Secrets (see DEPLOYMENT_CONFIG.md)"
    echo "2. Create Cloudflare Pages project"
    echo "3. Push to main branch to trigger deployment"
    echo ""
    echo "For detailed instructions, see: docs/DEPLOYMENT_SETUP.md"
}

# Run main function
main "$@"