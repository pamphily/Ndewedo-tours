import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Ndewedo Tours',
  description: 'Terms and conditions for booking with Ndewedo Tours.',
}

export default function TermsPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Terms & Conditions" 
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        showCta={false}
      />

      <section className="py-20 px-4">
        <div className="max-w-[900px] mx-auto text-[18px] text-[#686868] leading-[28.8px] space-y-8">
          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Booking Terms</h2>
            <p>
              By booking with Ndewedo Tours, you agree to these terms and conditions. All bookings are subject to availability and confirmation. A deposit is required to secure your reservation, with the balance due as specified in your booking confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Deposit: 30% of total cost upon booking</li>
              <li>Final payment: Due 60 days before departure</li>
              <li>Payment methods: Bank transfer, credit card, PayPal</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>60+ days before departure: Full refund minus 10% processing fee</li>
              <li>30-59 days: 50% refund</li>
              <li>Less than 30 days: No refund</li>
            </ul>
            <p className="mt-4">We strongly recommend purchasing comprehensive travel insurance.</p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Travel Documents</h2>
            <p>
              You are responsible for ensuring you have valid passports, visas, and health documentation. Ndewedo Tours will provide guidance but cannot be held liable for documentation issues.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Health & Safety</h2>
            <p>
              Participants must be in good health and inform us of any medical conditions. We reserve the right to refuse service if health concerns could endanger the individual or group.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Liability</h2>
            <p>
              While we take every precaution to ensure your safety, adventure travel involves inherent risks. Ndewedo Tours acts as an agent and is not liable for injuries, losses, or damages incurred during your trip.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Changes to Itinerary</h2>
            <p>
              We reserve the right to modify itineraries due to weather, safety concerns, or other unforeseen circumstances. Every effort will be made to provide comparable alternatives.
            </p>
          </div>

          <p className="text-[14px] text-[#686868]">Last updated: November 2025</p>
        </div>
      </section>
    </div>
  )
}
