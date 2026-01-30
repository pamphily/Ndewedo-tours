import type { Metadata } from 'next'
import { Users, Award, Globe, Heart } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'About Us - Ndewedo Tours | Your Trusted Tanzania Safari Partner',
  description: 'Learn about Ndewedo Tours, your premier Tanzania safari and adventure travel company with over 15 years of experience in creating unforgettable African journeys.',
}

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="About Ndewedo Tours"
        description="Your trusted partner for authentic Tanzanian adventures and cultural experiences"
        image="https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2070&auto=format&fit=crop"
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[40px] font-semibold text-[#333333] mb-6">
                Our <span className="text-[#1f751f]">Story</span>
              </h2>
              <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mb-6" />
              <div className="text-[18px] text-[#686868] leading-[28.8px] space-y-4">
                <p>
                  Ndewedo Tours was founded with a simple mission: to share the incredible beauty and rich culture of Tanzania with the world. With over 15 years of experience, we have become one of the most trusted names in Tanzanian tourism.
                </p>
                <p>
                  Our journey began with a passion for wildlife conservation and cultural preservation. Today, we're proud to offer authentic experiences that benefit local communities while providing our guests with memories that last a lifetime.
                </p>
                <p>
                  We specialize in delivering exceptional travel experiences tailored to your needs, whether you're seeking thrilling wildlife encounters, challenging mountain treks, or immersive cultural exchanges.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[20px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f751f] to-[#0f440f]" />
              <img 
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067&auto=format&fit=crop" 
                alt="Our Story"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Our <span className="text-[#1f751f]">Values</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#1f751f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">Community First</h3>
              <p className="text-[16px] text-[#686868]">
                We work closely with local communities, ensuring our tours benefit the people of Tanzania
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1f751f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">Excellence</h3>
              <p className="text-[16px] text-[#686868]">
                We maintain the highest standards in service, safety, and customer satisfaction
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1f751f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={40} />
              </div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">Sustainability</h3>
              <p className="text-[16px] text-[#686868]">
                We're committed to responsible tourism and environmental conservation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1f751f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">Authenticity</h3>
              <p className="text-[16px] text-[#686868]">
                We provide genuine cultural experiences that honor Tanzanian traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Meet Our <span className="text-[#1f751f]">Team</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto mb-6" />
            <p className="text-[18px] text-[#686868] max-w-[700px] mx-auto">
              Our experienced team of guides and staff are passionate about sharing Tanzania's wonders with you
            </p>
          </div>

          <div className="text-center text-[18px] text-[#686868]">
            <p>
              Our team consists of certified safari guides, experienced mountain guides, cultural liaisons, and support staff who are dedicated to making your journey unforgettable. Each member brings years of experience and deep knowledge of Tanzania's wildlife, geography, and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Our <span className="text-[#1f751f]">Offices</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-[20px] shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">Tanzania Office</h3>
              <div className="text-[18px] text-[#686868] space-y-2">
                <p>P.O.BOX 11677 -Sakina Arusha</p>
                <p>Email: info@ndewedotours.com</p>
                <p>Phone: +255 753 243 280</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-lg">
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">UK Office</h3>
              <div className="text-[18px] text-[#686868] space-y-2">
                <p>KY1 1PA, Kirkcaldy, Scotland, UK</p>
                <p>Email: natalie@ndewedotours.com</p>
                <p>Phone: +44 743 203 8845</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
