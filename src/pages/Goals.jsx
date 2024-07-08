import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Goals = () => {
  const [goals, setGoals] = useState([
    { target: "Run 5km", progress: "3km", deadline: "2023-12-31" },
    { target: "Cycle 20km", progress: "10km", deadline: "2023-12-31" },
  ]);

  const [newGoal, setNewGoal] = useState({
    target: "",
    progress: "",
    deadline: "",
  });

  const handleAddGoal = () => {
    setGoals([...goals, newGoal]);
    setNewGoal({ target: "", progress: "", deadline: "" });
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Goals</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Goal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Goal</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="target">Goal Target</Label>
                <Input id="target" value={newGoal.target} onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="progress">Progress</Label>
                <Input id="progress" value={newGoal.progress} onChange={(e) => setNewGoal({ ...newGoal, progress: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" value={newGoal.deadline} onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })} />
              </div>
              <Button onClick={handleAddGoal}>Add Goal</Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>
      <div className="space-y-4 overflow-auto max-h-[70vh]">
        {goals.map((goal, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{goal.target}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Progress: {goal.progress}</p>
              <p>Deadline: {goal.deadline}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Goals;