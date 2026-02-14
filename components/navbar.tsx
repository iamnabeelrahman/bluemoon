"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="w-12 h-14 lg:w-[100px] lg:h-[120px] object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink href="/#services" label="Services" />
              <NavLink href="/kitchens" label="Kitchens" />
              <NavLink href="/#projects" label="Projects" />
              <NavLink href="/#reviews" label="Reviews" />
              <NavLink href="/#contact" label="Contact" />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-md border border-gray-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[1001] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <MobileLink href="/#services" label="Services" close={() => setIsOpen(false)} />
          <MobileLink href="/kitchens" label="Kitchens" close={() => setIsOpen(false)} />
          <MobileLink href="/#projects" label="Projects" close={() => setIsOpen(false)} />
          <MobileLink href="/#reviews" label="Reviews" close={() => setIsOpen(false)} />
          <MobileLink href="/#contact" label="Contact" close={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  )
}

/* Desktop Nav Link */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
    >
      {label}
    </Link>
  )
}

/* Mobile Nav Link */
function MobileLink({
  href,
  label,
  close,
}: {
  href: string
  label: string
  close: () => void
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="text-base font-medium text-gray-700 hover:text-black transition-colors"
    >
      {label}
    </Link>
  )
}
