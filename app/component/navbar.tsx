'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, Flag, FlagTriangleLeft, FlagTriangleRight } from 'lucide-react';
import logo from '../public/logo.png';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];


  

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <FlagTriangleRight className="h-8 w-8 text-orange-600" />
            
            <span className="text-2xl font-bold text-orange-600">KulGuru</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition ${isActive ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>{link.label}</a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`block px-3 py-2 transition ${isActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >{link.label}</a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}