import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { CheckCircle2, MapPin, Truck, Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface LocationPageProps {
  city: string;
  state: string;
  zipCodes?: string;
  introText: string;
  onNavigate: (view: ViewState) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ city, state, zipCodes, introText, onNavigate }) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Concord Junk Removal Services - ${city}`,
    "description": introText,
    "areaServed": {
      "@type": "City",
      "name": city,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state
      }
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services",
      "telephone": "502-530-9330"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      
      <HeroLayout
        title={`Junk Removal Services in ${city}, ${state}`}
        subtitle={`Your local, top-rated hauling team serving ${city} and surrounding areas. We offer same-day appliance, furniture, and debris removal.`}
        backgroundImage="https://images.unsplash.com/photo-1605618529181-916fa742d618?auto=format&fit=crop&w=1600&q=80"
        serviceId={`General Junk Removal - ${city}`}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            The Trusted Choice for {city} Residents
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {introText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-800 font-medium">
              <Clock size={20} /> Same-Day Service
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-800 font-medium">
              <ShieldCheck size={20} /> Fully Insured
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-800 font-medium">
              <Star size={20} /> 5-Star Rated
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Services in {city}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => onNavigate(ViewState.FURNITURE)} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Truck size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Furniture Removal</h4>
              <p className="text-gray-600 mb-4">We haul away old couches, mattresses, and dressers from your {city} home.</p>
              <span className="text-green-600 font-bold text-sm flex items-center gap-1">Learn More <ArrowRight size={16}/></span>
            </div>

            <div onClick={() => onNavigate(ViewState.APPLIANCE)} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Appliance Disposal</h4>
              <p className="text-gray-600 mb-4">Safe recycling for refrigerators, washers, dryers, and stoves.</p>
              <span className="text-green-600 font-bold text-sm flex items-center gap-1">Learn More <ArrowRight size={16}/></span>
            </div>

            <div onClick={() => onNavigate(ViewState.CONSTRUCTION)} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-100">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Debris Cleanup</h4>
              <p className="text-gray-600 mb-4">Construction waste removal for renovations and DIY projects in {city}.</p>
              <span className="text-green-600 font-bold text-sm flex items-center gap-1">Learn More <ArrowRight size={16}/></span>
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why {city} Chooses Concord Junk Removal Services</h3>
              <p className="text-gray-700 mb-4">
                As a locally owned business, we care about our community. We aren't a national franchise with high overhead; we are your neighbors.
              </p>
              <p className="text-gray-700 mb-6">
                Our trucks are frequently in the <strong>{city}</strong> area, which allows us to offer lower rates and faster response times than our competitors. We know the local donation centers and recycling facilities, ensuring your items are handled responsibly.
              </p>
              <ul className="space