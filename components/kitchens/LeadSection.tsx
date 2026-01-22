// components/LeadSection.tsx
'use client'

import { ShieldCheck, Flame, FileCheck, Hammer, Award, Home } from 'lucide-react'

const features = [
    { icon: Home, title: '400+ Kitchens Installed' },
    { icon: Award, title: 'Patented Technology' },
    { icon: FileCheck, title: '10+ Test Certifications' },
    { icon: ShieldCheck, title: '15 Year Warranty' },
    { icon: Award, title: '4+ Patents Granted' },
    { icon: Flame, title: 'Fire Safe, Moisture & Termite Proof' },
]

export default function LeadSection() {
    return (
        <section className="bg-[#f7efdf] py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
                {/* Left Features */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                    {features.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-3">
                            <item.icon className="h-10 w-10 text-primary-800" />
                            <p className="text-sm font-medium text-gray-800">{item.title}</p>
                        </div>
                    ))}
                </div>

                {/* Right Form */}
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h2 className="text-center text-2xl font-bold text-primary-800">
                        Let's Start Building Your Dream Kitchen
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Fill in your details below & our expert will call you back.
                    </p>

                    <form className="mt-6 space-y-4">
                        <input className="w-full rounded-lg border px-4 py-3" placeholder="Name*" />
                        <input className="w-full rounded-lg border px-4 py-3" placeholder="Email*" />
                        <input className="w-full rounded-lg border px-4 py-3" placeholder="Phone*" />
                        <select className="w-full rounded-lg border px-4 py-3">
                            <option>Budget*</option>
                            <option>Below 5 Lakhs</option>
                            <option>5 - 10 Lakhs</option>
                            <option>10+ Lakhs</option>
                        </select>

                        <button className="mt-4 w-full rounded-full bg-primary-800 py-4 text-lg font-semibold text-white hover:bg-primary-900">
                            Get FREE Quote
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}
