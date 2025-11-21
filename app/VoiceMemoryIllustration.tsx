'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cpu, Zap, CheckCircle2, XCircle } from 'lucide-react'

export default function ChatbotComparison() {
  const [longMemory, setLongMemory] = useState(true)

  const messagesOff = [
    { role: 'Q', text: 'What did I do last summer?' },
    { role: 'A', text: 'I don’t exactly remember details, but you mentioned it was fun.' }
  ]

  const messagesOn = [
    { role: 'Q', text: 'What did I do last summer?' },
    { role: 'A', text: 'You learned to ride a jet ski in Miami, went to NYC with Sarah, and joined that rooftop party on May 15th.' }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 p-1">
      {/* Control Header */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-4 rounded-full px-8">
        <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${longMemory ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-gray-600'}`} />
            <h2 className="text-lg font-mono text-gray-200">
            MODE: <span className={longMemory ? 'text-cyan-400 font-bold' : 'text-gray-500'}>{longMemory ? 'ACTIVE_RECALL' : 'OFF'}</span>
            </h2>
        </div>
        <Button
          onClick={() => setLongMemory(v => !v)}
          variant="outline"
          className={`rounded-full border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all ${longMemory ? 'text-cyan-400 border-cyan-900/50 bg-cyan-950/30' : 'text-gray-400'}`}
        >
          {longMemory ? 'Turn Memory Off' : 'Activate LongMemory'}
        </Button>
      </div>

      {/* Main Interface Window */}
      <motion.div
        className="relative w-full bg-black rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl"
        initial={false}
        animate={{ 
            borderColor: longMemory ? 'rgba(34, 211, 238, 0.4)' : 'rgba(63, 63, 70, 0.4)',
            boxShadow: longMemory ? '0 0 40px -10px rgba(34, 211, 238, 0.15)' : 'none'
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> {longMemory ? 'INTELLIGENT' : 'STANDARD'}
                </span>
                <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {longMemory ? '500ms' : ''}
                </span>
            </div>
        </div>

        {/* Chat Area */}
        <div className="p-8 min-h-[300px] flex flex-col justify-end space-y-6 relative">
            {/* Scanning Beam Animation (Only when LongMemory is ON) */}
            <AnimatePresence>
                {longMemory && (
                    <motion.div 
                        initial={{ top: 0, opacity: 0 }}
                        animate={{ top: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-0 pointer-events-none"
                    />
                )}
            </AnimatePresence>

          <AnimatePresence mode="wait">
            {(longMemory ? messagesOn : messagesOff).map((m, i) => (
              <motion.div
                key={`${longMemory ? 'on' : 'off'}-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                className={`flex ${m.role === 'Q' ? 'justify-start' : 'justify-end'} relative z-10`}
              >
                {/* Avatar */}
                {m.role === 'A' && (
                    <div className={`mr-3 flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border ${longMemory ? 'bg-cyan-950 border-cyan-500 text-cyan-400' : 'bg-zinc-800 border-zinc-700 text-gray-400'}`}>
                        <Cpu className="h-4 w-4" />
                    </div>
                )}

                <div
                  className={`max-w-[85%] md:max-w-lg px-5 py-3 rounded-2xl text-sm md:text-base leading-relaxed backdrop-blur-md border transition-all duration-500 ${
                    m.role === 'Q'
                      ? 'bg-zinc-800/50 border-zinc-700 text-gray-200 rounded-tl-none'
                      : longMemory
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.1)] rounded-tr-none'
                      : 'bg-zinc-900 border-zinc-800 text-gray-400 rounded-tr-none'
                  }`}
                >
                  {m.text}
                  {m.role === 'A' && longMemory && (
                      <div className="mt-2 pt-2 border-t border-cyan-500/20 flex items-center gap-2 text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">
                          <CheckCircle2 className="w-3 h-3" /> Context Retrieved: Summer
                      </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Token Stats Overlay */}
        <div className="absolute top-20 right-6 flex flex-col gap-2 items-end pointer-events-none">
             <motion.div 
                animate={{ opacity: longMemory ? 1 : 1 }}
                className="px-3 py-1 rounded-md bg-black/60 border border-zinc-800 backdrop-blur-md text-xs font-mono text-green-400 flex items-center gap-2"
             >
                <div className={`w-2 h-2 rounded-full ${longMemory ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
                TOKENS: {longMemory ? '~1k (Compressed)' : '~10k (Raw)'}
             </motion.div>
        </div>
      </motion.div>
    </div>
  )
}