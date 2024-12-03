import React from "react";
import Header from './components/organisms/Header/Header'
import HeroSection from './components/molecules/HeroSection/HeroSection'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
      </main>

    </div>
  );
};

export default App;