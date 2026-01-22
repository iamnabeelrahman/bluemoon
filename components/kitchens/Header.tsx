
'use client'

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-xl">
                    <span className="rounded bg-primary-800 px-2 py-1 text-white">M</span>
                    <span>MODULA</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary-800 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-900">
                        CALL NOW
                    </button>
                    <button className="rounded-full border border-primary-800 px-5 py-2 text-sm font-semibold text-primary-800 hover:bg-[#4b1e1e8d]">
                        GET FREE QUOTE
                    </button>
                </div>
            </div>
        </header>
    )
}