
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Drivers } from './components/sections/Drivers';
import { Teams } from './components/sections/Teams';
import { RaceCalendar } from './components/sections/Calendar';
import { Stats } from './components/sections/Stats';
import { Guide } from './components/sections/Guide';
import { Footer } from './components/sections/Footer';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';

// Main Landing Page Component
const LandingPage = () => (
  <>
    {/* Navigation */}
    <Navbar />
    
    {/* Main Content */}
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Drivers Section */}
      <Drivers />
      
      {/* Teams Section */}
      <Teams />
      
      {/* Calendar Section */}
      <RaceCalendar />
      
      {/* Statistics Section */}
      <Stats />
      
      {/* Guide Section */}
      <Guide />
    </main>
    
    {/* Footer */}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Individual sections as separate routes (optional) */}
          <Route path="/drivers" element={<LandingPage />} />
          <Route path="/teams" element={<LandingPage />} />
          <Route path="/calendar" element={<LandingPage />} />
          <Route path="/stats" element={<LandingPage />} />
          <Route path="/guide" element={<LandingPage />} />
          
          {/* 404 Not Found - Must be last route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
