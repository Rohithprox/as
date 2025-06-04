'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Mail,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FacultyPage = () => {
  const departments = [
    { id: "primary", label: "Primary" },
    { id: "secondary", label: "Secondary" },
    { id: "science", label: "Science" },
    { id: "arts", label: "Arts & Sports" }
  ];

  const faculty = {
    primary: [
      {
        name: "Mrs. Sarah Johnson",
        role: "Primary Head Teacher",
        subjects: ["English", "Social Studies"],
        experience: "15+ years",
        education: "M.Ed. in Primary Education",
        image: "/placeholder.jpg"
      },
      // Add more primary teachers...
    ],
    secondary: [
      {
        name: "Dr. Robert Williams",
        role: "Secondary Coordinator",
        subjects: ["Mathematics", "Physics"],
        experience: "12+ years",
        education: "Ph.D. in Mathematics",
        image: "/placeholder.jpg"
      },
      // Add more secondary teachers...
    ],
    science: [
      {
        name: "Dr. Emily Chen",
        role: "Science Department Head",
        subjects: ["Biology", "Chemistry"],
        experience: "10+ years",
        education: "Ph.D. in Molecular Biology",
        image: "/placeholder.jpg"
      },
      // Add more science teachers...
    ],
    arts: [
      {
        name: "Mr. David Miller",
        role: "Arts & Sports Coordinator",
        subjects: ["Physical Education", "Art"],
        experience: "8+ years",
        education: "B.Ed. in Physical Education",
        image: "/placeholder.jpg"
      },
      // Add more arts teachers...
    ]
  };

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
            Our Faculty
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 architect">
            Meet our dedicated team of educators shaping the future
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: GraduationCap, title: "Qualified Teachers", value: "50+" },
            { icon: BookOpen, title: "Years of Excellence", value: "25+" },
            { icon: Award, title: "Teaching Awards", value: "20+" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardContent className="flex items-center gap-4 p-6">
                <stat.icon className="w-12 h-12 text-pink-500" />
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Faculty Tabs */}
        <Tabs defaultValue="primary" className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-white/50 p-1 rounded-lg">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept.id}
                value={dept.id}
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white rounded-md"
              >
                {dept.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {faculty[dept.id].map((teacher, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden">
                      <CardHeader className="text-center">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src={teacher.image} alt={teacher.name} />
                          <AvatarFallback className="bg-pink-100 text-pink-500 text-xl">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-patrick">{teacher.name}</CardTitle>
                        <CardDescription>{teacher.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {teacher.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-pink-100 text-pink-700">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">
                            <GraduationCap className="w-4 h-4 inline mr-2" />
                            {teacher.education}
                          </p>
                          <p className="text-sm text-gray-600">
                            <Award className="w-4 h-4 inline mr-2" />
                            {teacher.experience}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyPage; 