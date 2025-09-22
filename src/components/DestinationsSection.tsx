import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Users, Eye } from "lucide-react";
import monasteryImage from "@/assets/monastery-1.jpg";

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Rumtek Monastery",
      description: "One of the largest monasteries in Sikkim, home to the Karmapa and center of Kagyu Buddhism.",
      image: monasteryImage,
      rating: 4.9,
      visitors: "50K+ visitors",
      hasVR: true,
      highlights: ["Golden Stupa", "Prayer Wheels", "Monk Ceremonies", "Buddhist Art"]
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      description: "Ancient Nyingma monastery with breathtaking mountain views and sacred relics.",
      image: monasteryImage,
      rating: 4.8,
      visitors: "30K+ visitors",
      hasVR: true,
      highlights: ["Ancient Sculptures", "Mountain Views", "Sacred Texts", "Meditation Halls"]
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      description: "Sacred site with holy chorten and panoramic Himalayan vistas.",
      image: monasteryImage,
      rating: 4.7,
      visitors: "25K+ visitors",
      hasVR: false,
      highlights: ["Sacred Chorten", "Himalayan Views", "Holy Waters", "Pilgrimage Site"]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-monastery bg-clip-text text-transparent">
              Sacred Destinations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover ancient monasteries, cultural heritage sites, and spiritual centers 
            that have preserved Sikkim's Buddhist traditions for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-monastery transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {destination.hasVR && (
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    VR Tour
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{destination.visitors}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{destination.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full border border-accent/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Get Directions
                  </Button>
                  {destination.hasVR && (
                    <Button variant="monastery" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      VR Tour
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;