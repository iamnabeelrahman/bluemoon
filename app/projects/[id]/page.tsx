import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projectDetails: Record<string, any> = {
  "1": {
    name: "Modern Villa Residence",
    location: "Mumbai, Maharashtra",
    description: "Contemporary luxury villa with minimalist design and premium finishes",
    fullDescription:
      "This stunning modern villa showcases the perfect blend of contemporary architecture and timeless design. Featuring open-plan living spaces, floor-to-ceiling windows, and premium Italian marble flooring, every detail has been carefully curated to create a sophisticated living environment.",
    area: "5,000 sq ft",
    duration: "6 months",
    style: "Contemporary Minimalist",
    images: ["/modern-luxury-villa-living-room.png", "/modern-luxury-villa-bedroom.jpg", "/modern-luxury-villa-kitchen.png"],
  },
  "2": {
    name: "Corporate Office Space",
    location: "Bangalore, Karnataka",
    description: "Sleek corporate office design with collaborative workspaces",
    fullDescription:
      "A modern corporate office designed to inspire creativity and collaboration. Featuring ergonomic workstations, breakout spaces, and state-of-the-art meeting rooms with acoustic treatment for optimal productivity.",
    area: "10,000 sq ft",
    duration: "4 months",
    style: "Modern Corporate",
    images: ["/modern-corporate-office-reception.jpg", "/modern-corporate-office-workspace.jpg", "/modern-corporate-office-meeting-room.jpg"],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id] || projectDetails["1"]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{project.name}</h1>
            <Badge variant="secondary" className="text-base">
              {project.location}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Area</p>
                <p className="text-xl font-semibold text-foreground">{project.area}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="text-xl font-semibold text-foreground">{project.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Style</p>
                <p className="text-xl font-semibold text-foreground">{project.style}</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image: string, index: number) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
