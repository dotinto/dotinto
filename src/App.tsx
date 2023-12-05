import React from 'react';
import './App.css';
import Header from './components/header'
import WelcomeSection from './components/welcome-section'
import Loader from './components/loader'

function App() {
  return (
    <div>
        <Loader />
        <Header />
        <WelcomeSection />
    </div>
  );
}

export default App;
