
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Code, Play, RotateCcw, Download, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Compiler = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(`// Welcome to CodeMaster Hub Compiler
console.log("Hello, World!");

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 10:", fibonacci(10));`);
  
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "c", label: "C" }
  ];

  const codeTemplates = {
    javascript: `// Welcome to CodeMaster Hub Compiler
console.log("Hello, World!");

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 10:", fibonacci(10));`,
    python: `# Welcome to CodeMaster Hub Compiler
print("Hello, World!")

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"Fibonacci of 10: {fibonacci(10)}")`,
    java: `// Welcome to CodeMaster Hub Compiler
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        System.out.println("Fibonacci of 10: " + fibonacci(10));
    }
    
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`,
    cpp: `// Welcome to CodeMaster Hub Compiler
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Hello, World!" << endl;
    cout << "Fibonacci of 10: " << fibonacci(10) << endl;
    return 0;
}`,
    c: `// Welcome to CodeMaster Hub Compiler
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Hello, World!\\n");
    printf("Fibonacci of 10: %d\\n", fibonacci(10));
    return 0;
}`
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(codeTemplates[newLanguage as keyof typeof codeTemplates]);
    setOutput("");
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate API call to Judge0 or similar service
    setTimeout(() => {
      setOutput(`Output for ${language}:
Hello, World!
Fibonacci of 10: 55

Execution completed successfully.
Time: 0.12s
Memory: 15.2MB`);
      setIsRunning(false);
    }, 2000);
  };

  const resetCode = () => {
    setCode(codeTemplates[language as keyof typeof codeTemplates]);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">CodeMaster Hub Compiler</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online
              </Badge>
              <Button variant="ghost" onClick={() => navigate(-1)}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toolbar */}
        <Card className="mb-6 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Compiler Settings</span>
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
                
                <Button variant="outline" onClick={resetCode}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Editor and Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Code Editor</span>
                <Badge variant="outline">{language}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[500px] font-mono text-sm bg-gray-900 text-green-400 border-gray-700"
                placeholder="Enter your code here..."
              />
            </CardContent>
          </Card>

          {/* Output */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Output</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="min-h-[500px] p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-md border">
                {output || "Click 'Run Code' to see output here..."}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Problems */}
        <Card className="mt-6 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Sample Problems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 text-left">
                <div>
                  <div className="font-semibold">Two Sum</div>
                  <div className="text-sm text-gray-600">Easy • Array, Hash Table</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left">
                <div>
                  <div className="font-semibold">Reverse String</div>
                  <div className="text-sm text-gray-600">Easy • String, Two Pointers</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left">
                <div>
                  <div className="font-semibold">Valid Parentheses</div>
                  <div className="text-sm text-gray-600">Easy • Stack, String</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Compiler;
