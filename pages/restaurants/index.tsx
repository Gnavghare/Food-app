import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import RestaurantCard from '../../components/RestaurantCard';
import { allRestaurants } from '../../data/restaurants';

const cuisineTypes = [
  'All',
  'American',
  'Italian',
  'Japanese',
  'Mexican',
  'Indian',
  'Asian',
  'Healthy',
];

const Restaurants: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCuisineChange = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Filter restaurants based on search term and cuisine
  const filteredRestaurants = allRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCuisine = selectedCuisine === 'All' || 
      restaurant.cuisine.includes(selectedCuisine);
    
    return matchesSearch && matchesCuisine;
  });

  // Sort restaurants
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'deliveryTime') {
      // Extract the first number from the delivery time string (e.g., "20-30 min" -> 20)
      const aTime = parseInt(a.deliveryTime.split('-')[0]);
      const bTime = parseInt(b.deliveryTime.split('-')[0]);
      return aTime - bTime;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <>
      <Head>
        <title>Restaurants | FoodExpress</title>
        <meta name="description" content="Browse restaurants and order food for delivery" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-primary-600 rounded-lg p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Find Your Favorite Restaurants</h1>
          <p className="text-lg mb-6">
            Discover the best food and drinks from top restaurants in your area
          </p>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search for restaurants or cuisines"
              className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary-500 p-2 rounded-md"
              aria-label="Search"
              title="Search restaurants"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Cuisine Filters */}
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.map((cuisine) => (
              <button
                key={cuisine}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCuisine === cuisine
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => handleCuisineChange(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Sort by:</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={sortBy}
              onChange={handleSortChange}
              aria-label="Sort restaurants by"
            >
              <option value="rating">Rating</option>
              <option value="deliveryTime">Delivery Time</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedRestaurants.length > 0 ? (
            sortedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No restaurants found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Restaurants; 