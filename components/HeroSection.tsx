"use client";

import Link from 'next/link';
import svgPaths from "@/imports/svg-qq1qf7danv";

interface HeroSectionProps {
  title: string;
  description?: React.ReactNode;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
  onCtaClick?: () => void;
}

function ArrowRightSvg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]">
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[8.84%_2.96%]">
          <div className="absolute inset-0" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
              <path d={svgPaths.p32591580} stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection({ title, description, image, ctaText = "Learn more", ctaLink = "/contact", showCta = true, onCtaClick }: HeroSectionProps) {
  const CtaButton = () => (
    <div className="box-border content-center flex flex-wrap gap-[20px] items-center justify-center px-[17.6px] py-[16.6px] relative rounded-[50px] shrink-0 border border-solid border-white hover:bg-[#1f751fAA] hover:text-[#0f440f] transition-colors group">
      <div className="flex flex-col font-['Poppins'] justify-center leading-[25.6px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white group-hover:text-[white]">
        {ctaText}
      </div>
      <ArrowRightSvg />
    </div>
  );

  return (
    <section className="relative py-[30px] px-[20px] md:px-[60px]">
      <div className="h-[550px] max-w-[1400px] relative rounded-[20px] shrink-0 w-full mx-auto">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img
              alt={title}
              className="absolute h-full w-full object-cover"
              src={image}
            />
          </div>
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 40, 6, 0) 0%, rgba(6, 40, 6, 0.35) 50%, rgb(7, 25, 7) 100%), linear-gradient(90deg, rgba(6, 40, 6, 0.35) 0%, rgba(6, 40, 6, 0.35) 100%)",
            }}
          />
        </div>
        <div className="flex flex-col justify-end max-w-inherit size-full">
          <div className="box-border content-stretch flex flex-col h-[550px] items-start justify-end max-w-inherit pl-[20px] md:pl-[80px] pr-[20px] md:pr-[280px] py-[50px] relative w-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 max-w-[1040px] w-full">
              <h1 className="flex flex-col font-['Poppins'] font-semibold justify-center md:leading-[64px] leading-tight not-italic relative shrink-0 text-[32px] md:text-[40px] text-white">
                {title}
              </h1>
              {description && (
                <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[10.53px] py-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Poppins'] justify-center leading-[28.8px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-white">
                    {description}
                  </div>
                </div>
              )}
              {showCta && (
                <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0">
                  {onCtaClick ? (
                    <button onClick={onCtaClick}><CtaButton /></button>
                  ) : (
                    <Link href={ctaLink}><CtaButton /></Link>
                  )}
                </div>
              )}
            </div>
            <div className="absolute max-w-[1920px] opacity-80 right-[20px] md:right-[65px] size-[60px] md:size-[80px] top-[20px] md:top-[65px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/assets/5e9bdb8ec0de5cb6f763bdda7c8e2df02f49cb5d.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}