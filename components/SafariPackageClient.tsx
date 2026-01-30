"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { 
  Clock, Users, MapPin, Calendar, Check, Star, X,
  ChevronRight, Mail, Phone, Download, Share2,
  Utensils, Bed
} from 'lucide-react';
import ItinerarySlideshow from './ItinerarySlideshow';
import BookingFormDialog from './BookingFormDialog';
import ImageLightbox from './ImageLightbox';

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string;
  accommodation: string;
  images: string[];
}

interface SafariPackageClientProps {
  packageName: string;
  packagePrice: string;
  packageGallery: string[];
  itinerary: ItineraryDay[];
  heroImage: string;
}

export default function SafariPackageClient({ 
  packageName, 
  packagePrice, 
  packageGallery,
  itinerary,
  heroImage
}: SafariPackageClientProps) {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openGalleryLightbox = (index: number) => {
    setLightboxImages(packageGallery);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openItineraryLightbox = (images: string[], index: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Photo Gallery */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
        <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {packageGallery.map((image, index) => (
            <div 
              key={index} 
              className="relative h-[180px] sm:h-[220px] rounded-[15px] overflow-hidden group cursor-pointer"
              onClick={() => openGalleryLightbox(index)}
            >
              <ImageWithFallback 
                src={image}
                alt={`Safari photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Itinerary with Slideshow */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
        <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-8">Day by Day Itinerary</h2>
        <div className="space-y-8">
          {itinerary.map((day) => (
            <div key={day.day} className="bg-gray-50 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Side - Slideshow */}
                <div className="h-[300px] md:h-[350px]">
                  <ItinerarySlideshow images={day.images} />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#1f751f] text-white w-10 h-10 rounded-full flex items-center justify-center text-[18px]">
                      {day.day}
                    </div>
                    <h3 className="text-[22px] text-[#333333]">
                      Day {day.day}: {day.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {day.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#686868]">
                        <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-[14px] text-[#686868]">
                      <Utensils size={18} className="text-[#1f751f]" />
                      <span><strong>Meals:</strong> {day.meals}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-[#686868]">
                      <Bed size={18} className="text-[#1f751f]" />
                      <span><strong>Accommodation:</strong> {day.accommodation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Button in Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          {/* Booking Card */}
          <div className="bg-white rounded-[20px] p-6 shadow-lg">
            <div className="text-center border-b border-gray-200 pb-6 mb-6">
              <div className="text-[14px] text-[#686868] mb-2">Price from</div>
              <div className="text-[42px] text-[#1f751f]">{packagePrice}</div>
              <div className="text-[14px] text-[#686868]">per person</div>
            </div>

            <div className="space-y-4 mb-6">
              <button
                onClick={() => setBookingDialogOpen(true)}
                className="w-full bg-[#1f751f] text-white px-6 py-4 rounded-[50px] hover:bg-[#0f440f] transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Book Now
              </button>
              <a
                href="tel:+255753243280"
                className="w-full border-2 border-[#1f751f] text-[#1f751f] px-6 py-4 rounded-[50px] hover:bg-[#1f751f] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>

            <div className="space-y-3 text-[14px]">
              <button className="w-full flex items-center justify-center gap-2 text-[#686868] hover:text-[#1f751f] py-2">
                <Download size={18} />
                Download Itinerary (PDF)
              </button>
              <button className="w-full flex items-center justify-center gap-2 text-[#686868] hover:text-[#1f751f] py-2">
                <Share2 size={18} />
                Share this Safari
              </button>
            </div>
          </div>

          {/* Need Help Card */}
          <div className="bg-gradient-to-br from-[#0f440f] to-[#1f751f] rounded-[20px] p-6 text-white">
            <h3 className="text-[22px] mb-3">Need Help Planning?</h3>
            <p className="text-[15px] mb-4 opacity-90">
              Our safari experts are here to help you customize this itinerary to your preferences.
            </p>
            <div className="space-y-2 text-[14px]">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+255 753 243 280</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@ndewedotours.com</span>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-white rounded-[20px] p-6 shadow-md">
            <h4 className="text-[18px] text-[#333333] mb-4">Why Book With Us?</h4>
            <ul className="space-y-3 text-[14px] text-[#686868]">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                <span>15+ years of experience</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                <span>Licensed & insured operator</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                <span>Expert local guides</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                <span>5.0 rating on TripAdvisor</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                <span>Flexible cancellation policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingFormDialog 
        isOpen={bookingDialogOpen}
        onClose={() => setBookingDialogOpen(false)}
        packageName={packageName}
        packagePrice={packagePrice}
      />

      {/* Image Lightbox */}
      <ImageLightbox 
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
