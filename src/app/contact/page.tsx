'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  MessageSquare,
  User,
  AtSign,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Activity Village",
        "Kalivelapalem Road",
        "Dhanalakshmipuram Via",
        "Nellore Rural, S.P.S.R Nellore District",
        "Andhra Pradesh - PIN 524346"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 9492400555",
        "+91 9490716961"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "mail@rainbowschoolnellore.com",
        "admissions@rainbowschoolnellore.com"
      ]
    }
  ];

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
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 architect">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border-pink-100"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-pink-100">
                    <info.icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-patrick">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="font-patrick">Location Map</CardTitle>
                <CardDescription>Find us easily with Google Maps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  {/* Add Google Maps iframe here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Google Maps will be embedded here
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="font-patrick">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="name" 
                            placeholder="Your name" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="Your email" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Purpose of Contact</Label>
                      <RadioGroup defaultValue="general" className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="admission" id="admission" />
                          <Label htmlFor="admission">Admission</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feedback" id="feedback" />
                          <Label htmlFor="feedback">Feedback</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="subject" 
                          placeholder="Message subject" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea 
                          id="message" 
                          placeholder="Your message" 
                          className="min-h-[150px] pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 