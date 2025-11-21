import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Scale, Star, Truck, HardHat, Recycle, Trash2, Users, Award, MapPin } from 'lucide-react';
import { ViewState } from '../types';
import { LeadForm } from '../components/LeadForm';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const About: React.FC<PageProps> = ({ onNavigate }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Concord Junk Removal Services",
    "url": "https://concordjunkremovalservices.com",
    "logo": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Concord Junk Removal Team"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "502-530-9330",
      "contactType": "customer service",
      "areaServed": "Concord, NC"
    }
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Concord Junk Removal Services",
      "description": "Founded in 2018, Concord Junk Removal Services provides white-glove hauling, estate cleanouts, and recycling services to Concord, Waxhaw, and Lancaster."
    }
  };
  
  // Fallback for images if they fail to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80"; // Generic texture/placeholder
  };

  return (
    <div className="bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      {/* Hero Section - Niche Relevant Imagery */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center">
          <Breadcrumbs 
            items={[{ label: 'About Us' }]} 
            onNavigate={onNavigate} 
            alignment="center"
          />
          <p className="text-green-600 font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Who We Are</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            You’ve never worked with a <br className="hidden md:block" /> hauling crew like us.
          </h1>
          
          <div className="relative mt-16 rounded-2xl overflow-hidden shadow-2xl group">
            {/* Gradient overlay to ensure text pop regardless of image brightness */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent z-10"></div>
            
            {/* Image: Real debris clearing / junk removal action - Highly Niche Relevant */}
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80" 
              alt="Concord Junk Removal Team clearing debris" 
              className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition duration-700"
              onError={handleImageError}
            />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 text-left max-w-3xl">
              <div className="bg-green-500 text-blue-900 font-bold text-lg md:text-xl px-4 py-2 inline-block mb-2 shadow-lg transform -skew-x-12">
                <span className="transform skew-x-12 inline-block">Reputations aren't built on promises;</span>
              </div>
              <div className="block"></div>
              <div className="bg-blue-900 text-white font-bold text-lg md:text-2xl px-4 py-2 inline-block shadow-lg transform -skew-x-12 mb-6">
                <span className="transform skew-x-12 inline-block">they're built on swept floors and empty trucks.</span>
              </div>

              {/* Trust Badges Integration */}
              <div className="flex flex-wrap gap-3 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                {/* BBB Badge Simulation */}
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded shadow-lg flex items-center gap-3 border-l-4 border-blue-900 transform transition hover:scale-105 hover:bg-white cursor-default">
                  <div className="font-serif font-black text-slate-800 text-xl leading-none tracking-tighter">BBB</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-0.5">Accredited</span>
                    <span className="text-xs font-bold text-slate-900 leading-none">Business A+</span>
                  </div>
                </div>
                
                {/* Angi Badge Simulation */}
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded shadow-lg flex items-center gap-3 border-l-4 border-green-500 transform transition hover:scale-105 hover:bg-white cursor-default">
                  <Award size={20} className="text-green-600" strokeWidth={2.5} />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-0.5">Angi</span>
                    <span className="text-xs font-bold text-slate-900 leading-none">Super Service</span>
                  </div>
                </div>

                {/* Google Badge Simulation */}
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded shadow-lg flex items-center gap-3 border-l-4 border-yellow-400 transform transition hover:scale-105 hover:bg-white cursor-default">
                  <CheckCircle2 size={20} className="text-green-600 bg-white rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-0.5">Google</span>
                    <span className="text-xs font-bold text-slate-900 leading-none">Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Specialization - Hard Skills */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-12 leading-tight">
            Because heavy lifting requires heavy expertise.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
               <p className="mb-8">
                 In the service industry, the "jack-of-all-trades" is often a master of none. You don't want a general handyman guessing how to disconnect a 300lb refrigerator or hauling construction debris in a sedan.
               </p>
               <p className="mb-8">
                 We specialize exclusively in **volume hauling and logistics**. Whether it's navigating a 16-foot dump truck down a narrow historic Concord alley or knowing exactly which recycling center accepts e-waste versus scrap metal, our specialization saves you time and liability.
               </p>
               <button onClick={() => onNavigate(ViewState.HOME)} className="inline-flex items-center gap-2 border-2 border-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors">
                 See Our Trucks <ArrowRight size={16}/>
               </button>
             </div>
             <div className="bg-gray-50 p-8 rounded-xl border-l-8 border-green-600 shadow-sm">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <Truck className="text-green-600" /> The Professional Standard:
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm text-green-700 border border-green-100"><ShieldCheck size={20}/></div>
                    <div>
                      <strong className="block text-gray-900">Licensed & Insured</strong>
                      <span className="text-gray-600 text-sm">We carry commercial auto and general liability insurance. If we scratch a wall (rare), we fix it.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm text-green-700 border border-green-100"><Recycle size={20}/></div>
                    <div>
                      <strong className="block text-gray-900">Disposal Authority</strong>
                      <span className="text-gray-600 text-sm">We know the regulations for Cabarrus & Union County landfills. We never illegal dump.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm text-green-700 border border-green-100"><HardHat size={20}/></div>
                    <div>
                      <strong className="block text-gray-900">Safety First Equipment</strong>
                      <span className="text-gray-600 text-sm">Steel-toe boots, heavy-duty dollies, and floor runners are standard issue for our crew.</span>
                    </div>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Section 2: Reliability - "Picks up the phone" */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute top-4 left-4 border-2 border-green-500 w-full h-full z-0 rounded-lg"></div>
              {/* Image: Construction/Service manager on phone in a workshop setting */}
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80" 
                alt="Concord Junk Removal Dispatcher on Phone" 
                className="rounded-lg shadow-xl relative z-10 grayscale hover:grayscale-0 transition duration-500 object-cover h-[400px] w-full"
                onError={handleImageError}
              />
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                 Because you need a hauler who picks up the phone.
               </h2>
               <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                 The junk removal industry is notorious for "no-shows." You schedule a pickup, take time off work, and they never arrive.
               </p>
               <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                 We run a tight dispatch board. When you call us, you speak to a local coordinator in Concord, not a call center in another state. We confirm appointments, give 20-minute heads-up calls, and we <strong>show up</strong>.
               </p>
               <div className="flex items-center gap-4 mt-8">
                 <div className="bg-green-600 p-4 rounded-full">
                   <Clock size={32} className="text-white" />
                 </div>
                 <div>
                   <p className="text-sm text-green-400 font-bold uppercase tracking-wider">Average Response Time</p>
                   <p className="text-2xl font-bold">Under 15 Minutes</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Transparency - Pricing */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-gray-900 mb-12 leading-tight">
            No "Guesstimates." <br/><span className="italic text-green-600">Just Honest Volume Pricing.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            We don't believe in "bait and switch" tactics. Unlike competitors who charge by the hour (encouraging slow work) or add hidden fuel surcharges, our pricing is based strictly on how much space your junk fills in our truck.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border-2 border-gray-100 hover:border-green-600 rounded-xl transition duration-300 bg-white shadow-sm group">
               <Scale size={48} className="text-gray-400 group-hover:text-green-600 mb-6 transition-colors" />
               <h4 className="text-xl font-bold mb-3 text-gray-900">Volume-Based Rates</h4>
               <p className="text-gray-600">You pay for the space you use. 1/4 truck, 1/2 truck, or full load. If we pack it tighter, you save money.</p>
            </div>
            <div className="p-8 border-2 border-gray-100 hover:border-green-600 rounded-xl transition duration-300 bg-white shadow-sm group">
               <Trash2 size={48} className="text-gray-400 group-hover:text-green-600 mb-6 transition-colors" />
               <h4 className="text-xl font-bold mb-3 text-gray-900">All-Inclusive Fees</h4>
               <p className="text-gray-600">One price covers labor, transportation, and county disposal fees. No surprise bills at the dump.</p>
            </div>
            <div className="p-8 border-2 border-gray-100 hover:border-green-600 rounded-xl transition duration-300 bg-white shadow-sm group">
               <Users size={48} className="text-gray-400 group-hover:text-green-600 mb-6 transition-colors" />
               <h4 className="text-xl font-bold mb-3 text-gray-900">Uniformed Crew</h4>
               <p className="text-gray-600">Our team arrives in uniform and marked trucks. Professionalism starts the moment we step on your property.</p>
            </div>
          </div>

          <div className="mt-16">
            <a href="tel:5025309330" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg">
               Get A Free Quote Now <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: The Team - Real People */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  Meet The Heavy Lifters
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  We hire for character and train for skill. Our team members are background-checked, drug-tested, and trained in safe lifting techniques.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Profile 1 - Mike - Operations */}
               <div className="bg-white p-4 rounded-2xl shadow-md group hover:shadow-lg transition">
                  <div className="h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
                    {/* Image: Ops Manager type */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                      alt="Mike - Operations Director" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mike</h3>
                  <p className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">Operations Director</p>
                  <p className="text-gray-500 text-sm">"My job is ensuring every truck is on time and every customer is happy. I double-check the dispatch board every morning."</p>
               </div>
               
               {/* Profile 2 - David - Lead Hauler */}
               <div className="bg-white p-4 rounded-2xl shadow-md group hover:shadow-lg transition">
                  <div className="h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
                    {/* Image: Blue Collar / Service Tech */}
                    <img 
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80" 
                      alt="David - Lead Hauler" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">David</h3>
                  <p className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">Lead Hauler</p>
                  <p className="text-gray-500 text-sm">"I specialize in tight-space maneuvering and safe furniture removal. I treat your home like my grandmother's house."</p>
               </div>

               {/* Profile 3 - Sarah - Logistics */}
               <div className="bg-white p-4 rounded-2xl shadow-md group hover:shadow-lg transition">
                  <div className="h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
                    {/* Image: Friendly coordinator */}
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                      alt="Sarah - Recycling Coordinator" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sarah</h3>
                  <p className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">Recycling Coordinator</p>
                  <p className="text-gray-500 text-sm">"I ensure we donate and recycle as much as possible. I audit our disposal receipts to keep us compliant and eco-friendly."</p>
               </div>
            </div>
         </div>
      </section>

      {/* Section 5: Ideal Client Profile - Niche Specific */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-16">
            We are the right crew for you if:
          </h2>

          <div className="space-y-16">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center text-left gap-8">
               <div className="bg-blue-100 p-6 rounded-full flex-shrink-0">
                 <Clock size={40} className="text-blue-900" strokeWidth={2} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">You are on a deadline.</h3>
                 <p className="text-gray-600 text-lg">
                   Closing on a house in 48 hours? Contractors starting Monday? We operate with urgency because we know debris holds up progress.
                 </p>
               </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center text-left gap-8">
               <div className="bg-blue-100 p-6 rounded-full flex-shrink-0">
                 <ShieldCheck size={40} className="text-blue-900" strokeWidth={2} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">You care about your property.</h3>
                 <p className="text-gray-600 text-lg">
                   We don't drag sofas across hardwood floors. We lift. We sweep. We respect your home like it's our own.
                 </p>
               </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center text-left gap-8">
               <div className="bg-blue-100 p-6 rounded-full flex-shrink-0">
                 <Recycle size={40} className="text-blue-900" strokeWidth={2} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">You hate waste.</h3>
                 <p className="text-gray-600 text-lg">
                   We are committed to eco-friendly disposal. If it can be donated to Habitat for Humanity or recycled, we make sure it doesn't end up in the dirt.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Local History */}
      <section className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
         {/* Background texture/image overlay */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1610507953526-15c902947f28?auto=format&fit=crop&w=2000&q=80" alt="Texture" className="w-full h-full object-cover"/>
         </div>
         
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h3 className="text-lg font-bold text-green-500 uppercase tracking-widest mb-6">Our Origins</h3>
            <p className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-8">
              Founded in 2018, Concord Junk Removal Services started with one used dump truck and a simple promise: "We show up."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At the time, the local market was flooded with unreliable operators. Homeowners were tired of waiting all day for a quote or finding their "hauled" trash dumped illegally down the road.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We saw an opportunity to bring <strong>white-glove service</strong> to a blue-collar industry. We invested in cleaner trucks, better uniforms, and rigorous training.
            </p>
            <p className="text-xl text-white font-bold leading-relaxed mt-8 border-l-4 border-green-500 pl-6">
              Today, we are the most trusted name in Cabarrus County, serving everything from single-item garage pickups to massive commercial cleanouts.
            </p>
         </div>
      </section>

      {/* Section: Visual Timeline */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">Key milestones that define who we are today.</p>
          </div>

          <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 md:-ml-[1px]"></div>

             <div className="space-y-12">
                {/* 2018 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 group">
                   <div className="md:w-[45%] md:text-right pl-20 md:pl-0 order-2 md:order-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">2018</h3>
                      <h4 className="text-xl font-bold text-green-600 mb-2">Founded in Concord</h4>
                      <p className="text-gray-600 leading-relaxed">Started with a single used dump truck, a pair of gloves, and a mission to bring reliability to the local hauling industry.</p>
                   </div>
                   <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 text-white rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2">
                      <Truck size={20} />
                   </div>
                   <div className="md:w-[45%] order-3 md:order-3"></div>
                </div>

                {/* 2019 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 group">
                   <div className="md:w-[45%] order-3 md:order-1"></div>
                   <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-green-600 rounded-full border-4 border-green-600 shadow-lg flex items-center justify-center z-10 order-1 md:order-2">
                      <Recycle size={20} />
                   </div>
                   <div className="md:w-[45%] pl-20 md:pl-0 order-2 md:order-3">
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">2019</h3>
                      <h4 className="text-xl font-bold text-green-600 mb-2">Launched Junk Removal Service</h4>
                      <p className="text-gray-600 leading-relaxed">Expanded from simple curbside pickups to full-service estate cleanouts and eco-friendly appliance recycling.</p>
                   </div>
                </div>

                {/* 2021 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 group">
                   <div className="md:w-[45%] md:text-right pl-20 md:pl-0 order-2 md:order-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">2021</h3>
                      <h4 className="text-xl font-bold text-green-600 mb-2">Expanded to Union County</h4>
                      <p className="text-gray-600 leading-relaxed">Responding to high demand, we extended our service area to cover Waxhaw, Marvin, and Weddington.</p>
                   </div>
                   <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-green-600 rounded-full border-4 border-green-600 shadow-lg flex items-center justify-center z-10 order-1 md:order-2">
                      <MapPin size={20} />
                   </div>
                   <div className="md:w-[45%] order-3 md:order-3"></div>
                </div>

                {/* 2023 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 group">
                   <div className="md:w-[45%] order-3 md:order-1"></div>
                   <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 text-white rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2">
                      <Star size={20} />
                   </div>
                   <div className="md:w-[45%] pl-20 md:pl-0 order-2 md:order-3">
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">2023</h3>
                      <h4 className="text-xl font-bold text-green-600 mb-2">Achieved 5-Star Google Rating</h4>
                      <p className="text-gray-600 leading-relaxed">Hit a major milestone of consistent 5-star reviews, cementing our reputation as the top-rated hauler in the region.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 7: Social Proof / Stats */}
      <section className="py-20 md:py-32 bg-white">
         <div className="container mx-auto px-4 text-center">
            <div className="text-[100px] md:text-[180px] font-serif leading-none text-gray-100 select-none -mb-12 md:-mb-24 font-bold">
              1,500+
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 relative z-10">
               Loads hauled in the last 12 months.
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
               <div className="flex flex-col items-center">
                  <div className="flex text-yellow-400 mb-2">
                     <Star fill="currentColor" size={28}/><Star fill="currentColor" size={28}/><Star fill="currentColor" size={28}/><Star fill="currentColor" size={28}/><Star fill="currentColor" size={28}/>
                  </div>
                  <span className="font-bold text-gray-900 tracking-widest text-sm">5-STAR GOOGLE RATING</span>
               </div>
               <div className="flex flex-col items-center">
                  <div className="bg-green-100 text-green-800 font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">
                    100%
                  </div>
                  <span className="font-bold text-gray-900 tracking-widest text-sm">LICENSED & INSURED</span>
               </div>
            </div>
         </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-gray-900 mb-8 leading-tight">
                You’ll know if we’re a fit after <span className="text-green-600">just one call.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Don't let clutter hold you back. Get your space back today.
              </p>
              <a href="tel:5025309330" className="inline-flex items-center gap-3 text-2xl font-bold text-blue-900 hover:text-green-600 transition-colors group">
                <span className="border-b-2 border-blue-900 group-hover:border-green-600">(502) 530-9330</span>
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </a>
           </div>
           <div className="md:w-1/2 w-full">
             <LeadForm />
           </div>
        </div>
      </section>

    </div>
  );
};