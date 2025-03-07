import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TrashIcon, MinusIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Cart: NextPage = () => {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Function to format price in Indian Rupees
  const formatPrice = (price: number) => {
    return `₹${price.toFixed(2)}`;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    if (!deliveryAddress.trim()) {
      alert('Please enter a delivery address');
      return;
    }

    // In a real app, you would process the payment and create an order here
    alert('Order placed successfully! Thank you for your order.');
    clearCart();
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Your Cart | Gaurav Food App</title>
        <meta name="description" content="Review your cart and checkout" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link href="/restaurants" className="btn btn-primary">
              Browse Restaurants
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Order Items</h2>
                    <button
                      className="text-red-500 text-sm font-medium hover:text-red-700"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex items-center">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="mx-3 w-6 text-center">{item.quantity}</span>
                          <button
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="ml-6 text-right">
                          <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                          <button
                            className="text-red-500 mt-1 text-sm hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item"
                            title="Remove item"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="p-6 bg-gray-50">
                  <Link href="/restaurants" className="flex items-center text-primary-600 font-medium">
                    <ArrowLeftIcon className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>{formatPrice(49)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (5%)</span>
                    <span>{formatPrice(totalPrice * 0.05)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice + 49 + totalPrice * 0.05)}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCheckout}>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="input"
                      placeholder="Enter your full address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Note (Optional)
                    </label>
                    <textarea
                      id="note"
                      className="input"
                      placeholder="Any special instructions for delivery"
                      rows={2}
                      value={deliveryNote}
                      onChange={(e) => setDeliveryNote(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <span className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Method
                    </span>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="mr-2"
                        />
                        Credit/Debit Card
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mr-2"
                        />
                        PayPal
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={paymentMethod === 'cash'}
                          onChange={() => setPaymentMethod('cash')}
                          className="mr-2"
                        />
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart; 