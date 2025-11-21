import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldCheck, Scale, AlertTriangle, Truck, CheckCircle2, 
  FileText, Users, Leaf, MapPin, ArrowRight, Ban, Clock, Star,
  Sofa, Zap, Hammer
} from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const WaxhawPage: React.FC<PageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Junk Removal Waxhaw NC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services",
      "telephone": "502-530-9330"
    },
    "areaServed": {
      "@type": "City",
      "name": "Waxhaw",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NC"
      }
    },
    "description": "Specialized junk hauling and estate cleanouts for Waxhaw, Millbridge, and Cureton communities."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you leave a dumpster in my driveway in Millbridge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, no. Our service is 'Load and Go', meaning we load the truck and leave immediately, avoiding HOA dumpster restrictions."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to be home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For exterior pickups (curbside), no. For interior work, we prefer an adult be present."
        }
      },
      {
        "@type": "Question",
        "name": "How is pricing determined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is based on volume—how much space your items take up in our truck. We offer upfront estimates."
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
        title="Junk Removal Services in Waxhaw, NC"
        subtitle="Professional, licensed, and eco-compliant hauling for Waxhaw's historic homes and modern communities. We navigate HOA regulations and county disposal laws so you don't have to."
        backgroundImage="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1600&q=80"
        serviceId="General Junk Removal - Waxhaw"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          items={[{ label: 'Waxhaw, NC' }]} 
          onNavigate={onNavigate} 
        />

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column - High Depth */}
          <div className="lg:w-3/4">
            
            {/* Authority Header */}
            <section className="mb-12 flex items-start gap-4">
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Lead Supervisor" 
                  className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white"
                />
              </div>
              <div>
                <p className="text-sm text-green-600 font-bold tracking-widest uppercase mb-1">Union County Service Team</p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Waxhaw Junk Removal & Property Cleanouts
                </h1>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500"/> 
                  Service Verified by Lead Supervisor | Updated for 2025 Regulations
                </p>
              </div>
            </section>

            {/* Intro Text - Depth */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Waxhaw has transformed from a quiet historic railroad town into one of the most desirable residential hubs in the Charlotte metro area. With this growth—seen in sprawling communities like <strong>Millbridge, Cureton, and Lawson</strong>—comes a complex set of challenges for homeowners trying to manage waste and debris.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you are renovating a historic home near the <strong>Water Tower</strong> or decluttering a modern estate in <strong>The Chimneys</strong>, standard municipal trash pickup often falls short. <strong>Concord Junk Removal Services</strong> provides the specialized, white-glove service required to maintain the high standards of Waxhaw's neighborhoods while strictly adhering to Union County environmental laws.
              </p>
            </section>

            {/* Table of Contents - Modeled after reference */}
            <section className="mb-16 bg-gray-50 border-l-4 border-green-600 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-green-600" size={20}/> Table of Contents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                <button onClick={() => scrollToSection('regulations')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">1. Waxhaw & HOA Disposal Regulations</button>
                <button onClick={() => scrollToSection('diy-risks')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">2. The Risks of DIY Removal</button>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">3. Why Local Expertise Matters</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">4. Full Service Breakdown</button>
                <button onClick={() => scrollToSection('eco-impact')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">5. Environmental Impact & Donation</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-600 hover:text-green-700 hover:underline text-sm font-medium">6. Frequently Asked Questions</button>
              </div>
            </section>

            {/* 1. Regulations - "Laws Affecting..." Equivalent */}
            <section id="regulations" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Disposal Regulations in Waxhaw</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Disposing of bulk items in Waxhaw involves more than just dragging them to the curb. Ignorance of local ordinances can lead to fines or conflict with your Homeowners Association.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">The HOA "Visible Debris" Rule</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Many Waxhaw communities (such as <strong>Providence Downs</strong> and <strong>Weddington Chase</strong>) have strict covenants prohibiting dumpsters or debris piles from being visible from the street for more than 24 hours. Renting a dumpster often violates these rules. Our <strong>"Load and Go"</strong> service is the compliant alternative—we arrive, load immediately, and leave, ensuring you never face an HOA violation notice.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Union County Landfill Restrictions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Union County landfill has specific bans on electronics (TVs, computers), liquids, and certain construction materials. Putting these in your regular trash bin is illegal. We act as your regulatory buffer, sorting and transporting these restricted items to the designated Union County drop-off facilities on Austin Chaney Road or other certified centers.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Illegal Dumping Liability</h4>
                  <p className="text-gray-700 leading-relaxed">
                    In North Carolina, the originator of the waste can be held liable even if they hired someone else to dump it. If you hire an unlicensed "guy with a truck" and your items are found in a ditch, <strong>you</strong> can be fined. We provide transfer station receipts upon request to prove legal disposal.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Risks of DIY - "Should I Accept First Offer" Equivalent */}
            <section id="diy-risks" className="mb-16 scroll-mt-24 bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-600" size={32}/>
                <h2 className="text-3xl font-bold text-gray-900">The Hidden Risks of DIY Removal</h2>
              </div>
              <p className="text-gray-700 mb-6">
                It is a common misconception that handling junk removal yourself saves money. When you factor in the risks and hidden costs, professional removal is often the safer, more economical choice.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Property Damage Risk</h4>
                  <p className="text-gray-600 text-sm">
                    Moving a sectional sofa down a staircase or a refrigerator across hardwood floors requires skill. One slip can gouge your walls or scratch your floors, costing hundreds in repairs. Our team uses neoprene floor runners and corner guards.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Personal Injury</h4>
                  <p className="text-gray-600 text-sm">
                    Junk is often heavy, sharp, or awkward. We see homeowners suffer from back strains, lacerations from rusty metal, and foot injuries. We have the PPE (Personal Protective Equipment) and training to handle this safely.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Vehicle Damage</h4>
                  <p className="text-gray-600 text-sm">
                    Loading construction debris or metal into a personal SUV or pickup truck often ruins the interior upholstery or scratches the bed. Our dedicated dump trucks take the abuse so your vehicle doesn't have to.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Time Valuation</h4>
                  <p className="text-gray-600 text-sm">
                    A trip to the Union County landfill can take hours, especially on weekends. Add in fuel, gate fees, and labor effort. Is your Saturday worth more than the cost of our service? Usually, the answer is yes.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Why Choose Us - "Why Choose Levin Firm" Equivalent */}
            <section id="why-choose-us" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Waxhaw Residents Trust Us</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Choosing the right service provider is about trust. You are inviting people into your home. Here is why we are the preferred vendor for Waxhaw estates:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit text-green-700"><Users size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Attention and Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We are not a franchise. We are locals. We know the difference between a pile of junk and a family heirloom. In estate cleanout situations, we work with compassion and patience, ensuring nothing sentimental is discarded accidentally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit text-green-700"><ShieldCheck size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aggressive Advocacy for Your Property</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We advocate for the cleanliness and safety of your property. We sweep up after ourselves. We use magnetic rollers to catch stray nails in your driveway. We treat your home as if it were our own, ensuring we leave it better than we found it.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit text-green-700"><Clock size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Respect for Your Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We offer tight 2-hour arrival windows and call 20 minutes before we arrive. We know Waxhaw traffic on Providence Road can be tricky, but we plan our routes to ensure we are there when we say we will be.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Services */}
            <section id="services" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Hauling Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Truck className="text-green-600"/> Estate Cleanouts</h4>
                  <p className="text-gray-600">Complete home emptying for sales or probate. We handle furniture, knick-knacks, and general clutter.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Ban className="text-green-600"/> Hoarder Assistance</h4>
                  <p className="text-gray-600">Discreet, non-judgmental removal of excessive clutter to restore safety and code compliance.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Leaf className="text-green-600"/> Yard Waste Removal</h4>
                  <p className="text-gray-600">Branches, storm debris, and old landscaping structures (sheds, decks, fences).</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><Scale className="text-green-600"/> Renovation Debris</h4>
                  <p className="text-gray-600">Kitchen and bath tear-outs. We haul cabinets, tubs, tile, and drywall.</p>
                </div>
              </div>
            </section>

            {/* Internal Linking Module - SEO & Navigation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dedicated Hauling Services for Waxhaw Homes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div onClick={() => onNavigate(ViewState.FURNITURE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Sofa size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Furniture Removal</h4>
                  <p className="text-gray-600 text-sm mb-4">White-glove furniture removal for Waxhaw estates and historic homes.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.APPLIANCE)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Zap size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Appliance Disposal</h4>
                  <p className="text-gray-600 text-sm mb-4">Eco-friendly appliance recycling and pickup in Union County.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>

                <div onClick={() => onNavigate(ViewState.CONSTRUCTION)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-green-500 transition group">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition">
                    <Hammer size={24}/>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Construction Debris</h4>
                  <p className="text-gray-600 text-sm mb-4">Renovation debris removal compliant with Waxhaw HOA rules.</p>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ArrowRight size={16}/></span>
                </div>
              </div>
            </section>

            {/* 5. Environmental Impact */}
            <section id="eco-impact" className="mb-16 scroll-mt-24 bg-green-50 p-8 rounded-2xl border border-green-200">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Eco-Friendly Promise</h2>
              <p className="text-green-800 mb-6 text-lg">
                Waxhaw is known for its natural beauty. We intend to keep it that way. We are committed to diverting as much waste as possible from landfills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                  <p className="text-gray-600 text-sm">Average amount of junk we recycle or donate per truckload.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600 text-sm">Compliance with state e-waste and hazard laws.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">Local</div>
                  <p className="text-gray-600 text-sm">Partnerships with Union County charities for donations.</p>
                </div>
              </div>
            </section>

            {/* 6. FAQ - Deep */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Can you leave a dumpster in my driveway in Millbridge?</h4>
                  <p className="text-gray-700">
                    Usually, no. Most HOAs in Millbridge and similar Waxhaw communities prohibit dumpsters without special architectural review approval. Our service avoids this entirely because we load the truck and leave immediately. No bin sits in your driveway overnight.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do I have to be home?</h4>
                  <p className="text-gray-700">
                    For exterior pickups (curbside), no. You can leave items accessible, and we will haul them and send a payment link. For interior work, we prefer an adult be present to grant access, though we can work with lockbox codes for real estate agents.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">How is pricing determined?</h4>
                  <p className="text-gray-700">
                    Pricing is based on volume—how much space your items take up in our truck. We offer upfront, no-obligation estimates. This includes labor, tax, and disposal fees. There are no surprises on the final bill.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky CTA */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get A Free Consultation</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Speak directly with our Waxhaw service coordinator. No call centers.
              </p>
              <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition mb-4">
                <Truck size={20} />
                (502) 530-9330
              </a>
              <p className="text-xs text-center text-gray-400">
                Available Mon-Sat | Licensed & Insured
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <MapPin size={20} /> Areas Served
               </h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Downtown Waxhaw</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Millbridge & Cureton</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Marvin & Weddington</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-green-500"/> Mineral Springs</li>
               </ul>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">Client Testimonial</h4>
              <div className="flex text-yellow-400 mb-3">
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
              </div>
              <p className="text-sm text-blue-100 italic mb-4">
                "The team was incredibly respectful of our home in Cureton. They moved a heavy piano without a scratch on the floors. Highly recommend."
              </p>
              <div className="font-bold text-sm">- Jennifer R., Waxhaw</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Location Map */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Area Coverage</h2>
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-green-600" /> Proudly Serving Waxhaw and Union County
            </p>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-gray-100">
            <iframe 
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=Waxhaw%2C%20NC&t=&z=12&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              title="Waxhaw Junk Removal Service Area"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};