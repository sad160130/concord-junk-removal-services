
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
import { ViewState, ROUTES } from './types';

// Helper to determine ViewState from a URL path
const getViewFromPath = (path: string): ViewState => {
  // Normalize path by removing trailing slash (unless root)
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  
  // Reverse lookup from ROUTES object
  const entry = Object.entries(ROUTES).find(([_, rPath]) => rPath === normalizedPath);
  return entry ? (entry[0] as ViewState) : ViewState.HOME;
};

const App: React.FC = () => {
  // Helper to determine initial view, aggressively checking for hash to migrate it
  const getInitialView = (): ViewState => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // MIGRATION LOGIC: If we detect a hash (e.g. /#/about-us), use it to set state
    // This supports users clicking old links or bookmarks
    if (hash && hash.startsWith('#')) {
       const hashPath = hash.replace('#', '');
       // Handle root hash case
       if (hashPath === '' || hashPath === '/') return ViewState.HOME;
       return getViewFromPath(hashPath);
    }

    return getViewFromPath(path);
  };

  const [currentView, setCurrentView] = useState<ViewState>(getInitialView);

  useEffect(() => {
    // 1. Handle Back/Forward buttons (History API)
    const handlePopState = () => {
      setCurrentView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);

    // 2. AGGRESSIVE HASH CLEANUP
    // If the URL contains a hash, immediately replace the history state with the clean path
    if (window.location.hash) {
       const hashPath = window.location.hash.replace('#', '') || '/';
       const view = getViewFromPath(hashPath);
       const cleanPath = ROUTES[view];
       
       // Replace the current history entry to remove the hash strictly
       window.history.replaceState(null, '', cleanPath);
       setCurrentView(view);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState) => {
    const newPath = ROUTES[view];
    // Standard HTML5 History Push
    window.history.pushState(null, '', newPath);
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
      
      <ChatBot />
    </div>
  );
};

export default App;
