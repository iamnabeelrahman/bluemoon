import { Card, CardContent } from "@/components/ui/card"
import { Award, Palette, Clock, DollarSign, User, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Experienced Designers",
    description: "10+ years of expertise in luxury interior design",
  },
  {
    icon: Palette,
    title: "Premium Materials",
    description: "Only the finest quality materials and finishes",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description: "Committed to meeting deadlines without compromise",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, clear and honest pricing",
  },
  {
    icon: User,
    title: "Dedicated Project Manager",
    description: "Single point of contact throughout your project",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Why Choose Bluemoon</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance">
            We bring excellence, dedication, and creativity to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{feature.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
