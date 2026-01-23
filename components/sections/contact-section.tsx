

// ========== CONTACT SECTION ==========
"use client"

import { ArrowRight } from "lucide-react"
import type React from "react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-1/4 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute right-10 bottom-1/4 h-64 w-64 rounded-full bg-primary-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-primary-800 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
            <span className="text-sm font-medium tracking-wider">GET IN TOUCH</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Begin Your <span className="font-serif italic text-primary-800">Design Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {"Let's"} discuss your interior design project and bring your vision to life
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 p-8">
            <h3 className="text-2xl font-light text-white">Schedule a Private Consultation</h3>
            <p className="mt-2 text-white/80">Our design experts will reach out within 24 hours</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none transition-all"
                  placeholder="Johnathan Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Project Type</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none appearance-none bg-white"
              >
                <option value="">Select Project Type</option>
                <option value="residential">Residential Interior</option>
                <option value="commercial">Commercial Interior</option>
                <option value="kitchen">Modular Kitchen</option>
                <option value="complete">Complete Turnkey</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                placeholder="Tell us about your project vision..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary-800 to-primary-900 py-4 text-lg font-medium text-white transition-all hover:shadow-xl hover:shadow-primary-800/30"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Inquiry
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}