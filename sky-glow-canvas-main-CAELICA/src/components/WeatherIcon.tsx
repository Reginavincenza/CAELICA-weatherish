import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  Cloudy,
  CloudSun,
  Wind,
  Snowflake,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherIconProps {
  icon: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const WeatherIcon = ({ icon, size = "medium", className }: WeatherIconProps) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-16 h-16", 
    large: "w-24 h-24"
  };

  const IconComponent = () => {
    const iconProps = {
      className: cn(
        sizeClasses[size],
        "drop-shadow-lg",
        className
      ),
      strokeWidth: 1.5
    };

    switch (icon) {
      case "sun":
        return <Sun {...iconProps} className={cn(iconProps.className, "text-primary animate-pulse-glow")} />;
      case "cloud":
        return <Cloud {...iconProps} className={cn(iconProps.className, "text-muted-foreground")} />;
      case "cloud-sun":
        return <CloudSun {...iconProps} className={cn(iconProps.className, "text-accent")} />;
      case "cloud-rain":
        return <CloudRain {...iconProps} className={cn(iconProps.className, "text-primary/80")} />;
      case "cloud-snow":
        return <CloudSnow {...iconProps} className={cn(iconProps.className, "text-secondary")} />;
      case "cloud-lightning":
        return <CloudLightning {...iconProps} className={cn(iconProps.className, "text-destructive animate-pulse")} />;
      case "wind":
        return <Wind {...iconProps} className={cn(iconProps.className, "text-accent")} />;
      case "snow":
        return <Snowflake {...iconProps} className={cn(iconProps.className, "text-secondary animate-float")} />;
      case "storm":
        return <Zap {...iconProps} className={cn(iconProps.className, "text-destructive animate-pulse")} />;
      default:
        return <Sun {...iconProps} className={cn(iconProps.className, "text-primary")} />;
    }
  };

  return (
    <div className="relative">
      <IconComponent />
      {/* Add subtle glow effect for large icons */}
      {size === "large" && (
        <div className="absolute inset-0 blur-xl opacity-20 animate-pulse-glow">
          <IconComponent />
        </div>
      )}
    </div>
  );
};