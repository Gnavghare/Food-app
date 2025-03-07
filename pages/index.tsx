import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import RestaurantCard from '../components/RestaurantCard';
import { featuredRestaurants, popularCuisines } from '../data/restaurants';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Delicious Food Delivered to Your Doorstep
            </h1>
            <p className="text-xl mb-8">
              Order from your favorite restaurants and enjoy a hassle-free delivery experience with Gaurav Food App.
            </p>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary-500 p-2 rounded-md"
                aria-label="Search for restaurants"
                title="Search for restaurants"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious food"
                fill
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cuisines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Popular Cuisines</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {popularCuisines.map((cuisine) => (
              <Link 
                key={cuisine.id} 
                href={`/restaurants?cuisine=${cuisine.name}`}
                className="flex flex-col items-center group"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform">
                  <Image
                    src={cuisine.image}
                    alt={cuisine.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-primary-600">{cuisine.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Restaurants</h2>
            <Link href="/restaurants" className="flex items-center text-primary-600 font-medium hover:text-primary-700">
              View All <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRestaurants.slice(0, 8).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Top Rated Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants
              .filter(restaurant => restaurant.rating >= 4.7)
              .slice(0, 3)
              .map((restaurant) => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-2">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 font-bold">{restaurant.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{restaurant.deliveryTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                    <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                    <Link 
                      href={`/restaurants/${restaurant.id}`}
                      className="btn btn-primary inline-block"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Restaurant</h3>
              <p className="text-gray-600">
                Browse through our extensive list of restaurants and cuisines to find what you're craving.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Your Meal</h3>
              <p className="text-gray-600">
                Explore menus and add your favorite dishes to your cart with just a few clicks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enjoy Your Delivery</h3>
              <p className="text-gray-600">
                Track your order in real-time and enjoy your delicious meal delivered right to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                review: "Gaurav Food App has been a lifesaver during busy workdays. The variety of restaurants and quick delivery times are impressive!",
                rating: 5
              },
              {
                name: "Rahul Patel",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                review: "I love the user-friendly interface and how easy it is to track my orders. The food always arrives hot and fresh.",
                rating: 4.5
              },
              {
                name: "Ananya Gupta",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                review: "The range of cuisines available is amazing. I've discovered so many new favorite restaurants through this app!",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our mobile app for a better experience and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5,2H8.5L8,2.5v19L8.5,22h9l0.5-0.5v-19L17.5,2z M16,20H10V4h6V20z"></path>
                <path d="M15,7h-4V5h4V7z"></path>
              </svg>
              App Store
            </button>
            <button className="btn bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5,20.5l0.5,0.5h16l0.5-0.5v-17L20,3H4L3.5,3.5V20.5z M14,5h4v14h-4V5z M10,5h2v14h-2V5z M6,5h2v14H6V5z"></path>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 