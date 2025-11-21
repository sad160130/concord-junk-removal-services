import React from 'react';
import { HeroLayout } from '../components/HeroLayout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CheckCircle2, AlertTriangle, Leaf, Truck, Zap, ShieldCheck, Scale, DollarSign, HelpCircle, ArrowRight, MapPin } from 'lucide-react';
import { ViewState } from '../types';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

export const ApplianceRemoval: React.FC<PageProps> = ({ onNavigate }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Appliance Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Concord Junk Removal Services"
    },
    "areaServed": ["Concord", "Kannapolis", "Harrisburg", "Waxhaw", "Marvin", "Lancaster"],
    "description": "Safe, eco-friendly disposal and recycling of refrigerators, washing machines, dryers, stoves, and other large home appliances.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Disposal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washer & Dryer Disposal"
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
        "name": "Do I need to disconnect the appliance myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For safety reasons, we ask that all appliances be disconnected from water, gas, and hardwired electrical connections before our team arrives."
        }
      },
      {
        "@type": "Question",
        "name": "How much does appliance removal cost in Concord?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service pricing is based on the number and type of items. We provide a free, no-obligation quote before we start any work."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer curbside pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! If you can get the appliance to the curb or driveway, we offer a 'Curbside Discount'."
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
        title="Appliance Removal Concord, NC"
        subtitle="We provide the safe, eco-friendly disposal solution you need. From refrigerator recycling to washer and dryer pickup, our team handles the heavy lifting so you don't have to."
        backgroundImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80"
        serviceId="Appliance Removal"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          items={[{ label: 'Appliance Removal' }]} 
          onNavigate={onNavigate} 
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-3/4">
            
            {/* Introduction / Depth Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Professional Appliance Removal Services in Concord, NC
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every year, residents in <strong>Concord NC</strong> and surrounding Cabarrus County areas face the challenge of upgrading their home appliances. While a new refrigerator or washing machine brings convenience, the disposal of the old unit often creates a significant logistical burden. Old appliances are heavy, awkward to maneuver, and often contain hazardous materials that require specialized disposal methods.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Concord Junk Removal Services</strong>, we understand that simply dragging an old stove to the curb is not always feasible—or legal. Our comprehensive <strong>junk removal</strong> service is designed to handle every aspect of the process for you. We don't just haul items away; we provide a professional service that prioritizes the safety of your home and the health of our local environment.
              </p>
            </section>

            {/* Why Choose Us - Depth */}
            <section className="mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Us for Your Appliance Disposal?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="text-green-600"/> Safety & Liability
                  </h4>
                  <p className="text-gray-600">
                    Attempting to move a 300lb refrigerator down a flight of stairs invites personal injury and property damage. Our <strong>team</strong> is trained, insured, and equipped with the right dollies, straps, and protective gear to remove appliances without scratching your floors or denting your walls.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Scale className="text-green-600"/> Regulatory Compliance
                  </h4>
                  <p className="text-gray-600">
                    In <strong>Concord NC</strong>, putting white goods (large appliances) in a standard landfill is prohibited. We adhere strictly to North Carolina disposal laws, ensuring all refrigerants are drained responsibly and metals are recycled.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Truck className="text-green-600"/> Fast & Local Service
                  </h4>
                  <p className="text-gray-600">
                    We are a local business, not a national franchise. This means we can often offer same-day or next-day <strong>appliance removal</strong> in Concord, Kannapolis, and Harrisburg when you <strong>need</strong> it most.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="text-green-600"/> Upfront Pricing
                  </h4>
                  <p className="text-gray-600">
                    Our pricing is transparent. We offer <strong>free</strong> estimates with no hidden fees. You pay for the volume or item type, covering labor, transport, and disposal fees in one easy rate.
                  </p>
                </div>
              </div>
            </section>

            {/* The Risks Section (Equivalent to "Should I Accept First Offer") */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Hidden Risks of DIY Appliance Removal</h3>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Many homeowners consider renting a truck or using a personal vehicle to haul <strong>unwanted items</strong> to the dump. However, the risks often outweigh the perceived savings:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span><strong>Physical Injury:</strong> Appliances are deceptively heavy. An improper lift can lead to severe back strain, crushed fingers, or worse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span><strong>Vehicle Damage:</strong> Loading a washing machine into a standard SUV or sedan often results in torn upholstery or broken windows.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span><strong>Improper Disposal Fines:</strong> Dumping appliances illegally or in the wrong facility can result in significant fines from Cabarrus County.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Comprehensive List */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Appliances We Remove & Recycle</h3>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have a single microwave or a full kitchen suite of <strong>appliances</strong>, no job is too big or small for our <strong>junk removal team</strong>. We service residential homes, apartment complexes, and commercial offices <strong>in Concord</strong>.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Refrigerators & Freezers", desc: "We ensure safe freon removal and recycling of the steel body." },
                  { title: "Washing Machines & Dryers", desc: "Heavy units are removed from basements or laundry rooms with ease." },
                  { title: "Stoves, Ovens & Ranges", desc: "Safe removal of electric and gas units (gas must be disconnected)." },
                  { title: "Air Conditioning Units", desc: "Window units and portable ACs containing coolants." },
                  { title: "Water Heaters", desc: "Removal of old tanks, tankless systems, and boilers." },
                  { title: "Small Appliances", desc: "Microwaves, trash compactors, dishwashers, and mini-fridges." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Eco-Friendly/Laws Section (Equivalent to Laws Affecting...) */}
            <section className="mb-16 bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full text-green-700"><Leaf size={32} /></div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Eco-Friendly Disposal in Concord NC</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We are committed <strong>to</strong> sustainability. <strong>In Concord NC</strong>, sending appliances to a landfill is the last resort. 
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>1. Donation:</strong> If your appliance is in good working condition and less than 10 years old, we aim to donate it to local charities like Habitat for Humanity Cabarrus. This provides a <strong>tax-deductible</strong> receipt for you and helps a neighbor in need.
                </p>
                <p className="text-gray-700">
                  <strong>2. Recycling:</strong> For non-working units, we transport <strong>them</strong> to certified recycling centers. Here, scrap metal is harvested, and hazardous components are processed safely. This keeps dangerous chemicals <strong>out</strong> of our soil and water.
                </p>
              </div>
            </section>

            {/* FAQ Section - Deep Dive */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do I need to disconnect the appliance myself?</h4>
                  <p className="text-gray-700">
                    For safety reasons, we ask <strong>that</strong> all appliances be disconnected from water, gas, and hardwired electrical connections before our <strong>team</strong> arrives. We can unplug standard plugs, but we are not licensed plumbers or electricians.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">How much does appliance removal cost in Concord?</h4>
                  <p className="text-gray-700">
                    Our <strong>service</strong> pricing is based on the number and type of <strong>items</strong>. A single unit pickup is very affordable, while multiple items are discounted. We provide a <strong>free</strong>, no-obligation quote before we start any work so there are <strong>no</strong> surprises.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Do you offer curbside pickup?</h4>
                  <p className="text-gray-700">
                    Yes! If <strong>you</strong> can get the appliance <strong>to</strong> the curb or driveway, we offer a "Curbside Discount" since it makes the job <strong>easy</strong> and faster for our crew. However, full-service indoor removal is our specialty if you cannot move it.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">What areas do you serve?</h4>
                  <p className="text-gray-700">
                    We provide <strong>junk removal services</strong> throughout <strong>Concord NC</strong>, Harrisburg, Kannapolis, Mount Pleasant, and the surrounding Cabarrus County region. We are your <strong>local</strong> experts.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / CTA Column */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get A Free Quote</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Ready to get that old appliance <strong>out</strong> of your way? Call us now for an instant estimate.
              </p>
              <a href="tel:5025309330" className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition mb-4">
                <Zap size={20} />
                (502) 530-9330
              </a>
              <p className="text-xs text-center text-gray-400">
                Available Mon-Sat in <strong>Waxhaw, Marvin & Lancaster</strong>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Service Areas</h4>
              <ul className="space-y-2 text-sm text-blue-800">
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

            <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
               <HelpCircle size={32} className="mx-auto mb-4 text-green-400"/>
               <h4 className="font-bold text-lg mb-2">Have Questions?</h4>
               <p className="text-gray-400 text-sm mb-4">
                 Not sure if we can take your specific item? Give us a call. We make <strong>junk removal easy</strong>.
               </p>
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