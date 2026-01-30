"use client";

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the best time to visit Tanzania?",
      answer: "The best time depends on your interests. June-October is ideal for wildlife viewing (dry season), while December-March is great for bird watching and the Great Migration calving season. January-February offers pleasant weather across the country."
    },
    {
      question: "Do I need a visa to visit Tanzania?",
      answer: "Most visitors need a visa to enter Tanzania. You can obtain a visa on arrival at major entry points or apply online for an e-visa before your trip. Check with your local Tanzanian embassy for specific requirements based on your nationality."
    },
    {
      question: "What vaccinations do I need?",
      answer: "Yellow fever vaccination is required if arriving from a yellow fever endemic country. We recommend vaccinations for hepatitis A & B, typhoid, and routine immunizations. Malaria prophylaxis is advised for most areas. Consult your doctor 4-6 weeks before travel."
    },
    {
      question: "How fit do I need to be for Kilimanjaro?",
      answer: "While Kilimanjaro doesn't require technical climbing skills, good physical fitness is essential. We recommend regular cardio exercise and some hiking experience. The key to success is proper acclimatization, which is why we recommend longer routes."
    },
    {
      question: "What should I pack for a safari?",
      answer: "Essential items include: neutral-colored clothing (khaki, olive, tan), hat, sunscreen, binoculars, camera with zoom lens, insect repellent, and comfortable walking shoes. We'll provide a detailed packing list upon booking."
    },
    {
      question: "Are cultural tours suitable for children?",
      answer: "Yes! Many of our cultural experiences are family-friendly. However, some activities like the ancient caves exploration have physical requirements. Contact us to discuss age-appropriate options for your family."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 60+ days before departure receive a full refund minus a processing fee. 30-59 days: 50% refund. Less than 30 days: no refund. We strongly recommend travel insurance. See our full terms and conditions for details."
    },
    {
      question: "Can you customize tours?",
      answer: "Absolutely! We specialize in tailored experiences. Whether you want to combine safaris with cultural tours, adjust durations, or create a completely custom itinerary, our team will work with you to design your perfect Tanzania adventure."
    }
  ]

  return (
    <div className="w-full">
      <HeroSection 
        title="Frequently Asked Questions"
        description="Find answers to common questions about Tanzania travel"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <section className="py-20 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[20px] font-semibold text-[#333333] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`text-[#1f751f] transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[18px] text-[#686868] leading-[28.8px]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[18px] text-[#686868] mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="/contact"
              className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] text-[18px] hover:bg-[#0f440f] transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
