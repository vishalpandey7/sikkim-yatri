import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mic, MapPin, Phone, AlertTriangle, Users } from "lucide-react";

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: <Mic className="h-8 w-8 text-destructive" />,
      title: "Voice Emergency Detection",
      description: "AI-powered voice recognition that listens for emergency keywords and triggers automatic SOS alerts.",
      features: ["24/7 Voice Monitoring", "Custom Keywords", "Instant Alerts", "Multi-language Support"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Real-time Location Sharing",
      description: "Share your exact location with emergency contacts and local authorities in critical situations.",
      features: ["GPS Tracking", "Location History", "Offline Maps", "Emergency Contacts"]
    },
    {
      icon: <Phone className="h-8 w-8 text-success" />,
      title: "Emergency Response Network",
      description: "Connected to local emergency services, mountain rescue teams, and medical facilities.",
      features: ["Local Authorities", "Medical Emergency", "Mountain Rescue", "Tourist Police"]
    }
  ];

  return (
    <section id="safety" className="py-20 bg-destructive/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-10 w-10 text-destructive" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
                AI Safety Hub
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-powered safety features to keep you secure during your Sikkim adventure. 
            Your safety is our top priority in the Himalayas.
          </p>
        </div>

        {/* Emergency SOS Button */}
        <div className="text-center mb-16">
          <div className="bg-card border border-destructive/20 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Emergency SOS</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Press and hold for 3 seconds to trigger emergency alert
            </p>
            <Button variant="sos" size="lg" className="w-full text-lg py-4">
              EMERGENCY SOS
            </Button>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-mountain transition-all duration-300 border-l-4 border-l-destructive/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-success rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Emergency Contacts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-lg font-semibold text-destructive">108</div>
              <div className="text-sm text-muted-foreground">Emergency Helpline</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-lg font-semibold text-primary">102</div>
              <div className="text-sm text-muted-foreground">Medical Emergency</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-lg font-semibold text-success">100</div>
              <div className="text-sm text-muted-foreground">Police Emergency</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-lg font-semibold text-secondary">1363</div>
              <div className="text-sm text-muted-foreground">Tourist Helpline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;