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
  'https://images.squarespace-cdn.com/content/v1/6095bc3ff03ba677b810d670/1662767574699-WUA1Y3MY40ZMLLQ5U6P9/ArushaCoffeeLodge---Restaurant-Exterior.jpeg', // Arusha Coffee Lodge exterior at dusk
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg', // Lemala Mpingo Ridge escarpment bath view
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/92/e0/94/ngorongoro-lodge-member.jpg', // Meliá Ngorongoro rim room view
  'https://www.siringit.co.tz/swfiles/files/Siringit-SSC-Tent-2025-774-1080x720.webp', // Siringit Serengeti luxury tent interior
  'https://siringitsafaris.com/swfiles/files/Siringit2023-201-Migration-Camp-tent-interior.jpg', // Siringit Migration Camp tent
  'https://www.wintonafricasafaris.com/wp-content/uploads/2024/09/Tarangire-National-Park-Safari.webp', // Tarangire elephants & baobabs
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Arusha – Beginning of Your Safari Adventure',
    location: 'Arusha Coffee Lodge | Arusha, Tanzania',
    activities: [
      'Arrival at Kilimanjaro International Airport (JRO)',
      'Warm private welcome (optional VIP Meet & Greet available)',
      'Transfer to lodge in coffee plantation setting',
      'Relax on private veranda or stroll gardens',
      'Bed & breakfast to unwind after journey'
    ],
    meals: 'Bed & Breakfast',
    accommodation: 'Arusha Coffee Lodge – Plantation Room',
    images: [
      'https://images.squarespace-cdn.com/content/v1/6095bc3ff03ba677b810d670/1662767574699-WUA1Y3MY40ZMLLQ5U6P9/ArushaCoffeeLodge---Restaurant-Exterior.jpeg?w=800',
      'https://www.travelplusstyle.com/wp-content/gallery/arusha-coffee-lodge/plantation-room.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Arusha Coffee Lodge Information',
      features: [
        'Elegant retreat in working coffee plantation',
        'Serene gardens and private verandas',
        'Refined hospitality for relaxed arrival',
        'Perfect gentle start to luxury safari'
      ]
    }
  },
  {
    day: 2,
    title: 'Arusha to Tarangire National Park – Elephant Kingdom',
    location: 'Lemala Mpingo Ridge | Tarangire, Tanzania',
    activities: [
      'Scenic drive to Tarangire National Park',
      'Private game drive: vast elephant herds, baobabs, lions, giraffes',
      'Packed lunch en route',
      'Evening at lodge with valley views'
    ],
    meals: 'Full Board',
    accommodation: 'Lemala Mpingo Ridge – Luxury Suite',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg?w=800',
      'https://wetu.com/ImageHandler/c1211x700/115797/dsc_42763.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Lemala Mpingo Ridge Information',
      features: [
        'Dramatic escarpment position overlooking Tarangire Valley',
        'Elegant design with breathtaking views',
        'Prime access to elephant-rich areas'
      ]
    }
  },
  {
    day: 3,
    title: 'Tarangire to Lake Manyara & Ngorongoro Highlands',
    location: 'Meliá Ngorongoro Lodge | Ngorongoro, Tanzania',
    activities: [
      'Drive to Lake Manyara National Park',
      'Private game drive: tree-climbing lions, forests, flamingos, baboons',
      'Continue to crater rim',
      'Check-in with panoramic views'
    ],
    meals: 'Full Board',
    accommodation: 'Meliá Ngorongoro Lodge – Rim Room',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/92/e0/94/ngorongoro-lodge-member.jpg?w=800',
      'https://images.trvl-media.com/lodging/90000000/89640000/89635700/89635698/12db4590.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Meliá Ngorongoro Lodge Information',
      features: [
        'Exclusive rim position overlooking "Garden of Eden"',
        'Sweeping caldera views from rooms',
        'Refined luxury and tranquility'
      ]
    }
  },
  {
    day: 4,
    title: 'Ngorongoro to Serengeti National Park',
    location: 'Siringit Serengeti Camp | Central Serengeti, Tanzania',
    activities: [
      'Scenic transfer with game viewing en route',
      'Arrive Central Serengeti',
      'Private afternoon game drive: plains game, predators',
      'Bush dinner and stargazing'
    ],
    meals: 'Full Board',
    accommodation: 'Siringit Serengeti Camp – Luxury Tent',
    images: [
      'https://www.siringit.co.tz/swfiles/files/Siringit-SSC-Tent-2025-774-1080x720.webp?w=800',
      'https://www.siringit.co.tz/swfiles/files/Siringit-SSC-Camp-view-2025-778-1080x720.webp?w=800',
    ],
    lodgeInfo: {
      name: 'Siringit Serengeti Camp Information',
      features: [
        'Elegant tents blending into savannah',
        'Wildlife-rich central location',
        'Authentic luxury safari atmosphere'
      ]
    }
  },
  {
    day: 5,
    title: 'Central Serengeti – Full Day Safari Experience',
    location: 'Siringit Serengeti Camp | Central Serengeti, Tanzania',
    activities: [
      'Full-day private game drive: lions, cheetahs, leopards, herds',
      'Packed bush lunch',
      'Tailored exploration at relaxed pace',
      'Evening relaxation and fine dining'
    ],
    meals: 'Full Board',
    accommodation: 'Siringit Serengeti Camp – Luxury Tent',
    images: [
      'https://www.siringit.co.tz/swfiles/files/Siringit-SSC-Family-tent-2025-776-1080x720.webp?w=800',
    ],
    lodgeInfo: {
      name: 'Central Serengeti Highlights',
      features: [
        'Year-round high wildlife density',
        'Personalized guiding for in-depth encounters',
        'Relaxed immersion in iconic plains'
      ]
    }
  },
  {
    day: 6,
    title: 'Serengeti Migration Safari – Into Dynamic Wilderness',
    location: 'Siringit Migration Camp | Northern Serengeti, Tanzania',
    activities: [
      'Travel to migration corridors',
      'Private game drive: massive herds, predators',
      'Packed lunch en route',
      'Front-row migration access'
    ],
    meals: 'Full Board',
    accommodation: 'Siringit Migration Camp – Luxury Tent',
    images: [
      'https://siringitsafaris.com/swfiles/files/Siringit2023-201-Migration-Camp-tent-interior.jpg?w=800',
      'https://siringitsafaris.com/swfiles/files/Siringit2023-190-SCM-AI.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Siringit Migration Camp Information',
      features: [
        'Mobile camp following Great Migration',
        'Refined luxury with prime viewing',
        'Dynamic wilderness immersion'
      ]
    }
  },
  {
    day: 7,
    title: 'Northern Serengeti – Remote & Exclusive Safariing',
    location: 'Siringit Migration Camp | Northern Serengeti, Tanzania',
    activities: [
      'Full-day private game drive: remote landscapes, river crossings (seasonal)',
      'Packed bush lunch',
      'Exclusive, unhurried exploration',
      'Evening dinner in camp'
    ],
    meals: 'Full Board',
    accommodation: 'Siringit Migration Camp – Luxury Tent',
    images: [
      'https://petnahafricatours.com/wp-content/uploads/2023/01/wildebeest-migration-mara-river-crossing.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Northern Serengeti Highlights',
      features: [
        'Remote region with intimate wildlife',
        'Dramatic seasonal spectacles',
        'Privileged, low-traffic access'
      ]
    }
  },
  {
    day: 8,
    title: 'Departure – Kogatende to Kilimanjaro',
    location: 'Kilimanjaro International Airport (JRO)',
    activities: [
      'Final game drive to Kogatende Airstrip',
      'Packed lunch',
      'Scheduled regional flight to JRO',
      'Optional VIP Meet & Greet for departure'
    ],
    meals: 'Breakfast & Packed Lunch',
    accommodation: 'End of journey',
    images: [
      'https://www.siringit.co.tz/swfiles/files/Siringit-SSC-Camp-view-2025-778-1080x720.webp?w=800',
    ],
    lodgeInfo: {
      name: 'Farewell Tanzania',
      features: [
        'Memorable conclusion with smooth transfers'
      ]
    }
  }
];

export default function LuxuryPrivateSafariPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const packageName = "8-Day Luxury Private Safari – Tanzania";
  const packagePrice = "$9,735";

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[550px]">
        <ImageWithFallback
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg"
          alt="Luxury Private Safari – Tarangire Escarpment View"
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
              <span className="text-white/70">8-Day Luxury Private Tanzania</span>
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
                    <span>8 Days / 7 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Tanzania (Tarangire to Northern Serengeti)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="fill-[#fbbf24] text-[#fbbf24]" size={18} />
                    <span>5.0 (luxury private)</span>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="text-[14px] mb-1">From</div>
                <div className="text-[42px] sm:text-[52px]">{packagePrice}</div>
                <div className="text-[14px]">per person (based on 2 sharing)</div>
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
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Luxury Private Safari Overview</h2>
                <p className="text-[16px] text-[#686868] leading-[28px] mb-4">
                  An exclusive 8-day private safari for discerning travelers, featuring your own professional guide and dedicated vehicle. Explore Tarangire’s elephant kingdom, Lake Manyara’s tree-climbing lions, Serengeti’s endless plains and migration spectacles, with refined stays at premium lodges/camps.
                </p>
                <p className="text-[16px] text-[#686868] leading-[28px]">
                  Relaxed pace, personalized flexibility, and privileged wildlife access ensure an immersive, high-end experience.
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Duration</div>
                    <div className="text-[16px] text-[#333333]">8 Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Group Size</div>
                    <div className="text-[16px] text-[#333333]">Private (2+)</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Calendar className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Availability</div>
                    <div className="text-[16px] text-[#333333]">Year-round (Migration Jul-Nov peak)</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Start/End</div>
                    <div className="text-[16px] text-[#333333]">Kilimanjaro (JRO)</div>
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
                        alt={`Luxury safari photo ${index + 1}`}
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
                      <div className="text-[18px] text-[#333333]">Per Person (2+ Sharing)</div>
                      <div className="text-[14px] text-[#686868]">Luxury private, double occupancy</div>
                    </div>
                    <div className="text-[24px] text-[#1f751f]">{packagePrice}</div>
                  </div>
                  <p className="text-[14px] text-[#686868] mt-6">
                    * Prices per person, subject to availability. Includes private guide/vehicle and domestic flights. Peak Migration season higher.
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
                      'All meals as outlined (mostly full-board)',
                      'All scheduled domestic flights',
                      'Private safari vehicle & dedicated professional guide',
                      'All park entrance & conservation fees',
                      'Private game drives & activities described',
                      'Packed lunches where noted',
                      'Airport transfers (optional VIP Meet & Greet extra)'
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
                      'Optional VIP Meet & Greet',
                      'Personal expenses, alcoholic beverages outside inclusions',
                      'Tips & gratuities',
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
                    Customize this private luxury safari to your preferences.
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
                      <span>Private guide & vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Premium lodges & camps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Flexible & personalized</span>
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
            <p className="text-[16px] text-[#686868]">5.0 out of 5 for private luxury</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-[15px] p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-[#00AA6C] text-[#00AA6C]" />)}
              </div>
              <h4 className="text-[18px] text-[#333333] mb-2">Unparalleled Privacy</h4>
              <p className="text-[15px] text-[#686868] mb-4 leading-[24px]">
                "Private guide, stunning camps, and migration front-row views made this truly exclusive. Perfection!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f751f] flex items-center justify-center text-white">EL</div>
                <div>
                  <div className="text-[14px] text-[#333333]">Elena L.</div>
                  <div className="text-[13px] text-[#686868]">Europe • Feb 2026</div>
                </div>
              </div>
            </div>
            {/* Add more samples as needed */}
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