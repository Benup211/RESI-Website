import EnterResi from "@/components/hero/EnterResi";
import Footer from "@/components/hero/Footer";
import IndustryOverview from "@/components/hero/IndustryOverview";
import LandingPage from "@/components/hero/LandingPage";
import Navbar from "@/components/hero/Navbar";

export default function Home() {
  return (
    <div className="bg-[#EEF5FF]">
      <Navbar />
      <LandingPage />
      <IndustryOverview />
      <EnterResi />
      <Footer />
    </div>
  );
}
