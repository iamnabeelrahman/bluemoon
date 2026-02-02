"use client"

import Link from "next/link"
import { Home, FileText, ChevronRight } from "lucide-react"

export function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-primary-50/20">
            {/* Breadcrumb Navigation */}
            <div className="relative pt-32 pb-12 bg-gradient-to-r from-primary-50/40 to-white">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-8">
                        <Link href="/" className="flex items-center gap-2 hover:text-primary-800 transition-colors">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="flex items-center gap-2 text-primary-800 font-medium">
                            <FileText className="w-4 h-4" />
                            Terms & Conditions
                        </span>
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-4 text-primary-800 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-800" />
                            <span className="text-sm font-medium tracking-wider">LEGAL</span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-800" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                            Terms & <span className="font-serif italic text-primary-800">Conditions</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Please read these terms carefully before engaging our services
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="relative py-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                        {/* Last Updated */}
                        <div className="mb-12 pb-8 border-b border-gray-200">
                            <p className="text-sm text-gray-500">
                                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                            <p className="mt-4 text-gray-600">
                                These Terms and Conditions ("Terms") govern all agreements, services, quotations, work orders,
                                and transactions between <strong>Bluemoon Interiors</strong> (hereinafter referred to as "the Company",
                                "we", "us", or "our") and the client (hereinafter referred to as "the Client", "you", or "your").
                                By engaging our services, approving a quotation, or making any payment, you agree to be bound by these Terms.
                            </p>
                        </div>

                        {/* Terms Sections */}
                        <div className="space-y-12">
                            {/* Section 1 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">1</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Scope of Services</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>
                                        1.1 The Company provides interior design, interior execution, civil work, renovation,
                                        furniture manufacturing, modular kitchens, wardrobes, false ceilings, electrical,
                                        plumbing, painting, flooring, and related services as specified in the approved quotation or agreement.
                                    </p>
                                    <p className="relative pl-4 border-l-2 border-primary-200 bg-primary-50/30 p-4 rounded-r-lg">
                                        <strong>Note:</strong> Any work not expressly mentioned in the approved quotation
                                        shall be treated as <strong>additional work</strong> and charged separately.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">2</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Quotations & Pricing</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>2.1 All quotations are valid for <strong>15 days</strong> from the date of issue unless stated otherwise.</p>
                                    <p>2.2 Prices are based on current material, labor, and market conditions. Any variation in material cost, taxes, or statutory charges beyond our control may result in price revisions.</p>
                                    <p>2.3 Government taxes (GST or any other applicable tax) shall be charged extra as per prevailing laws.</p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">3</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Payment Terms</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>3.1 Payment shall be made strictly as per the agreed payment schedule mentioned in the quotation or agreement.</p>
                                    <p>3.2 Typical payment structure (unless otherwise agreed):</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Advance payment upon order confirmation</li>
                                        <li>Stage-wise payments during execution</li>
                                        <li>Balance payment before or at the time of final handover</li>
                                    </ul>
                                    <p>3.3 Delay in payments may result in:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Suspension of work</li>
                                        <li>Extension of project timelines</li>
                                        <li>Additional charges or interest, if applicable</li>
                                    </ul>
                                    <p className="relative pl-4 border-l-2 border-rose-200 bg-rose-50/30 p-4 rounded-r-lg">
                                        <strong>Important:</strong> Any amount once paid shall be <strong>non-refundable</strong>, except where explicitly agreed in writing.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">4</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Design Approval & Changes</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>4.1 All designs, drawings, layouts, and material selections must be approved by the Client in writing (email/WhatsApp confirmation acceptable).</p>
                                    <p>4.2 Any changes requested after approval may:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Incur additional cost</li>
                                        <li>Require additional time</li>
                                        <li>Affect the original project timeline</li>
                                    </ul>
                                    <p>4.3 The Company shall not be responsible for delays or defects arising from frequent or late-stage design changes requested by the Client.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">5</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Project Timeline</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>5.1 Project timelines provided are <strong>indicative</strong> and subject to site readiness, timely payments, material availability, and force majeure conditions.</p>
                                    <p className="relative pl-4 border-l-2 border-amber-200 bg-amber-50/30 p-4 rounded-r-lg">
                                        <strong>Note:</strong> Delays caused by Client-side issues (payment delay, design changes, site access restrictions, other contractors, etc.) shall not be attributed to the Company.
                                    </p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">6</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Site Conditions & Client Responsibilities</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>6.1 The Client shall ensure:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Clear site access during working hours</li>
                                        <li>Availability of electricity and water at site</li>
                                        <li>Safe storage space for materials, if required</li>
                                    </ul>
                                    <p>6.2 The Company shall not be responsible for damages caused due to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Existing structural defects</li>
                                        <li>Hidden conditions (leakage, termite damage, weak walls, etc.) discovered during execution</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">7</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Materials & Workmanship</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>7.1 Materials shall be provided as per the approved specifications. Minor variations in shade, texture, or finish are natural and acceptable.</p>
                                    <p>7.2 Branded materials are subject to manufacturer warranties. The Company's responsibility is limited to installation workmanship.</p>
                                    <p>7.3 Custom-made furniture and woodwork may have minor dimensional or finish variations due to material nature and manufacturing processes.</p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">8</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Warranty & Defects Liability</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>8.1 Workmanship warranty, if any, shall be limited to the period mentioned in the quotation or agreement.</p>
                                    <p>8.2 Warranty shall not cover:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Normal wear and tear</li>
                                        <li>Damage due to misuse, negligence, or improper maintenance</li>
                                        <li>Damage caused by external factors such as water leakage, dampness, termites, or electrical fluctuations</li>
                                    </ul>
                                    <p>8.3 Any rectification work under warranty shall be carried out at the Company's discretion.</p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">9</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Cancellation & Termination</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>9.1 In case of project cancellation by the Client:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Work completed till date shall be billed and payable immediately</li>
                                        <li>Cost of ordered or procured materials shall be borne by the Client</li>
                                    </ul>
                                    <p>9.2 The Company reserves the right to terminate the contract in case of:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Continuous payment default</li>
                                        <li>Breach of terms by the Client</li>
                                        <li>Unsafe or hostile work environment</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">10</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Intellectual Property</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>10.1 All designs, drawings, concepts, and layouts created by the Company remain its intellectual property unless otherwise agreed in writing.</p>
                                    <p className="relative pl-4 border-l-2 border-primary-200 bg-primary-50/30 p-4 rounded-r-lg">
                                        <strong>Important:</strong> The Client shall not reproduce, share, or execute the designs with third parties without prior written consent.
                                    </p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">11</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Limitation of Liability</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>11.1 The Company's liability shall be limited to the value of the work executed by the Company.</p>
                                    <p>11.2 The Company shall not be liable for indirect, incidental, or consequential damages, including loss of use, loss of profit, or business interruption.</p>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">12</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Force Majeure</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>
                                        The Company shall not be held liable for delays or failure to perform due to events beyond its
                                        reasonable control, including but not limited to natural calamities, strikes, government restrictions,
                                        pandemics, or supply chain disruptions.
                                    </p>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">13</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Governing Law & Jurisdiction</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p>
                                        These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>.
                                        Any disputes shall be subject to the exclusive jurisdiction of the courts of <strong>[City/State]</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div className="group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-800 to-gold-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">14</span>
                                    </div>
                                    <h2 className="text-2xl font-light text-gray-900 pt-1">Acceptance</h2>
                                </div>
                                <div className="ml-12 space-y-4 text-gray-600">
                                    <p className="relative pl-4 border-l-2 border-emerald-200 bg-emerald-50/30 p-6 rounded-r-lg">
                                        By approving the quotation, making an advance payment, or allowing work to commence,
                                        the Client confirms that they have read, understood, and accepted these Terms and Conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Signature Section */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="inline-block text-primary-800">
                                    <h3 className="text-2xl font-light mb-2">Bluemoon Interiors</h3>
                                    <div className="h-px w-24 mx-auto bg-gradient-to-r from-primary-800 to-gold-500 mb-4"></div>
                                    <p className="text-gray-600 italic">We build a positive ambience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-6">
                            Have questions about our terms? We're here to help.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-800 to-primary-900 px-8 py-4 text-white font-medium hover:shadow-lg hover:shadow-primary-800/30 transition-all duration-300"
                        >
                            <span>Contact Us for Clarification</span>
                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}