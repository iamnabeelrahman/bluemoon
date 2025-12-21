import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, UtensilsCrossed, Bed, Sofa, Briefcase } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your home into a personalized sanctuary with our expert residential design services.",
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that enhance productivity and reflect your brand identity.",
  },
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchen",
    description: "Custom modular kitchens designed for functionality, aesthetics, and modern living.",
  },
  {
    icon: Bed,
    title: "Bedroom Design",
    description: "Crafting serene bedroom spaces that promote relaxation and restful sleep.",
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    description: "Design elegant living spaces where comfort meets sophistication for entertaining.",
  },
  {
    icon: Briefcase,
    title: "Turnkey Projects",
    description: "Complete end-to-end interior solutions from concept to final execution.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive interior design solutions tailored to your unique needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
