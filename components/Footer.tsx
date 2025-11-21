import React from 'react';
import { ViewState } from '../types';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Concord Junk Removal Services</h3>
            <p className="text-gray-400 mb-4">
              Your trusted local partner for all junk removal needs in Concord, NC and surrounding Cabarrus County areas. We haul it all so you don't have to.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate(ViewState.ABOUT)} className="hover:text-green-400 transition">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate(ViewState.APPLIANCE)} className="hover:text-green-400 transition">Appliance Removal</button>
              </li>
              <li>
                <button onClick={() => onNavigate(ViewState.FURNITURE)} className="hover:text-green-400 transition">Furniture Removal</button>
              </li>
              <li>
                <button onClick={() => onNavigate(ViewState.CONSTRUCTION)} className="hover:text-green-400 transition">Construction Debris</button>
              </li>
              <li>
                <button onClick={() => onNavigate(ViewState.HOME)} className="hover:text-green-400 transition">Full Property Cleanouts</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-green-500" />
                <a href="tel:5025309330" className="font-bold text-white hover:text-green-400 transition">(502) 530-9330</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-green-500" />
                <a href="mailto:kadamrohan1988@gmail.com" className="font-bold text-white hover:text-green-400 transition">Email Us</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-green-500 mt-1" />
                <span>805 Trade Street Northwest #105,<br/>Concord, NC 28027</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Concord Junk Removal Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};