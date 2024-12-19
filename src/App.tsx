import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px]"> {/* pt-[120px] pour compenser la hauteur du header fixe */}
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;