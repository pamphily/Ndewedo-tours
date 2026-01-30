import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { MapPin, ArrowRight, Calendar, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uganda Gorilla & Wildlife Tours | Ndewedo Tours',
  description: 'Discover Uganda - the Pearl of Africa. Experience gorilla habituation, tree-climbing lions, and the source of the Nile.',
}

const destinations = [
  {
    name: 'Bwindi Impenetrable Forest',
    description: 'Home to half the world\'s mountain gorillas',
    image: 'https://images.unsplash.com/photo-1623944889145-8d3c0e5e4b35?w=800',
    slug: 'bwindi',
    highlights: ['Gorilla Habituation', 'Mountain Gorillas', 'Ancient Rainforest']
  },
  {
    name: 'Queen Elizabeth National Park',
    description: 'Tree-climbing lions and diverse ecosystems',
    image: 'https://images.unsplash.com/photo-1551191164-a3ee38bff49a?w=800',
    slug: 'queen-elizabeth',
    highlights: ['Tree-climbing Lions', 'Boat Safaris', 'Diverse Wildlife']
  },
  {
    name: 'Murchison Falls National Park',
    description: 'The Nile explodes through a narrow gorge',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    slug: 'murchison-falls',
    highlights: ['Nile Boat Cruise', 'Dramatic Waterfall', 'Big Five']
  },
  {
    name: 'Kibale Forest National Park',
    description: 'Primate capital of the world',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    slug: 'kibale-forest',
    highlights: ['Chimpanzee Tracking', '13 Primate Species', 'Forest Walks']
  }
];

const activities = [
  {
    title: 'Gorilla Habituation Experience',
    description: '4-hour encounter spending time with gorilla families being habituated',
    icon: '🦍'
  },
  {
    title: 'Chimpanzee Tracking',
    description: 'Track our closest relatives through Kibale\'s pristine forests',
    icon: '🦧'
  },
  {
    title: 'Nile Boat Cruise',
    description: 'Cruise to the base of Murchison Falls and spot hippos and crocodiles',
    icon: '⛵'
  },
  {
    title: 'Tree-climbing Lions',
    description: 'Witness the rare behavior of lions climbing fig trees in Ishasha',
    icon: '🦁'
  },
  {
    title: 'White Water Rafting',
    description: 'Adventure on the Nile at its source in Jinja',
    icon: '🌊'
  },
  {
    title: 'Bird Watching',
    description: 'Discover over 1,000 bird species including the Shoebill stork',
    icon: '🦅'
  }
];

export default function UgandaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1623944889145-8d3c0e5e4b35?w=1600"
          alt="Uganda Gorillas"
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
              Discover Uganda
            </h1>
            <p className="text-[18px] sm:text-[22px] max-w-[800px] opacity-90 leading-relaxed">
              The Pearl of Africa - home to mountain gorillas, tree-climbing lions, and the source of the Nile
            </p>
          </div>
        </div>
      </section>

      {/* Why Visit Uganda */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] sm:text-[42px] text-[#333333] mb-6">
                Why Visit <span className="text-[#1f751f]">Uganda</span>?
              </h2>
              <div className="space-y-4 text-[16px] text-[#686868] leading-[28px]">
                <p>
                  Uganda offers Africa's most intimate wildlife encounter - the Gorilla Habituation Experience in Bwindi Impenetrable Forest. Unlike standard gorilla trekking, this 4-hour experience lets you observe researchers as they habituate wild gorilla families, providing unprecedented insight into these magnificent creatures.
                </p>
                <p>
                  Home to half the world's remaining mountain gorillas, Uganda combines primate experiences with classic safari adventures. Queen Elizabeth National Park's tree-climbing lions, Murchison Falls' dramatic power, and Kibale's chimpanzee haven create an unmatched diversity of experiences.
                </p>
                <p>
                  From white-water rafting on the Nile to tracking the rare Shoebill stork, Uganda truly lives up to Winston Churchill's description as "the Pearl of Africa."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">~500</div>
                  <div className="text-[16px] text-[#686868]">Mountain Gorillas</div>
                </div>
                <div className="bg-[#1f751f]/5 rounded-[15px] p-6">
                  <div className="text-[42px] text-[#1f751f] mb-2">1,000+</div>
                  <div className="text-[16px] text-[#686868]">Bird Species</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-[25px] overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800"
                  alt="Uganda Wildlife"
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
              Explore Uganda's most iconic national parks and wildlife havens
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
                Ideal for gorilla trekking and general wildlife viewing. Drier forest trails and better road conditions make traveling easier across Uganda's diverse parks.
              </p>
              <ul className="space-y-2">
                {['Easier trekking conditions', 'Better road conditions', 'Peak wildlife viewing', 'Comfortable temperatures'].map((item, i) => (
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
                <h3 className="text-[26px] text-[#333333]">Shoulder Season</h3>
              </div>
              <div className="text-[18px] text-[#686868] mb-4">March - May & October - November</div>
              <p className="text-[15px] text-[#686868] mb-4 leading-relaxed">
                Rainy season offers lush landscapes and excellent bird watching. Fewer tourists and the possibility of discounted gorilla permits makes this appealing.
              </p>
              <ul className="space-y-2">
                {['Potential permit discounts', 'Vibrant green scenery', 'Fewer crowds', 'Best for bird watching'].map((item, i) => (
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
            Ready to Explore <span className="text-[#c97500]">Uganda</span>?
          </h2>
          <p className="text-[18px] mb-8 max-w-[700px] mx-auto opacity-90">
            Experience the Pearl of Africa's incredible gorillas, wildlife, and natural wonders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inquire"
              className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center justify-center gap-2"
            >
              Plan Your Adventure
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
