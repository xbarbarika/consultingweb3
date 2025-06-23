import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import WhoWeHelp from "@/components/WhoWeHelp";
import ServicesOffered from "@/components/ServicesOffered";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhoWeHelp />
      <ServicesOffered />
    </main>
  );
}