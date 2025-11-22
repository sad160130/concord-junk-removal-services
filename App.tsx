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

// Helper to determine ViewState from the current URL path
const getViewFromPath = (path: string): ViewState => {
  // Normalize path by removing trailing slash (unless root)
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  
  switch (normalizedPath) {
    case '/about-us': return ViewState.ABOUT;
    case '/appliance-removal': return ViewState.APPLIANCE;
    case '/furniture-removal': return ViewState.FURNITURE;
    case '/construction-debris': return ViewState.CONSTRUCTION;
    case '/waxhaw-junk-removal': return ViewState.WAXHAW;
    case '/marvin-junk-removal': return ViewState.MARVIN;
    case '/lancaster-junk-removal': return ViewState.LANCASTER;
    default: return ViewState.HOME;
  }
};

// Helper to get the URL path for a specific ViewState
const getPathFromView = (view: ViewState): string => {
  switch (view) {
    case ViewState.ABOUT: return '/about-us';
    case ViewState.APPLIANCE: return '/appliance-removal';
    case ViewState.FURNITURE: return '/furniture-removal';
    case ViewState.CONSTRUCTION: return '/construction-debris';
    case ViewState.WAXHAW: return '/waxhaw-junk-removal';
    case ViewState.MARVIN: return '/marvin-junk-removal';
    case ViewState.LANCASTER: return '/lancaster-junk-removal';
    case ViewState.HOME:
    default: return '/';
  }
};

const App: React.FC = () => {
  // Initialize state based on current browser URL path
  const [currentView, setCurrentView] = useState<ViewState>(() => getViewFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath(window.location.pathname));
    };
    
    // Listen for back/forward button clicks
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState) => {
    const newPath = getPathFromView(view);
    // Push new state to history to update URL without reload
    window.history.pushState({}, '', newPath);
    setCurrentView(view);
    window.scrollTo(0, 0);
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