import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main container with full screen height */}
      <div className="relative h-[100svh] min-h-[600px] lg:h-[90vh] xl:h-[85vh]">
        {/* Background Media - Video on mobile, Image on larger screens */}
        <div className="absolute inset-0">
          {/* Video - visible only on mobile */}
          <div className="absolute inset-0 md:hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/luxury-modern-living-room-interior-design-with-ele.jpg"
            >
              <source src="/interiors/homevideo.mp4" type="video/mp4" />
              <source src="/hero-video-mobile.webm" type="video/webm" />
              {/* Fallback to image if video can't load */}
              <Image
                src="/luxury-modern-living-room-interior-design-with-ele.jpg"
                alt="Luxury Interior Design"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={90}
              />
            </video>
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/75" />
          </div>

          {/* Image - visible only on medium screens and up */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/luxury-modern-living-room-interior-design-with-ele.jpg"
              alt="Luxury Interior Design"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            {/* Gradient overlay for image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
          </div>
        </div>

        {/* Pattern Overlay - subtle on mobile */}
        <div className="absolute inset-0 opacity-[0.03] md:opacity-5 bg-[url('/pattern.svg')] bg-repeat" />

        {/* Content Container - centered with better padding */}
        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full max-w-6xl">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Luxury Badge - responsive sizing */}
              <div className="mb-4 md:mb-8 mt-2 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-white/10 px-2.5 py-1 md:px-5 md:py-2.5 backdrop-blur-sm border border-white/20">
                <Sparkles className="h-2.5 w-2.5 md:h-4 md:w-4 text-gold-400" />
                <span className="text-[10px] md:text-sm font-medium text-white/90 tracking-wide">
                  PREMIUM INTERIOR CRAFTSMANSHIP
                </span>
              </div>

              {/* Responsive Typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-white">
                <span className="block font-serif font-extralight text-gold-200 italic tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Building a positive
                </span>
                ambiance
              </h1>

              <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-light text-white/90 leading-relaxed max-w-xl">
                Premium interior design solutions by Bluemoon, where innovation meets artistry for unparalleled elegance.
              </p>

              {/* Responsive CTA Buttons */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/blue.moon.interiors/"
                  target="_blank"
                  className="group relative overflow-hidden rounded-full bg-primary-800 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-white transition-all hover:bg-primary-900 hover:shadow-2xl hover:shadow-primary-800/30 w-full sm:w-auto text-center"
                >
                  <span className="flex items-center justify-center gap-2 md:gap-3">
                    Explore Our Portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a
                  href="/#contact"
                  className="group rounded-full border border-white/30 bg-transparent px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50 w-full sm:w-auto text-center"
                >
                  <span className="flex items-center justify-center gap-2 md:gap-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                    Schedule Consultation
                  </span>
                </a>
              </div>

              {/* Luxury Indicator - responsive hide/show */}
              <div className="mt-8 md:mt-16">
                <div className="hidden sm:flex items-center gap-4 md:gap-6 text-xs md:text-sm text-white/70">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                  <span className="font-light whitespace-nowrap px-2">
                    TIMELESS DESIGNS • PREMIUM MATERIALS • ARTISAN CRAFT
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                {/* Mobile version */}
                <div className="sm:hidden flex flex-col items-center gap-2 text-xs text-white/60">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-8 bg-white/20" />
                    <span>TIMELESS DESIGNS</span>
                    <div className="h-px w-8 bg-white/20" />
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span>PREMIUM MATERIALS</span>
                    <div className="h-px w-4 bg-white/20" />
                    <span>ARTISAN CRAFT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - hidden on mobile, visible on larger screens */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="h-8 md:h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}