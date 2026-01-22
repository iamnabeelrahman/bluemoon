'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const styles = [
    {
        title: 'Modern Classic',
        desc: 'Timeless elegance meets contemporary sophistication',
        img: '/styles/classic.jpg',
        features: ['Marble accents', 'Custom cabinetry', 'Integrated lighting']
    },
    {
        title: 'Art Deco Luxe',
        desc: 'Geometric patterns with metallic finishes',
        img: '/styles/art-deco.jpg',
        features: ['Brass detailing', 'Lacquer finishes', 'Glass elements']
    },
    {
        title: 'Minimalist Opulence',
        desc: 'Clean lines with premium materials',
        img: '/styles/minimal.jpg',
        features: ['Hidden storage', 'Touch systems', 'Handle-less']
    },
    {
        title: 'Organic Modern',
        desc: 'Natural materials with refined aesthetics',
        img: '/styles/organic.jpg',
        features: ['Wood textures', 'Stone surfaces', 'Natural light']
    },
]

export default function StylesSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative py-28 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-50/30" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-primary-800 mb-4">
                        <div className="h-px w-8 bg-primary-800" />
                        <span className="text-sm font-medium">DESIGN GALLERY</span>
                        <div className="h-px w-8 bg-primary-800" />
                    </div>
                    <h2 className="text-5xl font-light text-gray-900">
                        <span className="font-serif italic">Signature</span> Collections
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Curated design philosophies that transform spaces into personal sanctuaries
                    </p>
                </div>

                {/* Style Showcase */}
                <div className="relative">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {styles.map((style, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all hover:shadow-2xl"
                                onMouseEnter={() => setActiveIndex(i)}
                            >
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={style.img}
                                        alt={style.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                                    {/* Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm">
                                            0{i + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-light text-gray-900">
                                                {style.title}
                                            </h3>
                                            <p className="mt-2 text-gray-600">{style.desc}</p>
                                        </div>
                                        <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-primary-800 transition-colors" />
                                    </div>

                                    {/* Features */}
                                    <ul className="mt-6 space-y-2">
                                        {style.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary-800" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Hover Button */}
                                    <button className="mt-8 w-full rounded-full border border-primary-800 py-3 text-primary-800 font-medium opacity-0 group-hover:opacity-100 transition-all hover:bg-primary-800 hover:text-white">
                                        Explore Collection
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="mt-12 flex justify-center gap-2">
                        {styles.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-2 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-primary-800' : 'w-2 bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Luxury CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-2">READY TO CREATE YOUR MASTERPIECE?</p>
                            <h3 className="text-3xl font-light text-gray-900">
                                Schedule a <span className="font-serif italic">Private</span> Design Session
                            </h3>
                        </div>
                        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-800 to-primary-900 px-12 py-5 text-lg font-medium text-white shadow-xl hover:shadow-2xl hover:shadow-primary-800/40">
                            <span className="flex items-center gap-3">
                                Begin Your Journey
                                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}