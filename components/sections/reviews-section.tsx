// ========== REVIEWS SECTION ==========
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Mrs Sarika Jain",
    role: "Residential interior",
    rating: 4.8,
    review:
      "Bluemoon transformed our home into a masterpiece. Their attention to detail and professionalism is unmatched.",
    image: "/client1.jpg"
  },
  {
    name: "Mrs Saira Malik",
    role: "Residential interior & Modular kitchent",
    rating: 5,
    review:
      "Exceptional service from start to finish. The design team understood our vision perfectly and delivered beyond expectations.",
    image: "/client2.jpg"
  },
  {
    name: "Mr Ishpreet Singh",
    role: "Home Makeover",
    rating: 5,
    review:
      "Our office space looks absolutely stunning. Bluemoon created an environment that inspires creativity and productivity.",
    image: "/client3.jpg"
  },
  {
    name: "Kalra Residence",
    role: "Turnkey interior and Civil work",
    rating: 4.9,
    review: "Professional, creative, and reliable. They completed our project on time with premium quality materials.",
    image: "/client4.jpg"
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')]"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-primary-800 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
            <span className="text-sm font-medium tracking-wider">CLIENT TESTIMONIALS</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            What Our <span className="font-serif italic text-primary-800">Clients</span> Say
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {"Don't"} just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-primary-800" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8 italic relative z-10">
                "{review.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center text-white font-medium">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-800/10 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}