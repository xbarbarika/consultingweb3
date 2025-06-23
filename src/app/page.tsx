import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import WhoWeHelp from "@/components/WhoWeHelp";
import ServicesOffered from "@/components/ServicesOffered";
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhoWeHelp />
      <ServicesOffered />
      <OurTeam />
      <ScheduleMeeting />
      <FAQ />
      <Footer />
    </main>
  );
}