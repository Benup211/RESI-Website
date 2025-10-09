import EnterResi from "@/components/hero/EnterResi";
import Footer from "@/components/hero/Footer";
import IndustryLayers from "@/components/hero/IndustryLayers";
import IndustryOverview from "@/components/hero/IndustryOverview";
import LandingPage from "@/components/hero/LandingPage";
import Navbar from "@/components/hero/Navbar";
import Ring from "@/components/hero/Ring";

export default function Home() {
  return (
    <div className="bg-[#EEF5FF]">
      <Navbar />
      <LandingPage />
      <IndustryOverview />
      <IndustryLayers />
      <EnterResi />
      <Ring />
      <Footer />
    </div>
  );
}
