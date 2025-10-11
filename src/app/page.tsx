import EnterResi from "@/components/hero/EnterResi";
import FlyWheel from "@/components/hero/FlyWheel";
import Footer from "@/components/hero/Footer";
import IndustryLayers from "@/components/hero/IndustryLayers";
import IndustryOverview from "@/components/hero/IndustryOverview";
import LandingPage from "@/components/hero/LandingPage";
import Navbar from "@/components/hero/Navbar";
import NewRoadmap from "@/components/hero/NewRoadmap";
import Ring from "@/components/hero/Ring";

export default function Home() {
  return (
    <div className="bg-[#EEF5FF] overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <IndustryOverview />
      <IndustryLayers />
      <EnterResi />
      <NewRoadmap />
      <Ring />
      <FlyWheel />
      <Footer />
    </div>
  );
}
