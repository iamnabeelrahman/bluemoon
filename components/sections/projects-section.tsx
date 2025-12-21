import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Modern Villa Residence",
    location: "Mumbai, Maharashtra",
    description: "Contemporary luxury villa with minimalist design and premium finishes",
    image: "/modern-luxury-villa-interior-with-minimalist-desig.jpg",
  },
  {
    id: 2,
    name: "Corporate Office Space",
    location: "Bangalore, Karnataka",
    description: "Sleek corporate office design with collaborative workspaces",
    image: "/modern-corporate-office-interior-with-glass-partit.jpg",
  },
  {
    id: 3,
    name: "Luxury Apartment",
    location: "Delhi, NCR",
    description: "Elegant apartment design blending comfort with sophistication",
    image: "/luxury-apartment-interior-with-elegant-furniture.jpg",
  },
  {
    id: 4,
    name: "Restaurant Interior",
    location: "Pune, Maharashtra",
    description: "Contemporary restaurant design with warm ambient lighting",
    image: "/modern-restaurant-ambient.png",
  },
  {
    id: 5,
    name: "Penthouse Suite",
    location: "Hyderabad, Telangana",
    description: "Opulent penthouse with panoramic views and bespoke furnishings",
    image: "/luxury-penthouse-city-view.png",
  },
  {
    id: 6,
    name: "Boutique Hotel",
    location: "Goa, India",
    description: "Coastal-inspired boutique hotel with tropical aesthetics",
    image: "/boutique-hotel-interior-with-tropical-design.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our portfolio of stunning interior design projects across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {project.location}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
