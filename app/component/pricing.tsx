import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Simple, Affordable Pricing</h2>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12 rounded-2xl shadow-2xl">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-4">₹1</div>
            <div className="text-2xl">per person per day</div>
          </div>
          <div className="border-t border-orange-300 pt-8">
            <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
            <ul className="space-y-4 text-left max-w-md mx-auto text-lg">
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Daily Ram Raksha Stotra chanting</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Personalized spiritual Kavach</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Divine protection for your family</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Peace of mind and positive energy</span>
              </li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-orange-600 px-12 py-4 rounded-lg text-xl font-bold hover:bg-orange-50 transition">
            Start Your Family's Protection
          </button>
          <p className="mt-6 text-orange-100 text-sm">
            *₹30 per month per person - Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}