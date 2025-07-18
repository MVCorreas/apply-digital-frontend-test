'use client';

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <header className="bg-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium text-gray-600">GamerShop</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="/cart"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
            >
              <FiShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav> 
        </div>
      </div>
    </header>
  );
}
