import AboutInfo from "@/components/AboutInfo/AboutInfo";
import GetAccountSection from "@/components/GetAccount/GetAccountSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductsSection from "@/components/ProductsSection/ProductsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutInfo />
      <ProductsSection />
      <GetAccountSection />
    </>
  );
}
