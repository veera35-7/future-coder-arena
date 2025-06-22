
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, BookOpen, Users, Settings, LogIn, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Live Coding Compiler",
      description: "Practice coding with our integrated compiler supporting multiple languages"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Interactive Notes & Videos",
      description: "Access structured learning materials and video tutorials"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Group-based Learning",
      description: "Learn in organized groups with dedicated trainers"
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey and test submissions"
    }
  ];

  const roles = [
    {
      title: "Student",
      description: "Access learning materials, practice coding, and track your progress",
      color: "from-blue-500 to-blue-600",
      icon: <User className="h-6 w-6" />
    },
    {
      title: "Trainer",
      description: "Create content, manage groups, and track student progress",
      color: "from-green-500 to-green-600",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Admin",
      description: "Full platform management including users, groups, and content",
      color: "from-purple-500 to-purple-600",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeMaster Hub
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Programming with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Interactive Learning
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join CodeMaster Hub for comprehensive programming education. Practice with live coding, 
            learn from expert trainers, and track your progress in a collaborative environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
            >
              Start Learning Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/demo')}
              className="px-8 py-3"
            >
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Learn Programming
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tools and resources designed for effective learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600">
            Different roles, different experiences - all designed for success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center text-white mb-4`}>
                  {role.icon}
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => navigate('/login')}
                >
                  Login as {role.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already learning on CodeMaster Hub
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
          >
            Create Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">CodeMaster Hub</span>
            </div>
            <div className="text-gray-400">
              © 2024 CodeMaster Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
