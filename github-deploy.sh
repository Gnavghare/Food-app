#!/bin/bash

# Initialize git repository (if not already initialized)
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
fi

# Add all files to git
git add .

# Commit changes
git commit -m "Initial commit for Gaurav Food App"

# Add GitHub remote (replace with your repository URL)
echo "Please replace 'YOUR_USERNAME' and 'YOUR_REPO_NAME' with your actual GitHub username and repository name"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main

echo "Code pushed to GitHub. Now you can deploy it on Vercel." 