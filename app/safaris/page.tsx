import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Binoculars, Star, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Safari Tours - Ndewedo Tours | Tanzania Wildlife Safaris',
  description: 'Experience unforgettable wildlife safaris in Tanzania. Visit Serengeti, Ngorongoro Crater, Tarangire, and more with expert guides.',
}

export default function SafarisPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection 
        title="Tanzania Safari Adventures"
        description="Witness Africa's incredible wildlife in their natural habitat across Tanzania's world-famous national parks"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        ctaText="Plan Your Safari"
        ctaLink="/inquire"
      />

      {/* Safari Types */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] text-[#333333] mb-4">
              Choose Your <span className="text-[#1f751f]">Safari Experience</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link href="/safaris/wildlife" className="group">
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1f751f] to-[#0f440f] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="text-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-[24px] sm:text-[28px] text-[#333333] mb-3 sm:mb-4 group-hover:text-[#1f751f] transition-colors">
                    Wildlife Safaris
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#686868] mb-4 sm:mb-6 leading-relaxed">
                    Explore the Serengeti, Ngorongoro Crater, and Tarangire National Park to witness the Big Five and the Great Migration
                  </p>
                  <div className="text-[#1f751f] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/safaris/photography" className="group">
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1f751f] to-[#0f440f] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Binoculars className="text-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-[24px] sm:text-[28px] text-[#333333] mb-3 sm:mb-4 group-hover:text-[#1f751f] transition-colors">
                    Photography Safaris
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#686868] mb-4 sm:mb-6 leading-relaxed">
                    Specialized safaris designed for photographers with perfect timing and locations for capturing stunning wildlife moments
                  </p>
                  <div className="text-[#1f751f] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/safaris/luxury" className="group">
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1f751f] to-[#0f440f] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="text-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-[24px] sm:text-[28px] text-[#333333] mb-3 sm:mb-4 group-hover:text-[#1f751f] transition-colors">
                    Luxury Safaris
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#686868] mb-4 sm:mb-6 leading-relaxed">
                    Experience the wild in ultimate comfort with premium lodges, private guides, and exclusive access to prime locations
                  </p>
                  <div className="text-[#1f751f] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] text-[#333333] mb-4">
              Popular Safari <span className="text-[#1f751f]">Destinations</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Serengeti National Park</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Home to the Great Migration, the Serengeti offers unparalleled wildlife viewing opportunities. Witness millions of wildebeest, zebras, and gazelles on their annual journey, along with lions, leopards, cheetahs, and elephants.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Ngorongoro Crater</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                A UNESCO World Heritage Site and natural wonder, the Ngorongoro Crater is home to an incredible concentration of wildlife, including the rare black rhino. The crater floor provides a unique safari experience.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Tarangire National Park</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Famous for its large elephant herds and ancient baobab trees, Tarangire offers a more intimate safari experience. The park is especially beautiful during the dry season when wildlife congregates around the Tarangire River.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Lake Manyara National Park</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Known for its tree-climbing lions and spectacular birdlife, Lake Manyara offers diverse ecosystems from groundwater forests to soda lakes. The park is perfect for a day safari or as part of a longer circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] text-[#333333] mb-4">
              What to <span className="text-[#1f751f]">Expect</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="text-[18px] text-[#686868] leading-[28.8px] space-y-6">
            <p>
              Our safari experiences are designed to provide you with the best possible wildlife viewing opportunities while ensuring your comfort and safety. All our safaris include experienced guides who are passionate about wildlife and conservation.
            </p>
            <p>
              We use well-maintained 4x4 vehicles equipped with pop-up roofs for optimal game viewing and photography. Our itineraries are flexible and can be customized to match your interests, whether you're most excited about seeing specific animals, photographing landscapes, or learning about ecosystems.
            </p>
            <p>
              Accommodations range from comfortable tented camps to luxury lodges, all strategically located for easy access to prime wildlife areas. Meals are included and cater to various dietary requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] mb-4 sm:mb-6">
            Ready for Your Safari <span className="text-[#c97500]">Adventure</span>?
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-6 sm:mb-8 max-w-[700px] mx-auto">
            Contact us today to plan your perfect Tanzania safari experience
          </p>
          <Link 
            href="/inquire"
            className="bg-[#1f751f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            Plan Your Safari <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}