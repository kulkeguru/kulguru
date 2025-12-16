import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold">Kul Guru</span>
        </div>
        <p className="text-gray-400">Divine Protection for Your Family</p>
        <p className="text-gray-500 text-sm mt-4">© 2025 Kul Guru. All rights reserved.</p>
      </div>
    </footer>
  );
}