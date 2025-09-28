import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock } from "lucide-react";
import earthWeatherBg from "@/assets/earth-weather-bg.jpg";

export default function Landing() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location) {
      navigate("/dashboard", { state: { location, date, time } });
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${earthWeatherBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              WeatherFlow
            </h1>
            <p className="text-lg font-body text-foreground/80">
              Discover weather conditions for any location and time
            </p>
          </div>

          {/* Location Form */}
          <Card className="weather-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter city, state, or country"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-lg py-3"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="py-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="py-3"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!location}
                className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get Weather Forecast
              </Button>
            </form>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6 font-body">
            Leave date and time empty for current weather conditions
          </p>
        </div>
      </div>
    </div>
  );
}