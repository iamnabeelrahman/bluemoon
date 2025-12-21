"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-balance">
            {"Let's"} discuss your interior design project and bring your vision to life
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Your phone number" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
