import React from 'react';
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import { Bot, List, Clock, TrendingUp } from "lucide-react";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Card, CardContent } from '../UI/Card';


const Home = () => {

  const [task, setTask] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([
    "Follow up with client X",
    "Check today's revenue",
    "Send a reminder email"
  ]);

  const handleTaskSubmit = () => {
    if (task) {
      setAiSuggestions([task, ...aiSuggestions]);
      setTask("");
    }
  };

    return (
        <div>
           <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Business Assistant</h1>
      <p className="text-gray-500 mb-6">Your AI-powered assistant to help with business tasks, follow-ups, and actions.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button className="flex gap-2" variant="outline"><List /> Tasks</Button>
        <Button className="flex gap-2" variant="outline"><Clock /> Follow-ups</Button>
        <Button className="flex gap-2" variant="outline"><TrendingUp /> Business Insights</Button>
        <Button className="flex gap-2" variant="outline"><Bot /> AI Suggestions</Button>
      </div>
      
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Add a Quick Task</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button onClick={handleTaskSubmit}>Add</Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mt-6 mb-3">AI Suggestions</h2>
      <div className="space-y-2">
        {aiSuggestions.map((suggestion, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-gray-100 rounded-md"
          >
            {suggestion}
          </motion.div>
        ))}
      </div>
    </div>
        </div>
    );
}

export default Home;
