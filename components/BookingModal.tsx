"use client";

import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { toast } from 'sonner';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  safariPackage: {
    name: string;
    amount: string;
  } | null;
}

export default function BookingModal({ isOpen, onClose, safariPackage }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    language: '',
    country: '',
    paymentMode: '',
    travelDate: '',
    partners: 1,
    children: 0
  });

  useEffect(() => {
    if (safariPackage) {
      // You can pre-fill or use safariPackage info here
    }
  }, [safariPackage]);

  if (!isOpen || !safariPackage) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.language || !formData.country || !formData.paymentMode) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success(`Booking for ${safariPackage.name} successful!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white rounded-[20px] max-w-[600px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-[20px] z-10">
          <div>
            <h2 className="text-[24px] text-[#333333]">Book Your Safari</h2>
            <p className="text-[14px] text-[#686868] mt-1">{safariPackage.name} - {safariPackage.amount}</p>
          </div>
          <button onClick={onClose} className="text-[#686868] hover:text-[#333333] transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Full Name *</label>
              <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Language *</label>
              <input type="text" required value={formData.language} onChange={(e) => setFormData({...formData, language: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Country *</label>
              <input type="text" required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
          </div>

          <div>
            <label className="block text-[15px] text-[#333333] mb-2">Mode of Payment *</label>
            <select required value={formData.paymentMode} onChange={(e) => setFormData({...formData, paymentMode: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]">
              <option value="">Select Payment Mode</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="block text-[15px] text-[#333333] mb-2">Travel Date</label>
            <input type="date" value={formData.travelDate} onChange={(e) => setFormData({...formData, travelDate: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Number of Partners</label>
              <input type="number" min="1" value={formData.partners} onChange={(e) => setFormData({...formData, partners: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
            <div>
              <label className="block text-[15px] text-[#333333] mb-2">Children</label>
              <input type="number" min="0" value={formData.children} onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1f751f]" />
            </div>
          </div>

          <div className="flex items-center justify-end mt-6 pt-6 border-t border-gray-200">
            <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-[50px] bg-[#1f751f] text-white hover:bg-[#0f440f] transition-colors">
              <Check size={20} />
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
