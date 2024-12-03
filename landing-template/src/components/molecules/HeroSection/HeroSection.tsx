import React, { useState } from "react";
import Button from '../../atoms/Button/Button';
import './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`);
  };

  return (
    <section className="hero-section">
      <h1>Welcome to Our Landing Page</h1>
      <p>Subscribe to our newsletter for updates!</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" />
      <Button label="Subscribe" onClick={handleSubscribe} />
    </section>
  );

};

export default HeroSection;

