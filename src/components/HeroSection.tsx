import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Home, Shield } from "lucide-react";
import heroImage from "@/assets/hero-sikkim.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Discover Sikkim
            </span>
            <br />
            <span className="text-foreground">
              Your Sacred Journey
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore ancient monasteries, experience rich Buddhist culture, and journey through 
            the breathtaking Himalayas with AI-powered travel planning and immersive VR experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Your Journey
            </Button>
            <Button variant="monastery" size="lg" className="text-lg px-8">
              Explore VR Tours
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50 hover:shadow-mountain transition-all duration-300">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Sacred Destinations</h3>
              <p className="text-sm text-muted-foreground">Ancient monasteries & heritage sites</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50 hover:shadow-mountain transition-all duration-300">
              <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Cultural Events</h3>
              <p className="text-sm text-muted-foreground">Festivals & spiritual celebrations</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50 hover:shadow-mountain transition-all duration-300">
              <Home className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Authentic Homestays</h3>
              <p className="text-sm text-muted-foreground">Local families & experiences</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50 hover:shadow-mountain transition-all duration-300">
              <Shield className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">AI Safety Hub</h3>
              <p className="text-sm text-muted-foreground">Emergency SOS & voice alerts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;