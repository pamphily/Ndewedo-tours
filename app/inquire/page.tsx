"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Package, ArrowRight } from 'lucide-react';
import TailorMadeSafariWizard from '@/components/TailorMadeSafariWizard';
import { HeroSection } from '@/components/HeroSection';

export default function InquirePage() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection 
          title="Plan Your Perfect Safari"
          description="Choose from our curated packages or build a completely customized safari experience"
          image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
          showCta={false}
        />

        {/* Selection Cards */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* View Current Packages */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-[25px] shadow-lg p-8 md:p-10 border-2 border-gray-200 hover:border-[#1f751f] transition-all hover:shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#1f751f]/10 w-20 h-20 rounded-full flex items-center justify-center">
                    <Package className="text-[#1f751f]" size={40} />
                  </div>
                </div>
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-4 text-center">
                  View Current Packages
                </h2>
                <p className="text-[16px] text-[#686868] mb-6 text-center leading-relaxed">
                  Explore our carefully curated safari packages, designed by experts with years of experience. Perfect for first-time visitors and seasoned travelers alike.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Pre-planned itineraries</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Fixed pricing & availability</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Proven routes & experiences</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Quick booking process</span>
                  </li>
                </ul>
                <Link
                  href="/safaris"
                  className="w-full bg-[#1f751f] text-white px-6 py-4 rounded-[50px] text-[16px] hover:bg-[#0f440f] transition-colors flex items-center justify-center gap-2"
                >
                  View Packages
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Build Tailor-Made Safari */}
              <div className="bg-gradient-to-br from-[#1f751f]/5 to-white rounded-[25px] shadow-lg p-8 md:p-10 border-2 border-[#1f751f] hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#c97500] text-white px-3 py-1 rounded-full text-[12px]">
                  Recommended
                </div>
                <div className="flex justify-center mb-6">
                  <div className="bg-[#1f751f] w-20 h-20 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white" size={40} />
                  </div>
                </div>
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-4 text-center">
                  Build a Tailor-Made Safari
                </h2>
                <p className="text-[16px] text-[#686868] mb-6 text-center leading-relaxed">
                  Create your dream safari from scratch. Choose your destinations, activities, accommodations, and dates. We'll craft the perfect itinerary just for you.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Fully customizable experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Flexible dates & duration</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Personalized to your interests</span>
                  </li>
                  <li className="flex items-start gap-2 text-[15px] text-[#686868]">
                    <div className="w-2 h-2 rounded-full bg-[#1f751f] mt-2" />
                    <span>Expert guidance throughout</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowWizard(true)}
                  className="w-full bg-[#1f751f] text-white px-6 py-4 rounded-[50px] text-[16px] hover:bg-[#0f440f] transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles size={20} />
                  Start Building
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Tailor-Made */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[32px] sm:text-[40px] text-[#333333] mb-4">
                Why Choose <span className="text-[#1f751f]">Tailor-Made</span>?
              </h2>
              <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[20px] p-6 shadow-md">
                <div className="text-[48px] mb-4">🎯</div>
                <h3 className="text-[22px] text-[#333333] mb-3">Your Way, Your Pace</h3>
                <p className="text-[15px] text-[#686868] leading-relaxed">
                  Every traveler is unique. Design a safari that matches your interests, budget, and travel style perfectly.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-6 shadow-md">
                <div className="text-[48px] mb-4">🗓️</div>
                <h3 className="text-[22px] text-[#333333] mb-3">Complete Flexibility</h3>
                <p className="text-[15px] text-[#686868] leading-relaxed">
                  Choose your travel dates, duration, and activities. No need to compromise on timing or preferences.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-6 shadow-md">
                <div className="text-[48px] mb-4">👥</div>
                <h3 className="text-[22px] text-[#333333] mb-3">Expert Consultation</h3>
                <p className="text-[15px] text-[#686868] leading-relaxed">
                  Our safari experts will work with you to create the perfect itinerary based on your selections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="bg-gradient-to-br from-[#1f751f]/5 to-white rounded-[25px] p-8 md:p-12 shadow-lg">
              <div className="text-[#1f751f] text-[60px] leading-none mb-4">"</div>
              <p className="text-[18px] sm:text-[20px] text-[#686868] mb-6 leading-relaxed italic">
                The tailor-made safari experience was absolutely incredible. The team listened to our preferences and created the perfect itinerary. We saw everything we hoped for and more!
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1f751f] flex items-center justify-center text-white text-[20px]">
                  JM
                </div>
                <div className="text-left">
                  <div className="text-[16px] text-[#333333]">Jessica Martinez</div>
                  <div className="text-[14px] text-[#686868]">USA • December 2024</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0f440f] text-white">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] mb-4 sm:mb-6">
              Ready to Start <span className="text-[#c97500]">Planning</span>?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-6 sm:mb-8 max-w-[700px] mx-auto">
              Whether you choose a package or build your own, we're here to make your safari dreams come true
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-[#0f440f] px-8 py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setShowWizard(true)}
                className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-[#0f440f] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                Build Your Safari
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Tailor-Made Safari Wizard Modal */}
      <TailorMadeSafariWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
    </>
  );
}