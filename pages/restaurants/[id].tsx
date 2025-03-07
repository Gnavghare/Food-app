import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { StarIcon } from '@heroicons/react/24/solid';
import { ClockIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { allRestaurants } from '../../data/restaurants';
import { menuItems } from '../../data/restaurants';
import { useCart } from '../../context/CartContext';
import { MenuItem } from '../../context/CartContext';

interface RestaurantDetailProps {
  restaurant: typeof allRestaurants[0];
  menu: MenuItem[];
}

const RestaurantDetail: NextPage<RestaurantDetailProps> = ({ restaurant, menu }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  // Function to format price in Indian Rupees
  const formatPrice = (price: number) => {
    return `₹${price.toFixed(2)}`;
  };

  // If the page is not yet generated, this will be displayed initially
  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;
  }

  // Group menu items by category (for this example, we'll create categories based on item names)
  const categories = ['All', ...Array.from(new Set(menu.map(item => {
    const words = item.name.split(' ');
    return words[words.length - 1]; // Use the last word as a category
  })))];

  const filteredMenu = activeCategory === 'All' 
    ? menu 
    : menu.filter(item => item.name.includes(activeCategory));

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    // Show a toast or notification
    alert(`Added ${item.name} to cart!`);
  };

  return (
    <>
      <Head>
        <title>{restaurant.name} | Gaurav Food App</title>
        <meta name="description" content={`Order food from ${restaurant.name}`} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5" />
                <span className="ml-1">{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <TruckIcon className="h-5 w-5" />
                <span className="ml-1">{restaurant.deliveryFee}</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5" />
                <span className="ml-1">Min: {restaurant.minOrder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div key={item.id} className="card hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                  </div>
                  <span className="font-bold text-lg">{formatPrice(item.price)}</span>
                </div>
                <button
                  className="btn btn-primary w-full mt-3"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allRestaurants.map((restaurant) => ({
    params: { id: restaurant.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const restaurant = allRestaurants.find((r) => r.id === id);
  const menu = menuItems[id] || [];

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      restaurant,
      menu,
    },
    // Re-generate the page at most once per hour
    revalidate: 3600,
  };
};

export default RestaurantDetail; 