#!/bin/bash

# Build the Next.js application
echo "Building the Next.js application..."
npm run build

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null
then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete! Your application should be live on Vercel." 