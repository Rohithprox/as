'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  ClipboardCheck, 
  Users,
  CheckCircle2,
  FileText,
  School
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AdmissionsPage = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: "1. Application Form",
      description: "Fill out the online application form with student and parent details"
    },
    {
      icon: ClipboardCheck,
      title: "2. Document Submission",
      description: "Submit required documents including birth certificate and previous records"
    },
    {
      icon: Users,
      title: "3. Interview",
      description: "Schedule an interview with our academic team"
    },
    {
      icon: CheckCircle2,
      title: "4. Confirmation",
      description: "Receive admission confirmation and complete the enrollment process"
    }
  ];

  const requirements = [
    "Birth Certificate",
    "Previous Academic Records",
    "Transfer Certificate (if applicable)",
    "Passport Size Photographs",
    "Parent ID Proof",
    "Address Proof"
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
            Join Our School Family
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 architect">
            Begin your child's educational journey with Rainbow School
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600"
          >
            <GraduationCap className="mr-2" />
            Apply Now
          </Button>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-patrick">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
                  <CardHeader>
                    <step.icon className="w-10 h-10 text-pink-500 mb-2" />
                    <CardTitle className="architect">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="text-2xl font-patrick">Required Documents</CardTitle>
              <CardDescription>Please keep these documents ready for admission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{req}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="text-2xl font-patrick">Important Dates</CardTitle>
              <CardDescription>Academic Year 2024-25</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { date: "January 15, 2024", event: "Applications Open" },
                  { date: "March 30, 2024", event: "Application Deadline" },
                  { date: "April 15, 2024", event: "Academic Year Begins" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Calendar className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="font-semibold text-gray-800">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionsPage; 