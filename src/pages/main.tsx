import { MainPageMainSection } from "../components/MainPageMainSection";
import { MainPageServicesSection } from "../components/MainPageServicesSection";
import { MainPageAboutSection } from "../components/MainPageAboutSection";
import { MainPageSchemeSection } from "../components/MainPageSchemeSection";
import { MainPagePortfolioSection } from "../components/MainPagePortfolioSection";
import { MainPagePhoneSection } from "../components/MainPagePhoneSection";
import { MainPageAdvantagesSection } from "../components/MainPageAdvantagesSection";
import { MainPageCanvas } from "../components/MainPageCanvas";
import { useEffect } from "react";

export const MainPage = () => {
  return (
    <>
      <MainPageCanvas />
      <MainPageMainSection />
      <MainPageServicesSection />
      <MainPageAboutSection />
      <MainPageSchemeSection />
      <MainPagePortfolioSection />
      <MainPagePhoneSection />
      <MainPageAdvantagesSection />
    </>
  );
};
