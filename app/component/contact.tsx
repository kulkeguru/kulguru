import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-700">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-700">info@kulguru.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-700">Your Address Here</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                <input id="name" name="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input id="email" name="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}