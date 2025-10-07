import Footer from "@/components/Hero/Footer";
import LandingPage from "@/components/Hero/LandingPage";
import Navbar from "@/components/Hero/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
