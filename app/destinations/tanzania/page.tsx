import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { MapPin, ArrowRight, Clock, Star, Calendar, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tanzania Safari Tours | Ndewedo Tours',
  description: 'Explore Tanzania - the safari capital of Africa. Visit Serengeti, Ngorongoro Crater, Tarangire, and more iconic destinations.',
}

const destinations = [
  {
    name: 'Serengeti National Park',
    description: 'Home to the Great Migration and abundant wildlife',
    image: 'https://images.unsplash.com/photo-1528275646751-ff237d1cd935?w=800',
    slug: 'serengeti',
    highlights: ['Great Migration', 'Big Five', 'Endless Plains']
  },
  {
    name: 'Ngorongoro Crater',
    description: 'World\'s largest inactive volcanic caldera',
    image: 'https://images.unsplash.com/photo-1516494982030-fda424f96b59?w=800',
    slug: 'ngorongoro',
    highlights: ['Black Rhino', 'Dense Wildlife', 'UNESCO Site']
  },
  {
    name: 'Tarangire National Park',
    description: 'Land of giants with massive elephant herds',
    image: 'https://images.unsplash.com/photo-1612374300229-5c15f80cbf57?w=800',
    slug: 'tarangire',
    highlights: ['Elephant Herds', 'Baobab Trees', 'Bird Paradise']
  },
  {
    name: 'Lake Manyara National Park',
    description: 'Tree-climbing lions and flamingo-filled shores',
    image: 'https://images.unsplash.com/photo-1621977962615-5c8df6c0e43e?w=800',
    slug: 'lake-manyara',
    highlights: ['Tree-climbing Lions', 'Flamingos', 'Forest Wildlife']
  },
  {
    name: 'Zanzibar Island',
    description: 'Pristine beaches and historic Stone Town',
    image: 'https://images.unsplash.com/photo-1707296014163-488ae4006ce7?w=800',
    slug: 'zanzibar',
    highlights: ['White Beaches', 'Spice Tours', 'Historic Culture']
  },
  {
    name: 'Mount Kilimanjaro',
    description: 'Africa\'s highest peak at 5,895 meters',
    image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?w=800',
    slug: 'kilimanjaro',
    highlights: ['Summit Climb', 'Multiple Routes', 'Unique Ecosystems']
  }
];

const activities = [
  {
    title: 'Game Drives',
    description: 'Experience wildlife viewing in 4x4 safari vehicles with expert guides',
    icon: '🚙'
  },
  {
    title: 'Hot Air Balloon Safari',
    description: 'Float over the Serengeti plains at sunrise for breathtaking views',
    icon: '🎈'
  },
  {
    title: 'Walking Safaris',
    description: 'Get up close with nature on guided bush walks',
    icon: '🥾'
  },
  {
    title: 'Cultural Tours',
    description: 'Visit Maasai villages and learn about traditional lifestyles',
    icon: '🏘️'
  },
  {
    title: 'Bird Watching',
    description: 'Discover over 1,000 bird species across diverse habitats',
    icon: '🦅'
  },
  {
    title: 'Photography Safari',
    description: 'Capture stunning wildlife and landscape moments',
    icon: '📸'
  }
];

const featuredSafaris = [
  {
    title: '5-Day Serengeti & Ngorongoro Safari',
    duration: '5 Days / 4 Nights',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?w=800',
    rating: 4.9,
    reviews: 127,
    href: '/safaris/packages/serengeti-5-day'
  },
  {
    title: '7-Day Northern Circuit Safari',
    duration: '7 Days / 6 Nights',
    price: '$3,250',
    image: 'https://images.unsplash.com/photo-1689479665582-51d0c25215b7?w=800',
    rating: 5.0,
    reviews: 89,
    href: '/safaris/wildlife'
  },
  {
    title: '3-Day Tarangire & Ngorongoro',
    duration: '3 Days / 2 Nights',
    price: '$1,650',
    image: 'https://images.unsplash.com/photo-1612374300229-5c15f80cbf57?w=800',
    rating: 4.8,
    reviews: 56,
    href: '/safaris/wildlife'
  }
];

