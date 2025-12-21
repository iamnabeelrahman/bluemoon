import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-modern-living-room-interior-design-with-ele.jpg" alt="Luxury Interior Design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Transforming Spaces into Timeless Designs
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
          Premium Interior Design Solutions by Bluemoon
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Our Projects
            </Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
