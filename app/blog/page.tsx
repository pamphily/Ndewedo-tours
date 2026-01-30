import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { posts } from './data'

export const metadata: Metadata = {
  title: 'Blog - Ndewedo Tours | Tanzania Travel Tips & Stories',
  description: 'Read our latest articles about Tanzania travel, wildlife, culture, and adventure tips.',
}

export default function BlogPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Blogs"
        description={<>
          Explore our news and blog section to stay informed with the latest insights, stories, and announcements. Discover exciting updates, expert opinions, and behind-the-scenes highlights as we share valuable information and experiences with you.
        </>}
        image="/assets/8c94629a5a5ad4d6d93a9cbc25691273b88a5856.png"
        showCta={false}
      />

      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Recent Updates</h2>
                <div className="w-16 h-1 bg-gray-300 mx-auto my-4"></div>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore recent blogs and updates to gain valuable insights, expert tips, and inspiration for planning your next unforgettable safari adventure</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link href={post.href} key={index}>
                <article className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col border border-gray-100">
                    <div className="relative h-[250px] overflow-hidden">
                        <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-[6px] text-xs font-medium text-gray-700 shadow-sm">
                             {post.date}
                        </div>
                         <div className="absolute top-4 right-4 bg-white/50 p-1.5 rounded-full shadow-sm backdrop-blur-sm group-hover:bg-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 transform -rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-[#444] mb-3 group-hover:text-[#1f751f] transition-colors line-clamp-2 leading-tight">{post.title}</h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>
                    <div className="mt-auto border-t border-dashed border-gray-200 pt-4">
                         <span className="text-[#666] text-xs font-medium uppercase tracking-wider group-hover:text-[#1f751f] transition-colors">Read More</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}