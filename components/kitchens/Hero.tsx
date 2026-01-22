// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative mt-[72px] h-[80vh] w-full">
            {/* Background Image */}
            <Image
                src="/kitchen.jpg"
                alt="Modular Kitchen"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        Modular Kitchens Built to Transform Your Home
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        Strong, stylish & durable kitchens crafted with patented tech to endure the test of fire, water, and time.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="rounded-full bg-primary-800 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-900">
                            Book FREE Consultation
                        </button>
                        <button className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black">
                            CALL NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}