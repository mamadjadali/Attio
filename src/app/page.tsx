import HeroSection from "@/components/sections/HeroSection";
import LovedByBuildersSection from "@/components/sections/LovedByBuildersSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import MoreFeaturesSection from "@/components/sections/MoreFeaturesSection";
import ReadyToBuildSection from "@/components/sections/ReadyToBuildSection";
import SecurityFeaturesSection from "@/components/sections/SecurityFeature";
import SecurityScaleSection from "@/components/sections/SecurityScaleSection";

export default function Home() {
  return (
    <main>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        <HeroSection />
        <MarqueeSection />
        <SecurityScaleSection />
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        <MoreFeaturesSection />
        <SecurityFeaturesSection/>
        <LovedByBuildersSection />
        <ReadyToBuildSection />
      </div>
    </main>
  );
}
