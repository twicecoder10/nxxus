import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ProductSection } from '../components/ProductSection';
import { MeasuredImpact } from '../components/MeasuredImpact';
import { ClinicalSpecialtiesSection } from '../components/ClinicalSpecialtiesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { SeamlessIntegrationSection } from '../components/SeamlessIntegrationSection';
import { TeamSection } from '../components/TeamSection';
import { InlineSection } from '../components/inlinesection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductSection />
      <MeasuredImpact />
       {/*<ClinicalSpecialtiesSection />
      
       {/* <HowItWorksSection />

      <SeamlessIntegrationSection />*/}
      {/*<TeamSection /> */}
      <InlineSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

