import { Header } from "@/components/organisms/header";
import { HeroSection } from "@/components/organisms/hero-section";
import { AboutSection } from "@/components/organisms/about-section";
import { FoundersSection } from "@/components/organisms/founders-section";
import { TeamSection } from "@/components/organisms/team-section";
import { AdvisorySection } from "@/components/organisms/advisory-section";
import { ServicesSection } from "@/components/organisms/services-section";
import { OfficesSection } from "@/components/organisms/offices-section";
import { CommunitySection } from "@/components/organisms/community-section";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FoundersSection />
        <TeamSection />
        <ServicesSection />
        <AdvisorySection />
        <OfficesSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
