// ========== SERVICES SECTION ==========
import { Home, Building2, UtensilsCrossed, Bed, Sofa, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your home into a personalized sanctuary with our expert residential design services.",
    gradient: "from-blue-500/10 to-primary-100"
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that enhance productivity and reflect your brand identity.",
    gradient: "from-emerald-500/10 to-emerald-100"
  },
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchen",
    description: "Custom modular kitchens designed for functionality, aesthetics, and modern living.",
    gradient: "from-amber-500/10 to-amber-100"
  },
  {
    icon: Bed,
    title: "Bedroom Design",
    description: "Crafting serene bedroom spaces that promote relaxation and restful sleep.",
    gradient: "from-violet-500/10 to-violet-100"
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    description: "Design elegant living spaces where comfort meets sophistication for entertaining.",
    gradient: "from-rose-500/10 to-rose-100"
  },
  {
    icon: Briefcase,
    title: "Turnkey Projects",
    description: "Complete end-to-end interior solutions from concept to final execution.",
    gradient: "from-indigo-500/10 to-indigo-100"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-primary-50/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-primary-800 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
            <span className="text-sm font-medium tracking-wider">OUR SERVICES</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Design <span className="font-serif italic text-primary-800">Excellence</span> in Every Detail
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-800 to-gold-500 group-hover:w-full transition-all duration-500" />

                {/* Icon Container */}
                <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-4`}>
                  <Icon className="h-8 w-8 text-primary-800" />
                </div>

                <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-primary-800 font-medium group-hover:gap-3 transition-all"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}