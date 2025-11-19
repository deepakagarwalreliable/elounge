// Mock data for home appliances e-commerce

export const heroSlides = [
  {
    id: 1,
    title: "Smart Home Appliances",
    subtitle: "Transform Your Living Space",
    description: "Experience the future of home comfort with our cutting-edge appliances",
    image: "https://images.unsplash.com/photo-1762500824321-de3c2f316156",
    cta: "Shop Now",
    link: "/products"
  },
  {
    id: 2,
    title: "Modern Kitchen Solutions",
    subtitle: "Cook Like a Professional",
    description: "Elevate your culinary experience with premium appliances",
    image: "https://images.unsplash.com/photo-1642979427252-13d5fd18bb61",
    cta: "Explore Kitchen",
    link: "/category/kitchen"
  },
  {
    id: 3,
    title: "Energy Efficient Technology",
    subtitle: "Save More, Live Better",
    description: "Reduce your carbon footprint with eco-friendly home appliances",
    image: "https://images.pexels.com/photos/7699496/pexels-photo-7699496.jpeg",
    cta: "Discover More",
    link: "/eco-friendly"
  }
];

export const categories = [
  {
    id: 1,
    name: "Air Conditioners",
    slug: "air-conditioners",
    description: "Cool comfort for every room",
    image: "https://images.unsplash.com/photo-1726614846573-c1ac2e6161d1",
    productCount: 45
  },
  {
    id: 2,
    name: "Refrigerators",
    slug: "refrigerators",
    description: "Keep it fresh, keep it smart",
    image: "https://images.unsplash.com/photo-1721613877687-c9099b698faa",
    productCount: 68
  },
  {
    id: 3,
    name: "Washing Machines",
    slug: "washing-machines",
    description: "Laundry made effortless",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c",
    productCount: 52
  },
  {
    id: 4,
    name: "Televisions",
    slug: "televisions",
    description: "Entertainment reimagined",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    productCount: 89
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: "Smart Inverter AC 1.5 Ton",
    category: "Air Conditioners",
    price: 35999,
    originalPrice: 45999,
    discount: 22,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1436463849883-bb3464c23e93",
    features: ["5 Star Rating", "Inverter Technology", "Smart Control"],
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Double Door Refrigerator 260L",
    category: "Refrigerators",
    price: 28999,
    originalPrice: 35999,
    discount: 19,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1630459065645-549fe5a56db4",
    features: ["Frost Free", "Convertible Freezer", "Energy Efficient"],
    inStock: true,
    badge: "Top Rated"
  },
  {
    id: 3,
    name: "Front Load Washing Machine 7kg",
    category: "Washing Machines",
    price: 24999,
    originalPrice: 32999,
    discount: 24,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
    features: ["1400 RPM", "Steam Wash", "Smart Diagnosis"],
    inStock: true,
    badge: "New Arrival"
  },
  {
    id: 4,
    name: '55" 4K Smart LED TV',
    category: "Televisions",
    price: 42999,
    originalPrice: 54999,
    discount: 22,
    rating: 4.8,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5",
    features: ["4K UHD", "HDR10+", "Smart TV"],
    inStock: true,
    badge: "Bestseller"
  }
];

export const features = [
  {
    id: 1,
    icon: "Truck",
    title: "Free Delivery",
    description: "On orders above ₹15,000",
    image: "https://images.unsplash.com/photo-1752070182361-9fa562ed7f97"
  },
  {
    id: 2,
    icon: "Wrench",
    title: "Professional Installation",
    description: "Expert installation at your doorstep",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
  },
  {
    id: 3,
    icon: "Shield",
    title: "Extended Warranty",
    description: "Up to 5 years comprehensive warranty",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  {
    id: 4,
    icon: "Headphones",
    title: "24/7 Support",
    description: "Always here to help you",
    image: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c"
  }
];

export const megaMenuData = {
  "Air Conditioners": {
    subcategories: [
      { name: "Split AC", link: "/category/split-ac" },
      { name: "Window AC", link: "/category/window-ac" },
      { name: "Inverter AC", link: "/category/inverter-ac" },
      { name: "Portable AC", link: "/category/portable-ac" }
    ],
    brands: ["Samsung", "LG", "Daikin", "Voltas", "Blue Star"],
    featured: {
      title: "Smart Cooling",
      description: "Experience intelligent climate control",
      image: "https://images.unsplash.com/photo-1726614846573-c1ac2e6161d1"
    }
  },
  "Refrigerators": {
    subcategories: [
      { name: "Single Door", link: "/category/single-door" },
      { name: "Double Door", link: "/category/double-door" },
      { name: "Side by Side", link: "/category/side-by-side" },
      { name: "Mini Fridge", link: "/category/mini-fridge" }
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Godrej", "Haier"],
    featured: {
      title: "Fresh Storage",
      description: "Keep your food fresher for longer",
      image: "https://images.unsplash.com/photo-1721613877687-c9099b698faa"
    }
  },
  "Washing Machines": {
    subcategories: [
      { name: "Front Load", link: "/category/front-load" },
      { name: "Top Load", link: "/category/top-load" },
      { name: "Semi Automatic", link: "/category/semi-automatic" },
      { name: "Washer Dryer", link: "/category/washer-dryer" }
    ],
    brands: ["Samsung", "LG", "Bosch", "IFB", "Whirlpool"],
    featured: {
      title: "Smart Washing",
      description: "Advanced laundry care technology",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c"
    }
  },
  "Televisions": {
    subcategories: [
      { name: "4K Smart TV", link: "/category/4k-smart-tv" },
      { name: "OLED TV", link: "/category/oled-tv" },
      { name: "QLED TV", link: "/category/qled-tv" },
      { name: "HD Ready TV", link: "/category/hd-ready-tv" }
    ],
    brands: ["Samsung", "LG", "Sony", "OnePlus", "Mi"],
    featured: {
      title: "Premium Display",
      description: "Cinematic experience at home",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
    }
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    comment: "Excellent service! The AC installation was done professionally and the product quality is outstanding.",
    date: "2024-07-15",
    productPurchased: "Smart Inverter AC"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    comment: "Very happy with my new refrigerator. The delivery was on time and the installation team was very professional.",
    date: "2024-07-10",
    productPurchased: "Double Door Refrigerator"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore",
    rating: 4,
    comment: "Great washing machine with amazing features. Customer support was very helpful throughout the process.",
    date: "2024-07-05",
    productPurchased: "Front Load Washing Machine"
  }
];
