'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Filter, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'campus', label: 'Campus' },
    { id: 'activities', label: 'Activities' },
    { id: 'sports', label: 'Sports' }
  ];

  // Sample gallery items - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Annual Day Celebration',
      category: 'events',
      image: '/placeholder-event.jpg',
      description: 'Students performing at the Annual Day celebration'
    },
    {
      id: 2,
      title: 'Science Exhibition',
      category: 'activities',
      image: '/placeholder-science.jpg',
      description: 'Students showcasing their science projects'
    },
    {
      id: 3,
      title: 'Sports Day',
      category: 'sports',
      image: '/placeholder-sports.jpg',
      description: 'Annual sports meet highlights'
    },
    {
      id: 4,
      title: 'Campus View',
      category: 'campus',
      image: '/placeholder-campus.jpg',
      description: 'Beautiful view of our school campus'
    },
    // Add more gallery items...
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-patrick">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 architect">
            Capturing moments and memories at Rainbow School
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className={`
                rounded-full px-6
                ${selectedFilter === filter.id 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600' 
                  : 'hover:bg-pink-50 hover:text-pink-500 border-pink-200'
                }
              `}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-pink-100">
                      <CardContent className="p-0 relative">
                        <div className="relative aspect-video">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize2 className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Images Found</h3>
            <p className="text-gray-600">No images found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage; 