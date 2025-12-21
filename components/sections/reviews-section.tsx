import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Bluemoon transformed our home into a masterpiece. Their attention to detail and professionalism is unmatched.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review:
      "Exceptional service from start to finish. The design team understood our vision perfectly and delivered beyond expectations.",
  },
  {
    name: "Amit Patel",
    rating: 5,
    review:
      "Our office space looks absolutely stunning. Bluemoon created an environment that inspires creativity and productivity.",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review: "Professional, creative, and reliable. They completed our project on time with premium quality materials.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Client Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Don't"} just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">{`"${review.review}"`}</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
