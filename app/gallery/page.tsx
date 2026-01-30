import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Gallery - Ndewedo Tours | Tanzania Photos',
  description: 'Browse our photo gallery showcasing Tanzania\'s wildlife, landscapes, and cultural experiences.',
}

export default function GalleryPage() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Gallery"
        description="Explore the beauty of Tanzania through our lens"
        image="https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2070&auto=format&fit=crop"
        showCta={false}
      />

      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-[#1f751f] to-[#0f440f] rounded-[20px] overflow-hidden hover:scale-105 transition-transform cursor-pointer" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
