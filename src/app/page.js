
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import EventFeatures from "@/components/home/EventFeatures";
import PartnerWithUs from "@/components/home/PartnerWithUs";
import Speakers from "@/components/home/Speakers";
import AllEditions from "@/components/home/AllEditions";
import EventByNumbers from "@/components/home/EventByNumbers";
import SponsorLogo from "@/components/home/SponsorLogo";
import Highlights from "@/components/home/Highlights";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <EventFeatures />
      <PartnerWithUs />
      <Speakers />
      <EventByNumbers />
      <Highlights />
      <AllEditions />
      <SponsorLogo />
    </main>
  );
}