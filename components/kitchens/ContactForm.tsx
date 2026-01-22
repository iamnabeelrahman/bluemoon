// components/ContactForm.tsx
'use client'

export default function ContactForm() {
    return (
        <section className="bg-[#f7efdf] py-20">
            <div className="mx-auto max-w-3xl px-6">
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h2 className="text-center text-2xl font-bold text-brown-800">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Share your details and our team will get in touch with you shortly.
                    </p>

                    <form className="mt-8 space-y-5">
                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brown-800 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Your phone number"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brown-800 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brown-800 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-full bg-brown-800 py-4 text-lg font-semibold text-white hover:bg-brown-900"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

