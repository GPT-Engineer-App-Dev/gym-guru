import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ActivityLog = () => {
  const [activities, setActivities] = useState([
    { type: "Running", duration: "30 mins", distance: "5 km", calories: 300 },
    { type: "Cycling", duration: "45 mins", distance: "15 km", calories: 400 },
  ]);

  const [newActivity, setNewActivity] = useState({
    type: "",
    duration: "",
    distance: "",
    calories: "",
  });

  const handleAddActivity = () => {
    setActivities([...activities, newActivity]);
    setNewActivity({ type: "", duration: "", distance: "", calories: "" });
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Activity Log</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Activity</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Activity</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="type">Activity Type</Label>
                <Input id="type" value={newActivity.type} onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" value={newActivity.duration} onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="distance">Distance</Label>
                <Input id="distance" value={newActivity.distance} onChange={(e) => setNewActivity({ ...newActivity, distance: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="calories">Calories Burned</Label>
                <Input id="calories" value={newActivity.calories} onChange={(e) => setNewActivity({ ...newActivity, calories: e.target.value })} />
              </div>
              <Button onClick={handleAddActivity}>Add Activity</Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>
      <div className="space-y-4 overflow-auto max-h-[70vh]">
        {activities.map((activity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{activity.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Duration: {activity.duration}</p>
              <p>Distance: {activity.distance}</p>
              <p>Calories Burned: {activity.calories}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;