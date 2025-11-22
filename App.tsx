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
  // Helper to determine initial view, explicitly handling legacy hash routing
  const getInitialView = (): ViewState => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // MIGRATION LOGIC: If we detect a routing hash (starts with #/), treat it as the path
    // Example: /#/about-us -> /about-us
    if (hash) {
       // Remove # and ensuring leading /
       const cleanHash = hash.replace(/^#\/?/, '/');
       const matchedView = getViewFromPath(cleanHash);
       // Only use hash if it actually matches a route, otherwise fall back to path
       if (matchedView !== ViewState.HOME || cleanHash === '/') {
          return matchedView;
       }
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

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Combined Effect for Canonical Tags and Hash Cleanup
  useEffect(() => {
    // A. Dynamic Canonical Tag Management
    const baseUrl = 'https://concordjunkremovalservices.com';
    const path = ROUTES[currentView];
    // Ensure path doesn't have trailing slash for consistency, unless it's root
    const normalizedPath = path === '/' ? '' : path;
    const canonicalUrl = `${baseUrl}${normalizedPath}`;

    // Find existing canonical tag or create a new one
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    // Update the href to the self-referencing URL
    link.setAttribute('href', canonicalUrl);

    // B. Aggressive Hash Cleanup
    // If URL contains a hash, strip it and replace history state with the Clean URL
    if (window.location.hash) {
       const cleanHashPath = window.location.hash.replace(/^#\/?/, '/');
       // Normalize: ensure we don't end up with double slashes if path was empty
       const finalPath = cleanHashPath.startsWith('/') ? cleanHashPath : `/${cleanHashPath}`;
       
       // Execute replacement without reloading page
       window.history.replaceState(null, '', finalPath);
    }
  }, [currentView]);

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