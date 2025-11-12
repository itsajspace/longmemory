'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Layers, Plug, KeyRound, Database, HardDrive, Zap } from 'lucide-react'
import VoiceMemoryIllustration from './VoiceMemoryIllustration'

export default function LongMemoryLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-10 py-20 space-y-32 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-8">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          LongMemory.io
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          The unified memory layer for all your AI models. Retrieves just the essential context in milliseconds, cutting cost and latency without losing meaning.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-2"
        >
          <p className="text-sm uppercase tracking-widest text-cyan-400">Coming Soon</p>
          <Button className="bg-white/95 text-black font-medium px-10 py-4 rounded-full shadow-md hover:bg-white transition-all duration-300">
            Get Early Access
          </Button>
        </motion.div>
      </section>

      {/* Temporal Memory + Voice Demo Section */}
  <section className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-16 md:gap-20 px-4 md:px-0">
        {/* Text Section */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Temporal
            </h2>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <Zap className="w-10 h-10 text-cyan-400 ml-2" />
            </motion.div>
          </div>
          <p className="text-base md:text-lg text-gray-400 max-w-md md:max-w-lg leading-relaxed">
            Get <span className="text-white font-medium">detailed context from any point in time</span> — without losing details.
            Retrieve conversations or compressed summaries instantly, exactly as they happened.
          </p>
          <div className="h-px w-20 bg-gray-700 md:ml-0 mx-auto rounded-full" />
        </motion.div>

        {/* Voice Memory Illustration */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="w-full max-w-[640px]">
            <VoiceMemoryIllustration />
          </div>
        </motion.div>
      </section>

      {/* Why It Matters Section */}
      <section className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl font-semibold text-gray-200">Why Memory Matters</h2>
        <p className="text-gray-400 text-base leading-relaxed">
          AI models lose understanding after every query, forcing developers to resend full context — wasting tokens, time, and cost. LongMemory.io automates context handling and adds temporal memory for true long-term recall.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        <Card className="bg-gradient-to-b from-gray-950 to-black border border-gray-800 shadow-lg hover:shadow-gray-700/40 transition-all duration-500">
          <CardContent className="p-10 space-y-3">
            <div className="flex items-center gap-4 mb-4">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <HardDrive className="w-10 h-10 text-cyan-400" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white">Lossless Memory</h2>
            </div>
            <p className="text-gray-400 text-base">
              Choose lossless for precise, uncompressed context with near-zero hallucinations — even from years-old interactions in milliseconds.
            </p>
            <p className="text-sm text-gray-500">Faster, accurate retrieval for deep reasoning and long-term knowledge retention.</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-gray-950 to-black border border-gray-800 shadow-lg hover:shadow-gray-700/40 transition-all duration-500">
          <CardContent className="p-10 space-y-3">
            <div className="flex items-center gap-4 mb-4">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <Database className="w-10 h-10 text-cyan-400" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white">Intelligent Memory</h2>
            </div>
            <p className="text-gray-400 text-base">
              Choose Intelligent Memory for compressed context reducing the tokens by upto 90% saving inference costs dramatically.
            </p>
            <p className="text-sm text-gray-500">Perfect for real-time AI agents and scalable enterprise workloads.</p>
          </CardContent>
        </Card>
      </section>

      {/* Unified Layer Section */}
      <section className="max-w-6xl w-full text-center space-y-8">
        <h2 className="text-4xl font-semibold text-gray-200">A Universal Memory Layer for All Models</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-6">
          <Card className="bg-gradient-to-b from-gray-950 to-black border border-gray-800 p-8 hover:shadow-gray-700/20 transition-all duration-500">
            <motion.div className="flex justify-center mb-5" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <Plug className="w-10 h-10 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">Plug & Play API</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Call our API with your key — LongMemory handles context automatically.</p>
          </Card>

          <Card className="bg-gradient-to-b from-gray-950 to-black border border-gray-800 p-8 hover:shadow-gray-700/20 transition-all duration-500">
            <motion.div className="flex justify-center mb-5" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <KeyRound className="w-10 h-10 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">BYOK Integration</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Bring your own key (BYOK) — connect your AI provider, and we handle memory seamlessly.</p>
          </Card>

          <Card className="bg-gradient-to-b from-gray-950 to-black border border-gray-800 p-8 hover:shadow-gray-700/20 transition-all duration-500">
            <motion.div className="flex justify-center mb-5" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
              <Layers className="w-10 h-10 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">Unified Memory</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Consistent context and temporal recall across every model and use case.</p>
          </Card>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="max-w-5xl text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-100">Seamless Flow Between You and the AI</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-base leading-relaxed">
          LongMemory.io ensures your AI always stays aware of past interactions. Whether text or voice, your assistant never forgets context.
        </p>
        <motion.div className="flex justify-center my-8" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <Database className="w-10 h-10 text-cyan-400" />
        </motion.div>
        <p className="text-sm text-gray-500">A temporal memory for your AI agents.</p>
      </section>

      {/* Backed By Section (Bottom) */}
      {/* <section className="w-full text-center space-y-6 mt-20">
        <motion.h3
          className="text-sm uppercase tracking-widest text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Backed By
        </motion.h3>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img
            src="/logos/thub.png"
            alt="T-Hub"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-all"
          />
          <img
            src="/logos/aws.png"
            alt="AWS"
            className="h-8 md:h-10 opacity-90 hover:opacity-100 transition-all"
          />
          <img
            src="/logos/microsoft.png"
            alt="Microsoft for Startups"
            className="h-9 md:h-11 opacity-90 hover:opacity-100 transition-all"
          />
        </motion.div>
      </section> */}

      {/* Footer */}
      <footer className="pt-16 text-gray-600 text-sm text-center border-t border-gray-800 w-full">
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Empowering AI to think, speak, and remember like humans — across voice and text.
        </p>
      </footer>
    </div>
  )
}
