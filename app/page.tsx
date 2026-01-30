import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { ArrowRight, Mountain, Users, Camera, Heart, Star, Award, Shield, Sparkles } from 'lucide-react'
import DestinationsCarousel from '@/components/DestinationsCarousel'
import TailorMadeSafariWizard from '@/components/TailorMadeSafariWizard';


export const metadata: Metadata = {
  title: 'Home - Ndewedo Tours | Safari & Adventure Tours in Tanzania',
  description: 'Discover the magic of Tanzania with Ndewedo Tours. Offering wildlife safaris, Kilimanjaro trekking, cultural experiences, and volunteer opportunities.',
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.asiliaafrica.com/wp-content/uploads/2024/04/30sec-Teaser-2-master-clean.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-[1200px]">
          <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] mb-4 sm:mb-6 leading-tight">
            Experience the Magic of <span className="text-[#c97500]">Tanzania</span>
          </h1>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 max-w-[800px] mx-auto leading-relaxed">
            Embark on unforgettable adventures through wildlife safaris, mountain treks, and authentic cultural experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/safaris"
              className="bg-[#1f751f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-[#0f440f] transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Safaris <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center justify-center"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[45px] text-[#333333] mb-4">
              Your Gateway to <span className="text-[#1f751f]">Authentic Tanzania</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto mb-6" />
            <p className="text-[16px] sm:text-[18px] text-[#686868] max-w-[800px] mx-auto leading-relaxed">
              We specialize in delivering exceptional travel experiences tailored to your needs,
              from thrilling wildlife encounters to cultural immersions and mountain adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Wildlife Safaris */}
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-[200px] mb-6 rounded-[15px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNhZmFyaSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MjU5MzI2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wildlife Safari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Camera className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-[22px] sm:text-[24px] text-[#333333] mb-3">Wildlife Safaris</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868] mb-6 leading-relaxed">
                Witness Africa's incredible wildlife in their natural habitat across Tanzania's renowned national parks.
              </p>
              <Link href="/safaris" className="text-[#1f751f] inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Kilimanjaro Trekking */}
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-[200px] mb-6 rounded-[15px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613061445510-e296bfedb73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWxpbWFuamFybyUyMG1vdW50YWlufGVufDF8fHx8MTc2MjU5OTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kilimanjaro Trekking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Mountain className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-[22px] sm:text-[24px] text-[#333333] mb-3">Kilimanjaro Trekking</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868] mb-6 leading-relaxed">
                Conquer Africa's highest peak with expert guides and well-planned routes for an unforgettable climb.
              </p>
              <Link href="/trekking" className="text-[#1f751f] inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Cultural Tours */}
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-[200px] mb-6 rounded-[15px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603703218844-a526eefafb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWFzYWklMjBjdWx0dXJlfGVufDF8fHx8MTc2MjU5OTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cultural Tours"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-[22px] sm:text-[24px] text-[#333333] mb-3">Cultural Tours</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868] mb-6 leading-relaxed">
                Immerse yourself in local traditions with visits to Maasai tribes, coffee farms, and ancient caves.
              </p>
              <Link href="/cultural-tours" className="text-[#1f751f] inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Volunteer Programs */}
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-[200px] mb-6 rounded-[15px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1535757596010-06fbdd41fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHZvbHVudGVlcnxlbnwxfHx8fDE3NjI1OTk1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Volunteer Programs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-[22px] sm:text-[24px] text-[#333333] mb-3">Volunteer Programs</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868] mb-6 leading-relaxed">
                Make a difference by volunteering in local communities and conservation projects across Tanzania.
              </p>
              <Link href="/volunteer" className="text-[#1f751f] inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559307303-468b4c0d1d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdhbGtpbmclMjBzYXZhbm5hfGVufDF8fHx8MTc2MzkzNjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Safari background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[45px] text-[#333333] mb-4">
              Explore <span className="text-[#1f751f]">East Africa</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto mb-6" />
            <p className="text-[16px] sm:text-[18px] text-[#686868] max-w-[800px] mx-auto leading-relaxed">
              Discover iconic destinations across Tanzania and Kenya, from pristine beaches to majestic mountains
            </p>
          </div>

          <DestinationsCarousel />
        </div>
      </section>

      {/* Tailor-Made Safari Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-[#0f440f] to-[#1f751f] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-[#c97500]" size={32} />
                <span className="text-[14px] uppercase tracking-wider text-[#c97500]">Custom Made</span>
              </div>
              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] mb-6">
                Create Your Dream Safari
              </h2>
              <p className="text-[16px] sm:text-[18px] mb-8 opacity-90 leading-relaxed">
                Every traveler is unique, and so should be their safari. Design your perfect adventure by choosing destinations, activities, accommodations, and dates that match your dreams. Our experts will bring your vision to life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c97500] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="text-[15px]">Fully personalized itineraries</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c97500] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="text-[15px]">Flexible travel dates & duration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c97500] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="text-[15px]">Budget-friendly to luxury options</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c97500] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="text-[15px]">Expert consultation included</span>
                </li>
              </ul>
              <Link
                href="/inquire"
                className="bg-white text-[#0f440f] px-8 py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-[#c97500] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                Build Your Safari
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-[25px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611253114903-4398c61a0f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYyNTk5NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tailor-Made Safari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-[15px] p-4 shadow-lg">
                  <div className="text-[24px] text-[#1f751f]">100%</div>
                  <div className="text-[12px] text-[#686868]">Customizable</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-[15px] p-4 shadow-lg">
                  <div className="text-[24px] text-[#1f751f]">24/7</div>
                  <div className="text-[12px] text-[#686868]">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[45px] text-[#333333] mb-4">
              Why Choose <span className="text-[#1f751f]">Ndewedo Tours</span>
            </h2>
            <div className="h-[5px] w-[100px] bg-[#686868] rounded-[30px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center bg-white rounded-[20px] p-6 md:p-8 shadow-md">
              <div className="bg-[#1f751f]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#1f751f]" size={40} />
              </div>
              <div className="text-[48px] sm:text-[60px] text-[#1f751f] mb-2">15+</div>
              <h3 className="text-[20px] sm:text-[24px] text-[#333333] mb-2">Years Experience</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868]">
                Over 15 years of creating unforgettable African adventures
              </p>
            </div>

            <div className="text-center bg-white rounded-[20px] p-6 md:p-8 shadow-md">
              <div className="bg-[#1f751f]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#1f751f]" size={40} />
              </div>
              <div className="text-[48px] sm:text-[60px] text-[#1f751f] mb-2">5000+</div>
              <h3 className="text-[20px] sm:text-[24px] text-[#333333] mb-2">Happy Travelers</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868]">
                Thousands of satisfied clients from around the world
              </p>
            </div>

            <div className="text-center bg-white rounded-[20px] p-6 md:p-8 shadow-md sm:col-span-2 lg:col-span-1">
              <div className="bg-[#1f751f]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#1f751f]" size={40} />
              </div>
              <div className="text-[48px] sm:text-[60px] text-[#1f751f] mb-2">5.0</div>
              <h3 className="text-[20px] sm:text-[24px] text-[#333333] mb-2">TripAdvisor Rating</h3>
              <p className="text-[15px] sm:text-[16px] text-[#686868]">
                Committed to excellence in every journey we create
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 bg-white rounded-[15px] p-6">
              <div className="bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-[18px] text-[#333333] mb-2">Safe & Secure</h4>
                <p className="text-[14px] text-[#686868]">Licensed tour operator with comprehensive insurance coverage</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-[15px] p-6">
              <div className="bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-[18px] text-[#333333] mb-2">Expert Guides</h4>
                <p className="text-[14px] text-[#686868]">Professional guides with deep knowledge of wildlife and culture</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-[15px] p-6">
              <div className="bg-[#1f751f] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-[18px] text-[#333333] mb-2">Tailored Experiences</h4>
                <p className="text-[14px] text-[#686868]">Customized itineraries to match your interests and budget</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0f440f] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[45px] mb-4 sm:mb-6">
            Ready to Start Your <span className="text-[#c97500]">African Adventure</span>?
          </h2>
          <p className="text-[16px] sm:text-[20px] mb-6 sm:mb-8 max-w-[700px] mx-auto">
            Let us help you plan the perfect Tanzania experience tailored to your dreams
          </p>
          <Link
            href="/contact"
            className="bg-[#1f751f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-[50px] text-[16px] sm:text-[18px] hover:bg-white hover:text-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>

      </section>
    </div>
  )
}