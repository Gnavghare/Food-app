# Deploying Gaurav Food App to Vercel

This guide provides detailed instructions on how to deploy your Gaurav Food App to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com))
- Your Gaurav Food App code ready for deployment

## Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click on the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "gaurav-food-app")
   - Choose whether to make it public or private
   - Click "Create repository"

2. Push your code to GitHub:
   - Edit the `github-deploy.sh` script in your project:
     - Replace `YOUR_USERNAME` with your GitHub username
     - Replace `YOUR_REPO_NAME` with your repository name
   - Run the script:
     ```bash
     chmod +x github-deploy.sh
     ./github-deploy.sh
     ```
   - Alternatively, you can run these commands manually:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for Gaurav Food App"
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

## Step 2: Deploy to Vercel

1. Sign up or log in to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub or log in if you already have an account

2. Import your GitHub repository:
   - Click on "Add New..." and select "Project"
   - Connect your GitHub account if you haven't already
   - Select the repository you just created
   - Vercel will automatically detect that it's a Next.js project

3. Configure your project:
   - Project Name: You can keep the default or change it
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. Deploy your project:
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Once complete, you'll receive a URL where your app is live

## Step 3: Custom Domain (Optional)

If you want to use a custom domain for your application:

1. Go to your project dashboard on Vercel
2. Click on "Settings" > "Domains"
3. Add your domain and follow the instructions to configure DNS settings

## Step 4: Environment Variables (If Needed)

If your application uses environment variables:

1. Go to your project dashboard on Vercel
2. Click on "Settings" > "Environment Variables"
3. Add your environment variables with their respective values
4. Click "Save"

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository. Any changes pushed to your main branch will trigger a new deployment.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for error messages
2. Ensure all dependencies are correctly listed in your package.json
3. Verify that your application builds successfully locally with `npm run build`
4. Check that your Next.js configuration is compatible with Vercel

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [GitHub Documentation](https://docs.github.com) 