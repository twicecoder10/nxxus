import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ClinicalSpecialtiesSection } from './components/ClinicalSpecialtiesSection';
import { ProductSection } from './components/ProductSection';
import { AINativePlatformSection } from './components/AINativePlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SeamlessIntegrationSection } from './components/SeamlessIntegrationSection';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <MissionSection />
      <ClinicalSpecialtiesSection />
      <ProductSection />
      <AINativePlatformSection />
      <HowItWorksSection />
      <SeamlessIntegrationSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}