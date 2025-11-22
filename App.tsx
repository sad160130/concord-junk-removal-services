import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { ApplianceRemoval } from './pages/ApplianceRemoval';
import { FurnitureRemoval } from './pages/FurnitureRemoval';
import { ConstructionDebris } from './pages/ConstructionDebris';
import { LocationPage } from './pages/LocationPage';
import { LancasterPage } from './pages/LancasterPage';
import { WaxhawPage } from './pages/WaxhawPage';
import { MarvinPage } from './pages/MarvinPage';
import { About } from './pages/About';
import { ViewState } from './types';

// Helper to determine ViewState from the current URL hash
const getViewFromHash = (hash: string): ViewState => {
  // Remove the '#' character
  const path = hash.replace(/^#/, '');
  
  // Normalize path
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  
  if (normalizedPath === '/about-us') return ViewState.ABOUT;
  if (normalizedPath === '/appliance-removal') return ViewState.APPLIANCE;
  if (normalizedPath === '/furniture-removal') return ViewState.FURNITURE;
  if (normalizedPath === '/construction-debris') return ViewState.CONSTRUCTION;
  if (normalizedPath === '/waxhaw-junk-removal') return ViewState.WAXHAW;
  if (normalizedPath === '/marvin-junk-removal') return ViewState.MARVIN;
  if (normalizedPath === '/lancaster-junk-removal') return ViewState.LANCASTER;
  return ViewState.HOME;
};

// Helper to get the URL hash for a specific ViewState
const getHashFromView = (view: ViewState): string => {
  switch (view) {
    case ViewState.ABOUT: return '#/about-us';
    case ViewState.APPLIANCE: return '#/appliance-removal';
    case ViewState.FURNITURE: return '#/furniture-removal';
    case ViewState.CONSTRUCTION: return '#/construction-debris';
    case ViewState.WAXHAW: return '#/waxhaw-junk-removal';
    case ViewState.MARVIN: return '#/marvin-junk-removal';
    case ViewState.LANCASTER: return '#/lancaster-junk-removal';
    case ViewState.HOME:
    default: return '#/';
  }
};

const App: React.FC = () => {
  // Initialize state based on current browser URL hash
  const [currentView, setCurrentView] = useState<ViewState>(() => getViewFromHash(window.location.hash));

  // Handle browser back/forward buttons using hashchange event
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getViewFromHash(window.location.hash));
    };
    
    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);
    
    // Also set initial hash if empty
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    // Update URL hash
    window.location.hash = getHashFromView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home onNavigate={handleNavigate} />;
      case ViewState.ABOUT:
        return <About onNavigate={handleNavigate} />;
      case ViewState.APPLIANCE:
        return <ApplianceRemoval onNavigate={handleNavigate} />;
      case ViewState.FURNITURE:
        return <FurnitureRemoval onNavigate={handleNavigate} />;
      case ViewState.CONSTRUCTION:
        return <ConstructionDebris onNavigate={handleNavigate} />;
      case ViewState.WAXHAW:
        return <WaxhawPage onNavigate={handleNavigate} />;
      case ViewState.MARVIN:
        return <MarvinPage onNavigate={handleNavigate} />;
      case ViewState.LANCASTER:
        return <LancasterPage onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Interactive Chat Bot Overlay */}
      <ChatBot />
    </div>
  );
};

export default App;