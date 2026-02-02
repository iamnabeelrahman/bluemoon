import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer" 
import { TermsAndConditions } from "@/components/terms/TermsAndConditions"

export default function TermsPage() {
    return (
        <>    <div className="min-h-screen bg-white">
            <Navbar />
            <main className="">
                <TermsAndConditions />
            </main>
            <Footer />
        </div>
        </>
    )
}