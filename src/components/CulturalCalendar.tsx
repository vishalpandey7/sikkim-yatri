import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Bell, Share2 } from "lucide-react";
import festivalImage from "@/assets/festival-1.jpg";

const CulturalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("December");

  const events = [
    {
      id: 1,
      name: "Losar Festival",
      date: "December 15-17, 2024",
      location: "Rumtek Monastery",
      type: "Religious Festival",
      description: "Tibetan New Year celebration with traditional dances, prayers, and cultural performances.",
      image: festivalImage,
      participants: "5000+ expected",
      category: "festival"
    },
    {
      id: 2,
      name: "Buddha Jayanti",
      date: "December 23, 2024",
      location: "All Major Monasteries",
      type: "Sacred Ceremony",
      description: "Celebration of Buddha's birth with special prayers, meditation sessions, and teachings.",
      image: festivalImage,
      participants: "10000+ expected",
      category: "ceremony"
    },
    {
      id: 3,
      name: "Cham Dance Festival",
      date: "December 28-29, 2024",
      location: "Pemayangtse Monastery",
      type: "Cultural Performance",
      description: "Sacred masked dance performances by monks depicting Buddhist stories and teachings.",
      image: festivalImage,
      participants: "3000+ expected",
      category: "performance"
    }
  ];

  const months = ["December", "January", "February", "March", "April", "May"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "festival": return "bg-secondary text-secondary-foreground";
      case "ceremony": return "bg-primary text-primary-foreground";
      case "performance": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="calendar" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-sacred bg-clip-text text-transparent">
              Cultural Calendar
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with Sikkim's rich cultural heritage through festivals, 
            ceremonies, and sacred celebrations throughout the year.
          </p>
        </div>

        {/* Month Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {months.map((month) => (
            <Button
              key={month}
              variant={selectedMonth === month ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMonth(month)}
              className="transition-all duration-200"
            >
              {month}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-monastery transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-secondary" />
                    {event.participants}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    Set Reminder
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add to Calendar CTA */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Never Miss a Celebration</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our cultural calendar and get notifications about upcoming festivals and events.
            </p>
            <Button variant="sacred" size="lg">
              Subscribe to Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalCalendar;