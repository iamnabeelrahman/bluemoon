import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative mt-[72px] h-[80vh] w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0">
                <Image
                    src="/kitchens/ModularKitchens.jpeg"
                    alt="Luxury Modular Kitchen"
                    fill
                    className="object-cover scale-110"
                    priority
                    sizes="100vw"
                    style={{ transform: 'scale(1.1)' }}
                />
            </div>

            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

            {/* Subtle Luxury Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                <div className="max-w-2xl">
                    {/* Luxury Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-gold-400" />
                        <span className="text-sm font-medium text-white/90">Premium Craftsmanship</span>
                    </div>

                    <h1 className="text-5xl font-light leading-tight text-white md:text-6xl">
                        <span className="block font-serif text-gold-200">Artisanal</span>
                        Modular Kitchens
                    </h1>
                    <p className="mt-6 text-xl font-light text-white/90 leading-relaxed">
                        Bespoke designs crafted with precision, blending timeless elegance with
                        patented technology for enduring beauty.
                    </p>

                    {/* Luxury CTA Buttons */}
                    <div className="mt-10 flex flex-wrap items-center gap-6">
                        <button className="group relative overflow-hidden rounded-full bg-primary-800 px-8 py-4 text-base font-medium text-white transition-all hover:bg-primary-900 hover:shadow-2xl hover:shadow-primary-800/30">
                            <span className="flex items-center gap-2">
                                Book Private Consultation
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            {/* Shine Effect */}
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                        </button>

                        <button className="group rounded-full border border-white/30 bg-transparent px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50">
                            <span className="flex items-center gap-2">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Schedule Call
                            </span>
                        </button>
                    </div>

                    {/* Luxury Indicator */}
                    <div className="mt-16 flex items-center gap-6 text-sm text-white/70">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                        <span className="font-light">EXQUISITE DESIGNS • PREMIUM MATERIALS • LIFETIME CRAFTSMANSHIP</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
            </div>
        </section>
    )
}