'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#020204] text-zinc-300 font-sans selection:bg-cyan-500/30">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        <Link href="/">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-cyan-400 mb-8 text-zinc-500">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-zinc-500 mb-12">Last Updated: November 20, 2025</p>

        <div className="space-y-10 text-sm md:text-base leading-relaxed">
            
            <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
                <p>
                    By signing up to the waitlist or using LongMemory.io (the “Service”), you agree to these terms. If you don’t agree, please do not use the site.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. It’s Just a Waitlist Right Now</h2>
                <p>
                    We are currently building LongMemory. You acknowledge that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                    {/* CHANGED: "can" -> "may" to remove obligation */}
                    <li>You are giving us your email so we <strong>may</strong> notify you if the beta launches or send occasional product updates.</li>
                    <li>Joining the waitlist <strong>does not guarantee access</strong>. We reserve the right to accept or reject anyone at our sole discretion.</li>
                    <li>The product is not yet live for the general public.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Beta / Pre-launch Disclaimer</h2>
                <p>
                    If and when we grant you access (beta or otherwise), you understand that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                    <li>The Service will likely have bugs, may crash, lose data, or behave unexpectedly.</li>
                    <li>We may change features, shut down the service, or wipe data without warning.</li>
                    <li>You are using the Service to help us test, not because it is a finished product.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. No Warranties ("As Is")</h2>
                <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-400 italic text-xs md:text-sm">
                    "THE SERVICE IS PROVIDED STRICTLY 'AS IS' AND 'AS AVAILABLE'. WE DISCLAIM ALL WARRANTIES — EXPRESS, IMPLIED, OR STATUTORY — INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT — TO THE FULLEST EXTENT PERMITTED BY LAW."
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
                <p>
                    To the fullest extent allowed by law, LongMemory.io, its founders, team, affiliates, or anyone associated with us will not be liable for any damages whatsoever (direct, indirect, incidental, consequential, loss of data, profits, goodwill, etc.), no matter the cause or theory.
                </p>
                <div className="mt-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-400 text-sm leading-relaxed">
                    <strong>Liability Cap:</strong> You agree that our total cumulative liability to you for all claims combined shall not exceed the greater of:
                    <ul className="list-disc pl-5 mt-2">
                        <li>(a) The amount you actually paid us in the <strong>12 months</strong> preceding the claim; or</li>
                        <li>(b) <strong>100 INR</strong>.</li>
                    </ul>
                    <br/>
                    <span className="text-zinc-500 text-xs">
                        (If you have not paid us anything, our liability is limited to zero or ₹100).
                    </span>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
                <p>
                    Everything on the site — code, design, name, branding, logic — is owned exclusively by LongMemory.io. You agree not to copy, steal, reverse-engineer, or attempt to derive the source code of the Service.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Governing Law & Jurisdiction</h2>
                <p>
                    These terms are governed by the laws of <strong>India</strong>. You agree to submit to the exclusive jurisdiction of the courts located in <strong>Hyderabad, Telangana</strong> for any disputes arising out of these terms.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Assignment</h2>
                <p>
                    We may assign or transfer our rights and obligations under these Terms to any company or entity (for example, if we incorporate a company, change our name, or get acquired) without your consent.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
                <p>
                    We may update this page anytime. Continued use of the Service after changes means you accept the new terms.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
                <p>
                    Questions? Email us at <a href="mailto:hello@longmemory.io" className="text-cyan-400 hover:underline">hello@longmemory.io</a>.
                </p>
            </section>

        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-xs">
            © 2025 LongMemory.io. All rights reserved.
        </div>
      </div>
    </div>
  )
}