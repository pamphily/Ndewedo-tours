"use client";

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface TailorMadeSafariWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TailorMadeSafariWizard({ isOpen, onClose }: TailorMadeSafariWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    countries: [] as string[],
    parks: [] as string[],
    activities: [] as string[],
    duration: '',
    startDate: '',
    budget: '',
    fullName: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  if (!isOpen) return null;

  const totalSteps = 6;

  const countries = [
    'Tanzania', 'Kenya', 'Uganda', 'Rwanda', 'Botswana', 'South Africa', 'Namibia', 'Zimbabwe'
  ];

  const parks = [
    'Serengeti National Park', 'Ngorongoro Crater', 'Tarangire National Park',
    'Lake Manyara National Park', 'Ruaha National Park', 'Selous Game Reserve',
    'Mikumi National Park', 'Arusha National Park'
  ];

  const activities = [
    'Game Drives', 'Walking Safaris', 'Hot Air Balloon Safari', 'Bird Watching',
    'Photography Safari', 'Cultural Tours', 'Night Game Drives', 'Bush Dining',
    'Camping', 'Luxury Lodge Stays'
  ];

  const handleToggleSelection = (category: 'countries' | 'parks' | 'activities', item: string) => {
    setFormData((prev) => {
      const currentList = prev[category];
      if (currentList.includes(item)) {
        return { ...prev, [category]: currentList.filter((i) => i !== item) };
      } else {
        return { ...prev, [category]: [...currentList, item] };
      }
    });
  };

  const handleNext = () => {
    // Validation for each step
    if (currentStep === 1 && formData.countries.length === 0) {
      toast.error('Please select at least one country');
      return;
    }
    if (currentStep === 2 && formData.parks.length === 0) {
      toast.error('Please select at least one national park');
      return;
    }
    if (currentStep === 3 && formData.activities.length === 0) {
      toast.error('Please select at least one activity');
      return;
    }
    if (currentStep === 4 && (!formData.duration || !formData.startDate)) {
      toast.error('Please select duration and start date');
      return;
    }
    if (currentStep === 5 && !formData.budget) {
      toast.error('Please select your budget range');
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Your tailor-made safari request has been submitted! We will contact you soon.');
    onClose();
    // Reset form
    setFormData({
      countries: [],
      parks: [],
      activities: [],
      duration: '',
      startDate: '',
      budget: '',
      fullName: '',
      email: '',
      phone: '',
      additionalInfo: ''
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">Which countries would you like to visit?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => handleToggleSelection('countries', country)}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all ${
                    formData.countries.includes(country)
                      ? 'bg-[#1f751f] text-white border-[#1f751f]'
                      : 'bg-white text-[#333333] border-gray-300 hover:border-[#1f751f]'
                  }`}
                >
                  {formData.countries.includes(country) && (
                    <Check className="inline w-4 h-4 mr-2" />
                  )}
                  {country}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">Select National Parks to Visit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parks.map((park) => (
                <button
                  key={park}
                  type="button"
                  onClick={() => handleToggleSelection('parks', park)}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all text-left ${
                    formData.parks.includes(park)
                      ? 'bg-[#1f751f] text-white border-[#1f751f]'
                      : 'bg-white text-[#333333] border-gray-300 hover:border-[#1f751f]'
                  }`}
                >
                  {formData.parks.includes(park) && (
                    <Check className="inline w-4 h-4 mr-2" />
                  )}
                  {park}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">What activities interest you?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activities.map((activity) => (
                <button
                  key={activity}
                  type="button"
                  onClick={() => handleToggleSelection('activities', activity)}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all ${
                    formData.activities.includes(activity)
                      ? 'bg-[#1f751f] text-white border-[#1f751f]'
                      : 'bg-white text-[#333333] border-gray-300 hover:border-[#1f751f]'
                  }`}
                >
                  {formData.activities.includes(activity) && (
                    <Check className="inline w-4 h-4 mr-2" />
                  )}
                  {activity}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">Duration & Start Date</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="duration" className="block text-[15px] text-[#333333] mb-2">
                  How many days? *
                </label>
                <select
                  id="duration"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f] bg-white"
                >
                  <option value="">Select duration</option>
                  <option value="3-5">3-5 days</option>
                  <option value="6-8">6-8 days</option>
                  <option value="9-12">9-12 days</option>
                  <option value="13-15">13-15 days</option>
                  <option value="16+">16+ days</option>
                </select>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-[15px] text-[#333333] mb-2">
                  Preferred Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">What's your budget?</h3>
            <div className="space-y-3">
              {[
                { label: 'Budget-Friendly (Under $1,500 per person)', value: 'budget' },
                { label: 'Mid-Range ($1,500 - $3,000 per person)', value: 'mid-range' },
                { label: 'Luxury ($3,000 - $5,000 per person)', value: 'luxury' },
                { label: 'Ultra-Luxury ($5,000+ per person)', value: 'ultra-luxury' },
                { label: 'I\'m flexible', value: 'flexible' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: option.value })}
                  className={`w-full px-6 py-4 rounded-[10px] text-[15px] border-2 transition-all text-left ${
                    formData.budget === option.value
                      ? 'bg-[#1f751f] text-white border-[#1f751f]'
                      : 'bg-white text-[#333333] border-gray-300 hover:border-[#1f751f]'
                  }`}
                >
                  {formData.budget === option.value && (
                    <Check className="inline w-4 h-4 mr-2" />
                  )}
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-[#333333] mb-4">Your Contact Details</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-[15px] text-[#333333] mb-2">
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

              <div>
                <label htmlFor="email" className="block text-[15px] text-[#333333] mb-2">
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
                <label htmlFor="phone" className="block text-[15px] text-[#333333] mb-2">
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

              <div>
                <label htmlFor="additionalInfo" className="block text-[15px] text-[#333333] mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-[15px] focus:outline-none focus:border-[#1f751f]"
                  placeholder="Any special requests or requirements?"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white rounded-[20px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-[20px] z-10">
          <div>
            <h2 className="text-[24px] text-[#333333]">Build Your Tailor-Made Safari</h2>
            <p className="text-[14px] text-[#686868] mt-1">Step {currentStep} of {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#686868] hover:text-[#333333] transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#1f751f] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="px-6 py-6">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-[50px] transition-colors ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-[#333333] hover:bg-gray-300'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-[50px] bg-[#1f751f] text-white hover:bg-[#0f440f] transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-[50px] bg-[#1f751f] text-white hover:bg-[#0f440f] transition-colors"
              >
                <Check size={20} />
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}