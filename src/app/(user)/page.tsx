import FeatureProducts from "@/custom-components/FeatureProducts/FeatureProducts";
import HeroSection from "@/custom-components/HeroSection/HeroSection";
import TopCategories from "@/custom-components/TopCategories/TopCategories";

export default function Home() {
  return (
    <div className="pt-[3rem]">
      <HeroSection />
      <TopCategories />
      <FeatureProducts />
    </div>
  );
}
