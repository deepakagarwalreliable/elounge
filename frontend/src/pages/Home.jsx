import React, { useState } from 'react';
import { Zap, Shield, Headphones, TruckIcon, Star, ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import { categories, featuredProducts, features, testimonials } from '../mock';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect appliance for every room</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-blue-900/90 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 mb-3 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <span className="text-white text-sm">{category.productCount}+ Products</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg mb-8">Discover our best-selling home appliances</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">Experience the elounge difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = {
                Truck: TruckIcon,
                Wrench: Zap,
                Shield: Shield,
                Headphones: Headphones
              }[feature.icon];

              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-blue-600 mt-1">Purchased: {testimonial.productPurchased}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Upgrade Your Home?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Explore our complete range of premium home appliances with exclusive deals and offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">500K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">1000+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600">Brands</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-gray-600">Cities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
