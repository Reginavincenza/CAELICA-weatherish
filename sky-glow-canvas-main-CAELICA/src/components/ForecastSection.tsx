import { Card } from "@/components/ui/card";
import { 
  Droplets, 
  Wind, 
  Sun, 
  CloudSnow, 
  Gauge,
  Eye
} from "lucide-react";

interface WeatherCondition {
  name: string;
  value: string;
  unit: string;
  icon: any;
  color: string;
  description: string;
}

export const ForecastSection = () => {
  const weatherConditions: WeatherCondition[] = [
    {
      name: "Rainfall",
      value: "2.5",
      unit: "mm/hr",
      icon: Droplets,
      color: "text-primary",
      description: "Current precipitation rate"
    },
    {
      name: "Wind Speed",
      value: "12",
      unit: "km/h",
      icon: Wind,
      color: "text-accent",
      description: "Average wind velocity"
    },
    {
      name: "UV Index",
      value: "6",
      unit: "",
      icon: Sun,
      color: "text-secondary",
      description: "High - wear sunscreen"
    },
    {
      name: "Humidity",
      value: "68",
      unit: "%",
      icon: Droplets,
      color: "text-primary",
      description: "Relative air moisture"
    },
    {
      name: "Snowfall",
      value: "0",
      unit: "cm",
      icon: CloudSnow,
      color: "text-muted-foreground",
      description: "No snow expected"
    },
    {
      name: "Air Pressure",
      value: "1013",
      unit: "hPa",
      icon: Gauge,
      color: "text-accent",
      description: "Standard atmospheric pressure"
    },
    {
      name: "Visibility",
      value: "15",
      unit: "km",
      icon: Eye,
      color: "text-secondary",
      description: "Clear visibility conditions"
    },
    {
      name: "Dust Level",
      value: "Low",
      unit: "",
      icon: Wind,
      color: "text-muted-foreground",
      description: "Air quality is good"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-center mb-8">
        Search by Weather Conditions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weatherConditions.map((condition, index) => (
          <Card 
            key={condition.name}
            className="weather-card p-6 text-center group hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                <condition.icon 
                  className={`w-8 h-8 ${condition.color} group-hover:animate-pulse`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Condition Name */}
              <div className="text-lg font-display font-semibold">
                {condition.name}
              </div>

              {/* Value */}
              <div className="space-y-1">
                <div className="text-2xl font-display font-bold">
                  {condition.value}
                  <span className="text-sm font-body text-muted-foreground ml-1">
                    {condition.unit}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="text-sm font-body text-muted-foreground">
                {condition.description}
              </div>

              {/* Visual Indicator */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full ${condition.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000`}
                  style={{ 
                    width: `${Math.random() * 60 + 40}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};