'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link' 
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
// Added TreePine icon
import { Loader2, KeyRound, ToggleRight, Cpu, TrendingDown, TreePine, Snowflake, ArrowRight } from 'lucide-react' 
import { toast, Toaster } from 'sonner'

// Import Illustrations & New Components
import TemporalIllustration from './TemporalIllustration'
import PreferenceIllustration from './PreferenceIllustration'
import MiddlewareCode from './MiddlewareCode'
import aws from './../public/aws.png'
import thub from './../public/aic-thub.png'

export default function LongMemoryLanding() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [termsError, setTermsError] = useState(false)
  
  // State for hydration safe random values (particles)
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    // Increased particle count slightly for festive feel
    setParticles([...Array(20)].map(() => Math.random()))
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    agree: false,
  })

  const handleSubmit = async () => {
    console.log("[LongMemoryLanding] Initiating handleSubmit...");
    setTermsError(false)

    if (!formData.agree) {
      toast.error('Please accept the Terms & Privacy Policy to continue.')
      setTermsError(true)
      return
    }

    if (!formData.name || !formData.email) {
        toast.error('Please fill in your name and email.')
        return
    }

    setLoading(true)
    try {
      // Simulate API
      await new Promise(r => setTimeout(r, 1500));
      const res = { ok: true } 
      
      if (res.ok) {
        toast.success('Welcome aboard!', { 
            description: 'You have been added to the priority waitlist.' 
        })
        setOpen(false)
        setFormData({ name: '', email: '', company: '', useCase: '', agree: false })
      } else {
        toast.error('Submission failed. Please try again.')
      }
    } catch (err) {
      toast.error('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#020204] text-white selection:bg-cyan-500/30 flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* --- PREMIUM CYBER-FESTIVE BANNER --- */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        // Enhanced shadow and border for a premium feel
        className="w-full relative overflow-hidden z-50 border-b border-cyan-800/50 shadow-[0_0_30px_rgba(6,182,212,0.25)] bg-[#030610]"
      >
        {/* Abstract Subtle Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020204] to-[#020204]" />
        
        {/* Digital Snow/Particle Effect */}
        <div className="absolute inset-0 pointer-events-none">
           {particles.map((seed, i) => (
             <motion.div
               key={i}
               // Brighter, more icy particles
               className="absolute text-cyan-100/40"
               initial={{ top: -20, left: `${seed * 100}%`, rotate: 0, scale: 0.5 + seed }}
               animate={{ 
                 top: ['0%', '110%'], 
                 opacity: [0, 1, 0],
                 rotate: seed * 360
               }}
               transition={{ 
                 duration: (seed * 10) + 8, 
                 repeat: Infinity, 
                 ease: "linear",
                 delay: seed * -10
               }}
             >
               <Snowflake size={6 + (seed * 8)} />
             </motion.div>
           ))}
        </div>

        {/* Banner Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
          
          {/* Cyber Christmas Tree Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: [0, 3, -3, 0] }}
            // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            // Created a glowing container for the tree
           // className="hidden md:flex bg-gradient-to-br from-cyan-950 to-blue-950 p-3 rounded-full border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-400/10 blur-xl group-hover:bg-cyan-400/20 transition-all"></div>
            {/* TreePine icon with icy cyan styling */}
            <TreePine className="w-8 h-8 text-cyan-200 drop-shadow-[0_0_8px_rgba(165,243,252,0.5)] relative z-10" />
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <motion.h2 
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-bold tracking-tight text-white flex flex-col md:block items-center"
            >
              <span className="text-zinc-100 drop-shadow-sm">Merry Christmas</span>
              <span className="hidden md:inline mx-2 text-cyan-500/80">&</span>
              {/* Richer, icy gradient text */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 font-extrabold drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                 Happy New Year
              </span>
            </motion.h2>
            <p className="text-sm text-cyan-200/80 font-medium mt-1">
               The season for <span className="text-cyan-100 underline decoration-cyan-500/50 underline-offset-2">Infinite Context</span>.
            </p>
          </div>

          <motion.div
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="md:ml-auto pt-2 md:pt-0"
          >
             <Button 
                onClick={() => setOpen(true)}
                size="sm" 
                // Styled button to match the icy theme
                className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/80 hover:text-cyan-100 hover:border-cyan-400 transition-all text-xs uppercase tracking-widest font-semibold h-9 px-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
             >
                Get Festive Priority <ArrowRight className="ml-2 w-3 h-3" />
             </Button>
          </motion.div>
        </div>
      </motion.div>

      <Toaster position="top-center" richColors theme="dark" />

      {/* --- BACKGROUND GLOW --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-600/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <main className="z-10 w-full flex flex-col items-center">

        {/* --- HERO SECTION --- */}
        <section className="w-full flex flex-col items-center justify-center py-20 md:py-28 px-6 text-center max-w-5xl space-y-8">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest"
          >
            <TrendingDown className="w-3 h-3" />
            <span>Dramatically Lower Token Costs</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Looooooogest
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Memory for AI.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The infinite memory layer for your AI.
            <span className="text-white font-medium"> Stop stuffing context windows.</span> Retrieve only the essential context instantly, keeping your agents <span className="text-cyan-400">fast and efficient</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="pt-6"
          >
            <Button
              onClick={() => setOpen(true)}
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-cyan-50 text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]"
            >
              Get Early Access 
            </Button>
          </motion.div>
        </section>

        {/* --- FEATURE GRID --- */}
        <section className="w-full py-16 px-6 border-t border-zinc-900 bg-[#040404]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why add a Memory Layer?</h2>
              <p className="text-gray-400 text-lg">Plug and play. Bring Your Own Key (BYOK). Switch models instantly.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:text-green-400 transition-all">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Massive Cost Reduction</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Don't send the full conversation history every time. We retrieve only the most relevant memories, significantly slashing your input token costs.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Managed Security</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  <strong>Add keys once in our dashboard.</strong> Never expose your OpenAI or Anthropic keys in your client-side code again.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all">
                  <ToggleRight className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Model Swapping</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Switching from OpenAI to Anthropic? Just change the provider in your dashboard. No code changes required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXAMPLE 1: TEMPORAL RECALL --- */}
        <section className="w-full py-20 px-6 bg-black/50 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Super Fast Temporal Recall</h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Most AIs live in the "now". LongMemory gives them a timeline. We retrieve the exact memory from last week, last month, or last year in <span className="text-cyan-400 font-mono">real-time</span>.
              </p>
            </div>
            <TemporalIllustration />
          </div>
        </section>

        {/* --- EXAMPLE 2: PREFERENCES --- */}
        <section className="w-full py-24 px-6 border-t border-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <PreferenceIllustration />
          </div>
        </section>

        {/* --- MIDDLEWARE MAGIC (CODE) --- */}
        <section className="w-full py-20 px-6 border-t border-zinc-900 bg-[#050505]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono mb-2">
                <Cpu className="w-3 h-3" /> DEVELOPER EXPERIENCE
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Middleware Magic</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Two lines of code. We handle context retrieval and LLM routing for you.
              </p>
            </div>
            <MiddlewareCode />
          </div>
        </section>

        {/* --- BACKED BY SECTION --- */}
        <section className="w-full py-16 border-t border-zinc-900 bg-black/80">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-white text-xs font-bold uppercase tracking-[0.2em] mb-10">
              Supported & Incubated By
            </p>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90 transition-all duration-700">
              <img src={thub.src} alt="AIC T-Hub" className="h-12 w-auto object-contain brightness-0 invert" />
              <img src={aws.src} alt="AWS Activate" className="h-18 w-auto object-contain brightness-0 invert " />
              <div className="flex items-center gap-3 group">
                <div className="flex flex-col leading-none brightness-0 invert">
                  <span className="text-lg font-semibold text-white">Microsoft</span>
                  <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">for Startups</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="w-full py-8 border-t border-zinc-900 bg-black text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-zinc-600 text-xs">
            <p>© {new Date().getFullYear()} www.LongMemory.io. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>

      </main>

      {/* --- WAITLIST DIALOG --- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-[#0a0a0a] text-white border border-zinc-800 shadow-2xl shadow-cyan-900/20">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Join the waitlist</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-1">
              <Label className="text-white text-[10px] uppercase tracking-wider">Full Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-zinc-900 border-zinc-800 text-white h-9 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-white text-[10px] uppercase tracking-wider">Work Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-zinc-900 border-zinc-800 text-white h-9 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-white text-[10px] uppercase tracking-wider">Project Details</Label>
              <Textarea
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                placeholder="I am building..."
                className="bg-zinc-900 border-zinc-800 text-white min-h-[60px] focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            
            <motion.div 
              className={`flex items-center space-x-2 pt-1 rounded p-1 transition-colors ${termsError ? 'bg-red-900/20 border border-red-900/50' : ''}`}
              animate={termsError ? { x: [-5, 5, -5, 5, 0] } : {}}
            >
              <Checkbox
                id="agree"
                checked={formData.agree}
                onCheckedChange={(c) => {
                    setFormData({ ...formData, agree: c as boolean })
                    if(c) setTermsError(false)
                }}
                className={`border-zinc-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:text-black h-4 w-4 ${termsError ? 'border-red-500' : ''}`}
              />
              <label htmlFor="agree" className={`text-[10px] cursor-pointer select-none ${termsError ? 'text-red-400 font-medium' : 'text-zinc-400'}`}>
                I agree to the <Link href="/terms" target="_blank" className="underline hover:text-cyan-400">Terms</Link> & <Link href="/privacy" target="_blank" className="underline hover:text-cyan-400">Privacy Policy</Link>
              </label>
            </motion.div>

          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white h-9 text-sm">
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading} className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold h-9 text-sm">
              {loading ? <Loader2 className="mr-2 h-3 w-3 animate-spin" /> : 'Submit'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}