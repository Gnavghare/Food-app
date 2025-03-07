import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  minOrder: string;
  address: string;
  phone: string;
  timings: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const { id, name, image, cuisine, rating, deliveryTime, deliveryFee, minOrder } = restaurant;

  // Convert price strings from "$X.XX" format to "₹X.XX" format
  const formatIndianPrice = (priceString: string) => {
    // Extract the numeric part from the string (remove the $ sign)
    const numericPart = priceString.replace('$', '');
    return `₹${numericPart}`;
  };

  return (
    <Link href={`/restaurants/${id}`} className="card group transition-transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium text-gray-800">
          {deliveryTime}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{cuisine}</p>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-500 mr-2">
            <StarIcon className="h-4 w-4" />
            <span className="ml-1 text-sm font-medium text-gray-700">{rating}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{deliveryTime}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Min: {formatIndianPrice(minOrder)}</span>
          <span>Delivery: {formatIndianPrice(deliveryFee)}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard; 