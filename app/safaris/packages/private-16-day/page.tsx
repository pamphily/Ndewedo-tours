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
  'https://www.gettyimages.com/detail/photo/hot-air-balloons-at-sunrise-over-plains-royalty-free-image/146601959?w=1080', // Maasai Mara balloon sunrise
  'https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg?w=1080', // Tarangire elephants & baobabs
  'https://www.safaribookings.com/ngorongoro/photos/large/view-over-the-crater-floor-from-the-rim.jpg?w=1080', // Ngorongoro Crater rim/wildlife
  'https://www.redetoursandsafaris.com/blog/images/blog-maasai-jumping-dance-3.webp?w=1080', // Maasai traditional dance
  'https://waybird.imgix.net/lodges/kodak_images/000/001/998/original/sea-cliff-zanzibar-tanzania-timbuktu-travel.jpg?w=1080', // Seacliff infinity pool sunset
  'https://thumbs.dreamstime.com/b/hells-gate-national-park-kenya-123456789.jpg?w=1080', // Hell's Gate walking safari
];

const itinerary = [
  {
    day: 0,
    title: 'Arrival in Nairobi, Kenya',
    location: 'Nairobi Boutique Lodge/Hotel | Nairobi, Kenya',
    activities: [
      'Arrival at Jomo Kenyatta International Airport (NBO)',
      'Private driver/guide welcome and transfer',
      'Itinerary briefing and orientation',
      'Rest, light lunch if early arrival, optional short walk',
      'Dinner at hotel or recommended local restaurant'
    ],
    meals: 'Dinner included (breakfast if early)',
    accommodation: 'Nairobi (3–4 star or boutique lodge)',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/2d/34/c6/hemingways-nairobi-aerial.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Nairobi Accommodation Information',
      features: [
        'Comfortable urban/boutique option in Karen/Westlands',
        'Restful start after international travel',
        'Briefing for personalized safari'
      ]
    }
  },
  {
    day: 1,
    title: 'Nairobi – Relaxing Day',
    location: 'Nairobi Boutique Lodge/Hotel | Nairobi, Kenya',
    activities: [
      'Full day at leisure for rest or acclimatization',
      'Wait for any group arrivals/delays',
      'Optional short excursions or hotel relaxation'
    ],
    meals: 'Meals as per hotel',
    accommodation: 'Same Nairobi lodge/hotel',
    images: [
      'https://www.gettyimages.com/detail/photo/nairobi-skyline-royalty-free-image/987654321?w=800',
    ],
    lodgeInfo: {
      name: 'Relaxation Day',
      features: [
        'Gentle pace before safari begins',
        'Comfortable base in Nairobi'
      ]
    }
  },
  {
    day: 2,
    title: 'Nairobi to Maasai Mara',
    location: 'Maasai Mara Lodge | Maasai Mara, Kenya',
    activities: [
      'Early breakfast and drive through Great Rift Valley',
      'Scenic viewpoints and stops',
      'Arrival and check-in',
      'Late afternoon game drive: big cats, plains game'
    ],
    meals: 'Full board',
    accommodation: 'Maasai Mara lodge',
    images: [
      'https://www.gettyimages.com/detail/photo/hot-air-balloons-sunrise-masai-mara-kenya-royalty-free-image/10194490?w=800',
    ],
    lodgeInfo: {
      name: 'Maasai Mara Lodge Information',
      features: [
        'Prime location for wildlife viewing',
        'Comfortable accommodation in reserve'
      ]
    }
  },
  {
    day: 3,
    title: 'Full-Day Game Drives in Maasai Mara',
    location: 'Maasai Mara Lodge | Maasai Mara, Kenya',
    activities: [
      'Early morning game drive for predator activity',
      'Full-day safari with picnic or lodge lunch',
      'Optional Maasai village visit: customs, histories, exchange',
      'Sunset drive for photography'
    ],
    meals: 'Full board',
    accommodation: 'Same Maasai Mara lodge',
    images: [
      'https://www.redetoursandsafaris.com/blog/images/blog-maasai-jumping-dance-3.webp?w=800',
    ],
    lodgeInfo: {
      name: 'Maasai Mara Immersion',
      features: [
        'Extensive wildlife viewing',
        'Cultural engagement option'
      ]
    }
  },
  {
    day: 4,
    title: 'Maasai Mara to Lake Nakuru',
    location: 'Lake Nakuru Lodge | Lake Nakuru, Kenya',
    activities: [
      'Breakfast and drive to Lake Nakuru (5–6 hours)',
      'Afternoon/evening game drive: rhinos, flamingos, giraffes',
      'Birdlife and scenic shores'
    ],
    meals: 'Full board',
    accommodation: 'Lake Nakuru lodge',
    images: [
      'https://www.gettyimages.com/detail/photo/lake-nakuru-flamingos-royalty-free-image/123456789?w=800',
    ],
    lodgeInfo: {
      name: 'Lake Nakuru Lodge Information',
      features: [
        'Proximity to park for rhino/bird viewing',
        'Comfortable stay near lake'
      ]
    }
  },
  {
    day: 5,
    title: 'Nakuru to Naivasha',
    location: 'Lake Naivasha Resort | Naivasha, Kenya',
    activities: [
      'Breakfast and transfer to Naivasha',
      'Lunch and rest at hotel',
      "Afternoon Hell's Gate: game drive, walking safari, optional boat ride/Crescent Island"
    ],
    meals: 'Full board',
    accommodation: 'Lake Naivasha Resort or similar',
    images: [
      'https://www.gettyimages.com/detail/photo/hells-gate-national-park-kenya-royalty-free-image/987654321?w=800',
    ],
    lodgeInfo: {
      name: 'Lake Naivasha Resort Information',
      features: [
        'Lakeside setting for relaxation',
        "Access to Hell's Gate adventures"
      ]
    }
  },
  {
    day: 6,
    title: 'Naivasha to Amboseli',
    location: 'Sentrim Amboseli | Amboseli, Kenya',
    activities: [
      'Breakfast and drive to Amboseli (6 hours)',
      'Late afternoon game drive: elephants, Kilimanjaro views (clear days)'
    ],
    meals: 'Full board',
    accommodation: 'Sentrim Amboseli',
    images: [
      'https://www.gettyimages.com/detail/photo/elephants-amboseli-kilimanjaro-royalty-free-image/123456789?w=800',
    ],
    lodgeInfo: {
      name: 'Sentrim Amboseli Information',
      features: [
        'Prime elephant and Kilimanjaro views',
        'Comfortable lodge in park vicinity'
      ]
    }
  },
  {
    day: 7,
    title: 'Full Day Safari in Amboseli',
    location: 'Sentrim Amboseli | Amboseli, Kenya',
    activities: [
      'Morning safari for elephants/predators',
      'Brunch and rest',
      'Afternoon game drive through marshlands/plains'
    ],
    meals: 'Full board',
    accommodation: 'Same Sentrim Amboseli',
    images: [
      'https://www.gettyimages.com/detail/photo/amboseli-elephants-kilimanjaro-royalty-free-image/987654321?w=800',
    ],
    lodgeInfo: {
      name: 'Amboseli Highlights',
      features: [
        'Iconic elephant herds',
        'Stunning mountain backdrops'
      ]
    }
  },
  {
    day: 8,
    title: 'Cross Boundary to Tanzania: Amboseli to Arusha',
    location: 'Pazuri Inn | Arusha, Tanzania',
    activities: [
      'Breakfast and drive to Namanga border',
      'Cross-border formalities (guide assistance)',
      'Continue to Arusha (4–5 hours)',
      'Check-in, downtime, optional market walk',
      'Tanzania portion briefing'
    ],
    meals: 'Breakfast, Dinner (Half board)',
    accommodation: 'Pazuri Inn',
    images: [
      'https://pazuriinn.com/wp-content/uploads/rooms.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Pazuri Inn Information',
      features: [
        'Comfortable Arusha base',
        'Modern boutique for transition'
      ]
    }
  },
  {
    day: 9,
    title: 'Arusha to Tarangire National Park',
    location: 'Tarangire Tree Top Lodge | Tarangire, Tanzania',
    activities: [
      'Breakfast and drive (2.5–3 hours)',
      'Afternoon game drive: elephant herds, baobabs',
      'Optional evening drive'
    ],
    meals: 'Full board',
    accommodation: 'Tarangire Tree Top Lodge',
    images: [
      'https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Tarangire Tree Top Lodge Information',
      features: [
        'Elevated views in park',
        'Wildlife-rich location'
      ]
    }
  },
  {
    day: 10,
    title: 'Tarangire to Serengeti National Park',
    location: 'Suenos de Africa Luxury Serengeti | Serengeti, Tanzania',
    activities: [
      'Final Tarangire morning drive if time',
      'Drive to Serengeti (4–5 hours)',
      'Late afternoon/sunset game drive'
    ],
    meals: 'Full board',
    accommodation: 'Suenos de Africa luxury Serengeti',
    images: [
      'https://thumbs.dreamstime.com/b/serengeti-sunset-plains-123456789.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Suenos de Africa Luxury Serengeti Information',
      features: [
        'Luxury camp in prime plains',
        'Excellent wildlife access'
      ]
    }
  },
  {
    day: 11,
    title: 'Serengeti: Balloon Flight & Game Drives',
    location: 'Suenos de Africa Luxury Serengeti | Serengeti, Tanzania',
    activities: [
      'Pre-dawn hot air balloon safari (seasonal/weather)',
      'Bush breakfast post-flight',
      'Morning/afternoon game drives',
      'Hippo pool or vantage stops'
    ],
    meals: 'Full board',
    accommodation: 'Same Suenos de Africa luxury Serengeti',
    images: [
      'https://www.gettyimages.com/detail/photo/hot-air-balloons-sunrise-masai-mara-kenya-royalty-free-image/10194490?w=800',
    ],
    lodgeInfo: {
      name: 'Serengeti Balloon Day',
      features: [
        'Aerial wilderness views',
        'Extensive ground exploration'
      ]
    }
  },
  {
    day: 12,
    title: 'Serengeti to Ngorongoro Crater to Mawe Mawe',
    location: 'Mawe Mawe Lodge | Ngorongoro, Tanzania',
    activities: [
      'Breakfast and drive to Ngorongoro',
      'Full day game drive in crater: dense wildlife',
      'Descent and evening at lodge'
    ],
    meals: 'Full board',
    accommodation: 'Mawe Mawe Lodge',
    images: [
      'https://www.safaribookings.com/ngorongoro/photos/large/view-over-the-crater-floor-from-the-rim.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Mawe Mawe Lodge Information',
      features: [
        'Comfortable near crater',
        'Relaxing after full-day safari'
      ]
    }
  },
  {
    day: 13,
    title: 'Mawe Mawe to Maasai Village to Arusha to Zanzibar',
    location: 'Seacliff Resort & Spa | Zanzibar, Tanzania',
    activities: [
      'Breakfast and Maasai village: culture, welcome, BBQ, history',
      'Drive to Arusha airport',
      'Domestic flight to Zanzibar (~1 hour)',
      'Transfer to resort, beach leisure, sunset stroll'
    ],
    meals: 'Breakfast (hotel), Dinner',
    accommodation: 'Seacliff Resort & Spa',
    images: [
      'https://www.redetoursandsafaris.com/blog/images/blog-maasai-jumping-dance-3.webp?w=800',
      'https://waybird.imgix.net/lodges/kodak_images/000/001/998/original/sea-cliff-zanzibar-tanzania-timbuktu-travel.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Seacliff Resort & Spa Information',
      features: [
        'Oceanfront luxury with spa',
        'Perfect relaxation transition'
      ]
    }
  },
  {
    day: 14,
    title: 'Zanzibar: Leisure Day',
    location: 'Seacliff Resort & Spa | Zanzibar, Tanzania',
    activities: [
      'Full day relaxation: beach, pool, spa',
      'Optional resort activities'
    ],
    meals: 'Full board',
    accommodation: 'Seacliff Resort & Spa',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d3/25/e7/pool.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Zanzibar Leisure',
      features: [
        'Unwind after safari',
        'Turquoise waters and serenity'
      ]
    }
  },
  {
    day: 15,
    title: 'Zanzibar: Marine Adventures',
    location: 'Seacliff Resort & Spa | Zanzibar, Tanzania',
    activities: [
      'Snorkeling excursion (coral reefs/Mnemba Atoll)',
      'Optional dolphin swim or other water activities',
      'Evening dinner at resort'
    ],
    meals: 'Half board',
    accommodation: 'Seacliff Resort & Spa',
    images: [
      'https://www.gettyimages.com/detail/photo/zanzibar-snorkeling-royalty-free-image/123456789?w=800',
    ],
    lodgeInfo: {
      name: 'Marine Day',
      features: [
        'Ocean adventures',
        'Coastal indulgence finale'
      ]
    }
  },
  {
    day: 16,
    title: 'Departure from Zanzibar',
    location: 'Zanzibar International Airport',
    activities: [
      'Breakfast with sea views',
      'Leisure time (beach/swim/shopping)',
      'Transfer to airport for onward flight'
    ],
    meals: 'Breakfast',
    accommodation: 'End of journey',
    images: [
      'https://waybird.imgix.net/lodges/kodak_images/000/001/998/original/sea-cliff-zanzibar-tanzania-timbuktu-travel.jpg?w=800',
    ],
    lodgeInfo: {
      name: 'Farewell East Africa',
      features: [
        'Memories of wildlife, culture, and coast'
      ]
    }
  }
];

export default function EastAfricaPrivateSafariPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const packageName = "16-Day Private Safari East Africa: Wildlife, Culture & Coastal Escape";
  const packagePrice = "$8,450";

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[550px]">
        <ImageWithFallback
          src="https://www.gettyimages.com/detail/photo/hot-air-balloons-at-sunrise-over-plains-royalty-free-image/146601959"
          alt="Maasai Mara Balloon Safari – East Africa Private Adventure"
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
              <span className="text-white/70">16-Day Private East Africa Safari</span>
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
                    <span>16 Days / 15 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Kenya, Tanzania & Zanzibar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="fill-[#fbbf24] text-[#fbbf24]" size={18} />
                    <span>5.0 (private group)</span>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="text-[14px] mb-1">From</div>
                <div className="text-[42px] sm:text-[52px]">{packagePrice}</div>
                <div className="text-[14px]">per person (group from 4)</div>
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
                <h2 className="text-[28px] sm:text-[32px] text-[#333333] mb-6">Private East Africa Safari Overview</h2>
                <p className="text-[16px] text-[#686868] leading-[28px] mb-4">
                  A fully private 16-day adventure across Kenya and Tanzania's premier parks (Maasai Mara, Lake Nakuru, Naivasha/Hell's Gate, Amboseli, Tarangire, Serengeti, Ngorongoro), featuring hot air balloon, Maasai cultural engagements, cross-border transit, and a relaxing 3-night Zanzibar beach & spa finale at Seacliff Resort.
                </p>
                <p className="text-[16px] text-[#686868] leading-[28px]">
                  Boutique-to-comfortable lodges, scenic drives through Great Rift Valley, and seamless private guiding ensure an immersive, personalized escape.
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Duration</div>
                    <div className="text-[16px] text-[#333333]">16 Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1f751f]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="text-[#1f751f]" size={24} />
                    </div>
                    <div className="text-[14px] text-[#686868]">Group Size</div>
                    <div className="text-[16px] text-[#333333]">From 4 (Private)</div>
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
                    <div className="text-[16px] text-[#333333]">Nairobi / Zanzibar</div>
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
                        alt={`East Africa safari photo ${index + 1}`}
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
                      <div className="text-[18px] text-[#333333]">Per Person (Group from 4)</div>
                      <div className="text-[14px] text-[#686868]">Private multi-country package</div>
                    </div>
                    <div className="text-[24px] text-[#1f751f]">{packagePrice}</div>
                  </div>
                  <p className="text-[14px] text-[#686868] mt-6">
                    * Prices per person, subject to availability. Includes private guiding, balloon (seasonal), cultural visits, Zanzibar flights/stay. May vary by season/group.
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
                      'Meals as per itinerary (mostly full board)',
                      'Private 4x4 vehicle & professional guide',
                      'Park entrance & conservation fees',
                      'Hot air balloon safari (seasonal/weather)',
                      'Maasai cultural visits & exchanges',
                      'Domestic flight to Zanzibar',
                      'Airport transfers & border assistance'
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
                      'Optional activities not listed',
                      'Alcoholic beverages outside inclusions'
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
                    <div className="text-[14px] text-[#686868]">per person (group from 4)</div>
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
                      Share this Adventure
                    </button>
                  </div>
                </div>

                {/* Need Help Card */}
                <div className="bg-gradient-to-br from-[#0f440f] to-[#1f751f] rounded-[20px] p-6 text-white">
                  <h3 className="text-[22px] mb-3">Need Help Planning?</h3>
                  <p className="text-[15px] mb-4 opacity-90">
                    Customize this private East Africa safari for your group.
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
                      <span>Fully private 4x4 & guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Cultural & balloon experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                      <span>Seamless cross-border & Zanzibar</span>
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
            <p className="text-[16px] text-[#686868]">5.0 out of 5 for private adventure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-[15px] p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-[#00AA6C] text-[#00AA6C]" />)}
              </div>
              <h4 className="text-[18px] text-[#333333] mb-2">Epic Cross-Border Journey</h4>
              <p className="text-[15px] text-[#686868] mb-4 leading-[24px]">
                "Balloon over Serengeti, Maasai dances, and Zanzibar beaches — private guiding made it seamless and unforgettable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f751f] flex items-center justify-center text-white">MK</div>
                <div>
                  <div className="text-[14px] text-[#333333]">Maria K.</div>
                  <div className="text-[13px] text-[#686868]">Germany • Mar 2026</div>
                </div>
              </div>
            </div>
            {/* Add more sample reviews as desired */}
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