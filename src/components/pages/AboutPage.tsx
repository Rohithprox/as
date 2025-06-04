'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WavyLine } from '../ui/svg-components';

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold text-blue-800 mb-8" style={{ fontFamily: "'Patrick Hand', cursive" }}>
          Our Story
        </h1>
        <WavyLine className="w-48 h-6 text-blue-400 mx-auto mb-8" />
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Architects Daughter', cursive" }}>
            Building Dreams Since 1995
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Rainbow SE was founded with a simple belief: every child deserves an education that celebrates their uniqueness while preparing them for tomorrow's challenges.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our approach combines traditional academic excellence with innovative teaching methods, creating an environment where creativity and critical thinking flourish together.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "30+", label: "Expert Teachers" },
              { number: "15+", label: "Programs" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4 bg-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 text-white shadow-2xl transform rotate-3">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Architects Daughter', cursive" }}>
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              To nurture confident, creative, and compassionate individuals who will make a positive impact on their communities and the world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default AboutPage; 