export default function TanzaniaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?w=1600"
          alt="Tanzania Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto text-white">
            <div className="text-[14px] mb-3 flex items-center gap-2">
              <MapPin size={16} />
              <span>East Africa</span>
            </div>
            <h1 className="text-[42px] sm:text-[56px] md:text-[68px] mb-4">
              Discover Tanzania
            </h1>
            <p className="text-[18px] sm:text-[22px] max-w-[800px] opacity-90 leading-relaxed">
              The safari capital of Africa, home to the Serengeti, Mount Kilimanjaro, and pristine beaches of Zanzibar
            </p>
          </div>
        </div>
      </section>

      {/* Why Visit Tanzania */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-6">
                Why Visit <span className="text-[#1f751f]">Tanzania</span>?
              </h2>
              <div className="space-y-4 text-[16px] text-[#686868] leading-[28px]">
                <p>
                  Tanzania is the ultimate safari destination, offering unparalleled wildlife experiences in some of Africa's most iconic national parks. From the vast plains of the Serengeti to the breathtaking Ngorongoro Crater, Tanzania delivers unforgettable encounters with nature.
                </p>
                <p>
                  Home to the Great Migration - one of the world's most spectacular natural events - Tanzania showcases millions of wildebeest and zebras on their annual journey. The country also boasts Africa's highest peak, Mount Kilimanjaro, and the idyllic beaches of Zanzibar.
                </p>
                <p>
                  With over 25% of its land dedicated to conservation, Tanzania offers the most authentic safari experience, combining abundant wildlife, diverse landscapes, and rich cultural heritage.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">16</div>
                  <div className="text-[16px] text-[#686868]">National Parks</div>
                </div>
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">2M+</div>
                  <div className="text-[16px] text-[#686868]">Wildebeest Migration</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-[25px] overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1689479665582-51d0c25215b7?w=800"
                  alt="Tanzania Wildlife"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Grid */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-4">
              Top <span className="text-[#1f751f]">Destinations</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#1f751f] rounded-[30px] mx-auto mb-6" />
            <p className="text-[16px] sm:text-[18px] text-[#686868] max-w-[700px] mx-auto">
              Explore Tanzania's most iconic national parks and destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                href={`/destinations/${destination.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-[280px]">
                  <ImageWithFallback 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-[24px] text-[#333333] mb-2 group-hover:text-[#1f751f] transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, i) => (
                      <span key={i} className="text-[13px] bg-[#1f751f]/10 text-[#1f751f] px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#1f751f]">
                    <span className="text-[15px]">Explore Park</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Activities */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-4">
              Signature <span className="text-[#1f751f]">Activities</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#1f751f] rounded-[30px] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-[20px] p-6 hover:shadow-lg transition-shadow">
                <div className="text-[48px] mb-4">{activity.icon}</div>
                <h3 className="text-[22px] text-[#333333] mb-3">{activity.title}</h3>
                <p className="text-[15px] text-[#686868] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-4">
              Featured <span className="text-[#1f751f]">Tanzania Safaris</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#1f751f] rounded-[30px] mx-auto mb-6" />
            <p className="text-[16px] sm:text-[18px] text-[#686868] max-w-[700px] mx-auto">
              Our most popular safari packages exploring Tanzania's best destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSafaris.map((safari, index) => (
              <Link
                key={index}
                href={safari.href}
                className="group bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-[240px]">
                  <ImageWithFallback 
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-[10px] shadow-lg">
                    <div className="text-[20px] text-[#1f751f]">{safari.price}</div>
                    <div className="text-[11px] text-[#686868]">per person</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[22px] text-[#333333] mb-3 group-hover:text-[#1f751f] transition-colors">
                    {safari.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-[14px] text-[#686868]">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{safari.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="fill-[#fbbf24] text-[#fbbf24]" size={16} />
                      <span>{safari.rating} ({safari.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#1f751f]">
                    <span className="text-[15px]">View Details</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/safaris"
              className="inline-flex items-center gap-2 bg-[#1f751f] text-white px-8 py-4 rounded-[50px] hover:bg-[#0f440f] transition-colors"
            >
              View All Tanzania Safaris
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-4">
              Best Time to <span className="text-[#1f751f]">Visit</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#1f751f] rounded-[30px] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1f751f]/10 to-white rounded-[20px] p-8 border-2 border-[#1f751f]">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#1f751f]" size={32} />
                <h3 className="text-[26px] text-[#333333]">Dry Season</h3>
              </div>
              <div className="text-[18px] text-[#1f751f] mb-4">June - October</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                The best time for wildlife viewing. Animals congregate around water sources, making them easier to spot. The Great Migration river crossings occur during July-September.
              </p>
              <ul className="space-y-2">
                {['Excellent wildlife viewing', 'Dry and sunny weather', 'Great Migration crossings', 'Peak tourist season'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-[20px] p-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#686868]" size={32} />
                <h3 className="text-[26px] text-[#333333]">Green Season</h3>
              </div>
              <div className="text-[18px] text-[#686868] mb-4">November - May</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                The wet season brings lush landscapes and newborn animals. Fewer tourists and lower prices. November-December and March-May are ideal for photography.
              </p>
              <ul className="space-y-2">
                {['Calving season (January-February)', 'Lush green landscapes', 'Fewer tourists, better rates', 'Excellent bird watching'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[36px] sm:text-[42px] mb-6">
            Ready to Explore <span className="text-[#c97500]">Tanzania</span>?
          </h2>
          <p className="text-[18px] mb-8 max-w-[700px] mx-auto opacity-90">
            Let our experts help you plan the perfect Tanzania safari tailored to your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inquire"
              className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center justify-center gap-2"
            >
              Plan Your Safari
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[50px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
