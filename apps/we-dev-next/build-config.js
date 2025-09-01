// Build configuration for Next.js app
const path = require('path');

module.exports = {
  // Environment variables for build
  env: {
    THIRD_API_URL: process.env.THIRD_API_URL || 'https://api.deepseek.com',
    THIRD_API_KEY: process.env.THIRD_API_KEY || 'demo_key_for_build',
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'we-dev',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/we-dev',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'sk_test_demo',
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_demo',
  },
  
  // Build settings
  build: {
    output: 'standalone',
    trailingSlash: false,
  },
  
  // Paths
  paths: {
    src: path.join(__dirname, 'src'),
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, '.next'),
  }
};