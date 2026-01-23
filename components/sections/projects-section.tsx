
// ========== PROJECTS SECTION ==========
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Modern Villa Residence",
    location: "Mumbai, Maharashtra",
    description: "Contemporary luxury villa with minimalist design and premium finishes",
    image: "/modern-luxury-villa-interior-with-minimalist-desig.jpg",
    category: "Residential"
  },
  {
    id: 2,
    name: "Corporate Office Space",
    location: "Bangalore, Karnataka",
    description: "Sleek corporate office design with collaborative workspaces",
    image: "/modern-corporate-office-interior-with-glass-partit.jpg",
    category: "Commercial"
  },
  {
    id: 3,
    name: "Luxury Apartment",
    location: "Delhi, NCR",
    description: "Elegant apartment design blending comfort with sophistication",
    image: "/luxury-apartment-interior-with-elegant-furniture.jpg",
    category: "Residential"
  },
  {
    id: 4,
    name: "Restaurant Interior",
    location: "Pune, Maharashtra",
    description: "Contemporary restaurant design with warm ambient lighting",
    image: "/modern-restaurant-ambient.png",
    category: "Commercial"
  },
  {
    id: 5,
    name: "Penthouse Suite",
    location: "Hyderabad, Telangana",
    description: "Opulent penthouse with panoramic views and bespoke furnishings",
    image: "/luxury-penthouse-city-view.png",
    category: "Residential"
  },
  {
    id: 6,
    name: "Boutique Hotel",
    location: "Goa, India",
    description: "Coastal-inspired boutique hotel with tropical aesthetics",
    image: "/boutique-hotel-interior-with-tropical-design.jpg",
    category: "Commercial"
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-primary-800 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
            <span className="text-sm font-medium tracking-wider">PORTFOLIO</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Our <span className="font-serif italic text-primary-800">Signature</span> Projects
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of stunning interior design projects across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[500px]">
                {/* Image Container */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                    <Maximize2 className="h-4 w-4" />
                    {project.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Location Badge */}
                    <Badge className="mb-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      {project.location}
                    </Badge>

                    <h3 className="text-2xl font-light text-white mb-3">{project.name}</h3>
                    <p className="text-white/90 mb-6">{project.description}</p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/30 transition-all duration-300 border border-white/30">
                      <span className="font-medium">View Project</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-primary-800 px-8 py-4 text-primary-800 font-medium hover:bg-primary-800 hover:text-white transition-all duration-300"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}