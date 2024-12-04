import React from "react";
import Header from "../../organisms/Header/Header";
import HeroSection from '../../molecules/HeroSection/HeroSection';
import Footer from "../../organisms/Footer/Footer";
import './LandingTemplate.css'

const LandingPageTemplate: React.FC = () => {
  return (
    <div className="landingTemplate">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;