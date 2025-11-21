import React, { useState } from 'react';
import { SERVICES } from '../types';
import { Send, MessageSquare, Smartphone } from 'lucide-react';

interface LeadFormProps {
  preSelectedService?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ preSelectedService }) => {
  const defaultService = preSelectedService || SERVICES[3].id;
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Quote Request: ${formData.name} - ${formData.service}`);
    
    // Well-designed pre-filled template for the email body
    const body = encodeURIComponent(`
Hi Concord Junk Removal Team,

I would like to request a free estimate for the following service:

--------------------------------------------------
👤 NAME:    ${formData.name}
📞 PHONE:   ${formData.phone}
📋 SERVICE: ${formData.service}
--------------------------------------------------

📝 ITEM DETAILS / NOTES:
${formData.details || 'No specific details provided.'}

Please contact me back at your earliest convenience to schedule a pickup.

Thank you!
`);

    // Open default mail client with pre-filled data
    window.location.href = `mailto:kadamrohan1988@gmail.com?subject=${subject}&body=${body}`;
  };

  // SMS link generator for mobile users
  const handleSmsClick = () => {
    const phone = "15025309330";
    const body = "Hi, I'm interested in a junk removal quote.";
    window.location.href = `sms:+${phone}?&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-green-500 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
        FASTEST RESPONSE
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-1">Get Your Free Quote</h3>
      <p className="text-gray-500 text-sm mb-6">Fill out the form below to generate an email request, or text us directly for immediate service.</p>

      <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            placeholder="(502) 530-9330"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white"
          >
            {SERVICES.map(service => (
              <option key={service.id} value={service.id}>{service.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Details (Optional)</label>
          <textarea
            id="details"
            name="details"
            rows={3}
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
            placeholder="Describe your items (e.g., old sofa, garage debris, refrigerator)..."
          />
        </div>

        <div className="pt-2 space-y-3">
            <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
                <Send size={18} /> Draft Email Request
            </button>
            
            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">Or</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button 
                type="button"
                onClick={handleSmsClick}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
            >
                <MessageSquare size={18} /> Text Us for Quote
            </button>
        </div>
      </form>
      
      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
        <a href="tel:5025309330" className="text-gray-500 hover:text-green-600 text-sm font-semibold flex items-center justify-center gap-1 transition">
           <Smartphone size={14} /> Prefer to call? (502) 530-9330
        </a>
      </div>
    </div>
  );
};