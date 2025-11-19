import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../mock';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full container mx-auto px-4">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6 z-10 px-4 lg:px-12">
              <div className="space-y-4">
                <h2 className={`text-sm font-semibold text-blue-600 uppercase tracking-wider transition-all duration-700 delay-100 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.subtitle}
                </h2>
                <h1 className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.title}
                </h1>
                <p className={`text-xl text-gray-600 max-w-xl transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.description}
                </p>
              </div>
              <div className={`flex space-x-4 transition-all duration-700 delay-400 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  {slide.cta}
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-blue-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSlider;
