import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useSelector } from "react-redux";
import TeamSection from "@/componnets/OurTeam/TeamSection";
import OurClients from "@/componnets/OurClients/OurClients";
import Footer from "@/componnets/Footer";
import HeroSection from "@/componnets/HeroBanner/HeroBanner";
import Navbar from "@/componnets/NavBar";

export default function Home() {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <OurClients />
      <Footer />
    </>
  );
}
