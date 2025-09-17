import React from 'react';
import { Droplet, Users, Fish, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import CallToAction from './components/CallToAction';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-avenir text-gray-800">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <CallToAction />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;