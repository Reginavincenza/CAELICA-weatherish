import { WeatherDashboard } from "@/components/WeatherDashboard";
import { ForecastSection } from "@/components/ForecastSection";
import { SearchBox } from "@/components/SearchBox";
import { useState, useEffect } from "react";
import earthWeatherBg from "@/assets/earth-weather-bg.jpg";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine time-based gradient
  const hour = currentTime.getHours();
  const getTimeGradient = () => {
    if (hour >= 6 && hour < 9) return "bg-gradient-dawn";
    if (hour >= 9 && hour < 17) return "bg-gradient-sunny"; 
    if (hour >= 17 && hour < 20) return "bg-gradient-twilight";
    return "bg-gradient-night";
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${earthWeatherBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/70"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            WeatherFlow
          </h1>
          <p className="text-xl md:text-2xl font-body text-foreground/80 max-w-2xl mx-auto">
            Experience weather like never before with dynamic gradients and elegant design
          </p>
        </header>

        {/* Current Weather Dashboard */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <WeatherDashboard />
        </div>

        {/* Search Box */}
        <SearchBox />

        {/* Weather Conditions */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ForecastSection />
        </div>
      </div>
    </div>
  );
};

export default Index;