import Image from "next/image";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import SolarTrendsPage from "@/sections/Hero-second";
import ButtonCut from "@/components/ButtonCut";
import CarouselPage from "@/components/(carousel)/Hero";
import ProdCards from "@/components/(ProdCards)/Cards";
import AuraEffect from "@/sections/AuraEffect";
import HeroCarousel from "@/components/(hero-carousel)/carousel";


export default function Home() {
  return (
   <div>
     <Header />
     <Hero />
     <AuraEffect />
     <HeroCarousel />
     <LogoTicker />
     <Features />
     <Testimonials />
     <CallToAction />
    <SolarTrendsPage/>
   <div className="min-h-screen bg-zinc-900 overflow-scroll">
   <CarouselPage />
   </div>
    <ProdCards />
     <Footer />
    
   </div>
  )
    
  
   
  
}
