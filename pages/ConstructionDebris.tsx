import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Hammer, HardHat, Truck, CheckSquare, AlertTriangle, Recycle, Ban, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const ConstructionDebris: React.FC<PageProps> = ({ onNavigate }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Debris Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services"
    },
    "areaServed": ["Concord", "Kannapolis", "Harrisburg", "Waxhaw", "Marvin", "Lancaster"],
    "description": "Rapid debris hauling for contractors and DIY homeowners. We handle drywall, lumber, tiling, and more.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Waste Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drywall & Lumber Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Renovation Debris Cleanup"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to bag the debris before you arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It helps for small items, but isn't required. We can load loose drywall sheets or 2x4s directly."
        }
      },
      {
        "@type": "Question",
        "name": "Can you take paint cans and chemicals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can accept paint cans only if they are completely dry/hardened. We cannot transport liquid chemicals or asbestos."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide demolition services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer light demolition (carpet removal, cabinet removal) but not full structural demolition."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroLayout
        title="Construction Debris Removal Concord, NC"
        subtitle="Keep your job site clean, safe, and compliant. We provide rapid debris hauling for contractors and DIY homeowners, handling everything from drywall to lumber."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        serviceId="Construction Debris Removal"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          items={[{ label: 'Construction Debris' }]} 
          onNavigate={onNavigate} 
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            
            {/* Intro Section - Problem/Solution */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Contractors & Homeowners
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Job Site Cleanup & Debris Hauling in Concord
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A clean job site is a safe job site. Whether you are flipping a house on <strong>Union Street</strong>, remodeling a kitchen in <strong>Moss Creek</strong>, or managing a commercial build in <strong>Kannapolis</strong>, debris accumulation is an inevitable byproduct of progress. Piles of scrap wood, drywall, and old fixtures not only look unprofessional—they pose significant safety hazards and can slow down your sub-contractors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Concord Junk Removal Services</strong> acts as your on-demand waste management partner. We understand the tight timelines of the construction industry. Unlike dumpster rentals that sit on your property for weeks, our <strong>junk removal team</strong> arrives, loads the debris immediately, and sweeps the site, allowing you to get back to building.
              </p>
            </section>

            {/* Dumpster Rental Comparison - The "Why Us" */}
            <section className="mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Rental vs. Junk Removal: Which is Better?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                    <Ban size={20}/> The Hassle of Dumpsters
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">• <strong>Permit Issues:</strong> Placing a dumpster on a street in Concord often requires a city permit.</li>
                    <li className="flex items-start gap-2">• <strong>HOA Fines:</strong> Many neighborhoods (like Highland Creek) strictly prohibit visible dumpsters.</li>
                    <li className="flex items-start gap-2">• <strong>Driveway Damage:</strong> heavy roll-off containers can crack concrete or ruin asphalt.</li>
                    <li className="flex items-start gap-2">• <strong>You Do The Labor:</strong> You still have to haul the debris out of the house and lift it into the bin.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-500">
                  <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                    <CheckSquare size={20}/> The Quick Haul Advantage
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">• <strong>No Permits Needed:</strong> Our trucks park, load, and leave. No permits required.</li>
                    <li className="flex items-start gap-2">• <strong>HOA Friendly:</strong> We are in and out in under an hour typically, keeping neighbors happy.</li>
                    <li className="flex items-start gap-2">• <strong>Zero Damage:</strong> Rubber-tired trucks protect your driveway.</li>
                    <li className="flex items-start gap-2">• <strong>We Load It:</strong> Our team carries the drywall, wood, and tile from the work zone to the truck.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Safety & Compliance - Deep Dive */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Safety & Environmental Compliance</h3>
              <p className="text-gray-700 mb-6">
                Construction waste disposal in <strong>Cabarrus County</strong> is subject to specific regulations. Dumping construction materials in standard municipal trash bins is prohibited. We ensure full compliance with local laws.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <Recycle size={24}/>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Material Recycling</h4>
                  <p className="text-sm text-gray-600">We sort clean wood, scrap metal, and cardboard for recycling facilities, reducing landfill tonnage.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-yellow-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-yellow-600 mb-4">
                    <ShieldCheck size={24}/>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Hazard Awareness</h4>
                  <p className="text-sm text-gray-600">Our crews are trained to identify hazards. *Note: We do not haul asbestos or hazardous chemicals.*</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Clock size={24}/>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Efficiency</h4>
                  <p className="text-sm text-gray-600">We sweep the loading area magnetically to remove nails and screws, preventing flat tires.</p>
                </div>
              </div>
            </section>

            {/* Materials We Haul */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Construction Materials We Handle</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Drywall & Sheetrock", desc: "Clean cutoffs or demolition waste." },
                  { name: "Lumber & Plywood", desc: "Scrap wood, framing (nails removed preferred but not required)." },
                  { name: "Flooring", desc: "Carpet, padding, laminate, and vinyl planks." },
                  { name: "Tiling & Ceramics", desc: "Bathroom tiles, old toilets, sinks, and tubs." },
                  { name: "Windows & Doors", desc: "Glass panes (taped for safety), frames, and screens." },
                  { name: "Kitchen Debris", desc: "Old cabinets, countertops, and backsplash." },
                  { name: "Roofing Materials", desc: "Shingles and underlayment (weight surcharges may apply)." },
                  { name: "Fencing & Decking", desc: "Old pressure-treated wood and lattice." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                    <div className="mt-1 bg-green-500 w-2 h-2 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Heavy Material Warning */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
               <h4 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                 <Truck size={20}/> Special Handling: Heavy Masonry
               </h4>
               <p className="text-blue-800 text-sm leading-relaxed">
                 Materials like <strong>concrete, brick, dirt, and stone</strong> are classified as "dense materials." These are charged by weight rather than volume due to disposal fees at the landfill. Please let us know in advance if you have these materials so we can dispatch the appropriate heavy-duty vehicle to your site.
               </p>
            </div>

            {/* FAQs - NEW SECTION */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Construction Debris FAQ</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do I need to bag the debris before you arrive?</h4>
                  <p className="text-gray-700">
                    It helps, but it's not required. For loose materials like fiberglass insulation or small tiles, bagging them can speed up the process. However, for larger items like drywall sheets or 2x4s, we can load them loose. Our crew arrives equipped with heavy-duty shovels and brooms to clear the pile.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you take paint cans and chemicals?</h4>
                  <p className="text-gray-700">
                    We can only accept paint cans only if they are completely dry/hardened or empty. We <strong>cannot</strong> transport liquid latex or oil-based paint, solvents, fuel, or asbestos due to hazardous material transportation laws. We can direct you to the Cabarrus County Household Hazardous Waste facility for these items.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you provide demolition services?</h4>
                  <p className="text-gray-700">
                    We offer "light demolition" services. This includes tasks like ripping up carpet, removing kitchen cabinets, or taking down a non-load-bearing wall or shed. We are primarily a removal service, so full structural demolition is outside our scope.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">How does pricing work for heavy materials?</h4>
                  <p className="text-gray-700">
                    Standard pricing is based on volume (how much space it fills in the truck). However, for dense materials like concrete, dirt, shingles, or tile, we have "bed-load" pricing. Because of the extreme weight, we can only fill the truck to a safe height (usually 1 foot deep) to avoid exceeding DOT weight limits.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / CTA Column */}
          <div className="lg:w-1/4 space-y-8">
             <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 sticky top-24">
               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Contractor Priority</h3>
               <p className="text-gray-600 text-sm mb-6 text-center">
                 Keep your job site running smooth. We offer priority scheduling for local builders.
               </p>
               <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition mb-4">
                 <Hammer size={20} />
                 (502) 530-9330
               </a>
               <p className="text-xs text-center text-gray-400">
                 Net-30 Billing for Approved Accounts
               </p>
             </div>

             <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <HardHat size={20} /> DIY Homeowners
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Renovating a bathroom or building a deck? Don't let the debris pile up in your yard. We can clear it in one afternoon.
               </p>
             </div>

             <div className="bg-gray-900 text-white p-6 rounded-xl">
               <h3 className="text-lg font-bold mb-3">Service Areas</h3>
               <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button onClick={() => onNavigate(ViewState.WAXHAW)} className="flex items-center gap-2 hover:text-green-400 w-full text-left">
                    <ArrowRight size={14} className="text-yellow-500"/> Waxhaw, NC
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate(ViewState.MARVIN)} className="flex items-center gap-2 hover:text-green-400 w-full text-left">
                    <ArrowRight size={14} className="text-yellow-500"/> Marvin, NC
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate(ViewState.LANCASTER)} className="flex items-center gap-2 hover:text-green-400 w-full text-left">
                    <ArrowRight size={14} className="text-yellow-500"/> Lancaster, SC
                  </button>
                </li>
               </ul>
             </div>
          </div>

        </div>
      </div>

      {/* Location Map */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
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
    </>
  );
};