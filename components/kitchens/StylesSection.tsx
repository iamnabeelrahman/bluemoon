
// components/StylesSection.tsx
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const styles = [
    {
        title: 'Boho',
        desc: 'Eclectic freedom with vibrant hues and whimsical patterns',
        img: '/styles/boho.jpg',
    },
    {
        title: 'Industrial',
        desc: 'Raw beauty with rugged textures and urban edge',
        img: '/styles/industrial.jpg',
    },
    {
        title: 'Minimal',
        desc: 'Clean lines meet uncluttered spaces',
        img: '/styles/minimal.jpg',
    },
    {
        title: 'Vintage',
        desc: 'Timeless treasures with classic charm',
        img: '/styles/vintage.jpg',
    },
]

export default function StylesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary-800">
                        A Kitchen for Every Style & Home
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Choose from expertly designed kitchen styles to match your vibe & lifestyle
                    </p>
                </div>

                {/* Slider */}
                <div className="relative mt-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {styles.map((style, i) => (
                            <div key={i} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                                <div className="relative h-56">
                                    <Image
                                        src={style.img}
                                        alt={style.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-primary-800">
                                        {style.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">{style.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrows (visual only) */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow">
                        <ChevronLeft />
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow">
                        <ChevronRight />
                    </button>
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <button className="rounded-full bg-primary-800 px-10 py-4 text-lg font-semibold text-white hover:bg-primary-900">
                        Book FREE Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}

