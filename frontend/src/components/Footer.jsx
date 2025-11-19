import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Shop": [
      { name: "Air Conditioners", link: "/category/ac" },
      { name: "Refrigerators", link: "/category/refrigerators" },
      { name: "Washing Machines", link: "/category/washing-machines" },
      { name: "Televisions", link: "/category/televisions" },
      { name: "All Products", link: "/products" }
    ],
    "Customer Service": [
      { name: "Contact Us", link: "/contact" },
      { name: "Track Order", link: "/track-order" },
      { name: "Returns & Exchanges", link: "/returns" },
      { name: "Warranty Information", link: "/warranty" },
      { name: "Installation Services", link: "/installation" }
    ],
    "Company": [
      { name: "About Us", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Blog", link: "/blog" },
      { name: "Press", link: "/press" },
      { name: "Investor Relations", link: "/investors" }
    ],
    "Legal": [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
      { name: "Shipping Policy", link: "/shipping" },
      { name: "Cookie Policy", link: "/cookies" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 inline-block">
              elounge
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted destination for premium home appliances. Quality products, expert service, and unbeatable prices.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Commerce Street, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">support@elounge.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} elounge. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
