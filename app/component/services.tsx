import React from 'react';
import { CheckCircle, Shield, UserCheck, Clock, HelpCircle } from 'lucide-react';

export default function ServicesAddOns() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* PRICING SECTION */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Sacred & Affordable Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Kul Guru follows the ancient tradition of <strong>Seva</strong>, not
            commercialization. Our pricing is designed to feel light on the
            heart, honest in intention, and sustainable for daily spiritual
            practice.
          </p>

          <div className="max-w-xl mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-10 shadow-lg">
            <h3 className="text-5xl font-extrabold text-orange-900 mb-2">₹1</h3>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Per Day • Per Person
            </p>
            <p className="text-gray-700 text-lg">
              Less than the cost of a cup of tea — yet powerful enough to create
              a daily spiritual shield for you and your loved ones.
            </p>
          </div>
        </div>

        {/* PANDIT VERIFICATION & PROCESS */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Pandit Verification & Chanting Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <UserCheck className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Verified Pandits</h3>
              <p className="text-gray-700">
                Our Pandits are trained in Vedic chanting, pronunciation, and
                discipline. Background verification and spiritual lineage are
                carefully reviewed.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <Clock className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Daily Sankalp</h3>
              <p className="text-gray-700">
                Each chanting session begins with a Sankalp, where registered
                family names are spiritually invoked for protection.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <Shield className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Pure Manual Chanting</h3>
              <p className="text-gray-700">
                No recordings. No automation. Only live, disciplined chanting
                performed daily with full devotion.
              </p>
            </div>
          </div>
        </div>

        {/* SACRED SHLOKA SECTION */}
        <div className="mb-24 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">
            📿 Sacred Assurance from Ram Raksha
          </h2>

          <p className="text-2xl font-serif text-gray-900 mb-4 leading-relaxed">
            रामो राजमणिः सदा विजयते रामं रमेशं भजे ।<br />
            रामेणाभिहता निशाचरचमू रामाय तस्मै नमः ॥
          </p>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Meaning:</strong> Lord Rama is eternally victorious. By His
            divine power, negativity is destroyed and righteousness prevails. We
            bow to that supreme protector.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          {[{
            q: 'Is this real chanting or recorded audio?',
            a: 'All chanting is performed live by verified Pandits. We do not use recordings or automated systems.'
          },{
            q: 'How are family members included?',
            a: 'Your family members’ names are taken during Sankalp before chanting, creating a personalized spiritual connection.'
          },{
            q: 'Why is the cost only ₹1 per day?',
            a: 'Kul Guru follows the principle of Seva. The amount is symbolic, making spiritual protection accessible to all.'
          },{
            q: 'Can I stop anytime?',
            a: 'Yes. There is no lock-in. You may pause or stop the service at your discretion.'
          },{
            q: 'Is this connected to any temple or trust?',
            a: 'Kul Guru works independently with Pandits trained in traditional Vedic practices.'
          }].map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="flex items-center text-xl font-semibold text-gray-900 mb-2">
                <HelpCircle className="h-5 w-5 text-orange-600 mr-2" />
                {item.q}
              </h4>
              <p className="text-gray-700 leading-relaxed ml-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
