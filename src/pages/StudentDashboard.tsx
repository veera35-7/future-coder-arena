
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, User, Clock, CheckCircle, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTests] = useState([
    { id: 1, title: "JavaScript Basics", questions: 10, timeLimit: "30 min", status: "pending" },
    { id: 2, title: "React Components", questions: 8, timeLimit: "25 min", status: "completed" },
    { id: 3, title: "Data Structures", questions: 12, timeLimit: "45 min", status: "pending" }
  ]);

  const [recentNotes] = useState([
    { id: 1, title: "Introduction to Programming", type: "PDF", date: "2024-01-15" },
    { id: 2, title: "JavaScript Functions", type: "Markdown", date: "2024-01-14" },
    { id: 3, title: "Arrays and Objects", type: "PDF", date: "2024-01-13" }
  ]);

  const [recentVideos] = useState([
    { id: 1, title: "Getting Started with React", duration: "15:30", watched: true },
    { id: 2, title: "State Management Basics", duration: "22:15", watched: false },
    { id: 3, title: "Component Lifecycle", duration: "18:45", watched: false }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">CodeMaster Hub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <User className="h-3 w-3 mr-1" />
                Student
              </Badge>
              <Button variant="ghost" onClick={() => navigate("/")}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Student!
          </h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">+5% improvement</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24h</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="compiler">Compiler</TabsTrigger>
          </TabsList>

          <TabsContent value="tests" className="space-y-6">
            <div className="grid gap-4">
              {activeTests.map((test) => (
                <Card key={test.id} className="bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                        <CardDescription>
                          {test.questions} questions • {test.timeLimit}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={test.status === "completed" ? "default" : "secondary"}
                        className={test.status === "completed" ? "bg-green-100 text-green-800" : ""}
                      >
                        {test.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      {test.status === "completed" ? (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600">Score: 88%</span>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-600">Not started</div>
                      )}
                      <Button 
                        size="sm"
                        disabled={test.status === "completed"}
                        onClick={() => navigate("/test/" + test.id)}
                      >
                        {test.status === "completed" ? "Review" : "Start Test"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <div className="grid gap-4">
              {recentNotes.map((note) => (
                <Card key={note.id} className="bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{note.title}</CardTitle>
                        <CardDescription>
                          {note.type} • Added {note.date}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{note.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" onClick={() => navigate("/notes/" + note.id)}>
                      Open Note
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid gap-4">
              {recentVideos.map((video) => (
                <Card key={video.id} className="bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <CardDescription>Duration: {video.duration}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {video.watched && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Watched
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      {video.watched && (
                        <Progress value={100} className="flex-1 mr-4" />
                      )}
                      <Button 
                        size="sm" 
                        onClick={() => navigate("/videos/" + video.id)}
                        className="flex items-center space-x-1"
                      >
                        <PlayCircle className="h-4 w-4" />
                        <span>{video.watched ? "Rewatch" : "Watch"}</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compiler" className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Live Code Compiler</span>
                </CardTitle>
                <CardDescription>
                  Practice coding with our integrated compiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <Code className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Ready to Code?</h3>
                    <p className="text-gray-600 mb-4">
                      Open our live compiler to practice coding in multiple languages
                    </p>
                    <Button 
                      onClick={() => navigate("/compiler")}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Open Compiler
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
