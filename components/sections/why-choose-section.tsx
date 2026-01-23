
// ========== WHY CHOOSE SECTION ==========
import { Award, Palette, Clock, DollarSign, User, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Experienced Designers",
    description: "10+ years of expertise in luxury interior design",
    color: "text-blue-600"
  },
  {
    icon: Palette,
    title: "Premium Materials",
    description: "Only the finest quality materials and finishes",
    color: "text-emerald-600"
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description: "Committed to meeting deadlines without compromise",
    color: "text-amber-600"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, clear and honest pricing",
    color: "text-violet-600"
  },
  {
    icon: User,
    title: "Dedicated Project Manager",
    description: "Single point of contact throughout your project",
    color: "text-rose-600"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage",
    color: "text-indigo-600"
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-white/80 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/60" />
            <span className="text-sm font-medium tracking-wider">WHY CHOOSE US</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            The <span className="font-serif italic text-gold-200">Bluemoon</span> Difference
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We bring excellence, dedication, and creativity to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`mb-6 ${feature.color}`}>
                  <Icon className="h-10 w-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-500 to-amber-400 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}