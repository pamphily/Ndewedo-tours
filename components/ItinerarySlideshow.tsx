"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '@/imports/svg-qq1qf7danv';

interface ItinerarySlideshowProps {
  images: string[];
}

export default function ItinerarySlideshow({ images }: ItinerarySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-[15px]">
        <ImageWithFallback
          src={images[currentIndex]}
          alt={`Itinerary image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all shadow-lg"
            aria-label="Previous image"
          >
            <svg width="16" height="16" viewBox="0 0 57 57" fill="none">
              <path 
                d={svgPaths.p19aad200} 
                fill="#0f440f"
                transform="rotate(180 28.5 28.5)"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all shadow-lg"
            aria-label="Next image"
          >
            <svg width="16" height="16" viewBox="0 0 57 57" fill="none">
              <path d={svgPaths.p19aad200} fill="#0f440f" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-6 h-2' 
                  : 'bg-white/60 hover:bg-white/80 w-2 h-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
