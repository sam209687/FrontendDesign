import Image from "next/image";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import SolarTrendsPage from "@/sections/Hero-second";
import CarouselPage from "@/components/(carousel)/Hero";
import ProdCards from "@/components/(ProdCards)/Cards";
import AuraEffect from "@/sections/AuraEffect";
import SliderComponent from "@/components/(hero-carousel)/Slider";
import FeaturesGrid from "@/sections/FeaturesGrid";
import HeaderSecond from "@/sections/HeaderSecond";
import LatestPost from "@/sections/LatestPost";
import ActionsPage from "@/sections/ActionsPage";


export default function Home() {
  return (
   <div>
     {/* <Header /> */}
     <HeaderSecond/>
     <Hero />
     <AuraEffect />
     <SliderComponent />
     <LogoTicker />
     <Features />
     <Testimonials />
     <CallToAction />
    <SolarTrendsPage/>
  
   <CarouselPage />
  
    <ProdCards />
    <FeaturesGrid />
    <ActionsPage />
    <LatestPost/>
     <Footer />
     
   </div>
  )
    
  
   
  
}
