import type { Metadata } from 'next'
import Link from 'next/link'
import { Mountain, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking - Ndewedo Tours | Climb Africa\'s Highest Peak',
  description: 'Climb Mount Kilimanjaro with experienced guides. Multiple routes available including Machame, Marangu, Lemosho, and Rongai routes.',
}

export default function TrekkingPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Kilimanjaro Trekking"
        description="Conquer Africa's highest peak at 5,895 meters with our expert mountain guides"
        image="https://images.unsplash.com/photo-1613061445510-e296bfedb73e?auto=format&fit=crop&q=80&w=2069"
        ctaText="Plan Your Trek"
        ctaLink="/contact"
      />

      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Choose Your <span className="text-[#1f751f]">Route</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Machame Route (7 Days)</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px] mb-4">
                The "Whiskey Route" is one of the most scenic and popular routes. It offers excellent acclimatization and stunning views throughout the journey.
              </p>
              <p className="text-[16px] text-[#333333] font-semibold">Difficulty: Moderate to Challenging</p>
              <p className="text-[16px] text-[#333333] font-semibold">Success Rate: 85%</p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Marangu Route (5-6 Days)</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px] mb-4">
                Known as the "Coca-Cola Route," this is the only route with hut accommodations. It's considered easier but has a lower success rate due to faster ascent.
              </p>
              <p className="text-[16px] text-[#333333] font-semibold">Difficulty: Moderate</p>
              <p className="text-[16px] text-[#333333] font-semibold">Success Rate: 70%</p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Lemosho Route (7-8 Days)</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px] mb-4">
                One of the most beautiful and remote routes, offering excellent acclimatization and diverse scenery. Perfect for those seeking a wilderness experience.
              </p>
              <p className="text-[16px] text-[#333333] font-semibold">Difficulty: Moderate</p>
              <p className="text-[16px] text-[#333333] font-semibold">Success Rate: 90%</p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#1f751f] mb-4">Rongai Route (6-7 Days)</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px] mb-4">
                The only route approaching from the north, offering a different perspective and typically drier conditions. Less crowded than other routes.
              </p>
              <p className="text-[16px] text-[#333333] font-semibold">Difficulty: Moderate</p>
              <p className="text-[16px] text-[#333333] font-semibold">Success Rate: 80%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              What's <span className="text-[#1f751f]">Included</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[18px] text-[#686868]">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Experienced mountain guides and porters</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>All camping equipment (tents, sleeping mats)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Three meals per day plus snacks</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Park fees and rescue fees</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Airport transfers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Pre-trek briefing and equipment check</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Summit certificate upon completion</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#1f751f] text-[24px]">✓</div>
                <p>Emergency oxygen and first aid kit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[40px] font-semibold mb-6">
            Ready to Climb <span className="text-[#c97500]">Kilimanjaro</span>?
          </h2>
          <p className="text-[20px] mb-8">
            Contact us today to start planning your Kilimanjaro adventure
          </p>
          <Link 
            href="/contact"
            className="bg-[#1f751f] text-white px-10 py-4 rounded-[50px] text-[18px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            Plan Your Trek <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
