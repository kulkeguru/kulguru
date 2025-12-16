import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Sparkles } from 'lucide-react';
import Navbar from '../component/navbar';

export default function AboutPage() {
  return (
    <>  
      <section
        id="about"
        className="py-16 sm:py-20 px-4 bg-gradient-to-b from-orange-50 via-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              About <span className="text-orange-600">Kul Guru</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A sacred bridge between ancient Vedic wisdom and modern family life
            </p>
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Kul Guru</strong> is a premium spiritual service dedicated
                to safeguarding families through the divine power of
                <strong> Ram Raksha Stotra</strong>. Rooted in Sanatan Dharma, our
                mission is to offer continuous spiritual protection in today’s
                uncertain and fast-paced world.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Every day, experienced and disciplined Pandits chant sacred
                mantras with complete purity, intention, and devotion — creating
                a powerful spiritual shield (<em>Kavach</em>) around you and your
                loved ones.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With a sacred offering of just <strong>₹1 per day per person</strong>,
                Kul Guru ensures that divine protection is affordable, ethical,
                and accessible to every household.
              </p>
            </div>

            {/* Shloka Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8"
            >
              <h3 className="text-2xl font-bold text-orange-700 mb-4">
                🕉️ Sacred Shloka
              </h3>
              <p className="text-xl text-gray-900 font-serif mb-4 leading-relaxed">
                रामाय रामभद्राय रामचन्द्राय वेधसे ।
                <br />
                रघुनाथाय नाथाय सीतायाः पतये नमः ॥
              </p>
              <p className="text-gray-600">
                <strong>Meaning:</strong> I bow to Lord Rama — the protector of the
                Raghu dynasty, the divine husband of Sita, and the supreme source
                of righteousness and strength.
              </p>
            </motion.div>
          </div>

          {/* Second Shloka */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-orange-700 mb-4">
              📿 Ram Raksha Assurance
            </h3>
            <p className="text-xl font-serif text-gray-900 mb-4 leading-relaxed">
              रामेण रक्षितं नाम रामरक्षितमानसः ।
              <br />
              विघ्नान्न बाधते कश्चित् रामरक्षां पठेत्तु यः ॥
            </p>
            <p className="text-gray-600 text-lg">
              <strong>Meaning:</strong> One who is protected by Lord Rama and keeps
              Rama in their heart is never harmed by obstacles. Such is the
              power of Ram Raksha.
            </p>
          </motion.div>

          {/* Why Ram Raksha */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-10 mb-20 shadow-md">
            <h3 className="text-3xl font-bold text-orange-900 mb-8 text-center">
              Why Ram Raksha Stotra?
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {["Ancient Vedic hymn revealed by Sage Budhaushana", "Forms a powerful spiritual armor (Kavach)", "Protects from fear, negativity, and unseen dangers", "Brings peace, courage, health, and prosperity"].map(
                (item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-700 mr-3 mt-1" />
                    <p className="text-gray-800 text-lg">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Mission / Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 text-orange-600 mr-2" /> Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To protect families through daily, disciplined Vedic chanting and
                restore faith in authentic spiritual practices without
                commercial exploitation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-orange-600 mr-2" /> Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A spiritually protected society where every family lives with
                inner peace, confidence, and divine guidance.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-10 mb-20 border border-orange-100 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-10 text-orange-900">
              How Kul Guru Works
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  1. Register
                </h4>
                <p className="text-gray-700">
                  Submit the names of family members to be spiritually protected.
                </p>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  2. Daily Chanting
                </h4>
                <p className="text-gray-700">
                  Pandits perform Ram Raksha chanting daily with sankalp.
                </p>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  3. Divine Kavach
                </h4>
                <p className="text-gray-700">
                  Continuous spiritual protection surrounds your family.
                </p>
              </div>
            </div>
          </div>

          {/* Trust & CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Trusted • Sacred • Transparent
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Kul Guru follows authentic Vedic traditions, performed by verified
              Pandits, with complete transparency and spiritual responsibility.
            </p>

            {/* <button className="px-10 py-4 rounded-full bg-orange-600 text-white text-lg font-semibold shadow-lg hover:bg-orange-700 transition">
              Start Protecting Your Family
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
