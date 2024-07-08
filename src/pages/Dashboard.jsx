import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [activitySummary, setActivitySummary] = useState({
    steps: 0,
    calories: 0,
    activeMinutes: 0,
  });

  const [weeklyActivity, setWeeklyActivity] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Steps",
        data: [3000, 5000, 4000, 7000, 6000, 8000, 9000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    // Fetch activity summary from an API or local storage
    setActivitySummary({
      steps: 7500,
      calories: 500,
      activeMinutes: 60,
    });
  }, []);

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Fitness Tracker</h1>
        <div className="rounded-full bg-gray-200 p-2">
          <img src="/placeholder.svg" alt="User" className="mx-auto object-cover w-10 h-10 rounded-full" />
        </div>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Steps: {activitySummary.steps}</p>
          <p>Calories Burned: {activitySummary.calories}</p>
          <p>Active Minutes: {activitySummary.activeMinutes}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={weeklyActivity} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;