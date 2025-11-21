import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { 
  ShieldCheck, Scale, AlertTriangle, Truck, CheckCircle2, 
  FileText, Users, Leaf, MapPin, ArrowRight, Ban, Clock, Star, Lock, Home,
  Sofa, Zap, Hammer
} from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const MarvinPage: React.FC<PageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Junk Removal Marvin NC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services",
      "telephone": "502-530-9330"
    },
    "areaServed": {
      "@type": "City",
      "name": "Marvin",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NC"
      }
    },
    "description": "White-glove estate cleanouts and junk removal for Marvin's gated communities. Insured, discreet, and HOA compliant."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you access gated communities like Firethorne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are accustomed to working with gate guards and security personnel. When you book, we will ask for access protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer insurance for high-value items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we carry full commercial liability insurance to protect your property."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you get here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prioritize Marvin routes and can often offer Same-Day or Next-Day service."
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
        title="Premier Junk Removal & Estate Services in Marvin, NC"
        subtitle="White-glove hauling services designed for Marvin's exclusive communities. We provide discreet, professional, and HOA-compliant removal for estates, renovations, and decluttering."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
        serviceId="General Junk Removal - Marvin"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column - High Depth */}
          <div className="lg:w-3/4">
            
            {/* Authority Header */}
            <section className="mb-12 flex items-start gap-4">
              <div className="hidden md:block">
                 <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center text-white shadow-md border-2 border-white">
                    <ShieldCheck size={40} />
                 </div>
              </div>
              <div>
                <p className="text-sm text-blue-900 font-bold tracking-widest uppercase mb-1">Exclusive Service | Marvin, NC</p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  White-Glove Junk Removal for Marvin Estates
                </h1>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500"/> 
                  Insured for High-Value Properties | Gated Community Approved
                </p>
              </div>
            </section>

            {/* Intro Text - Depth */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Marvin is unique among Charlotte-area suburbs. With its expansive lots, equestrian heritage, and gated communities like <strong>Firethorne, The Reserve, and Marvin Creek</strong>, residents here have distinct needs that go beyond basic "trash hauling."
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Concord Junk Removal Services</strong>, we understand that when you hire a service provider, you expect discretion, professionalism, and an absolute respect for your property. Whether you are managing an estate transition, clearing out a renovation project, or simply decluttering a multi-car garage, our team provides a <strong>white-glove service</strong> experience tailored to the high standards of Marvin homeowners.
              </p>
            </section>

            {/* Table of Contents */}
            <section className="mb-16 bg-gray-50 border-l-4 border-blue-900 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-900" size={20}/> Table of Contents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                <button onClick={() => scrollToSection('why-us')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">1. The "White-Glove" Difference</button>
                <button onClick={() => scrollToSection('hoa-compliance')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">2. HOA & Gated Community Compliance</button>
                <button onClick={() => scrollToSection('diy-risks')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">3. Risks of DIY in Luxury Homes</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">4. Specialized Estate Services</button>
                <button onClick={() => scrollToSection('donation')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">5. High-End Donation Partners</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-600 hover:text-blue-800 hover:underline text-sm font-medium">6. Frequently Asked Questions</button>
              </div>
            </section>

            {/* 1. Why Us - "White Glove" */}
            <section id="why-us" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The "White-Glove" Difference</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Standard junk removal companies focus on speed and volume. We focus on care and precision. When working in high-value properties, the "how" is just as important as the "what."
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit text-blue-800"><ShieldCheck size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Protection of Property</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We don't just walk in with muddy boots. Our team uses neoprene floor runners to protect hardwood and travertine floors. We pad door jambs and stair railings before moving heavy furniture. We carry elevated liability insurance specifically for high-value homes, giving you complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit text-blue-800"><Lock size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Discretion & Privacy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We understand that privacy is paramount in communities like <strong>The Reserve</strong>. Our trucks are clean and well-maintained. Our uniformed staff is trained to be discreet and efficient, minimizing disruption to your household and your neighbors. We do not sell customer data or share job details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. HOA Compliance - Critical for Marvin */}
            <section id="hoa-compliance" className="mb-16 scroll-mt-24 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-700">
                  <Home size={28}/>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Navigating Marvin HOA Regulations</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Marvin's neighborhoods operate under some of the strictest Homeowners Association (HOA) covenants in North Carolina. A common issue residents face is the restriction on visible waste containers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">The Dumpster Dilemma</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Renting a dumpster in communities like <strong>Firethorne</strong> or <strong>Providence Downs South</strong> often requires Architectural Review Committee (ARC) approval weeks in advance. Even with approval, having a steel bin in your driveway can result in complaints from neighbors or fines if left too long.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-3 text-lg">The Quick Haul Solution</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our service is the "Zero-Footprint" alternative. We arrive in a mobile truck, load your items immediately, and drive away.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> <strong>No</strong> visible debris left overnight.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> <strong>No</strong> damage to paver driveways.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> <strong>No</strong> HOA permits required.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Risks of DIY - Tailored to Luxury Homes */}
            <section id="diy-risks" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Hidden Risks of DIY in Luxury Homes</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-gray-700 mb-6 text-lg">
                  In a standard home, a scuffed wall is an annoyance. In a custom Marvin estate with Venetian plaster walls, mahogany banisters, or imported tile, a moving accident can be a <strong>costly disaster</strong>.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0"/>
                    <span className="text-gray-800"><strong>Damage to Finishes:</strong> Moving a heavy treadmill or armoire without professional equipment puts your floors and walls at risk. Our team utilizes floor protection and corner guards standard on every job.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0"/>
                    <span className="text-gray-800"><strong>Personal Liability:</strong> If you hire casual labor or uninsured workers to help move items, you are liable for any injuries that occur on your property. We are fully licensed and insured (Workers' Comp & General Liability).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0"/>
                    <span className="text-gray-800"><strong>Gate Access Issues:</strong> Coordinating rental trucks through security gates can be a hassle. We are registered vendors with many local communities and know the protocols.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Services - Specialized */}
            <section id="services" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Estate Services</h2>
              <p className="text-gray-700 mb-8">
                We offer more than just trash pickup. Our services are designed for the full lifecycle of estate management.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
                    <Truck className="text-green-600"/> Estate Cleanouts
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Compassionate and efficient clearing of homes for probate or sale. We separate high-value items for auction/family from donation and recycling piles.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
                    <Ban className="text-green-600"/> Renovation Debris
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Working alongside your general contractor to keep the site clean. We remove cabinetry, flooring, and fixtures during kitchen/bath remodels.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
                    <Leaf className="text-green-600"/> Outdoor Living Cleanups
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Removal of old patio furniture, hot tubs, playground sets, and pool equipment to refresh your outdoor entertainment areas.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
                    <Lock className="text-green-600"/> Secure Document Disposal
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Transport of sensitive files to certified shredding facilities for destruction, ensuring your personal information remains secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Internal Linking Module - SEO & Navigation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Removal Services for Marvin Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div onClick={() => onNavigate(ViewState.FURNITURE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Sofa size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Furniture Removal</h4>
                  <p className="text-gray-600 text-sm mb-4">Careful removal of high-end furniture and bulky items from Marvin estates.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.APPLIANCE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Zap size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Appliance Disposal</h4>
                  <p className="text-gray-600 text-sm mb-4">Discreet and professional appliance replacement pickup.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.CONSTRUCTION)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Hammer size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Construction Debris</h4>
                  <p className="text-gray-600 text-sm mb-4">Zero-footprint debris clearing for luxury renovations.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>
              </div>
            </section>

            {/* 5. Donation - High End */}
            <section id="donation" className="mb-16 scroll-mt-24 bg-green-50 p-8 rounded-2xl border border-green-100">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Responsible Donation of Luxury Items</h2>
              <p className="text-green-800 mb-6 text-lg">
                Marvin residents often discard furniture that is still in excellent condition. We believe these items should serve the community, not fill a landfill.
              </p>
              <p className="text-gray-700 mb-4">
                We have established relationships with specialized charities that accept high-end furniture and appliances. This ensures your unwanted items find a second life with families in need across Union County.
              </p>
              <p className="text-gray-700 font-medium flex items-center gap-2">
                <FileText size={18} className="text-green-600"/> We provide tax-deductible donation receipts upon request.
              </p>
            </section>

            {/* 6. FAQ - Deep */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you access gated communities like Firethorne?</h4>
                  <p className="text-gray-700">
                    Yes. We are accustomed to working with gate guards and security personnel. When you book, we will ask for the necessary gate codes or vendor access protocols to ensure a smooth arrival.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you offer insurance for high-value items?</h4>
                  <p className="text-gray-700">
                    We carry full commercial liability insurance. If an accident occurs on your property (e.g., a scratched floor), our insurance covers the repair. We can provide a Certificate of Insurance (COI) to your HOA or property manager if required.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">How quickly can you get here?</h4>
                  <p className="text-gray-700">
                    We prioritize Marvin and Waxhaw routes. In many cases, we can offer Same-Day or Next-Day service. For larger estate projects, we recommend booking 2-3 days in advance to ensure we allocate the right crew size.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you take pianos or pool tables?</h4>
                  <p className="text-gray-700">
                    Yes, we take upright pianos and disassembled pool tables. Please note that these items often incur a surcharge due to their weight and the specialized equipment/manpower required to move them safely.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky CTA */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-900 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Concierge Booking</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Schedule a consultation with our Marvin service coordinator.
              </p>
              <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition mb-4">
                <Truck size={20} />
                (502) 530-9330
              </a>
              <p className="text-xs text-center text-gray-400">
                Discreet & Professional Service
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <MapPin size={20} /> Communities Served
               </h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-500"/> Firethorne</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-500"/> The Reserve</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-500"/> Marvin Creek</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-500"/> Providence Downs</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-500"/> Weddington Chase</li>
               </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Realtor Partner?</h4>
              <p className="text-sm text-blue-800 mb-4">
                We partner with luxury real estate agents for pre-listing cleanouts. Ask about our priority partner program.
              </p>
              <button className="text-blue-900 font-bold text-sm underline">Contact Support</button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Location Map */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proudly Serving Marvin, NC</h2>
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-green-600" /> Union County's Trusted Service Provider
            </p>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-gray-100">
            <iframe 
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=Marvin%2C%20NC&t=&z=12&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              title="Marvin Junk Removal Service Area"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};