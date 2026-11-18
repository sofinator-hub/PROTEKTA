import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import RoadSafetyShowcase from "@/components/home/RoadSafetyShowcase";
import LocationSection from "@/components/home/LocationSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <IndustrySolutions />
      <RoadSafetyShowcase />
      <LocationSection />
      <Footer />
    </main>
  );
}