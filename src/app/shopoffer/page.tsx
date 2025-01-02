
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import for App Directory
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import TopBar from "../components/navbar";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Dictum Mobi",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 4,
    description: "A stylish and versatile smartwatch for daily use.",
    image: "/watch.jpg",
  },
  {
    id: 2,
    name: "Sadales Est",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 5,
    description: "Durable water bottle with a sleek design.",
    image: "/spray.jpg",
  },
  {
    id: 3,
    name: "Nisi Varius",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 3,
    description: "Comfortable and elegant pair of sandals.",
    image: "/shoes.jpg",
  },
  {
    id: 4,
    name: "Morbi Sagittis",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 4,
    description: "Soft and stylish pair of socks for all-day comfort.",
    image: "/game.jpg",
  },
  {
    id: 5,
    name: "Ultrices Varius",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 5,
    description: "Multipurpose hair spray with excellent hold.",
    image: "/wash.jpg",
  },
  {
    id: 6,
    name: "Sollicitudin Dig",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 4,
    description: "A spacious and elegant leather bag.",
    image: "/conditioner.jpg",
  },
  {
    id: 7,
    name: "Velit Nec Ipsum",
    price: "$26.00",
    discountPrice: "$52.00",
    rating: 5,
    description: "Premium wireless headphones with noise cancellation.",
    image: "/shoe.jpg",
  },
];

const filters = [
  {
    title: "Product Brand",
    options: ["Custom Furniture", "Fusion Dot High Fashion", "Unique Furniture Restor", "Dream Furniture Flipping", "Young Repurposed", "Green DIY furniture"],
  },
  {
    title: "Discount Offer",
    options: ["20% Cashback", "50% Discount Offer", "25% Cashback"],
  },
  {
    title: "Rating Item",
    options: ["★★★★☆ & 2341", "★★★☆☆ & 1726", "★★★☆☆ & 258", "★★★☆☆ & 25"],
  },
  {
    title: "Categories",
    options: ["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart", "Bags", "Accessories", "Jewellery", "Watches"],
  },
  {
    title: "Price Filter",
    options: ["₹500-₹1000", "₹1000-₹1500", "₹1500+", "$450.00 +"],
  },
  {
    title: "Filter By Color",
    options: ["Blue", "Orange", "Brown", "Green", "Purple", "Sky"],
  },
];

export default function Shopoffer() {
  const router = useRouter(); // Get the router instance

  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Function to handle "Add to Wishlist" click
  const handleAddToWishlist = (productId: number) => {
    const newWishlist = [...wishlist, productId];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    router.push("/wishlist"); // Redirect to the Wishlist page
  };

  // Function to handle "Add to Cart" click
  const handleAddToCart = (productId: number) => {
    const newCart = [...cart, productId];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    // Optionally, redirect to the cart page if needed
  };

  // Function to handle filter changes
  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  // Apply filters to products (basic filtering by name here)
  const filteredProducts = products.filter((product) => {
    return selectedFilters.every((filter) => product.name.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <Header />

        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Shop Left Sidebar</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Shop Left Sidebar</span>
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row container mx-auto px-4 py-6">
          <aside className="md:w-1/4 bg-gray-100 p-4 rounded-lg mb-6 md:mb-0">
            {filters.map((filter) => (
              <div key={filter.title} className="mb-6">
                <h3 className="font-bold text-lg mb-3">{filter.title}</h3>
                <ul>
                  {filter.options.map((option) => (
                    <li key={option} className="text-sm text-gray-600 mb-2 flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={() => handleFilterChange(option)}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main className="md:w-3/4 space-y-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg p-4">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-36 h-36 object-cover rounded-lg mb-4 sm:mb-0"
                  width={200}
                  height={200}
                />
                {/* Product Details */}
                <div className="ml-0 sm:ml-6 flex-1">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-600 text-sm my-2">{product.description}</p>
                  <div className="my-2">
                    <span className="line-through text-gray-500 mr-2">{product.discountPrice}</span>
                    <span className="text-pink-600 font-bold">{product.price}</span>
                  </div>
                  {/* Ratings */}
                  <div className="flex items-center my-2">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                    {Array.from({ length: 5 - product.rating }).map((_, i) => (
                      <span key={i} className="text-gray-300">★</span>
                    ))}
                  </div>
                  <Link href = "/wishlist">
                  {/* Icons */}
                  <div className="flex space-x-4 mt-4">
                    <button
                      className="flex items-center text-gray-600 hover:text-red-500"
                      onClick={() => handleAddToWishlist(product.id)} // Add to wishlist
                    >
                      <FaHeart size={16} className="mr-1" />
                      <span className="text-sm">Add to Wishlist</span>
                    </button>
                    <button
                      className="flex items-center text-gray-600 hover:text-blue-500"
                      onClick={() => handleAddToCart(product.id)} // Add to cart
                    >
                      <FaShoppingCart size={16} className="mr-1" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                  </Link>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}





