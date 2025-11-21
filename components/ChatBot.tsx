import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { X, Send, Loader2, User, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! I'm David, the Lead Hauler for Concord Junk Removal. How can I help you clear some space today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const AVATAR_URL = "https://images.unsplash.com/photo-1586449480530-3286c6d3d040?auto=format&fit=crop&w=800&q=80";
  const FALLBACK_AVATAR = "https://ui-avatars.com/api/?name=David&background=166534&color=fff";
  
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        // API Key must be obtained exclusively from process.env.API_KEY
        const apiKey = process.env.API_KEY;

        // Debug logging to help diagnose environment issues in the browser console
        if (!apiKey) {
          console.error("ChatBot Config Error: API Key is missing.");
          setError("Configuration Error");
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        
        const systemInstruction = `
          You are "David", the Lead Hauler and local expert at "Concord Junk Removal Services".
          
          CRITICAL INSTRUCTION:
          - Keep responses EXTREMELY BRIEF (max 2 short sentences).
          - Do not fluff. Get straight to the point.
          - Your #1 GOAL is to get the customer to CALL (502) 530-9330 for a free estimate.
          - Answer the user's question directly, then immediately pivot to asking them to call.

          CORE BUSINESS INFO:
          - Name: Concord Junk Removal Services
          - Phone: (502) 530-9330
          - Location: Concord, NC (Serving Cabarrus, Union, Lancaster SC).
          - Value: 5-Star Rated, Licensed/Insured, No hidden fees, Eco-Friendly.

          SERVICE AREAS:
          - Concord, Harrisburg, Kannapolis, Mount Pleasant.
          - Waxhaw (Millbridge, Cureton), Marvin (Firethorne), Weddington.
          - Lancaster, SC, Indian Land, Sun City.

          SERVICES:
          - General Junk, Appliance Removal, Furniture Removal, Construction Debris, Estate Cleanouts, Hoarder Help.

          KEY POINTS TO HIT BRIEFLY:
          - Pricing: Volume-based (how much space it takes). Free onsite estimates.
          - HOA: We are HOA compliant (Load & Go, no dumpsters left behind).
          - Hazardous: We DO NOT take liquid paint, gas, oil, or asbestos.
          
          Example of a good response:
          "Yes, we service Waxhaw daily! We adhere to all HOA rules. Call us at (502) 530-9330 to schedule your free estimate."
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          }
        });
        
        setError(null);
      } catch (error) {
        console.error("ChatBot Error: Failed to initialize AI chat.", error);
        setError("Connection Failed");
      }
    };

    initChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, error]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    if (!chatSessionRef.current) {
       const userMsg = input.trim();
       setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
       setInput('');
       
       setTimeout(() => {
         setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I can't connect right now. Please give us a call at (502) 530-9330!" }]);
         if (!error) setError("Chat Disconnected");
       }, 500);
       return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("ChatBot Error: Failed to send message.", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server right now. Please call us at (502) 530-9330 for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_AVATAR;
  };

  const renderMessageContent = (text: string) => {
    const phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
    const parts = text.split(phoneRegex);
    return parts.map((part, i) => {
      if (part.match(phoneRegex)) {
        const clean = part.replace(/\D/g, '');
        return <a key={i} href={`tel:${clean}`} className="text-green-700 hover:underline font-bold whitespace-nowrap">{part}</a>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          <div className="bg-green-600 p-4 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <img 
                   src={AVATAR_URL} 
                   alt="David - Lead Hauler" 
                   className="w-12 h-12 rounded-full object-cover border-2 border-white bg-green-800"
                   onError={handleImageError}
                 />
                 <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-green-800 rounded-full ${error ? 'bg-red-500' : 'bg-green-400 animate-pulse'}`}></span>
              </div>
              <div>
                <h3 className="font-bold text-base">David</h3>
                <p className="text-xs text-green-100 opacity-90">Lead Hauler</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${msg.role === 'user' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}>
                  {msg.role === 'user' ? (
                    <User size={16} />
                  ) : (
                    <img 
                      src={AVATAR_URL} 
                      alt="David" 
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  )}
                </div>
                <div 
                  className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-900 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src={AVATAR_URL} 
                    alt="David" 
                    className="w-full h-full object-cover opacity-70"
                    onError={handleImageError}
                  />
                </div>
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-gray-400" />
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center mt-4">
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm border border-red-100">
                  <AlertCircle size={14} />
                  {error === "Configuration Error" ? "System Offline - Please Call (502) 530-9330" : error}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={error ? "Chat unavailable..." : "Message David..."}
              disabled={!!error}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim() || !!error}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center group ${
          isOpen 
            ? 'bg-green-600 w-14 h-14 rounded-full text-white' 
            : 'w-16 h-16 rounded-full overflow-hidden border-4 border-white ring-2 ring-green-500 bg-white'
        }`}
      >
        {isOpen ? (
          <X size={32} />
        ) : (
          <img 
            src={AVATAR_URL} 
            alt="Chat with David" 
            className={`w-full h-full object-cover ${error ? 'grayscale' : ''}`}
            onError={handleImageError}
          />
        )}
        
        {!isOpen && !error && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            1
          </span>
        )}
        
        {!isOpen && error && (
          <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            !
          </span>
        )}
      </button>
      
      {!isOpen && (
        <div className="mt-2 mr-2 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-100 text-xs font-bold text-gray-700 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {error ? "Chat Offline" : "Chat with David 👋"}
        </div>
      )}
    </div>
  );
};