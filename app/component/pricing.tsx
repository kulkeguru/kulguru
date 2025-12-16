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
        <button
  onClick={() =>
    window.open(
      'https://wa.me/917877548479?text=%F0%9F%99%8F%20Jai%20Shri%20Ram%0A%0AI%20would%20like%20to%20start%20Ram%20Raksha%20Stotra%20chanting%20for%20my%20family%20through%20Kulguru.%0A%0ADetails%3A%0A%E2%80%A2%20Name%3A%0A%E2%80%A2%20Age%3A%0A%E2%80%A2%20Gotra%3A%0A%E2%80%A2%20Address%3A%0A%E2%80%A2%20Number%20of%20family%20members%3A%0A%E2%80%A2%20Duration%20(Monthly%20%2F%20Daily)%3A%0A%0APlease%20guide%20me%20further.',
'_blank'

    )
  }
  className="mt-8 bg-white text-orange-600 px-12 py-4 rounded-lg text-xl font-bold hover:bg-orange-50 transition"
>
  Start Ram Raksha Protection
</button>

          <p className="mt-6 text-orange-100 text-sm">
            *₹30 per month per person .
          </p>
        </div>
      </div>
    </section>
  );
}