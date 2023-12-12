import React from 'react';
import './App.css';
import Header from './components/header'
import WelcomeSection from './components/welcome-section'
import Loader from './components/loader'
import SkillsSection from './components/skills-section'

function App() {
  return (
    <div>
        <Loader />
        <Header />
        <WelcomeSection />
        <SkillsSection />
        <div id="anchor">1</div>

    </div>
  );
}

export default App;
