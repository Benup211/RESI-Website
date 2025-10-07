import Footer from "@/components/hero/Footer";
import LandingPage from "@/components/hero/LandingPage";
import Navbar from "@/components/hero/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
