import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { megaMenuData } from '../mock';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainCategories = Object.keys(megaMenuData);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white'
      }`}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-6">
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Free Shipping on Orders Above ₹15,000</span>
            </div>
            <div className="flex space-x-6">
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Track Order</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Help</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent whitespace-nowrap">
                elounge
              </a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {mainCategories.map((category) => (
                  <div
                    key={category}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(category)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group whitespace-nowrap">
                      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors text-sm">{category}</span>
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-all duration-200 group-hover:rotate-180" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 lg:w-80 hover:bg-gray-200 transition-colors">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent border-none outline-none ml-2 w-full text-sm"
                />
              </div>

              {/* User Actions */}
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <User className="w-6 h-6 text-gray-700" />
              </button>

              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Subcategories */}
                <div className="col-span-3">
                  <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {megaMenuData[activeMenu].subcategories.map((subcat, idx) => (
                      <li key={idx}>
                        <a
                          href={subcat.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                        >
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {subcat.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div className="col-span-3">
                  <h3 className="font-bold text-gray-900 mb-4">Popular Brands</h3>
                  <ul className="space-y-2">
                    {megaMenuData[activeMenu].brands.map((brand, idx) => (
                      <li key={idx}>
                        <a
                          href={`/brand/${brand.toLowerCase()}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                        >
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {brand}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured */}
                <div className="col-span-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden h-full group cursor-pointer">
                    <div className="grid grid-cols-2 h-full">
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{megaMenuData[activeMenu].featured.title}</h3>
                        <p className="text-gray-600 mb-4">{megaMenuData[activeMenu].featured.description}</p>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-fit">
                          Shop Now
                        </button>
                      </div>
                      <div className="relative overflow-hidden">
                        <img
                          src={megaMenuData[activeMenu].featured.image}
                          alt={megaMenuData[activeMenu].featured.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto" style={{ top: '140px' }}>
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-6">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent border-none outline-none ml-2 w-full"
              />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-4">
              {mainCategories.map((category) => (
                <div key={category} className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">{category}</h3>
                  <ul className="space-y-2 ml-4">
                    {megaMenuData[category].subcategories.map((subcat, idx) => (
                      <li key={idx}>
                        <a href={subcat.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {subcat.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-36"></div>
    </>
  );
};

export default Navbar;
