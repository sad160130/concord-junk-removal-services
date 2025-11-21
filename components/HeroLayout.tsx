import React from 'react';
import { LeadForm } from './LeadForm';

interface HeroLayoutProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  serviceId?: string;
  children?: React.ReactNode;
}

export const HeroLayout: React.FC<HeroLayoutProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  serviceId,
  children 
}) => {
  return (
    <div className="relative min-h-screen md:min-h-0 md:h-auto bg-blue-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Junk Removal Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Content Column */}
          <div className="flex-1 text-white pt-0 lg:pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
              {subtitle}
            </p>
            
            {/* Desktop-only Trust Indicators */}
            <div className="hidden lg:grid grid-cols-2 gap-6 text-sm font-medium text-blue-200">
              <div className="flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span> Same-Day Service
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span> Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span> Upfront Pricing
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span> Eco-Friendly Disposal
              </div>
            </div>
          </div>

          {/* Right Form Column - Always Visible */}
          <div className="w-full lg:w-[450px] flex-shrink-0">
            <LeadForm preSelectedService={serviceId} />
          </div>

        </div>
      </div>

      {/* Mobile-only Trust Indicators (Below fold on mobile, but good for scroll) */}
      <div className="lg:hidden bg-blue-800 py-4 px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-200">
           <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Same-Day Service</span>
           <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Licensed</span>
           <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Upfront Pricing</span>
        </div>
      </div>
    </div>
  );
};