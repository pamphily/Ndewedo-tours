import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Refund Policy - Ndewedo Tours',
  description: 'Refund policy and cancellation terms for Ndewedo Tours.',
}

export default function RefundPolicyPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Refund Policy" 
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        showCta={false}
      />

      <section className="py-20 px-4">
        <div className="max-w-[900px] mx-auto text-[18px] text-[#686868] leading-[28.8px] space-y-8">
          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Cancellation & Refund Policy</h2>
            <p>
              At Ndewedo Tours, we understand that plans can change. Our refund policy is designed to be fair to both our clients and our business operations.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Standard Cancellations</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>60+ days before departure:</strong> Full refund minus 10% administrative fee</li>
              <li><strong>30-59 days before departure:</strong> 50% refund of total cost</li>
              <li><strong>15-29 days before departure:</strong> 25% refund of total cost</li>
              <li><strong>Less than 15 days:</strong> No refund</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Special Circumstances</h2>
            <p>
              In cases of medical emergencies or family bereavement, we will work with you to reschedule or provide a partial refund. Documentation may be required. Travel insurance is strongly recommended to cover these situations.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Force Majeure</h2>
            <p>
              In the event of natural disasters, political unrest, pandemics, or other events beyond our control that make travel impossible or unsafe, we will offer the following options:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Reschedule to a later date with no penalty</li>
              <li>Transfer to an alternative destination</li>
              <li>Issue a travel credit valid for 2 years</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Refund Processing</h2>
            <p>
              Approved refunds will be processed within 14-21 business days. Refunds will be issued to the original payment method used for booking.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Travel Insurance</h2>
            <p>
              We strongly recommend purchasing comprehensive travel insurance that covers trip cancellation, medical emergencies, and other unforeseen circumstances. Most travel insurance policies offer more flexible cancellation coverage than our standard policy.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Contact Us</h2>
            <p>
              For cancellations or questions about refunds, please contact us at info@ndewedotours.com or +255 753 243 280.
            </p>
          </div>

          <p className="text-[14px] text-[#686868]">Last updated: November 2025</p>
        </div>
      </section>
    </div>
  )
}
