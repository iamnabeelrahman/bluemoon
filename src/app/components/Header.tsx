"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
                <Image
                    src="/logo.svg" // replace with your logo
                    alt="Livspace Logo"
                    width={120}
                    height={40}
                />
            </div>
            <Button className="bg-[#F45B5B] hover:bg-[#e24a4a] text-white rounded-full px-6 py-2">
                GET FREE QUOTE
            </Button>
        </header>
    );
}
