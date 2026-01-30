"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
  itineraryName?: string;
}

export default function BookingFormDialog({
  isOpen,
  onClose,
  packageName,
  packagePrice,
  itineraryName
}: BookingFormDialogProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    language: '',
    country: '',
    modeOfPayment: '',
    travelDate: '',
    numberOfPartners: '0',
    numberOfChildren: '0',
    additionalComments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking inquiry sent successfully! We will contact you soon.');
    onClose();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      language: '',
      country: '',
      modeOfPayment: '',
      travelDate: '',
      numberOfPartners: '0',
      numberOfChildren: '0',
      additionalComments: ''
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white rounded-[20px] max-w-[700px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-[20px] z-10">
          <h2 className="text-[24px] text-[#333333]">Book Your Safari</h2>
          <button
            onClick={onClose}
            className="text-[#686868] hover:text-[#333333] transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Package Info */}
        <div className="px-6 py-4 bg-[#1f751f]/5 border-b border-gray-200">
          <h3 className="text-[18px] text-[#333333] mb-1">{packageName}</h3>
          {itineraryName && (
            <p className="text-[14px] text-[#686868] mb-1">{itineraryName}</p>
          )}
          <p className="text-[22px] text-[#1f751f]">{packagePrice}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-[14px] text-[#333333] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-[14px] text-[#333333] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[14px] text-[#333333] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="language" className="block text-[14px] text-[#333333] mb-2">
                Preferred Language *
              </label>
              <select
                id="language"
                required
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f] bg-white"
              >
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
                <option value="italian">Italian</option>
                <option value="swahili">Swahili</option>
              </select>
            </div>

            <div>
              <label htmlFor="country" className="block text-[14px] text-[#333333] mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
                placeholder="Your country"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modeOfPayment" className="block text-[14px] text-[#333333] mb-2">
              Mode of Payment *
            </label>
            <select
              id="modeOfPayment"
              required
              value={formData.modeOfPayment}
              onChange={(e) => setFormData({ ...formData, modeOfPayment: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f] bg-white"
            >
              <option value="">Select payment method</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="travelDate" className="block text-[14px] text-[#333333] mb-2">
                Travel Date *
              </label>
              <input
                type="date"
                id="travelDate"
                required
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
              />
            </div>

            <div>
              <label htmlFor="numberOfPartners" className="block text-[14px] text-[#333333] mb-2">
                Partners
              </label>
              <input
                type="number"
                id="numberOfPartners"
                min="0"
                value={formData.numberOfPartners}
                onChange={(e) => setFormData({ ...formData, numberOfPartners: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
              />
            </div>

            <div>
              <label htmlFor="numberOfChildren" className="block text-[14px] text-[#333333] mb-2">
                Children
              </label>
              <input
                type="number"
                id="numberOfChildren"
                min="0"
                value={formData.numberOfChildren}
                onChange={(e) => setFormData({ ...formData, numberOfChildren: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="additionalComments" className="block text-[14px] text-[#333333] mb-2">
              Additional Comments
            </label>
            <textarea
              id="additionalComments"
              rows={4}
              value={formData.additionalComments}
              onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
              placeholder="Any special requests or questions?"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#1f751f] text-white py-3 rounded-[50px] text-[16px] hover:bg-[#0f440f] transition-colors"
            >
              Submit Booking Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}