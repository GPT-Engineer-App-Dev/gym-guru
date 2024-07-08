import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    weight: 70,
  });

  const [appSettings, setAppSettings] = useState({
    units: "metric",
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAppSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppSettings({ ...appSettings, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={profile.name} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" value={profile.age} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input id="weight" name="weight" value={profile.weight} onChange={handleProfileChange} />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>App Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="units">Units of Measurement</Label>
              <select id="units" name="units" value={appSettings.units} onChange={handleAppSettingsChange} className="w-full p-2 border rounded">
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
              </select>
            </div>
            <div className="flex items-center">
              <Label htmlFor="notifications" className="mr-2">Notifications</Label>
              <input id="notifications" name="notifications" type="checkbox" checked={appSettings.notifications} onChange={handleAppSettingsChange} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;