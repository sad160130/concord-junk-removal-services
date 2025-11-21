import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, PhoneCall, Truck } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'About Us', view: ViewState.ABOUT },
    { label: 'Appliance Removal', view: ViewState.APPLIANCE },
    { label: 'Furniture Removal', view: ViewState.FURNITURE },
    { label: 'Construction Debris', view: ViewState.CONSTRUCTION },
  ];

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-green-600 text-white py-2 px-4 text-center text-sm font-semibold hidden md:block">
        Call now for a free estimate: <a href="tel:5025309330" className="hover:underline text-white">(502) 530-9330</a>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <button 
            onClick={() => handleNavClick(ViewState.HOME)}
            className="flex items-center gap-2 text-blue-900 hover:opacity-80 transition"
          >
            <div className="bg-blue-900 text-white p-2 rounded-lg">
              <Truck size={24} />
            </div>
            <div className="text-left leading-none">
              <div className="font-extrabold text-xl tracking-tight">CONCORD</div>
              <div className="font-semibold text-xs text-green-600 tracking-widest">JUNK REMOVAL SERVICES</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-bold transition-colors ${
                  currentView === item.view 
                    ? 'text-green-600' 
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:5025309330"
              className="bg-blue-900 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-blue-800 transition shadow-lg"
            >
              <PhoneCall size={16} /> (502) 530-9330
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left text-lg font-medium py-2 ${
                  currentView === item.view ? 'text-green-600' : 'text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:5025309330"
              className="bg-green-600 text-white py-3 rounded-lg font-bold text-center flex justify-center items-center gap-2"
            >
              <PhoneCall size={18} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};