import FormCard from "./FormCard";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/interior-bg.jpg" // replace with your background image
                    alt="Beautiful Interior"
                    fill
                    className="object-cover opacity-80"
                />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-28">
                {/* Left text */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
                        Bring home beautiful interiors{" "}
                        <span className="text-yellow-400">that fit your budget</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Experience unmatched quality & timely delivery with Livspace
                    </p>
                </div>

                {/* Form */}
                <div className="mt-10 lg:mt-0">
                    <FormCard />
                </div>
            </div>
        </section>
    );
}
