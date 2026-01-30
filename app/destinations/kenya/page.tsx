import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { MapPin, ArrowRight, Clock, Star, Calendar, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kenya Safari Tours | Ndewedo Tours',
  description: 'Discover Kenya - home of the Maasai Mara, Amboseli elephants, and pristine beaches. Experience the Great Migration and world-class safaris.',
}

const destinations = [
  {
    name: 'Maasai Mara National Reserve',
    description: 'Witness the Great Migration and predator action',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    slug: 'maasai-mara',
    highlights: ['Great Migration', 'Big Cats', 'Mara River Crossings']
  },
  {
    name: 'Amboseli National Park',
    description: 'Elephants with Kilimanjaro backdrop',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
    slug: 'amboseli',
    highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Bird Paradise']
  },
  {
    name: 'Tsavo National Parks',
    description: 'Kenya\'s largest wilderness area',
    image: 'https://images.unsplash.com/photo-1551191164-a3ee38bff49a?w=800',
    slug: 'tsavo',
    highlights: ['Red Elephants', 'Diverse Landscape', 'Big Game']
  },
  {
    name: 'Lake Nakuru National Park',
    description: 'Flamingos and rhino sanctuary',
    image: 'https://images.unsplash.com/photo-1621977962615-5c8df6c0e43e?w=800',
    slug: 'lake-nakuru',
    highlights: ['Pink Flamingos', 'Black Rhinos', 'Tree-climbing Lions']
  },
  {
    name: 'Diani Beach',
    description: 'Pristine white sand and turquoise waters',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    slug: 'diani-beach',
    highlights: ['White Sand Beaches', 'Water Sports', 'Coral Reefs']
  },
  {
    name: 'Samburu National Reserve',
    description: 'Unique wildlife in arid landscapes',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    slug: 'samburu',
    highlights: ['Special Five', 'Unique Species', 'Cultural Encounters']
  }
];

const activities = [
  {
    title: 'Hot Air Balloon Safaris',
    description: 'Float over the Mara plains at sunrise for unforgettable views and champagne breakfast',
    icon: '🎈'
  },
  {
    title: 'Bush Breakfasts',
    description: 'Enjoy gourmet meals in the wilderness surrounded by nature',
    icon: '🍳'
  },
  {
    title: 'Maasai Village Visits',
    description: 'Experience authentic Maasai culture and traditional ceremonies',
    icon: '🏘️'
  },
  {
    title: 'Game Drives',
    description: 'Expert-guided wildlife viewing in open 4x4 safari vehicles',
    icon: '🚙'
  },
  {
    title: 'Beach & Safari Combos',
    description: 'Perfect blend of wildlife adventure and coastal relaxation',
    icon: '🏖️'
  },
  {
    title: 'Photography Safaris',
    description: 'Capture stunning wildlife and landscape moments with expert guidance',
    icon: '📸'
  }
];

export default function KenyaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600"
          alt="Kenya Safari"
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
              Discover Kenya
            </h1>
            <p className="text-[18px] sm:text-[22px] max-w-[800px] opacity-90 leading-relaxed">
              Home of the Maasai Mara, stunning Amboseli elephants, and the magnificent Great Migration
            </p>
          </div>
        </div>
      </section>

      {/* Why Visit Kenya */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-6">
                Why Visit <span className="text-[#1f751f]">Kenya</span>?
              </h2>
              <div className="space-y-4 text-[16px] text-[#686868] leading-[28px]">
                <p>
                  Kenya is synonymous with safari excellence, offering some of the world's most spectacular wildlife experiences. The Maasai Mara National Reserve hosts the dramatic Great Migration river crossings, where millions of wildebeest brave crocodile-infested waters.
                </p>
                <p>
                  From the elephant herds of Amboseli with Mount Kilimanjaro as a backdrop to the pink flamingo shores of Lake Nakuru, Kenya's diverse landscapes promise unforgettable encounters. The country seamlessly blends world-class safaris with pristine Indian Ocean beaches.
                </p>
                <p>
                  Experience rich Maasai culture, enjoy hot air balloon safaris over endless plains, and discover why Kenya remains Africa's premier safari destination.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">60+</div>
                  <div className="text-[16px] text-[#686868]">National Parks & Reserves</div>
                </div>
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">1.5M</div>
                  <div className="text-[16px] text-[#686868]">Wildebeest in Mara</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-[25px] overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1568375393773-248f972a6e50?w=800"
                  alt="Kenya Wildlife"
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
              Explore Kenya's most iconic national parks and coastal destinations
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

      {/* Best Time to Visit */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
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
                <h3 className="text-[26px] text-[#333333]">Migration Season</h3>
              </div>
              <div className="text-[18px] text-[#1f751f] mb-4">July - October</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                The best time to witness the Great Migration river crossings in the Maasai Mara. Dramatic predator-prey interactions and excellent game viewing throughout Kenya's parks.
              </p>
              <ul className="space-y-2">
                {['Mara River crossings', 'Exceptional wildlife viewing', 'Clear sunny weather', 'Peak safari season'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#686868]" size={32} />
                <h3 className="text-[26px] text-[#333333]">Beach Season</h3>
              </div>
              <div className="text-[18px] text-[#686868] mb-4">December - March</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                Perfect for combining safari with beach relaxation. Warm, dry weather ideal for coastal getaways. Good wildlife viewing and fewer crowds than peak season.
              </p>
              <ul className="space-y-2">
                {['Ideal beach weather', 'Safari & beach combo', 'Baby animals born', 'Comfortable temperatures'].map((item, i) => (
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
            Ready to Explore <span className="text-[#c97500]">Kenya</span>?
          </h2>
          <p className="text-[18px] mb-8 max-w-[700px] mx-auto opacity-90">
            Let our experts craft the perfect Kenya safari and beach experience for you
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
