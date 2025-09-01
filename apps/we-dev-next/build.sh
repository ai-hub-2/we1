#!/bin/bash

# Build script for Next.js app
set -e

echo "🚀 Starting build process..."

# Check Node.js version
echo "📋 Node.js version: $(node --version)"
echo "📋 pnpm version: $(pnpm --version)"

# Clean install
echo "🧹 Cleaning previous installations..."
rm -rf node_modules
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build the app
echo "🔨 Building Next.js app..."
pnpm build

echo "✅ Build completed successfully!"
echo "📁 Build output: .next/"