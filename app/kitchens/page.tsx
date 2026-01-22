// app/page.tsx
import ContactForm from '@/components/kitchens/ContactForm'
import Header from '@/components/kitchens/Header'
import Hero from '@/components/kitchens/Hero'
import LeadSection from '@/components/kitchens/LeadSection'
import StylesSection from '@/components/kitchens/StylesSection'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <LeadSection />
            <StylesSection />
            <ContactForm />
        </main>
    )
}




// tailwind.config.js (important color)
module.exports = {
    theme: {
        extend: {
            colors: {
                brown: {
                    800: '#4b1e1e',
                    900: '#3a1616',
                },
            },
        },
    },
}
