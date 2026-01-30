"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const destinations = [
  {
    name: 'Tanzania',
    description: 'Safari capital of Africa',
    image: 'https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNhZmFyaSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MjU5MzI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'tanzania',
    icon: '🦁'
  },
  {
    name: 'Kenya',
    description: 'Home of the Great Migration',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHNhZmFyaXxlbnwxfHx8fDE3NjM5MzYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'kenya',
    icon: '🐘'
  },
  {
    name: 'Rwanda',
    description: 'Land of a thousand hills',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyd2FuZGElMjBnb3JpbGxhfGVufDF8fHx8MTc2Mzk3NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'rwanda',
    icon: '🦍'
  },
  {
    name: 'Uganda',
    description: 'Pearl of Africa',
    image: 'https://images.unsplash.com/photo-1623944889145-8d3c0e5e4b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1Z2FuZGElMjBnb3JpbGxhfGVufDF8fHx8MTc2Mzk3NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'uganda',
    icon: '🦧'
  },
  {
    name: 'Zanzibar',
    description: 'Pristine beaches and rich culture',
    image: 'https://images.unsplash.com/photo-1707296014163-488ae4006ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNoJTIwdGFuemFuaWF8ZW58MXx8fHwxNzYzOTM2MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'zanzibar',
    icon: '🏝️'
  },
  {
    name: 'Serengeti',
    description: 'Witness the Great Migration',
    image: 'https://images.unsplash.com/photo-1528275646751-ff237d1cd935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBuYXRpb25hbCUyMHBhcmt8ZW58MXx8fHwxNzYzOTM2MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'serengeti',
    icon: '🦓'
  },
  {
    name: 'Ngorongoro',
    description: 'The world\'s largest crater',
    image: 'https://images.unsplash.com/photo-1516494982030-fda424f96b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ29yb25nb3JvJTIwY3JhdGVyfGVufDF8fHx8MTc2MzkzNjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'ngorongoro',
    icon: '🦏'
  }
];

export default function DestinationsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-[#0f440f]" />
        </button>
      )}

      {/* Scroll Right Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-[#0f440f]" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {destinations.map((destination, index) => (
          <Link
            key={index}
            href={`/destinations/${destination.slug}`}
            className="flex-shrink-0 w-[300px] sm:w-[350px] group/card"
          >
            <div className="relative h-[400px] rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-[28px] mb-2">{destination.name}</h3>
                <p className="text-[16px] text-white/90">{destination.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}