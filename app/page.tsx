import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import {BlogsSection} from "@/components/sections/blogs-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { ContactSection } from "@/components/sections/contact-section"

// ========== MAIN HOMEPAGE ==========
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="">
        <HeroSection />
        {/* <ServicesSection /> */}
        <ProjectsSection />
        <BlogsSection />
        <ReviewsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}