import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import WhoWeHelp from "@/components/WhoWeHelp";
import ServicesOffered from "@/components/ServicesOffered";

export default function Home() {
  return (
    <main style={{ background: '#DBDBDB', backgroundColor: 'color(display-p3 0.8589 0.8589 0.8589)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <WhoWeHelp />
      <ServicesOffered />
    </main>
  );
}