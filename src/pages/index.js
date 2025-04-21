import { useSelector } from "react-redux";
import TeamSection from "@/componnets/OurTeam/TeamSection";
import OurClients from "@/componnets/OurClients/OurClients";
import HeroSection from "@/componnets/HeroBanner/HeroBanner";

export default function Home() {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <>
      <HeroSection />
      <TeamSection />
      <OurClients />
    </>
  );
}
