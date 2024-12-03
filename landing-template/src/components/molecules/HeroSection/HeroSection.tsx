import React, { useState } from "react";
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import  './HeroSection.css';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail('');
    setError('');
  };

  return (
    <section className="heroSection">
      <h1 className="title">Welcome to Our Landing Page</h1>
      <p className="subtitle">Subscribe to our newsletter for updates!</p>
      <div className="inputGroup">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button label="Subscribe" onClick={handleSubscribe} />
      </div>
      {error && <p className={error}>{error}</p>}
    </section>
  );
};

export default HeroSection;


