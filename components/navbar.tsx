"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm" />
            <span className="text-xl font-semibold text-foreground">Bluemoon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/kitchens"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Kitchens
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link href="/#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#services"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#reviews"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
