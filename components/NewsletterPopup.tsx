"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { toast } from "sonner";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSeenPopup = localStorage.getItem('newsletter_popup_seen');
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletter_popup_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    // Here you would typically send to your backend/email service
    console.log('Newsletter subscription:', { name, email });
    
    // Store in localStorage to prevent showing again
    localStorage.setItem('newsletter_popup_seen', 'true');
    localStorage.setItem('newsletter_subscribed', 'true');
    
    toast.success('Thank you for subscribing to our newsletter!');
    setIsOpen(false);
    setName('');
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-[20px] shadow-2xl max-w-[550px] w-full overflow-hidden pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#0f440f] to-[#1f751f] px-8 py-10 text-white relative">
            <div className="relative z-10">
              <h2 className="text-[32px] mb-2">
                Stay Updated!
              </h2>
              <p className="text-[18px] opacity-90">
                Get exclusive safari deals & travel tips
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -mr-16" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="popup-name" className="block text-[#333333] mb-2">
                  Your Name
                </label>
                <input
                  id="popup-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#1f751f] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-[#333333] mb-2">
                  Email Address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-5 py-3 border border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#1f751f] focus:border-transparent transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1f751f] text-white py-4 rounded-[50px] hover:bg-[#0f440f] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Subscribe Now
              </button>
            </div>

            <p className="text-[13px] text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
