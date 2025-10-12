import FlyWheel from "@/components/hero/FlyWheel";
import Footer from "@/components/hero/Footer";
import IndustryLayers from "@/components/hero/IndustryLayers";
import IndustryOverview from "@/components/hero/IndustryOverview";
import LandingPage from "@/components/hero/LandingPage";
import Navbar from "@/components/hero/Navbar";
import LenisProvider from "@/providers/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <main className="bg-[#EEF5FF] overflow-x-hidden">
        <Navbar />
        <LandingPage />
        <IndustryOverview />
        <IndustryLayers />
        <FlyWheel />
        <Footer />
      </main>
    </LenisProvider>
  );
}
