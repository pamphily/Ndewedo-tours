import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { MapPin, ArrowRight, Clock, Check, Calendar, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serengeti National Park Safari | Ndewedo Tours',
  description: 'Explore Serengeti National Park - home to the Great Migration, Big Five wildlife, and endless plains. Plan your Serengeti safari adventure.',
}

export default function SerengetiPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1528275646751-ff237d1cd935?w=1600"
          alt="Serengeti National Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
          <div className="max-w-[1200px] mx-auto text-white">
            <div className="flex items-center gap-2 text-[14px] mb-3">
              <Link href="/destinations/tanzania" className="hover:text-[#c97500]">Tanzania</Link>
              <span>/</span>
              <span>Serengeti National Park</span>
            </div>
            <h1 className="text-[40px] sm:text-[52px] md:text-[60px] mb-4">
              Serengeti National Park
            </h1>
            <p className="text-[18px] sm:text-[20px] max-w-[700px] opacity-90">
              Witness the spectacular Great Migration and endless wildlife on Africa's most famous plains
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-[32px] sm:text-[38px] text-[#333333] mb-6">
                Park <span className="text-[#1f751f]">Overview</span>
              </h2>
              <div className="space-y-4 text-[16px] text-[#686868] leading-[28px]">
                <p>
                  Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, renowned worldwide for the annual Great Migration of over 2 million wildebeest, zebras, and gazelles. The name "Serengeti" comes from the Maasai word "Siringet," meaning "endless plains," and it perfectly describes this vast 14,750 km² ecosystem.
                </p>
                <p>
                  The park offers exceptional year-round wildlife viewing, with large predator populations including lions, leopards, cheetahs, and hyenas. The Serengeti's diverse habitats - from riverine forests to open grasslands and rocky outcrops (kopjes) - support an incredible variety of species.
                </p>
                <p>
                  Beyond the Migration, the Serengeti is home to the "Big Five" and offers some of Africa's best game viewing opportunities. Whether you're witnessing a river crossing, tracking a leopard, or watching a spectacular sunset over the plains, the Serengeti delivers unforgettable wildlife experiences.
                </p>
              </div>

              {/* Key Facts */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 rounded-[15px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-[#1f751f]" size={20} />
                    <h4 className="text-[16px] text-[#333333]">Location</h4>
                  </div>
                  <p className="text-[14px] text-[#686868]">Northern Tanzania, 335 km from Arusha</p>
                </div>
                <div className="bg-gray-50 rounded-[15px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="text-[#1f751f]" size={20} />
                    <h4 className="text-[16px] text-[#333333]">Size</h4>
                  </div>
                  <p className="text-[14px] text-[#686868]">14,750 km² (5,700 sq mi)</p>
                </div>
                <div className="bg-gray-50 rounded-[15px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-[#1f751f]" size={20} />
                    <h4 className="text-[16px] text-[#333333]">Established</h4>
                  </div>
                  <p className="text-[14px] text-[#686868]">1951 - Tanzania's oldest park</p>
                </div>
                <div className="bg-gray-50 rounded-[15px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-[#1f751f]" size={20} />
                    <h4 className="text-[16px] text-[#333333]">UNESCO Status</h4>
                  </div>
                  <p className="text-[14px] text-[#686868]">World Heritage Site since 1981</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#1f751f]/10 to-white rounded-[20px] p-6 border-2 border-[#1f751f] sticky top-24">
                <h3 className="text-[24px] text-[#333333] mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[14px] text-[#686868] mb-1">Annual Visitors</div>
                    <div className="text-[24px] text-[#1f751f]">350,000+</div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-[14px] text-[#686868] mb-1">Wildlife Species</div>
                    <div className="text-[24px] text-[#1f751f]">500+</div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-[14px] text-[#686868] mb-1">Bird Species</div>
                    <div className="text-[24px] text-[#1f751f]">500+</div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-[14px] text-[#686868] mb-1">Great Migration</div>
                    <div className="text-[20px] text-[#1f751f]">2M+ Animals</div>
                  </div>
                </div>

                <Link
                  href="/safaris"
                  className="w-full bg-[#1f751f] text-white px-6 py-3 rounded-[50px] hover:bg-[#0f440f] transition-colors flex items-center justify-center gap-2 mt-6"
                >
                  View Safaris
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] sm:text-[38px] text-[#333333] mb-8 text-center">
            Top <span className="text-[#1f751f]">Attractions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🦓</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">The Great Migration</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    Witness over 2 million wildebeest, zebras, and gazelles on their annual circular journey. River crossings (July-September) offer dramatic scenes of survival.
                  </p>
                  <ul className="space-y-1">
                    {['Year-round spectacle', 'River crossings July-Sep', 'Calving season Jan-Feb'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🦁</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">Big Cats & Predators</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    Home to Africa's largest lion population (over 3,000), plus leopards, cheetahs, and hyenas. Exceptional predator viewing year-round.
                  </p>
                  <ul className="space-y-1">
                    {['3,000+ lions', 'Leopards on kopjes', 'Cheetah sightings'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🗻</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">Kopjes (Rock Outcrops)</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    Ancient granite formations dotting the plains provide perfect vantage points for leopards and lions, and unique ecosystem islands.
                  </p>
                  <ul className="space-y-1">
                    {['Leopard territories', 'Unique flora & fauna', 'Scenic viewpoints'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🌊</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">Grumeti & Mara Rivers</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    These rivers host the most dramatic wildebeest crossings during the migration. Large crocodile populations create intense wildlife drama.
                  </p>
                  <ul className="space-y-1">
                    {['Wildebeest crossings', 'Giant crocodiles', 'Hippo pools'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🐘</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">Seronera Valley</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    The heart of the Serengeti with year-round wildlife thanks to the Seronera River. Excellent for big cats and elephants.
                  </p>
                  <ul className="space-y-1">
                    {['Year-round wildlife', 'Riverine forest', 'Best cat viewing'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1f751f]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">🦅</span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#333333] mb-2">Bird Watching</h3>
                  <p className="text-[15px] text-[#686868] leading-relaxed mb-3">
                    Over 500 bird species including ostriches, secretary birds, kori bustards, and various raptors. Migratory birds November-April.
                  </p>
                  <ul className="space-y-1">
                    {['500+ bird species', 'Raptors & vultures', 'Migratory species'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                        <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] sm:text-[38px] text-[#333333] mb-8 text-center">
            Best Time to <span className="text-[#1f751f]">Visit</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1f751f]/10 to-white rounded-[20px] p-6 border-2 border-[#1f751f]">
              <h3 className="text-[22px] text-[#333333] mb-3">Migration Season</h3>
              <div className="text-[16px] text-[#1f751f] mb-4">July - October</div>
              <p className="text-[14px] text-[#686868] mb-4">
                Witness dramatic river crossings and large predator concentrations following the herds.
              </p>
              <ul className="space-y-2">
                {['River crossings peak', 'High predator activity', 'Dry season'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-4 h-4 text-[#1f751f] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-[20px] p-6">
              <h3 className="text-[22px] text-[#333333] mb-3">Calving Season</h3>
              <div className="text-[16px] text-[#686868] mb-4">January - February</div>
              <p className="text-[14px] text-[#686868] mb-4">
                Experience the birthing of thousands of wildebeest calves in the southern plains.
              </p>
              <ul className="space-y-2">
                {['8,000 calves born daily', 'Predator action', 'Green landscapes'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-4 h-4 text-[#1f751f] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-[20px] p-6">
              <h3 className="text-[22px] text-[#333333] mb-3">Year-Round</h3>
              <div className="text-[16px] text-[#686868] mb-4">All Seasons</div>
              <p className="text-[14px] text-[#686868] mb-4">
                The Serengeti offers exceptional wildlife viewing throughout the year.
              </p>
              <ul className="space-y-2">
                {['Resident wildlife', 'Big cats always present', 'Varied experiences'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                    <Check className="w-4 h-4 text-[#1f751f] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* View Safaris CTA */}
      <section className="py-12 md:py-16 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] sm:text-[38px] mb-6">
            Ready to Visit the <span className="text-[#c97500]">Serengeti</span>?
          </h2>
          <p className="text-[18px] mb-8 max-w-[700px] mx-auto opacity-90">
            Explore our safari packages featuring Serengeti National Park
          </p>
          <Link
            href="/safaris"
            className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            View Safaris Visiting This Park
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
