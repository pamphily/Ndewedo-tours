import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { MapPin, ArrowRight, Calendar, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rwanda Gorilla Trekking Tours | Ndewedo Tours',
  description: 'Discover Rwanda - Land of a Thousand Hills. Experience mountain gorilla trekking, chimpanzees, and stunning landscapes.',
}

const destinations = [
  {
    name: 'Volcanoes National Park',
    description: 'Home to the endangered mountain gorillas',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    slug: 'volcanoes-national-park',
    highlights: ['Mountain Gorillas', 'Golden Monkeys', 'Volcanic Peaks']
  },
  {
    name: 'Nyungwe Forest National Park',
    description: 'Ancient rainforest with chimpanzees',
    image: 'https://images.unsplash.com/photo-1551191164-a3ee38bff49a?w=800',
    slug: 'nyungwe-forest',
    highlights: ['Chimpanzee Tracking', 'Canopy Walkway', '13 Primate Species']
  },
  {
    name: 'Lake Kivu',
    description: 'Serene lakeside paradise',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
    slug: 'lake-kivu',
    highlights: ['Beach Relaxation', 'Water Activities', 'Island Exploration']
  },
  {
    name: 'Akagera National Park',
    description: 'Big Five safari destination',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    slug: 'akagera',
    highlights: ['Big Five', 'Savanna Wildlife', 'Boat Safaris']
  }
];

const activities = [
  {
    title: 'Gorilla Trekking',
    description: 'Once-in-a-lifetime encounter with mountain gorillas in their natural habitat',
    icon: '🦍'
  },
  {
    title: 'Chimpanzee Tracking',
    description: 'Follow our closest relatives through pristine rainforest',
    icon: '🦧'
  },
  {
    title: 'Canopy Walkway',
    description: 'Walk above the forest canopy 50 meters high in Nyungwe',
    icon: '🌳'
  },
  {
    title: 'Cultural Experiences',
    description: 'Visit local communities and learn about Rwandan culture',
    icon: '🏘️'
  },
  {
    title: 'Bird Watching',
    description: 'Discover over 700 bird species including Albertine Rift endemics',
    icon: '🦅'
  },
  {
    title: 'Kigali City Tour',
    description: 'Explore Africa\'s cleanest city and learn about Rwanda\'s history',
    icon: '🏛️'
  }
];

export default function RwandaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1600"
          alt="Rwanda Gorillas"
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
              Discover Rwanda
            </h1>
            <p className="text-[18px] sm:text-[22px] max-w-[800px] opacity-90 leading-relaxed">
              Land of a Thousand Hills - home to mountain gorillas, pristine forests, and inspiring conservation
            </p>
          </div>
        </div>
      </section>

      {/* Why Visit Rwanda */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-6">
                Why Visit <span className="text-[#1f751f]">Rwanda</span>?
              </h2>
              <div className="space-y-4 text-[16px] text-[#686868] leading-[28px]">
                <p>
                  Rwanda offers one of the world's most extraordinary wildlife experiences - coming face to face with endangered mountain gorillas in Volcanoes National Park. With only about 1,000 gorillas remaining in the wild, this intimate encounter is truly a once-in-a-lifetime privilege.
                </p>
                <p>
                  Beyond gorillas, Rwanda's ancient Nyungwe Forest harbors chimpanzees and 13 primate species, while Akagera National Park showcases the Big Five in a stunning savanna landscape. The country's remarkable recovery and commitment to conservation make it Africa's most inspiring destination.
                </p>
                <p>
                  Known as "Africa's cleanest country," Rwanda combines incredible wildlife with warm hospitality, scenic beauty, and a profound story of resilience and renewal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">~300</div>
                  <div className="text-[16px] text-[#686868]">Mountain Gorillas</div>
                </div>
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">13</div>
                  <div className="text-[16px] text-[#686868]">Primate Species</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-[25px] overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1623944889145-8d3c0e5e4b35?w=800"
                  alt="Rwanda Gorillas"
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
              Explore Rwanda's most iconic national parks and natural wonders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h3 className="text-[22px] text-[#333333] mb-2 group-hover:text-[#1f751f] transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, i) => (
                      <span key={i} className="text-[12px] bg-[#1f751f]/10 text-[#1f751f] px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#1f751f]">
                    <span className="text-[14px]">Explore</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                <h3 className="text-[26px] text-[#333333]">Dry Season</h3>
              </div>
              <div className="text-[18px] text-[#1f751f] mb-4">June - September & December - February</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                The best time for gorilla trekking with easier hiking conditions. Drier trails make the trek more comfortable, though gorillas can be seen year-round.
              </p>
              <ul className="space-y-2">
                {['Easier trekking conditions', 'Less rainfall', 'Peak tourism season', 'Comfortable temperatures'].map((item, i) => (
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
                <h3 className="text-[26px] text-[#333333]">Green Season</h3>
              </div>
              <div className="text-[18px] text-[#686868] mb-4">March - May & October - November</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                Rainy season brings lush landscapes and lower permit costs. Fewer tourists and excellent photography opportunities with vibrant scenery.
              </p>
              <ul className="space-y-2">
                {['Lower permit prices available', 'Lush green landscapes', 'Fewer crowds', 'Better for photographers'].map((item, i) => (
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
            Ready to Trek with <span className="text-[#c97500]">Gorillas</span>?
          </h2>
          <p className="text-[18px] mb-8 max-w-[700px] mx-auto opacity-90">
            Experience the magic of Rwanda's mountain gorillas and pristine landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inquire"
              className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center justify-center gap-2"
            >
              Plan Your Trek
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
