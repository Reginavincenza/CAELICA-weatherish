import { 
  Droplets, 
  Wind, 
  Gauge, 
  Eye, 
  Sun, 
  Thermometer 
} from "lucide-react";

interface WeatherData {
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  feelsLike: number;
}

interface WeatherMetricsProps {
  weather: WeatherData;
}

export const WeatherMetrics = ({ weather }: WeatherMetricsProps) => {
  const metrics = [
    {
      icon: Droplets,
      label: "Humidity",
      value: `${Math.round(weather.humidity)}%`,
      color: "text-primary"
    },
    {
      icon: Wind,
      label: "Wind Speed", 
      value: `${Math.round(weather.windSpeed)} km/h`,
      color: "text-accent"
    },
    {
      icon: Gauge,
      label: "Pressure",
      value: `${Math.round(weather.pressure)} hPa`,
      color: "text-secondary"
    },
    {
      icon: Eye,
      label: "Visibility",
      value: `${weather.visibility} km`,
      color: "text-muted-foreground"
    },
    {
      icon: Sun,
      label: "UV Index",
      value: `${weather.uvIndex}`,
      color: "text-primary"
    },
    {
      icon: Thermometer,
      label: "Feels Like",
      value: `${Math.round(weather.feelsLike)}°`,
      color: "text-accent"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div 
          key={metric.label}
          className="weather-card p-4 text-center group hover:scale-105 transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <metric.icon 
            className={`w-6 h-6 mx-auto mb-2 ${metric.color} group-hover:animate-pulse`}
            strokeWidth={1.5}
          />
          <div className="text-sm font-body text-muted-foreground mb-1">
            {metric.label}
          </div>
          <div className="text-lg font-display font-semibold">
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
};