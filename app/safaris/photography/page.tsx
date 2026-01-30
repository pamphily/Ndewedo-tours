import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Photography Safaris - Ndewedo Tours',
  description: 'Capture stunning wildlife moments on our specialized photography safari tours.',
}

export default function PhotographySafarisPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#0f440f] to-[#1f751f]">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h1 className="text-[50px] font-semibold mb-6">Photography Safaris</h1>
          <div className="h-[5px] w-[100px] bg-white rounded-[30px] mx-auto mb-6" />
          <p className="text-[20px] max-w-[800px] mx-auto">
            Specialized safaris designed for capturing the perfect shot
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-[18px] text-[#686868] leading-[28.8px]">
          <p className="mb-8">
            Our photography safaris are specifically designed for photographers of all levels. We schedule game drives during golden hour, provide extended time at prime locations, and our guides understand photography needs.
          </p>
          <Link 
            href="/contact"
            className="bg-[#1f751f] text-white px-8 py-4 rounded-[50px] text-[18px] hover:bg-[#0f440f] transition-colors inline-flex items-center gap-2"
          >
            Book Photography Safari <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
