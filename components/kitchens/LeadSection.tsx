'use client'

import { ShieldCheck, Flame, FileCheck, Hammer, Award, Home, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const features = [
    { icon: Home, title: '400+ Bespoke Installations', desc: 'Custom crafted kitchens across residences' },
    { icon: Award, title: 'Patented Excellence', desc: 'Proprietary luxury-grade technology' },
    { icon: FileCheck, title: 'Certified Quality', desc: 'Internationally recognized certifications' },
    { icon: ShieldCheck, title: '15-Year Warranty', desc: 'Comprehensive protection guarantee' },
    { icon: Award, title: 'Innovation Patents', desc: 'Multiple design & technology patents' },
    { icon: Flame, title: 'Elite Protection', desc: 'Fire, moisture & termite resistant' },
    { icon: Award, title: 'Innovation Patents', desc: 'Multiple design & technology patents' },
    { icon: Flame, title: 'Elite Protection', desc: 'Fire, moisture & termite resistant' },
]

export default function LeadSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: ''
    })

    return (
        <section className="relative bg-gradient-to-b from-[#f8f4ec] to-white py-24">
            {/* Luxury Background Pattern */}
            <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-5" />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
                {/* Left Features - Luxury Grid */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-4xl font-light text-primary-900">
                            <span className="font-serif italic">Why Choose</span> Our Craftsmanship
                        </h2>
                        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary-800 to-gold-500" />
                    </div>

                    <div className="grid grid-cols-2 gap-7">
                        {features.map((item, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute -left-2 top-0 h-8 w-1 bg-primary-800/20 group-hover:bg-primary-800 transition-all" />
                                <div className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-xl transition-all">
                                    <div className="rounded-lg bg-white p-3 shadow-sm">
                                        <item.icon className="h-6 w-6 text-primary-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Form - Luxury Card */}
                <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 h-24 w-24 border-t-2 border-r-2 border-primary-800/20" />
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-primary-800/20" />

                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-primary-900 to-primary-800 p-8">
                            <h2 className="text-2xl font-light text-white">
                                Begin Your <span className="font-serif italic">Custom Journey</span>
                            </h2>
                            <p className="mt-2 text-sm text-white/80">
                                Schedule a private consultation with our design artisans
                            </p>
                        </div>

                        {/* Form Body */}
                        <form className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none transition-all"
                                    placeholder="Johnathan Smith"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Project Vision</label>
                                <select
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none appearance-none bg-white"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="">Select Budget Range</option>
                                    <option value="5-10">₹5 - 10 Lakhs</option>
                                    <option value="10-20">₹10 - 20 Lakhs</option>
                                    <option value="20+">₹20+ Lakhs</option>
                                    <option value="custom">Custom Quote</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary-800 to-primary-900 py-4 text-lg font-medium text-white transition-all hover:shadow-xl hover:shadow-primary-800/30"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Request Private Preview
                                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </form>

                        {/* Form Footer */}
                        <div className="border-t border-gray-100 p-6 text-center">
                            <p className="text-sm text-gray-500">
                                <span className="text-primary-800">✓</span> All consultations include a custom 3D render
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}