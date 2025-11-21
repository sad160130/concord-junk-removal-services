import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldCheck, Scale, AlertTriangle, Truck, CheckCircle2, 
  HelpCircle, MapPin, ArrowRight, Ban, DollarSign, 
  FileText, Users, Heart, Leaf, Sofa, Zap, Hammer
} from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const LancasterPage: React.FC<PageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Junk Removal Lancaster SC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services",
      "telephone": "502-530-9330"
    },
    "areaServed": {
      "@type": "City",
      "name": "Lancaster",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC"
      }
    },
    "description": "Comprehensive junk hauling, estate cleanouts, and appliance disposal for Lancaster, SC and Indian Land."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you serve Sun City Carolina Lakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve Sun City frequently and are familiar with community gate access protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Can you take paint cans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if the paint is completely dried. Liquid paint is hazardous waste and cannot be transported."
        }
      },
      {
        "@type": "Question",
        "name": "Are you insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we carry full General Liability and Workers' Compensation insurance."
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
        title="Junk Removal Services in Lancaster, SC"
        subtitle="The most comprehensive, safe, and eco-compliant hauling service for Lancaster, Indian Land, and the Panhandle area. We handle the heavy lifting so you don't have to."
        backgroundImage="https://images.unsplash.com/photo-1605618529181-916fa742d618?auto=format&fit=crop&w=1600&q=80"
        serviceId="General Junk Removal - Lancaster"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          items={[{ label: 'Lancaster, SC' }]} 
          onNavigate={onNavigate} 
        />

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column - High Depth */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-sm text-green-600 font-bold tracking-widest uppercase mb-2">Local Experts / Lancaster, SC</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner for Junk Removal in Lancaster County
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lancaster and Indian Land are growing rapidly. From the new developments in <strong>Walnut Creek</strong> to the established estates in <strong>Sun City Carolina Lakes</strong>, residents are constantly upgrading, renovating, and moving. However, managing the waste from these transitions can be overwhelming.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Concord Junk Removal Services</strong>, we understand that junk removal is about more than just "trash." It's about reclaiming your space, preparing a property for sale, or handling the sensitive task of an estate cleanout after a loss. We bring a level of professionalism, empathy, and regulatory knowledge that standard "guy with a truck" services simply cannot match.
              </p>
            </section>

            {/* Table of Contents Box */}
            <section className="mb-16 bg-gray-50 border-l-4 border-green-600 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-green-600" size={20}/> Table of Contents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">1. Why Choose Concord Junk Removal Services?</button>
                <button onClick={() => scrollToSection('diy-risks')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">2. Risks of DIY Junk Removal</button>
                <button onClick={() => scrollToSection('regulations')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">3. Lancaster SC Disposal Regulations</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">4. Comprehensive Service List</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">5. Understanding Our Pricing</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">6. Frequently Asked Questions</button>
              </div>
            </section>

            {/* 1. Why Choose Us */}
            <section id="why-choose-us" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us for Your Lancaster Project?</h2>
              <p className="text-gray-700 mb-8 text-lg">
                When your life has been disrupted by clutter or a major life event like a move, choosing the right team matters. Here is why hundreds of Lancaster residents trust us:
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-700"><Users size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Attention and Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You are not just another ticket number in a national call center database. When you call us, you speak to a team member who knows where <strong>Highway 521</strong> is. We treat your home with respect, using specialized equipment to prevent damage to your floors and walls during removal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-700"><ShieldCheck size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Advocacy and Results</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We advocate for your peace of mind. Whether it's negotiating with a donation center to accept your furniture or ensuring hazardous materials don't end up in your soil, we handle the logistics so you don't have to. We are fully insured, protecting you from any liability during the process.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Risks of DIY - Deep Dive */}
            <section id="diy-risks" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Should You Rent a Dumpster or Do It Yourself?</h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80" alt="Dangerous heavy lifting" className="w-full h-64 object-cover"/>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-lg">
                    Many homeowners in <strong>Lancaster, SC</strong> make the mistake of thinking they will save money by renting a truck or dumpster. While it might seem tempting to handle it yourself, the hidden costs and risks are significant.
                  </p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Hidden Costs of DIY:</h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="text-red-500 mt-1 flex-shrink-0"/>
                      <span className="text-gray-700"><strong>Physical Injury:</strong> Lifting heavy appliances or debris without proper training is a leading cause of back injuries. Is saving $50 worth a herniated disc?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="text-red-500 mt-1 flex-shrink-0"/>
                      <span className="text-gray-700"><strong>Vehicle Damage:</strong> Loading lumber or scrap metal into a personal SUV often leads to torn upholstery, scratched paint, and broken windows.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="text-red-500 mt-1 flex-shrink-0"/>
                      <span className="text-gray-700"><strong>Time & Efficiency:</strong> What takes a professional crew 45 minutes might take you an entire weekend of labor, trips to the dump, and fuel costs.</span>
                    </li>
                  </ul>
                  <p className="font-bold text-green-700">
                    We do the heavy lifting. You point, we haul.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Regulations - Authoritative */}
            <section id="regulations" className="mb-16 scroll-mt-24 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">South Carolina Waste Disposal Laws</h2>
              <p className="text-gray-700 mb-6">
                Understanding the legal framework for waste disposal in <strong>Lancaster County</strong> is crucial to avoiding fines. South Carolina has strict environmental laws regarding what can go into landfills.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">The SC Electronics Recycling Act</h4>
                  <p className="text-gray-700">
                    It is illegal for residents to knowingly place computers, monitors, printers, or televisions in a garbage bin. These items contain lead, mercury, and cadmium. We ensure all e-waste is transported to certified electronics recycling facilities in accordance with state law.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Tire Disposal Regulations</h4>
                  <p className="text-gray-700">
                    Whole tires are banned from most landfills because they trap gas and can float to the surface. We handle the specialized disposal fees and transport for old tires, ensuring they are shredded or recycled properly.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Construction Debris Limitations</h4>
                  <p className="text-gray-700">
                    Municipal trash services in Lancaster will generally not pick up construction debris (drywall, wood, tile). Leaving this on the curb can result in code violations or HOA fines. Our private hauling service is the compliant solution.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Services */}
            <section id="services" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Removal Services</h2>
              <p className="text-gray-700 mb-8 text-lg">
                We service the entire Lancaster area, from the NC border down to the city center. Our team is equipped for:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Truck className="text-green-600"/> Estate Cleanouts</h4>
                  <p className="text-gray-600">We handle sensitive cleanouts for families dealing with loss or downsizing, prioritizing the separation of heirlooms from donation items.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Ban className="text-green-600"/> Hoarding Assistance</h4>
                  <p className="text-gray-600">Non-judgmental, discreet removal services to help restore safety and functionality to a home.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Leaf className="text-green-600"/> Appliance Recycling</h4>
                  <p className="text-gray-600">Safe removal of refrigerators, freezers, and washers from basements or second floors.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Scale className="text-green-600"/> Commercial Hauling</h4>
                  <p className="text-gray-600">Office furniture removal and retail cleanouts for businesses in Indian Land and Lancaster.</p>
                </div>
              </div>
            </section>

            {/* Internal Linking Module - SEO & Navigation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Specialized Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div onClick={() => onNavigate(ViewState.FURNITURE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Sofa size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Furniture Removal</h4>
                  <p className="text-gray-600 text-sm mb-4">We haul away old couches, mattresses, and dressers from Lancaster homes.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.APPLIANCE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Zap size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Appliance Disposal</h4>
                  <p className="text-gray-600 text-sm mb-4">Safe recycling for refrigerators, washers, dryers, and old stoves.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.CONSTRUCTION)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Hammer size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Construction Debris</h4>
                  <p className="text-gray-600 text-sm mb-4">Job site cleanup, drywall, wood, and remodeling waste hauling.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>
              </div>
            </section>

             {/* 5. Pricing - Transparency */}
             <section id="pricing" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Our Pricing Model</h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe in total transparency. Unlike some services that charge by the hour (encouraging slow work), we charge by <strong>volume</strong>.
              </p>
              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="bg-blue-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-bold text-xl mb-2">The Assessment</h4>
                    <p className="text-blue-200 text-sm">We arrive, look at your items, and provide a firm, all-inclusive price. No obligation.</p>
                  </div>
                  <div>
                    <div className="bg-blue-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-bold text-xl mb-2">The Load</h4>
                    <p className="text-blue-200 text-sm">We load the truck efficiently. You pay for how much space your items fill.</p>
                  </div>
                  <div>
                    <div className="bg-blue-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-bold text-xl mb-2">The Disposal</h4>
                    <p className="text-blue-200 text-sm">Your price covers labor, transport, and all county disposal or recycling fees.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. FAQ - Deep */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you serve Sun City Carolina Lakes?</h4>
                  <p className="text-gray-700">
                    Yes, we are frequently in Sun City. We are familiar with the community's gate access protocols and work efficiently to ensure our trucks don't block narrow streets.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you take paint cans?</h4>
                  <p className="text-gray-700">
                    We can accept paint cans only if the paint is completely dried out. For liquid paint, you must add a hardener or kitty litter to dry it before we can haul it, due to hazardous waste transport laws.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Are you insured?</h4>
                  <p className="text-gray-700">
                    Absolutely. We carry full General Liability and Workers' Compensation insurance. If we accidentally scratch a wall (which is rare), you are covered. Do not take the risk with an uninsured hauler.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you donate items?</h4>
                  <p className="text-gray-700">
                    Yes. Our "Donation First" policy means we check every item. If it's usable, we transport it to local Lancaster charities. We hate landfills as much as you do.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky CTA */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Free Quote</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Don't wait another day to reclaim your space. Call our Lancaster team now.
              </p>
              <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition mb-4">
                <Truck size={20} />
                (502) 530-9330
              </a>
              <p className="text-xs text-center text-gray-400">
                No Obligation. Fast Service.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <MapPin size={20} /> Areas Served
               </h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Lancaster City</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Indian Land</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Sun City</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Van Wyck</li>
               </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
              <p className="text-sm text-blue-800">
                Illegal dumping carries a fine of up to $1,000 in South Carolina. Trust a licensed professional to handle your waste legally.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Location Map */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-green-600" /> Serving Lancaster County from our Regional Hub
            </p>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-gray-100">
            <iframe 
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=Lancaster%2C%20SC&t=&z=11&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              title="Lancaster SC Service Area"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};