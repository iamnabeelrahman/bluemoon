"use client"

import Link from "next/link"
import { Menu, X, Sparkles, ChevronRight, Phone, MapPin, Mail, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// ========== NAVBAR ==========
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduced height for mobile, normal for desktop */}
        <div className="flex items-center justify-between h-10 lg:h-20">
          {/* Logo - slightly smaller on mobile */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-12 h-16 lg:w-[110px] lg:h-[130px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#services"
              className="relative text-sm font-light text-gray-700 hover:text-primary-800 transition-colors group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/kitchens"
              className="relative text-sm font-light text-gray-700 hover:text-primary-800 transition-colors group"
            >
              Kitchens
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/#projects"
              className="relative text-sm font-light text-gray-700 hover:text-primary-800 transition-colors group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/#reviews"
              className="relative text-sm font-light text-gray-700 hover:text-primary-800 transition-colors group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/#contact"
              className="relative text-sm font-light text-gray-700 hover:text-primary-800 transition-colors group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover:w-full" />
            </Link>
            {/* <Link
              href="/login"
              className="relative overflow-hidden group rounded-full bg-gradient-to-r from-primary-800 to-primary-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-primary-800/30"
            >
              <span className="flex items-center gap-2">
                Client Portal
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link> */}
          </div>

          {/* Mobile menu button - smaller on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 rounded-lg border border-gray-200  transition-colors"
          >
            {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/#services"
              className="block text-sm font-light text-gray-700 hover:text-primary-800 transition-colors py-2.5 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/kitchens"
              className="block text-sm font-light text-gray-700 hover:text-primary-800 transition-colors py-2.5 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Kitchens
            </Link>
            <Link
              href="/#projects"
              className="block text-sm font-light text-gray-700 hover:text-primary-800 transition-colors py-2.5 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#reviews"
              className="block text-sm font-light text-gray-700 hover:text-primary-800 transition-colors py-2.5 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="block text-sm font-light text-gray-700 hover:text-primary-800 transition-colors py-2.5 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-3 rounded-full bg-gradient-to-r from-primary-800 to-primary-900 px-5 py-2.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-primary-800/30 transition-all">
                Client Portal
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  )
}