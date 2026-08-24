import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import MouseGlow from "./components/MouseGlow";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SmoothScroll />
      <MouseGlow />
      <Particles />
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}