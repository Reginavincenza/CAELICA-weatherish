import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherMetrics } from "./WeatherMetrics";
import { useState, useEffect } from "react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  feelsLike: number;
}

export const WeatherDashboard = () => {
  const [weather, setWeather] = useState<WeatherData>({
    location: "San Francisco, CA",
    temperature: 22,
    condition: "Partly Cloudy",
    icon: "cloud-sun",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 4,
    feelsLike: 24
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate weather data loading
    const interval = setInterval(() => {
      setWeather(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(30, Math.min(95, prev.humidity + (Math.random() - 0.5) * 10)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="weather-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Current Weather Display */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
              <WeatherIcon 
                icon={weather.icon} 
                size="large" 
                className="animate-float" 
              />
              <div>
                <div className="text-6xl md:text-7xl font-display font-bold mb-2">
                  {Math.round(weather.temperature)}°
                </div>
                <div className="text-2xl font-body text-muted-foreground">
                  {weather.condition}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-semibold">
                {weather.location}
              </h2>
              <p className="text-lg font-body text-muted-foreground">
                Feels like {Math.round(weather.feelsLike)}°
              </p>
            </div>
          </div>

          {/* Weather Metrics */}
          <WeatherMetrics weather={weather} />
        </div>
      </Card>
    </div>
  );
};