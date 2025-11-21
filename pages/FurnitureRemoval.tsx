import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Sofa, Bed, Trash2, HeartHandshake, Layout, Home, ShieldCheck, AlertTriangle, Truck, CheckCircle2, HelpCircle, MapPin, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const FurnitureRemoval: React.FC<PageProps> = ({ onNavigate }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Furniture Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services"
    },
    "areaServed": ["Concord", "Kannapolis", "Harrisburg", "Waxhaw", "Marvin", "Lancaster"],
    "description": "Full-service furniture removal and donation. We haul away couches, mattresses, dressers, and more.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Disposal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Couch & Sofa Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Disposal"
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
        "name": "Do you take furniture with bed bugs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To protect our trucks, crew, and future customers, we cannot knowingly accept furniture infested with bed bugs unless treated."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to disassemble the furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team travels with tools and can perform basic disassembly, though complex items may incur an additional labor fee."
        }
      },
      {
        "@type": "Question",
        "name": "Can you take items from upstairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We are a full-service team. Point to the item—whether it's in the attic, basement, or third-floor bedroom—and we will remove it."
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
        title="Furniture Removal & Donation Concord, NC"
        subtitle="Don't break your back moving that old couch. We provide full-service furniture removal with a focus on donation and eco-friendly disposal in Concord and Cabarrus County."
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80"
        serviceId="Furniture Removal"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          items={[{ label: 'Furniture Removal' }]} 
          onNavigate={onNavigate} 
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            
            {/* Intro Section - Authority & Local Context */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Stress-Free Furniture Removal in Concord, NC
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Updating your home interior is exciting, but figuring out what to do with the old furniture is often the most stressful part of the process. Whether you are downsizing from a family home in <strong>Historic Downtown Concord</strong>, clearing out a rental property, or simply replacing a worn-out sectional in <strong>Harrisburg</strong>, the logistics of furniture disposal are complex.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Furniture is heavy, awkward, and difficult to transport. At <strong>Concord Junk Removal Services</strong>, we specialize in the safe, efficient removal of unwanted furniture. We don't just drag items to the curb; our <strong>team</strong> provides white-glove service, carefully maneuvering bulky items through tight hallways and door frames to ensure your walls and floors remain pristine.
              </p>
            </section>

            {/* The Risks of DIY - Authority/Safety */}
            <section className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-orange-500" size={28}/>
                The Hidden Risks of DIY Furniture Moving
              </h3>
              <p className="text-gray-700 mb-6">
                Many residents attempt to move furniture themselves to save money, but the potential costs of injury or damage often outweigh the professional fee.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0 mt-1">
                    <ShieldCheck size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personal Injury</h4>
                    <p className="text-sm text-gray-600">Lifting a sleeper sofa or solid wood armoire improperly is a leading cause of back strain and hernia. Our team uses professional lifting straps and dollies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0 mt-1">
                    <Home size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Property Damage</h4>
                    <p className="text-sm text-gray-600">One slip on a staircase can put a hole in your drywall or scratch hardwood floors. We carry full liability insurance to protect your asset.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0 mt-1">
                    <Truck size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Vehicle Limitations</h4>
                    <p className="text-sm text-gray-600">Most furniture does not fit in an SUV. Renting a truck, buying fuel, and paying landfill gate fees often costs more than hiring us.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0 mt-1">
                    <Trash2 size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Disposal Difficulty</h4>
                    <p className="text-sm text-gray-600">Cabarrus County landfills have strict rules on bulk items. We handle the logistics, knowing exactly where and how to dispose of every item.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Items We Take - Categorized */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What We Haul Away</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
                   <div className="flex items-center gap-3 mb-4">
                     <Sofa className="text-green-600" size={24}/>
                     <h4 className="text-xl font-bold text-gray-900">Living Room</h4>
                   </div>
                   <ul className="space-y-2 text-gray-700">
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Sectionals & Sleepers</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Recliners & Armchairs</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Entertainment Centers</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Heavy Coffee Tables</li>
                   </ul>
                 </div>

                 <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                   <div className="flex items-center gap-3 mb-4">
                     <Bed className="text-blue-600" size={24}/>
                     <h4 className="text-xl font-bold text-gray-900">Bedroom Suites</h4>
                   </div>
                   <ul className="space-y-2 text-gray-700">
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Mattresses (All Sizes)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Box Springs & Frames</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Wardrobes & Armoires</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Dressers & Vanities</li>
                   </ul>
                 </div>

                 <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                   <div className="flex items-center gap-3 mb-4">
                     <Layout className="text-yellow-600" size={24}/>
                     <h4 className="text-xl font-bold text-gray-900">Office & Dining</h4>
                   </div>
                   <ul className="space-y-2 text-gray-700">
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> Large Dining Tables</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> China Cabinets</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> Cubicle Walls</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> Filing Cabinets</li>
                   </ul>
                 </div>

                 <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                   <div className="flex items-center gap-3 mb-4">
                     <Trash2 className="text-red-600" size={24}/>
                     <h4 className="text-xl font-bold text-gray-900">Difficult Items</h4>
                   </div>
                   <ul className="space-y-2 text-gray-700">
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500"/> Pianos (Upright only)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500"/> Pool Tables (Disassembled)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500"/> Exercise Equipment</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500"/> Hot Tubs (Cut & Haul)</li>
                   </ul>
                 </div>
              </div>
            </section>

            {/* Donation Process - Trust/Eco */}
            <section className="mb-16 bg-green-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-green-600">
                  <HeartHandshake size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-900">Our "Donation First" Promise</h3>
              </div>
              <p className="text-lg text-green-800 mb-6 leading-relaxed">
                We are not just a junk removal company; we are a sustainability partner for <strong>Concord NC</strong>. Our goal is to keep as much furniture out of the landfill as possible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">How We Assess Your Furniture</h4>
                  <p className="text-green-800">
                    When our team arrives, we inspect items for structural integrity, stains, and wear. If an item is gently used, we set it aside in our truck to ensure it doesn't get crushed by other debris.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Where Your Items Go</h4>
                  <p className="text-green-800">
                    We partner with local Cabarrus County charities, including <strong>Habitat for Humanity ReStore</strong>, <strong>Cooperative Christian Ministry</strong>, and <strong>Salvation Army</strong>. By donating, your furniture helps local families furnish their homes affordably.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Tax Receipt Benefits</h4>
                  <p className="text-green-800">
                    If a charity accepts your donation, we can mail you the tax-deductible receipt upon request. It's a win-win: you get space back, the community benefits, and you get a tax break.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs - Enriched */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Furniture Removal FAQ</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you take furniture with bed bugs?</h4>
                  <p className="text-gray-700">
                    To protect our trucks, crew, and future customers, we <strong>cannot</strong> knowingly accept furniture infested with bed bugs or other pests. If you have had an infestation, we require a certificate of treatment from a licensed exterminator before removal.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do I need to disassemble the furniture?</h4>
                  <p className="text-gray-700">
                    Our team travels with tools and can perform basic disassembly (taking legs off tables, separating sectional pieces) to get items out the door. However, fully dismantling complex items like IKEA wardrobes or gym equipment may incur an additional labor fee based on time.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you take items from upstairs?</h4>
                  <p className="text-gray-700">
                    Absolutely. We are a full-service team. Point to the item—whether it's in the attic, basement, or third-floor bedroom—and we will remove it. We charge based on volume, not the number of stairs (though safety is always our priority).
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">What if my furniture is broken or in bad condition?</h4>
                  <p className="text-gray-700">
                    No problem. If an item isn't suitable for donation, we break it down for eco-friendly disposal. We recycle metal components, wood, and textiles whenever possible to minimize landfill impact.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">How do you price furniture removal?</h4>
                  <p className="text-gray-700">
                    Pricing is primarily based on how much space your items take up in our truck. We have specific rates for single items (like just a mattress or a couch) and volume discounts for full room cleanouts. We always provide a firm, free quote before we start loading.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you remove built-in furniture?</h4>
                  <p className="text-gray-700">
                    Yes, we can perform light demolition to remove built-in shelving, entertainment centers, or cabinets attached to walls. Please note this service is priced differently than standard removal due to the extra labor and care required to protect the surrounding structure.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / CTA Column */}
          <div className="lg:w-1/4 space-y-8">
             <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 sticky top-24">
               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Space Back</h3>
               <p className="text-gray-600 text-sm mb-6 text-center">
                 Same-day pickup available in Waxhaw, Marvin & Lancaster. Call for a free estimate.
               </p>
               <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition mb-4">
                 <Truck size={20} />
                 (502) 530-9330
               </a>
               <p className="text-xs text-center text-gray-400">
                 Licensed & Insured Professionals
               </p>
             </div>

             <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <Home size={20} /> Curbside Pickup
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Want to save money? Move your items to the garage or curb, and we can offer a <strong>discounted rate</strong> for quick pickup.
               </p>
             </div>

             <div className="bg-blue-900 text-white p-6 rounded-xl">
               <h3 className="text-lg font-bold mb-3">Commercial Accounts</h3>
               <p className="text-blue-200 text-sm mb-4">
                 Property managers and realtors: We offer volume discounts for whole-home cleanouts and foreclosure trash-outs.
               </p>
               <button className="text-green-400 font-bold text-sm hover:text-white transition flex items-center gap-1">
                 Contact Commercial Team <CheckCircle2 size={14}/>
               </button>
             </div>

             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Service Areas</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <button onClick={() => onNavigate(ViewState.WAXHAW)} className="flex items-center gap-2 hover:underline hover:text-blue-600 w-full text-left">
                    <ArrowRight size={14} className="text-green-500"/> Waxhaw, NC
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate(ViewState.MARVIN)} className="flex items-center gap-2 hover:underline hover:text-blue-600 w-full text-left">
                    <ArrowRight size={14} className="text-green-500"/> Marvin, NC
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate(ViewState.LANCASTER)} className="flex items-center gap-2 hover:underline hover:text-blue-600 w-full text-left">
                    <ArrowRight size={14} className="text-green-500"/> Lancaster, SC
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