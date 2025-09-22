import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import CulturalCalendar from "@/components/CulturalCalendar";
import SafetySection from "@/components/SafetySection";
import HomestaySection from "@/components/HomestaySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <CulturalCalendar />
      <SafetySection />
      <HomestaySection />
      
      {/* Remaining Features Preview */}
      <section id="planner" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-sacred bg-clip-text text-transparent">
            AI Itinerary Planner
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let AI create the perfect travel plan based on your preferences, optimize routes with Google Maps, 
            and suggest the best monasteries, homestays, and cultural experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Smart Route Planning</h3>
              <p className="text-sm text-muted-foreground">AI-optimized paths using Google Maps</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-sm text-muted-foreground">Based on your interests and preferences</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Cultural Integration</h3>
              <p className="text-sm text-muted-foreground">Include festivals and cultural events</p>
            </div>
          </div>
        </div>
      </section>

      <section id="teachings" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-monastery bg-clip-text text-transparent">
            Teachings & Lessons
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn from monastery monks about Buddhist philosophy, meditation practices, 
            and cultural traditions through exclusive video content and virtual sessions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Buddhist Philosophy</h3>
              <p className="text-sm text-muted-foreground">Core teachings and principles</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Meditation Guidance</h3>
              <p className="text-sm text-muted-foreground">Guided sessions with monks</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold mb-2">Cultural Traditions</h3>
              <p className="text-sm text-muted-foreground">History and customs explained</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;