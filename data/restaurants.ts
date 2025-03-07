import { Restaurant } from '../components/RestaurantCard';
import { MenuItem } from '../context/CartContext';

export const featuredRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "McDonald's Trillum Mall",
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Fast Food, Burgers',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: '$2.99',
    minOrder: '$10.00',
    address: 'Restaurant no 3, 3rd Floor, Trillum mall, Ram Bag Layout, Untkhana Road, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158820',
    timings: '11:00 am - 10:55 pm',
  },
  {
    id: 2,
    name: 'Pizza Heaven',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    deliveryTime: '25-40 min',
    deliveryFee: '$1.99',
    minOrder: '$15.00',
    address: '123 Pizza Lane, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158821',
    timings: '11:00 am - 11:00 pm'
  },
  {
    id: 3,
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Japanese, Sushi',
    rating: 4.8,
    deliveryTime: '30-45 min',
    deliveryFee: '$3.99',
    minOrder: '$20.00',
    address: '789 Sushi Street, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158823',
    timings: '11:00 am - 10:00 pm'
  },
  {
    id: 4,
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Mexican, Tacos',
    rating: 4.6,
    deliveryTime: '15-30 min',
    deliveryFee: '$2.49',
    minOrder: '$12.00',
    address: '123 Taco Lane, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158824',
    timings: '11:00 am - 11:00 pm',
  },
];

export const allRestaurants: Restaurant[] = [
  ...featuredRestaurants,
  {
    id: 5,
    name: 'Pasta Paradise',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Italian, Pasta',
    rating: 4.4,
    deliveryTime: '25-40 min',
    deliveryFee: '$2.99',
    minOrder: '$15.00',
    address: '456 Pasta Avenue, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158825',
    timings: '11:00 am - 10:00 pm',
  },
  {
    id: 6,
    name: 'Curry House',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Indian, Curry',
    rating: 4.6,
    deliveryTime: '30-45 min',
    deliveryFee: '$3.49',
    minOrder: '$18.00',
    address: '789 Curry Road, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158826',
    timings: '11:00 am - 11:00 pm',
  },
  {
    id: 7,
    name: 'Noodle Bar',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Asian, Noodles',
    rating: 4.5,
    deliveryTime: '20-35 min',
    deliveryFee: '$2.99',
    minOrder: '$12.00',
    address: '321 Noodle Street, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158827',
    timings: '11:00 am - 10:00 pm',
  },
  {
    id: 8,
    name: 'Salad & Co',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    cuisine: 'Healthy, Salads',
    rating: 4.3,
    deliveryTime: '15-25 min',
    deliveryFee: '$1.99',
    minOrder: '$10.00',
    address: '654 Salad Lane, Nagpur, 440003, Maharashtra, India',
    phone: '+917400158828',
    timings: '10:00 am - 9:00 pm',
  },
];

// Add popular cuisines data
export interface Cuisine {
  id: number;
  name: string;
  image: string;
}

export const popularCuisines: Cuisine[] = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    name: 'Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 6,
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  }
];

export const menuItems: Record<number, MenuItem[]> = {
  1: [
    {
      id: 101,
      name: 'Crispy Veggie Burger Meal',
      description: 'Crispy Veggie Burger with medium fries and a drink',
      price: 327,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 1,
    },
    {
      id: 102,
      name: 'Mc Crispy Chicken Burger Meal',
      description: 'Mc Crispy Chicken Burger with medium fries and a drink',
      price: 367,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 1,
    },
    {
      id: 103,
      name: 'Crispy Veggie Burger + Piri Piri Fries',
      description: 'Crispy Veggie Burger with Piri Piri Fries',
      price: 320,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 1,
    },
    {
      id: 104,
      name: 'Mc Crispy Chicken Burger + Classic Cheese Fries',
      description: 'Mc Crispy Chicken Burger with Classic Cheese Fries',
      price: 370,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 1,
    },
    {
      id: 105,
      name: 'Black Forest McFlurry (M) BOGO',
      description: 'Buy one get one free Black Forest McFlurry',
      price: 139,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 1,
    },
  ],
  2: [
    {
      id: 201,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 2,
    },
    {
      id: 202,
      name: 'Pepperoni Pizza',
      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 2,
    },
    {
      id: 203,
      name: 'Vegetarian Pizza',
      description: 'Pizza with tomato sauce, mozzarella, bell peppers, mushrooms, and olives',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 2,
    },
    {
      id: 204,
      name: 'Garlic Bread',
      description: 'Toasted bread with garlic butter and herbs',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 2,
    },
  ],
  3: [
    {
      id: 301,
      name: 'California Roll',
      description: 'Crab, avocado, and cucumber wrapped in seaweed and rice',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 3,
    },
    {
      id: 302,
      name: 'Salmon Nigiri',
      description: 'Fresh salmon over pressed rice',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 3,
    },
    {
      id: 303,
      name: 'Spicy Tuna Roll',
      description: 'Spicy tuna and cucumber wrapped in seaweed and rice',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1615361200141-f45961bc0d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      restaurantId: 3,
    },
  ],
}; 