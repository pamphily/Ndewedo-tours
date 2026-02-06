"use client";

import { useState } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import {
  Clock, Users, MapPin, Calendar, Check, Star, X,
  ChevronRight, Mail, Phone, Download, Share2,
} from 'lucide-react'
import PackageSubNav from '@/components/PackageSubNav'
import ItineraryAccordion from '@/components/ItineraryAccordion'
import BookingModal from '@/components/BookingModal';

const packageGallery = [
  'https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg?w=1080', // Tarangire elephants & baobabs
  'https://www.safaribookings.com/serengeti/photos/large/serengeti-sunset-plains.jpg?w=1080', // Serengeti golden plains sunset
  'https://www.safaribookings.com/ngorongoro/photos/large/view-over-the-crater-floor-from-the-rim.jpg?w=1080', // Ngorongoro Crater rim panorama
  'https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg?w=1080', // Shade Safari Lodge gardens/shade trees
  'https://bougainvillealodge.com/wp-content/uploads/lodge-gardens.jpg?w=1080', // Bougainvillea Lodge peaceful gardens
  'https://intowildafrica.com/wp-content/uploads/gallery/serengeti-tent-sunset.jpg?w=1080', // Into the Wild Camp tent & plains
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Tanzania – Arusha',
    location: 'Shade Safari Lodge | Arusha, Tanzania',
    activities: [
      'Arrival at Kilimanjaro International Airport (JRO)',
      'Warm, efficient welcome by professional representative',
      'Airport briefing: itinerary, safety, daily routines',
      'Private transfer to lodge (~1 hour)',
      'Relax in gardens, gentle walk, quiet dinner with mild flavors'
    ],
    meals: 'Dinner',
    accommodation: 'Shade Safari Lodge',
    images: [
      'https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg?w=800',
      'https://undertheshadesafarilodge.co.tz/wp-content/uploads/room.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Shade Safari Lodge Information',
      features: [
        'Peaceful garden setting with natural shade trees',
        'Spacious, clean, well-ventilated rooms',
        'Hot showers, modern amenities, attentive service',
        'Ideal for rest after long flight'
      ]
    }
  },
  {
    day: 2,
    title: 'Arusha to Tarangire National Park',
    location: 'Bougainvillea Lodge | Karatu, Tanzania',
    activities: [
      'Early breakfast and departure (~8:00 AM)',
      'Scenic drive (~3 hours) with window seats',
      'Half-day private game drive: elephant herds, baobabs, lions, giraffes, birds',
      'Picnic or lodge lunch with hygiene focus',
      'Relax in lodge gardens, sunset views'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Bougainvillea Lodge',
    images: [
      'https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg?w=800',
      'https://bougainvillealodge.com/wp-content/uploads/cottage-veranda.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Bougainvillea Lodge Information',
      features: [
        'Lush garden setting with cottages & private verandas',
        'Swimming pool, peaceful atmosphere',
        'High cleanliness and professional service',
        'Comfortable after park exploration'
      ]
    }
  },
  {
    day: 3,
    title: 'Tarangire to Serengeti National Park',
    location: 'Into the Wild Lodge | Serengeti, Tanzania',
    activities: [
      'Early breakfast and departure',
      'Scenic drive through Ngorongoro Highlands (~6–7 hours)',
      'Picnic lunch en route',
      'Afternoon game drive on arrival: vast plains, predators, migration glimpses (seasonal)'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Into the Wild Lodge',
    images: [
      'https://www.safaribookings.com/serengeti/photos/large/serengeti-sunset-plains.jpg?w=800',
      'https://intowildafrica.com/wp-content/uploads/gallery/lodge-tent.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Into the Wild Lodge Information',
      features: [
        'Authentic safari feel with spacious tents/cottages',
        'En-suite bathrooms, comfortable beds',
        'Quiet natural surroundings, warm hospitality'
      ]
    }
  },
  {
    day: 4,
    title: 'Full Day in Serengeti National Park',
    location: 'Into the Wild Camp | Serengeti, Tanzania',
    activities: [
      'Early morning game drive (best predator time)',
      'Breakfast return & rest',
      'Midday game drive or camp leisure',
      'Afternoon game drive: explore different areas',
      'Evening storytelling, stargazing, quiet dinner'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Into the Wild Camp',
    images: [
      'https://intowildafrica.com/wp-content/uploads/gallery/serengeti-tent-sunset.jpg?w=800',
      'https://www.safaribookings.com/serengeti/photos/large/lion-serengeti.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Into the Wild Camp Information',
      features: [
        'Comfortable tents in prime Serengeti location',
        'Flexible pacing for observation & rest',
        'Clear explanations of ecosystems & behavior'
      ]
    }
  },
  {
    day: 5,
    title: 'Serengeti to Ngorongoro Conservation Area',
    location: 'Bougainvillea Lodge | Karatu, Tanzania',
    activities: [
      'Breakfast and departure',
      'Scenic drive (~4–5 hours): highlands, Maasai lands, volcanic views',
      'Picnic lunch en route',
      'Arrival and relaxation at familiar lodge'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Bougainvillea Lodge',
    images: [
      'https://www.safaribookings.com/ngorongoro/photos/large/view-over-the-crater-floor-from-the-rim.jpg?w=800',
      'https://bougainvillealodge.com/wp-content/uploads/garden-pool.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Bougainvillea Lodge Return',
      features: [
        'Familiar comfort after wilderness days',
        'Gardens, pool, and peaceful evening',
        'Photo review & reflection time'
      ]
    }
  },
  {
    day: 6,
    title: 'Departure – Airport Transfer',
    location: 'Kilimanjaro International Airport (JRO)',
    activities: [
      'Breakfast and check-out',
      'Private transfer to JRO or Arusha Airport (ARK)',
      'Guide assistance with luggage & departure',
      'End of services with cherished memories'
    ],
    meals: 'Breakfast',
    accommodation: 'End of journey',
    images: [
      'https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Farewell Tanzania',
      features: [
        'Smooth, efficient departure',
        'Memories of nature, wildlife, and harmony'
      ]
    }
  }
];

export default function PremiumTanzaniaJapanesePage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const packageName = "6-Day Premium Tanzania Safari for Japanese Travelers";
  const packagePrice = "$4,250";

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[550px]">
        <ImageWithFallback
          src="https://www.safaribookings.com/serengeti/photos/large/serengeti-sunset-plains.jpg"
          alt="Serengeti Sunset Plains – Premium Safari for Japanese Travelers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-2 text-white text-[14px]">
              <Link href="/" className="hover:text-[#c97500]">Home</Link>
              <ChevronRight size={16} />
              <Link href="/safaris" className="hover:text-[#c97500]">Safaris</Link>
              <ChevronRight size={16} />
              <span className="text-white/70">6-Day Premium Tanzania for Japanese Guests</span>
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="text-white">
                <h1 className="text-[32px] sm:text-[42px] md:text-[52px] mb-3">
                  {packageName}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-[15px] sm:text-[16px]">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>6 Days / 5 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Northern Tanzania Circuit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="fill-[#fbbf24] text-[#fbbf24]" size={18} />
                    <span>5.0 (Japanese-focused)</span>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="text-[14px] mb-1">From</div>
                <div className="text-[42px] sm:text-[52px]">{packagePrice}</div>
                <div className="text-[14px]">per person</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <PackageSubNav />

      {/* Main Content */}
      <section className="py-8 md:py-12 px-4 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div id="overview" className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Premium Safari Overview</h2>
                <p className="text-[16px] text-[#686868] leading-[28px] mb-4">
                  An exclusive 6-day Northern Tanzania safari crafted for Japanese travelers: refined pacing, professional guiding (English; Japanese optional), comfortable lodges with hygiene focus, private 4x4 with window seats, and iconic wildlife in Tarangire, Serengeti, and Ngorongoro.
                </p>
                <p className="text-[16px] text-[#686868] leading-[28px]">
                  Ideal for first-time visitors, seniors, couples, or small groups — smooth logistics, educational commentary, and respect for nature and comfort.
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Duration</div>
                    <div className="text-[16px] text-[#333333]">6 Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Group Size</div>
                    <div className="text-[16px] text-[#333333]">Private / Small</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Calendar className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Availability</div>
                    <div className="text-[16px] text-[#333333]">Year-round</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Start/End</div>
                    <div className="text-[16px] text-[#333333]">Kilimanjaro / Arusha</div>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {packageGallery.map((image, index) => (
                    <div key={index} className="relative h-[180px] sm:h-[220px] rounded-[15px] overflow-hidden group cursor-pointer">
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

              {/* Detailed Itinerary */}
              <div id="itinerary" className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Day by Day Itinerary</h2>
                <ItineraryAccordion itinerary={itinerary} />
              </div>

              {/* Rates Section */}
              <div id="rates" className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Safari Rates</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#1f751f]/10 rounded-[10px] border-2 border-[#1f751f]">
                    <div>
                      <div className="text-[18px] text-[#333333]">Per Person (Sharing)</div>
                      <div className="text-[14px] text-[#686868]">Premium private/mid-group</div>
                    </div>
                    <div className="text-[24px] text-[#1f751f]">{packagePrice}</div>
                  </div>
                  <p className="text-[14px] text-[#686868] mt-6">
                    * Prices per person, subject to availability. Includes private vehicle, window seats, English guide (Japanese optional), hygiene-focused lodges. May vary by season.
                  </p>
                </div>
              </div>

              {/* Included & Excluded */}
              <div id="inclusions" className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-[20px] p-6 shadow-md">
                  <h3 className="text-[24px] text-[#333333] mb-4 flex items-center gap-2">
                    <Check className="text-[#1f751f]" size={24} />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'All accommodation as specified',
                      'All meals as per itinerary',
                      'Private 4x4 safari vehicle with window seats',
                      'Professional English-speaking guide (Japanese on request)',
                      'Park entrance & conservation fees',
                      'Game drives & activities described',
                      'Airport transfers & welcome assistance'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-[20px] p-6 shadow-md">
                  <h3 className="text-[24px] text-[#333333] mb-4 flex items-center gap-2">
                    <X className="text-red-500" size={24} />
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'International flights',
                      'Visa fees',
                      'Travel insurance',
                      'Personal expenses & tips',
                      'Optional Japanese-speaking guide (extra)',
                      'Items not mentioned'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#686868]">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
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
                      onClick={() => setBookingOpen(true)}
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
                    Customize this premium safari for Japanese preferences.
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
                      <span>Japanese-focused guiding & comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Private vehicle & window seats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Gentle, educational pacing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-[40px] text-[#333333] mb-4">
              Guest <span className="text-[#1f751f]">Reviews</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-[#00AA6C] text-[#00AA6C]" />
                ))}
              </div>
            </div>
            <p className="text-[16px] text-[#686868]">5.0 out of 5 for refined comfort</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-[15px] p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-[#00AA6C] text-[#00AA6C]" />)}
              </div>
              <h4 className="text-[18px] text-[#333333] mb-2">Perfectly Gentle & Beautiful</h4>
              <p className="text-[15px] text-[#686868] mb-4 leading-[24px]">
                "The calm pace, clean lodges, and guide's clear explanations made this safari relaxing and memorable. Serengeti was breathtaking!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f751f] flex items-center justify-center text-white">HM</div>
                <div>
                  <div className="text-[14px] text-[#333333]">Hiroshi M.</div>
                  <div className="text-[13px] text-[#686868]">Japan • Jan 2026</div>
                </div>
              </div>
            </div>
            {/* Add 1-2 more sample reviews if desired */}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setBookingOpen(false)} 
        safariPackage={{name: packageName, amount: packagePrice}} 
      />
    </div>
  )
}