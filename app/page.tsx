import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ReviewsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
