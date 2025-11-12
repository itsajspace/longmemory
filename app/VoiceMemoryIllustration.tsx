'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ChatbotComparison() {
  const [longMemory, setLongMemory] = useState(false)

  const messagesOff = [
    { role: 'Q', text: 'What did I do last summer?' },
    { role: 'A', text: 'I don’t exactly remember, but you mentioned having a fun summer.' }
  ]

  const messagesOn = [
    { role: 'Q', text: 'What did I do last summer?' },
    { role: 'A', text: 'You learned to ride a jet ski, went to NYC with friends, and joined a 2AM rooftop party on May 15th.' }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 p-8 bg-black/90 rounded-3xl border border-gray-800">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h2 className="text-3xl font-semibold text-gray-100 text-center md:text-left">
          {longMemory ? 'LongMemory ON' : 'LongMemory OFF'}
        </h2>
        <Button
          onClick={() => setLongMemory(v => !v)}
          className="rounded-full bg-white/90 text-black font-medium hover:bg-white transition-all"
        >
          {longMemory ? 'Switch Off' : 'Switch to LongMemory.io'}
        </Button>
      </div>

      <motion.div
        key={longMemory ? 'on' : 'off'}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full bg-gradient-to-b from-zinc-950 to-black p-8 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden"
      >
        <div className="space-y-6">
          {(longMemory ? messagesOn : messagesOff).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.4, duration: 0.5, ease: 'easeOut' }}
              className={`flex ${m.role === 'Q' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-lg px-5 py-3 rounded-2xl shadow-sm text-sm sm:text-base text-gray-100 border ${
                  m.role === 'Q'
                    ? 'bg-gray-900 border-gray-800'
                    : longMemory
                    ? 'bg-blue-900 border-cyan-400 shadow-[0_0_8px_#22d3ee,0_0_16px_#38bdf8]'
                    : 'bg-blue-900 border-blue-800'
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Token usage + latency indicators */}
        <div className="absolute top-5 right-5 flex items-center gap-3">
          <div
            className="px-3.5 py-1.5 rounded-full text-sm text-cyan-300 font-medium backdrop-blur-md border border-cyan-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14),0_0_10px_rgba(34,211,238,0.32)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0.08) 100%)',
            }}
          >
            Tokens: {longMemory ? '~2k' : '~128k+'}
          </div>

          {longMemory && (
            <div
              className="px-3.5 py-1.5 rounded-full text-sm text-cyan-300 font-medium backdrop-blur-md border border-cyan-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14),0_0_10px_rgba(34,211,238,0.32)]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0.08) 100%)',
              }}
            >
              ~500 ms
            </div>
          )}
        </div>
      </motion.div>

      <p className="text-gray-400 text-center text-sm max-w-2xl leading-relaxed">
        LongMemory.io keeps context consistent and reduces token usage — enabling accurate, context-aware AI that remembers what matters.
      </p>
    </div>
  )
}
