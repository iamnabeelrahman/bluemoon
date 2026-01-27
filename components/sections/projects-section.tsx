
// ========== PROJECTS SECTION ==========
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const projects = [
  {
    id: 1,
    name: "Interior Design & Space Planning",
    location: "Mumbai, Maharashtra",
    description:
      "Thoughtful layouts, 3D visualization, and ergonomic planning focused on light, airflow, and daily usability.",
    image: "/interior-design-and-planning.jpeg",
    category: "Residential"
  },
  {
    id: 2,
    name: "Living Area & Bedroom InteriorsLiving Area & Bedroom Interiors",
    location: "Bangalore, Karnataka",
    description:
      "TV units, wardrobes, wall paneling, ceilings, lighting, and finishes designed for comfort and longevity.",
    image: "/Living-Area-Bedroom-Interiors.jpeg",
    category: "Commercial"
  },
  {
    id: 3,
    name: "Modular Kitchens & Utility Areas",
    location: "Delhi, NCR",
    description:
      "Workflow-driven kitchen planning with premium hardware, moisture-resistant materials, and smart storage.",
    image: "/luxury-apartment-interior-with-elegant-furniture.jpeg",
    category: "Residential"
  },
  {
    id: 4,
    name: "Bathroom Design & Plumbing Solutions",
    location: "Pturnkne, Maharashtra",
    description:
      "Custom bathrooms with concealed plumbing, waterproofing, premium fittings, and long-term reliability.",
    image: "/modern-bathroom-ambient.jpeg",
    category: "Commercial"
  },
  {
    id: 5,
    name: "Custom Furniture & Carpentry",
    location: "Hyderabad, Telangana",
    description:
      "Bespoke furniture, paneling, partitions, and joinery crafted for Delhi NCR climate conditions.",
    image: "/custom-furniture.jpeg",
    category: "Residential"
  },
  {
    id: 6,
    name: "Turnkey Interior & Civil Execution",
    location: "Goa, Indicustom-furniture.jpega",
    description:
      "Complete interior and civil execution with one team, one timeline, and full accountability.",
    image: "/turnkey-interior.jpeg",
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
                    <h3 className="text-2xl font-light text-white mb-3">
                      {project.name}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {project.description}                    </p>



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