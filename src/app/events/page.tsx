'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  ChevronRight,
  CalendarDays,
  CalendarCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Meet 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Ground",
      category: "Sports",
      description: "Join us for our annual sports meet featuring track and field events, team sports, and more.",
      attendees: "All students and parents"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "March 25, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      category: "Academic",
      description: "Students showcase their innovative science projects and experiments.",
      attendees: "Open to public"
    },
    // Add more upcoming events...
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Cultural Festival 2023",
      date: "December 20, 2023",
      time: "5:00 PM - 9:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description: "A celebration of art, music, and dance performances by our talented students.",
      attendees: "School community"
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "January 15, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Respective Classrooms",
      category: "Academic",
      description: "Discussion about student progress and academic performance.",
      attendees: "Parents and teachers"
    },
    // Add more past events...
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            School Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 architect">
            Stay updated with all the exciting events at Rainbow School
          </p>
        </motion.div>

        {/* Events Calendar */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full justify-center mb-8 bg-white/50 p-1 rounded-lg">
            <TabsTrigger 
              value="upcoming"
              className="data-[state=active]:bg-pink-500 data-[state=active]:text-white rounded-md flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger 
              value="past"
              className="data-[state=active]:bg-pink-500 data-[state=active]:text-white rounded-md flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {upcomingEvents.map((event) => (
                <motion.div key={event.id} variants={item}>
                  <Card className="bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-patrick text-xl mb-2">{event.title}</CardTitle>
                          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                            {event.category}
                          </Badge>
                        </div>
                        <Button variant="outline" className="rounded-full">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-gray-600">{event.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">{event.attendees}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="past">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pastEvents.map((event) => (
                <motion.div key={event.id} variants={item}>
                  <Card className="bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-patrick text-xl mb-2">{event.title}</CardTitle>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-gray-600">{event.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{event.attendees}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsPage; 