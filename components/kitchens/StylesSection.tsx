'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowUpRight, Maximize2 } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const styles = [
    {
        title: 'Modern Veneer Kitchen',
        desc: 'Sleek surfaces with elegant wood finishes',
        img: '/kitchens/Modernveneerkitchen.jpeg',
        features: ['Premium Veneer', 'Soft-close Drawers', 'LED Lighting']
    },
    {
        title: 'Industrial Finish',
        desc: 'Raw textures with urban sophistication',
        img: '/kitchens/Industrialfinishkitchen.jpeg',
        features: ['Metal Accents', 'Concrete Textures', 'Exposed Elements']
    },
    {
        title: 'Boho Themed Kitchen',
        desc: 'Eclectic charm with vibrant patterns',
        img: '/kitchens/Bohothemedkitchen.jpeg',
        features: ['Mixed Materials', 'Artisanal Tiles', 'Natural Elements']
    },
    {
        title: 'Luxury Glam',
        desc: 'Opulent finishes with crystal accents',
        img: '/kitchens/Luxuryglamkitchen.jpeg',
        features: ['Crystal Handles', 'Lacquer Finishes', 'Mirror Surfaces']
    },
    {
        title: 'Modular Masterpiece',
        desc: 'Smart storage with premium organization',
        img: '/kitchens/ModularKitchens.jpeg',
        features: ['Smart Storage', 'Pull-out Systems', 'Custom Modules']
    },
    {
        title: 'Scandi Elegance',
        desc: 'Minimalist design with warm wood tones',
        img: '/kitchens/ScandiKitchens.jpeg',
        features: ['Light Wood', 'Clean Lines', 'Functional Design']
    },
]

export default function StylesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [visibleCount] = useState(1)
    const [autoSlide, setAutoSlide] = useState(true)

    const totalSlides = Math.ceil(styles.length / visibleCount)

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    // Auto slide effect
    useEffect(() => {
        if (!autoSlide) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [autoSlide, nextSlide])

    const startIndex = activeIndex * visibleCount
    const visibleStyles = styles.slice(startIndex, startIndex + visibleCount)

    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute left-10 top-1/4 h-64 w-64 rounded-full bg-primary-200/20 blur-3xl" />
                <div className="absolute right-10 bottom-1/4 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-3 text-primary-800 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
                        <span className="text-sm font-medium tracking-wider">DESIGN PORTFOLIO</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                        Our <span className="font-serif italic text-primary-800">Signature</span> Collections
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Discover exquisite kitchen designs that blend form, function, and timeless elegance
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        onMouseEnter={() => setAutoSlide(false)}
                        onMouseLeave={() => setAutoSlide(true)}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-xl border border-gray-100 hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                        <ChevronLeft className="h-6 w-6 text-primary-800" />
                    </button>

                    <button
                        onClick={nextSlide}
                        onMouseEnter={() => setAutoSlide(false)}
                        onMouseLeave={() => setAutoSlide(true)}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-xl border border-gray-100 hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                        <ChevronRight className="h-6 w-6 text-primary-800" />
                    </button>

                    {/* Carousel Content */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <div className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${activeIndex * 50}%)` }}>
                            {styles.map((style, index) => (
                                <div key={index} className="w-1/2 px-4 flex-shrink-0">
                                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[600px]">
                                        {/* Image with Overlay */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={style.img}
                                                alt={style.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority={index < 2}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                            {/* Pattern Overlay */}
                                            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            {/* Badge */}
                                            <div className="absolute top-8 left-8">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                                                    <Maximize2 className="h-4 w-4" />
                                                    Collection
                                                </span>
                                            </div>

                                            {/* Title and Description */}
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="inline-flex items-center gap-2 mb-4">
                                                    <div className="h-px w-8 bg-white/60" />
                                                    <span className="text-sm font-medium text-white/90">0{index + 1}</span>
                                                </div>

                                                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                                                    {style.title}
                                                </h3>

                                                <p className="text-white/90 text-lg mb-6 max-w-md">
                                                    {style.desc}
                                                </p>

                                                {/* Features */}
                                                <ul className="space-y-3 mb-8">
                                                    {style.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-white/80">
                                                            <div className="h-2 w-2 rounded-full bg-white/80" />
                                                            <span className="text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA Button */}
                                                <button className="group inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/30 transition-all duration-300 border border-white/30">
                                                    <span className="font-medium">View Details</span>
                                                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 lg:hidden">
                        <button
                            onClick={prevSlide}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50"
                        >
                            <ChevronLeft className="h-5 w-5 text-primary-800" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50"
                        >
                            <ChevronRight className="h-5 w-5 text-primary-800" />
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                onMouseEnter={() => setAutoSlide(false)}
                                onMouseLeave={() => setAutoSlide(true)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                                    ? 'w-8 bg-gradient-to-r from-primary-700 to-primary-900'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Auto-play Toggle */}
                <div className="flex justify-center items-center gap-3 mt-6">
                    <div className="flex items-center gap-2">
                        <div className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${autoSlide ? 'bg-primary-800' : 'bg-gray-300'}`}
                            onClick={() => setAutoSlide(!autoSlide)}>
                            <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${autoSlide ? 'translate-x-5' : ''}`} />
                        </div>
                        <span className="text-sm text-gray-600">Auto slide</span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="relative inline-flex flex-col items-center gap-10 p-12 rounded-3xl bg-gradient-to-br from-white to-primary-50/50 border border-gray-100 shadow-xl max-w-2xl mx-auto">
                        {/* Decorative Elements */}
                        <div className="absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-primary-800/20 rounded-tl-2xl" />
                        <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-primary-800/20 rounded-br-2xl" />

                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 text-primary-800 mb-4">
                                <div className="h-px w-6 bg-primary-800" />
                                <span className="text-sm font-medium tracking-wider">PERSONAL DESIGN SESSION</span>
                                <div className="h-px w-6 bg-primary-800" />
                            </div>
                            <h3 className="text-3xl font-light text-gray-900 mb-4">
                                Ready to Create Your <span className="font-serif italic text-primary-800">Dream Kitchen</span>?
                            </h3>
                            <p className="text-gray-600 max-w-lg mx-auto">
                                Schedule a private consultation with our design experts
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-800 to-primary-900 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-primary-800/30 transition-all">
                                <span className="flex items-center gap-3">
                                    Book Design Session
                                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </button>
                            <button className="rounded-full border-2 border-primary-800 px-8 py-4 text-primary-800 font-medium hover:bg-primary-50 transition-all">
                                View Full Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}