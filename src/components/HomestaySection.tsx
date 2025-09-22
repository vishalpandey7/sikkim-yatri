import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Star, MapPin, Wifi, Car, Utensils, Users, Heart } from "lucide-react";
import homestayImage from "@/assets/homestay-1.jpg";

const HomestaySection = () => {
  const homestays = [
    {
      id: 1,
      name: "Traditional Mountain Retreat",
      host: "Pemba Family",
      location: "Pelling, West Sikkim",
      rating: 4.9,
      reviews: 127,
      price: "₹2,500",
      image: homestayImage,
      amenities: ["Wi-Fi", "Meals Included", "Mountain View", "Cultural Tours"],
      description: "Experience authentic Sikkimese lifestyle with a warm local family. Traditional architecture with modern comforts.",
      specialties: ["Organic Farming", "Traditional Cooking", "Buddhist Culture"]
    },
    {
      id: 2,
      name: "Himalayan Heritage Home",
      host: "Tenzin & Dolma",
      location: "Gangtok, East Sikkim",
      rating: 4.8,
      reviews: 89,
      price: "₹3,000",
      image: homestayImage,
      amenities: ["Parking", "Garden", "Library", "Meditation Space"],
      description: "Beautifully restored traditional home with panoramic Kanchenjunga views and cultural immersion.",
      specialties: ["Monastery Visits", "Handicrafts", "Organic Garden"]
    },
    {
      id: 3,
      name: "Eco-Friendly Farmstay",
      host: "Norbu Family",
      location: "Lachung, North Sikkim",
      rating: 4.7,
      reviews: 64,
      price: "₹2,800",
      image: homestayImage,
      amenities: ["Farm Tours", "Horse Riding", "Bonfire", "Star Gazing"],
      description: "Sustainable farming experience with breathtaking alpine landscapes and traditional Lepcha culture.",
      specialties: ["Yak Farming", "Alpine Flora", "Adventure Sports"]
    }
  ];

  return (
    <section id="homestays" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="h-10 w-10 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-monastery bg-clip-text text-transparent">
                Authentic Homestays
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay with local families and experience genuine Sikkimese hospitality, 
            culture, and traditions in the comfort of traditional homes.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">Location</label>
              <select className="w-full border border-input rounded-md px-3 py-2 bg-background">
                <option>All Locations</option>
                <option>Gangtok</option>
                <option>Pelling</option>
                <option>Lachung</option>
                <option>Yuksom</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">Price Range</label>
              <select className="w-full border border-input rounded-md px-3 py-2 bg-background">
                <option>Any Price</option>
                <option>Under ₹2,000</option>
                <option>₹2,000 - ₹3,000</option>
                <option>Above ₹3,000</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">Guests</label>
              <select className="w-full border border-input rounded-md px-3 py-2 bg-background">
                <option>2 Guests</option>
                <option>1 Guest</option>
                <option>3-4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="hero" className="w-full">
                Search Homestays
              </Button>
            </div>
          </div>
        </div>

        {/* Homestay Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {homestays.map((homestay) => (
            <Card key={homestay.id} className="overflow-hidden hover:shadow-monastery transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={homestay.image} 
                  alt={homestay.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-success text-success-foreground">
                    <Heart className="h-3 w-3 mr-1" />
                    Verified Host
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                  <span className="text-lg font-semibold">{homestay.price}</span>
                  <span className="text-sm opacity-90">/night</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">{homestay.name}</h3>
                    <p className="text-sm text-muted-foreground">Hosted by {homestay.host}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{homestay.rating}</span>
                    <span className="text-sm text-muted-foreground">({homestay.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  {homestay.location}
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {homestay.description}
                </p>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {homestay.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Cultural Specialties:</h4>
                  <div className="space-y-1">
                    {homestay.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-secondary rounded-full" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="monastery" size="sm" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Host Registration CTA */}
        <div className="bg-gradient-monastery rounded-xl p-8 text-center text-secondary-foreground">
          <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-semibold mb-3">Become a Host Family</h3>
          <p className="mb-6 opacity-90 max-w-md mx-auto">
            Share your Sikkimese culture with travelers and earn income by hosting guests in your home.
          </p>
          <Button variant="outline" size="lg" className="bg-white text-secondary hover:bg-white/90">
            Register as Host
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomestaySection;