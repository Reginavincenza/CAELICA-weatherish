import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/chatbot", { state: { query } });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className={`relative group transition-all duration-500 ${isFocused ? 'scale-105' : 'hover:scale-102'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className="relative weather-card p-2 rounded-full flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about weather conditions..."
              className="pl-12 pr-4 py-4 text-lg border-0 bg-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground/70"
            />
          </div>
          
          <Button
            onClick={handleSearch}
            disabled={!query.trim()}
            className="rounded-full px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ask AI
          </Button>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4 font-body">
        Get instant answers about weather patterns, forecasts, and conditions worldwide
      </p>
    </div>
  );
};