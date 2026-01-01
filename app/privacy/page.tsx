'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#020204] text-zinc-300 font-sans selection:bg-cyan-500/30">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        <Link href="/">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-cyan-400 mb-8 text-zinc-500">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12">Last Updated: January 1st, 2026</p>

        <div className="space-y-10 text-sm md:text-base leading-relaxed">
            
            <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                <p>
                    LongMemory.io ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you join our waitlist or use our website.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                <p>
                    We collect the following information when you voluntarily submit our waitlist form:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                    <li><strong>Contact Info:</strong> Name and email address.</li>
                    <li><strong>Project Info:</strong> Company name and use case details (to help us understand your needs).</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, and operating system (collected automatically via standard server logs for security and analytics).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h2>
                <p>
                    We use your data solely for the following purposes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                    <li>To manage the waitlist and notify you when you are granted beta access.</li>
                    <li>To send important product updates or service announcements.</li>
                    <li>To prevent fraud and ensure the security of our platform.</li>
                </ul>
                <p className="mt-4">
                    We will <strong>never</strong> sell your personal data to third-party advertisers.
                </p>
            </section>

          <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Where Your Data Lives & Security</h2>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                    {/* CHANGED: "Hosted on..." -> "Hosted on... (currently AWS)" */}
                    <li>Hosted on enterprise-grade cloud infrastructure (currently <strong>Amazon Web Services</strong>).</li>
                    <li>We use industry-standard security practices.</li>
                </ul>
                <div className="mt-4 p-4 bg-red-950/20 border border-red-900/50 rounded-lg text-zinc-300 text-sm">
                    <strong>Important:</strong> No method of transmission over the internet or electronic storage is 100% secure. While we do our best, we cannot guarantee absolute security — you accept this risk by using the site.
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Who We Share Your Data With</h2>
                <p>
                    Only with trusted parties who help us run the service and are bound by confidentiality:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                    {/* CHANGED: Generalized the category */}
                    <li><strong>Cloud Infrastructure Providers</strong> (such as AWS) – for hosting & storage.</li>
                    <li>Analytics tools.</li>
                    <li>Law enforcement or government authorities, if legally required.</li>
                </ul>
            </section>

           <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Business Transfers & Rebranding</h2>
                <p>
                    If LongMemory.io undergoes a merger, acquisition, <strong>rebranding</strong>, <strong>domain name change</strong>, or asset sale, or if we incorporate as a new legal entity (e.g., transitioning from a sole proprietorship to a Private Limited company), your Personal Data may be transferred or assigned as part of that evolution. By providing your information, you consent to this transfer.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Your Data Rights</h2>
                <p>
                    Depending on your location, you may have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:hello@longmemory.io" className="text-cyan-400 hover:underline">hello@longmemory.io</a>.
                </p>
            </section>

           <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page and will be effective immediately upon posting. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </section>

           <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Jurisdiction</h2>
                <p>
                    This Privacy Policy is governed by the laws of <strong>India</strong>. Any disputes will be subject to the exclusive jurisdiction of the courts in <strong>Hyderabad, Telangana</strong>.
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