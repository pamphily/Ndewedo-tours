import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Privacy Policy - Ndewedo Tours',
  description: 'Ndewedo Tours privacy policy and data protection information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Privacy Policy" 
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        showCta={false}
      />

      <section className="py-20 px-4">
        <div className="max-w-[900px] mx-auto text-[18px] text-[#686868] leading-[28.8px] space-y-8">
          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Introduction</h2>
            <p>
              At Ndewedo Tours, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Name, email address, and contact details</li>
              <li>Travel preferences and booking information</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication records and feedback</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Process bookings and provide our services</li>
              <li>Communicate with you about your trip</li>
              <li>Send updates and promotional materials (with your consent)</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#333333] mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@ndewedotours.com
            </p>
          </div>

          <p className="text-[14px] text-[#686868]">Last updated: November 2025</p>
        </div>
      </section>
    </div>
  )
}
