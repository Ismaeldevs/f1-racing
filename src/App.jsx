
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Drivers } from './components/sections/Drivers';
import { Teams } from './components/sections/Teams';
import { RaceCalendar } from './components/sections/Calendar';
import { Stats } from './components/sections/Stats';
import { Guide } from './components/sections/Guide';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
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
      </div>
    </Router>
  );
}

export default App;
