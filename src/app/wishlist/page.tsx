"use client";
import { useState } from "react";
import TopBar from "../components/navbar";
import Header from "../components/header";
import Link from "next/link"; // Import Link from next/link for navigation

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Ut diam consequat", price: 32.0, quantity: 1, image: "/product1.jpg" },
    { id: 2, name: "Vel faucibus posuere", price: 32.0, quantity: 1, image: "/product2.jpg" },
    { id: 3, name: "Ac vitae vestibulum", price: 32.0, quantity: 1, image: "/product3.jpg" },
    { id: 4, name: "Elit massa diam", price: 32.0, quantity: 1, image: "/product4.jpg" },
    { id: 5, name: "Proin pharetra elementum", price: 32.0, quantity: 1, image: "/product5.jpg" },
  ]);

  const [shipping, setShipping] = useState(0);
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const calculateTotal = (price: number, quantity: number): number =>
    Number((price * quantity).toFixed(2));

  const subtotal = wishlist
    .reduce((acc, item) => acc + calculateTotal(item.price, item.quantity), 0)
    .toFixed(2);

  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  const handleShippingCalculation = (e: React.FormEvent) => {
    e.preventDefault();
    const newShipping = Math.floor(Math.random() * 20) + 5; // Mock shipping calculation
    setShipping(newShipping);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50">
        <TopBar />
      </div>
      <Header />
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-900">Wishlist</h1>
          <p className="text-sm text-gray-500">
            Home / Pages / <span className="text-pink-500">Wishlist</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">Products</h2>
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center w-full sm:w-1/2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-500">Price: ${item.price}</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/4 flex items-center justify-center space-x-2 mt-4 sm:mt-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="w-12 text-center border rounded"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-full sm:w-1/4 text-right">
                    <p className="font-semibold">
                      Total: ${calculateTotal(item.price, item.quantity)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4 mt-2 sm:mt-0"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Your wishlist is empty.</p>
            )}
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold flex justify-center mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold">${shipping}</span>
            </div>
            <div className="flex justify-between py-2 border-t mt-2">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">${total}</span>
            </div>

            {/* Link to Billing Information */}
            <Link href="/billinginformation">
              <button
                type="button"
                className="w-full bg-pink-500 font-bold text-white py-2 rounded hover:bg-pink-600"
              >
                Proceed to Checkout
              </button>
            </Link>

            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl font-bold flex justify-center mb-4">Calculate Shipping</h3>
              <form onSubmit={handleShippingCalculation}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter country"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 font-bold text-white py-2 rounded hover:bg-pink-600"
                >
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}