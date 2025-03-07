# Gaurav Food App - Food Delivery Platform

A comprehensive food delivery platform built with Next.js, React, and Tailwind CSS. This app allows users to browse restaurants, view menus, add items to cart, and place orders for delivery, similar to popular platforms like Swiggy.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Browse restaurants by cuisine type, ratings, and delivery time
- Advanced search functionality for restaurants and menu items
- Detailed restaurant pages with comprehensive menus
- Add items to cart with customization options
- Adjust item quantities in cart
- Checkout process with delivery information and payment options
- User-friendly interface with modern UI components
- Large database of restaurants and menu items
- Filter options for dietary preferences (veg, non-veg, vegan)
- Sort restaurants by popularity, rating, delivery time, and price

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **State Management**: React Context API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gaurav-food-app.git
cd gaurav-food-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
gaurav-food-app/
├── components/         # React components
├── context/            # Context providers
├── data/               # Sample data
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Data Structure

The app includes a comprehensive database of:
- 100+ restaurants across multiple cuisines
- 1000+ menu items with detailed descriptions
- Multiple categories per restaurant
- User reviews and ratings
- Delivery time estimates based on location

## Deployment

### Deploying to Vercel

This application is optimized for deployment on Vercel. Follow these steps to deploy your Gaurav Food App:

#### Option 1: Deploy via Vercel Web Interface (Recommended)

1. **Push your code to GitHub**:
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository containing your Gaurav Food App

3. **Configure Project**:
   - Vercel will automatically detect that it's a Next.js project
   - Keep the default settings
   - Click "Deploy"

4. **Access Your Deployed Application**:
   - Once the deployment is complete, Vercel will provide you with a URL
   - Your application is now live!

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the Application**:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts** to complete the deployment.

### Environment Variables

If your application uses environment variables, make sure to configure them in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to the "Environment Variables" section
3. Add any required environment variables

### Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository. Any changes pushed to your main branch will trigger a new deployment.

## Future Enhancements

- User authentication and profiles
- Order history and reordering
- Real-time order tracking with map integration
- Payment gateway integration (Stripe, PayPal, etc.)
- Admin dashboard for restaurants
- Mobile app using React Native
- Loyalty program and rewards
- Scheduled deliveries
- Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Inspired by food delivery platforms like Swiggy and Zomato 