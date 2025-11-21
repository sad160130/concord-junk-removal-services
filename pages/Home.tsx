
import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { 
  ShieldCheck, Clock, Leaf, ArrowRight, MapPin, HelpCircle, 
  CheckCircle2, Truck, Star, Heart, Award, Users, ThumbsUp, 
  Recycle, Calendar, Phone, Play 
} from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Concord Junk Removal Services",
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    "telephone": "502-530-9330",
    "email": "kadamrohan1988@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "805 Trade Street Northwest #105",
      "addressLocality": "Concord",
      "addressRegion": "NC",
      "postalCode": "28027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.4106,
      "longitude": -80.5795
    },
    "url": "https://concordjunkremovalservices.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": ["Concord", "Kannapolis", "Harrisburg", "Waxhaw", "Marvin", "Lancaster"],
    "sameAs": [
      "https://www.facebook.com/concordjunkremoval",
      "https://www.instagram.com/concordjunkremoval"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does junk removal cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is based on volume—specifically, how much space your items occupy in our truck. We provide upfront, all-inclusive pricing that covers labor, transport, and disposal fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to be home for the pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. We offer 'Curbside Pickup' services. If you can leave items in a driveway, garage, or accessible yard area, we can haul them away without you needing to be present."
        }
      },
      {
        "@type": "Question",
        "name": "What items can you NOT take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We take almost everything, but licenses prevent us from hauling hazardous materials like chemicals, gasoline, oil drums, asbestos, and bio-medical waste."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you get here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Same-Day and Next-Day service in Concord, Kannapolis, and Harrisburg."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. Hero Section */}
      <HeroLayout
        title="Reclaim Your Home with Concord's Most Trusted Junk Removal Experts"
        subtitle="We don't just haul junk; we restore peace of mind. From estate cleanouts to single-item pickups, experience the professional difference of a dedicated, licensed, and eco-conscious team."
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80" 
        serviceId="General Junk Removal"
      />

      {/* Trust Indicators Strip */}
      <div className="bg-gray-900 text-white py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400 w-8 h-8"/>
              <span className="font-bold text-sm md:text-base">5-Star Rated on Google</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="text-green-400 w-8 h-8"/>
              <span className="font-bold text-sm md:text-base">Fully Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Recycle className="text-blue-400 w-8 h-8"/>
              <span className="font-bold text-sm md:text-base">Eco-Friendly Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-green-400 w-8 h-8"/>
              <span className="font-bold text-sm md:text-base">Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What We Haul</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether it's a single sofa or a whole-house cleanout, our team handles the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100 flex flex-col">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Removal</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                We remove old couches, mattresses, dressers, and tables. We prioritize donation for items in good condition.
              </p>
              <button 
                onClick={() => onNavigate(ViewState.FURNITURE)}
                className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                See Furniture Rates <ArrowRight size={18} />
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100 flex flex-col">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Disposal</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Safe removal and recycling of refrigerators, washers, dryers, and stoves. We handle the heavy lifting.
              </p>
              <button 
                onClick={() => onNavigate(ViewState.APPLIANCE)}
                className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                See Appliance Rates <ArrowRight size={18} />
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100 flex flex-col">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center text-yellow-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Debris</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Fast cleanup for renovation projects. We haul drywall, wood, tile, and old fixtures for contractors and DIYers.
              </p>
              <button 
                onClick={() => onNavigate(ViewState.CONSTRUCTION)}
                className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                See Construction Rates <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Team - Static Image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
             <p className="text-gray-600">
               When you hire <strong>Concord Junk Removal Services</strong>, you aren't just getting a truck; you are hiring a team whose backgrounds assure you of safety, reliability, and courtesy.
             </p>
           </div>
           
           <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[300px] group">
                 <img 
                   src="https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&w=800&q=80" 
                   alt="Concord Junk Removal Team workers"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Standards</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                       <div>
                         <h4 className="font-bold text-gray-900">Uniformed & Background Checked</h4>
                         <p className="text-gray-600 text-sm">Every team member is vetted for your peace of mind.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                       <div>
                         <h4 className="font-bold text-gray-900">Fully Insured</h4>
                         <p className="text-gray-600 text-sm">We carry liability and workers' comp insurance to protect your property.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                       <div>
                         <h4 className="font-bold text-gray-900">Respectful Service</h4>
                         <p className="text-gray-600 text-sm">We treat your property like our own, sweeping up before we leave.</p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="italic text-gray-500 text-sm">"The crew was polite, fast, and careful with my walls. Best service in Concord!"</p>
                    <div className="flex items-center gap-2 mt-2">
                       <div className="flex text-yellow-400">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                       </div>
                       <span className="text-xs font-bold text-gray-900">- Sarah J., Harrisburg</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

             <div className="bg-white relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-md">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Book Online</h3>
                <p className="text-sm text-gray-600">Schedule your appointment online or call us directly.</p>
             </div>
             <div className="bg-white relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-md">2</div>
                <h3 className="font-bold text-gray-900 mb-2">We Call You</h3>
                <p className="text-sm text-gray-600">We give you a courtesy call 20 minutes before arrival.</p>
             </div>
             <div className="bg-white relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-md">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Upfront Quote</h3>
                <p className="text-sm text-gray-600">We review your items and give you a guaranteed price.</p>
             </div>
             <div className="bg-white relative z-10 text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-md">4</div>
                <h3 className="font-bold text-gray-900 mb-2">We Haul It</h3>
                <p className="text-sm text-gray-600">We load everything up and sweep the area clean.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2"><HelpCircle size={20}/> How is pricing determined?</h3>
                <p className="text-gray-600">Pricing is based on volume—how much space your items take up in our truck. We offer single-item pricing (min $99) up to full truckloads. All labor and disposal fees are included.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2"><HelpCircle size={20}/> What areas do you serve?</h3>
                <p className="text-gray-600">We serve all of Cabarrus County (Concord, Kannapolis, Harrisburg) and parts of Union County (Waxhaw, Marvin) and Lancaster, SC.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2"><HelpCircle size={20}/> Do you recycle?</h3>
                <p className="text-gray-600">Yes! We are an eco-friendly company. We sort loads to donate usable items and recycle cardboard, metal, and electronics.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Location Map */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us in Concord</h2>
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-green-600" /> 805 Trade Street Northwest #105, Concord, NC 28027
            </p>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=805%20Trade%20Street%20Northwest%20%23105%2C%20Concord%2C%20NC%2028027&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              title="Concord Junk Removal Services Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="bg-green-600 text-white py-12">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to clear the clutter?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Call now for a free estimate or same-day service availability.</p>
            <a href="tel:5025309330" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
               <Phone size={24} /> Call (502) 530-9330
            </a>
         </div>
      </section>
    </>
  );
};
