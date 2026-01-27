import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, InstagramIcon, LinkedinIcon, Sparkles } from "lucide-react"

// ========== FOOTER ==========
export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary-800/10 to-transparent" />
        <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-primary-800/10 to-transparent" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-light tracking-wider text-white">Bluemoon</span>
                <span className="text-xs font-light text-gray-400 tracking-widest">PREMIUM INTERIORS</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming spaces into timeless designs with premium interior design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <div className="h-0.5 w-0 bg-primary-500 group-hover:w-3 transition-all" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <div className="h-0.5 w-0 bg-primary-500 group-hover:w-3 transition-all" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <div className="h-0.5 w-0 bg-primary-500 group-hover:w-3 transition-all" />
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <div className="h-0.5 w-0 bg-primary-500 group-hover:w-3 transition-all" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Residential Design</li>
              <li className="text-sm text-gray-400">Commercial Design</li>
              <li className="text-sm text-gray-400">Modular Kitchen</li>
              <li className="text-sm text-gray-400">Turnkey Projects</li>
              <li className="text-sm text-gray-400">Bedroom Design</li>
              <li className="text-sm text-gray-400">Living Room Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91 98110 16275</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info.bluemooninteriors@gmail.com"
                    className="text-white hover:underline"
                  >
                    info.bluemooninteriors@gmail.com
                  </a>
                </div>

              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Delhi NCR, India</p>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {/* <a href="#" className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a> */}
              <a
                href="https://www.instagram.com/blue.moon.interiors/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              {/* <a href="#" className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-white" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bluemoon Interiors. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">Premium Interior Design & Craftsmanship</p>
        </div>
      </div>
    </footer>
  )
}