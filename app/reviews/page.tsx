import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Client Reviews - Ndewedo Tours | Testimonials',
  description: 'Read what our clients say about their Tanzania adventures with Ndewedo Tours.',
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      text: "Our Kilimanjaro trek was absolutely incredible! The guides were professional, supportive, and made sure we were safe every step of the way. The whole experience exceeded our expectations.",
      trip: "Kilimanjaro - Machame Route"
    },
    {
      name: "David Miller",
      location: "United Kingdom",
      rating: 5,
      text: "The safari was a dream come true. We saw all of the Big Five and the Great Migration. Our guide was extremely knowledgeable about wildlife and made every game drive exciting.",
      trip: "7-Day Safari"
    },
    {
      name: "Emma Thompson",
      location: "Australia",
      rating: 5,
      text: "The cultural tours were the highlight of our trip. Meeting the Maasai tribe and experiencing their way of life was truly eye-opening. Ndewedo made sure we had authentic, respectful interactions.",
      trip: "Cultural Tours Package"
    },
    {
      name: "Michael Chen",
      location: "Canada",
      rating: 5,
      text: "From start to finish, everything was perfectly organized. The communication was excellent, accommodations were great, and the experiences were unforgettable. Highly recommend!",
      trip: "Safari & Cultural Combo"
    },
    {
      name: "Lisa Anderson",
      location: "Germany",
      rating: 5,
      text: "Our volunteer experience was incredibly rewarding. The local community was so welcoming, and we felt like we made a real difference. Thank you Ndewedo for facilitating such a meaningful trip!",
      trip: "2-Week Volunteer Program"
    },
    {
      name: "James Wilson",
      location: "Scotland",
      rating: 5,
      text: "Best travel experience ever! The attention to detail, the quality of guides, and the overall organization was impeccable. Already planning our next trip with Ndewedo!",
      trip: "10-Day Tanzania Adventure"
    }
  ]

  return (
    <div className="w-full">
      <HeroSection 
        title="Client Reviews"
        description="Hear from travelers who have experienced the magic of Tanzania with us"
        image="https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2070&auto=format&fit=crop"
        ctaText="Plan Your Trip"
        ctaLink="/contact"
      />

      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-[#c97500] fill-[#c97500]" size={20} />
                  ))}
                </div>
                <p className="text-[16px] text-[#686868] leading-[25.6px] mb-6">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[18px] font-semibold text-[#333333]">{review.name}</p>
                  <p className="text-[14px] text-[#686868]">{review.location}</p>
                  <p className="text-[14px] text-[#1f751f] mt-2">{review.trip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-[rgba(31,117,31,0.04)] to-[rgba(31,117,31,0.04)] rounded-[20px] p-12">
            <h2 className="text-[35px] font-semibold text-[#333333] mb-4">
              Ready to Create Your Own <span className="text-[#1f751f]">Amazing Story</span>?
            </h2>
            <p className="text-[18px] text-[#686868] mb-8 max-w-[600px] mx-auto">
              Join hundreds of satisfied travelers who have experienced Tanzania with Ndewedo Tours
            </p>
            <a 
              href="/contact"
              className="bg-[#1f751f] text-white px-10 py-4 rounded-[50px] text-[18px] hover:bg-[#0f440f] transition-colors inline-block"
            >
              Start Planning Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
