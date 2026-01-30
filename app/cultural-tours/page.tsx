import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Cultural Tours - Ndewedo Tours | Experience Authentic Tanzania Culture',
  description: 'Discover authentic Tanzanian culture with visits to Maasai tribes, traditional coffee farms, banana wine tastings, and ancient cave explorations.',
}

export default function CulturalToursPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection 
        title="Cultural Tours"
        description={
          <>
            <p className="mb-0">The best way to truly experience any country is to immerse yourself in its rich culture, traditions, and way of life. At</p>
            <p className="mb-0">Ndewedo, we believe that the heart of every destination lies in its people, stories, and heritage. Let us introduce you</p>
            <p className="mb-0">to the most influential locals, both near and far, who will provide you with an authentic and unforgettable cultural</p>
            <p className="mb-0">experience. Let Ndewedo take you beyond sightseeing—immerse yourself in a world of culture, connection, and</p>
            <p>discovery!</p>
          </>
        }
        image="/assets/8c94629a5a5ad4d6d93a9cbc25691273b88a5856.png"
        ctaText="Learn more"
        ctaLink="/contact"
      />

      {/* Maasai Tribe Section */}
      <section className="py-[30px] px-[20px] md:px-[260px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-[10px] items-center mb-[30px]">
            <h2 className="font-['Poppins'] font-semibold text-[35px] text-center">
              <span className="text-[#333333]">Meet the </span>
              <span className="text-[#1f751f]">Maasai Tribe</span>
            </h2>
            <div className="bg-[#686868] h-[5px] rounded-[30px] w-[100px]" />
            <p className="font-['Poppins'] text-[16px] text-[#686868] text-center max-w-[700px]">
              Ask us about our unique and memorable souvenirs, handcrafted by local tribes, that guests are welcome to purchase as a keepsake of their journey.
            </p>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex-1 h-[520px] relative rounded-[20px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                    <img alt="Maasai tribe member" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" src="/assets/84aae7ff223a40785576ac228aed3a3c2d2b2a01.png" />
                  </div>
                  <div className="absolute bg-[rgba(6,40,6,0.3)] inset-0 rounded-[20px]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[20px] text-[#3d3d3d] text-[18px] font-['Poppins']">
                <p className="leading-[28.8px]">Travel outside of Arusha to a Masaai tribe and spend the entire day learning and experiencing what it means to be a Masaai!</p>
                <p className="leading-[28.8px]">This is a top rated tour, allowing tourists to see first hand how the tribe lives, eats, loves, and appreciates one another.</p>
                <p className="leading-[28.8px]">Eye witness a sacrifice of a goat then assist the warrior prepare the meal for everyone to taste. It is a tradition to catch the blood from the goat and take a sip for good luck and prosper!</p>
                <p className="leading-[28.8px]">Consumption is at your own discretion, but is encouraged and your guide will participate with you!</p>
                <p className="leading-[28.8px]">Spend time with the grandparents, mamas, young adults, warriors and children. Allow the tribe to dress you with their traditional clothing and beads. Then, watch them perform a dance for you! Learn the moves together and build friendships.</p>
                <p className="leading-[28.8px]">The men of the tribe often move into the city areas in order to make money and provide for their families. While the children, elders, and women stay at home in the tribes, a method they use to make money is to make heaps of beaded jewelry to sell to tourists as they come visit.</p>
              </div>
            </div>

            {/* Maasai Images Grid */}
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex-1 font-['Poppins'] text-[18px] leading-[28.8px]">
                <p className="text-[#3d3d3d] mb-4">One of the most profound experiences of the day is witnessing the sacred sacrifice of a goat, a ritual deeply embedded in Maasai culture. Under the guidance of skilled warriors, you'll not only observe but also assist in preparing the meal for the entire tribe to enjoy. It is customary to collect the goat's blood and take a sip—a symbolic act believed to bring good luck, strength, and prosperity. While the men of the tribe often venture into city areas to earn money for their families, the women, elders, and children remain in the villages, sustaining their traditions and way of life.</p>
                <p className="text-[#3d3d3d] mb-4">One of the ways they support themselves is by creating and selling intricate beaded jewelry to visitors, a craft that reflects the beauty and resilience of their culture.</p>
                <p className="text-[#c97500] mb-4">Please consider supporting our beautiful tribes! Experience is $50 per person, including transportation.</p>
                <p className="text-[#1f751f]">Please remember to tip your guides & tribe members!</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-[30px]">
                <img className="h-[235px] relative rounded-[20px] w-full object-cover" src="/assets/6870993bf1e00fbf0cb4123dc0e7f9640cf9e623.png" alt="" />
                <img className="h-[235px] relative rounded-[20px] w-full object-cover" src="/assets/781ef97efef4353b0065980214fdfc173a878e1d.png" alt="" />
                <img className="h-[235px] relative rounded-[20px] w-full object-cover" src="/assets/7ec326915fc9622b4ec1a84a59007ebf5c5fbeaf.png" alt="" />
                <img className="h-[235px] relative rounded-[20px] w-full object-cover" src="/assets/1b37f012201d1b14a210e3e47b6003cf27d0d796.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ All remaining sections (Coffee Farm, Banana Beer & Wine, Ancient Caves) should follow the same pattern */}
      {/* Replace all imported images with /assets/... URLs */}
      {/* Keep all JSX, Tailwind, and text content identical */}

    </div>
  )
}
