import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, GraduationCap, TreePine, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Volunteer Programs - Ndewedo Tours | Make a Difference in Tanzania',
  description: 'Join our volunteer programs in Tanzania. Work in education, healthcare, conservation, and community development projects.',
}

export default function VolunteerPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Volunteer Programs"
        description="Make a meaningful impact in Tanzania through our community-focused volunteer programs"
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
        ctaText="Apply Now"
        ctaLink="/contact"
      />

      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Our <span className="text-[#1f751f]">Programs</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] shadow-lg p-8">
              <div className="bg-[#1f751f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">Education Programs</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Teach English, mathematics, or other subjects in local schools. Help with after-school programs and educational activities for children of all ages.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-lg p-8">
              <div className="bg-[#1f751f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">Healthcare Support</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Assist in local clinics and health centers. Support medical professionals, participate in health education campaigns, and help improve community health.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-lg p-8">
              <div className="bg-[#1f751f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TreePine className="text-white" size={32} />
              </div>
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">Conservation Projects</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Work on wildlife conservation, reforestation, and environmental education projects. Help protect Tanzania's incredible natural heritage.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-lg p-8">
              <div className="bg-[#1f751f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-[28px] font-semibold text-[#333333] mb-4">Community Development</h3>
              <p className="text-[18px] text-[#686868] leading-[28.8px]">
                Support local communities with infrastructure projects, women's empowerment programs, and sustainable development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              How It <span className="text-[#1f751f]">Works</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="text-[18px] text-[#686868] leading-[28.8px] space-y-6 max-w-[900px] mx-auto">
            <p>
              Our volunteer programs are designed to create meaningful connections between volunteers and local communities while making a real difference. Programs typically run from 2 weeks to 3 months, though longer-term placements can be arranged.
            </p>
            <p>
              All volunteers receive a thorough orientation upon arrival, including cultural training, language basics, and project-specific guidance. You'll be supported by our local team throughout your stay and have the opportunity to explore Tanzania during your free time.
            </p>
            <p>
              Accommodation is provided with local families or in volunteer houses, offering an immersive cultural experience. Meals are included, and you'll have the chance to learn Swahili and participate in community events.
            </p>
            <p className="font-semibold text-[#1f751f]">
              A portion of your program fee directly supports the communities you serve, ensuring sustainable impact beyond your volunteer period.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-semibold text-[#333333] mb-4">
              Requirements & <span className="text-[#1f751f]">Expectations</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[18px] text-[#686868]">
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-[#333333]">Requirements:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Minimum age: 18 years old</li>
                <li>Basic English proficiency</li>
                <li>Flexibility and cultural sensitivity</li>
                <li>Commitment to minimum program duration</li>
                <li>Clean criminal background check</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-[#333333]">What's Included:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Airport pickup and orientation</li>
                <li>Accommodation and meals</li>
                <li>In-country support</li>
                <li>Project placement and supervision</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[40px] font-semibold mb-6">
            Ready to Make a <span className="text-[#c97500]">Difference</span>?
          </h2>
          <p className="text-[20px] mb-8">
            Join us in creating positive change in Tanzania
          </p>
          <Link 
            href="/contact"
            className="bg-[#1f751f] text-white px-10 py-4 rounded-[50px] text-[18px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            Apply Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
