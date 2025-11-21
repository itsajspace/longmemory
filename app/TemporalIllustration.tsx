'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, Zap, FileText, Image as ImageIcon, MessageSquare, Sparkles, Gauge, Layers } from 'lucide-react'

export default function TemporalIllustration() {
  const [state, setState] = useState<'scanning' | 'found' | 'idle'>('idle')

  useEffect(() => {
    const runCycle = async () => {
      setState('scanning')
      await new Promise(r => setTimeout(r, 2000))
      setState('found')
      await new Promise(r => setTimeout(r, 3500))
      runCycle()
    }
    runCycle()
  }, [])

  const memoryNodes = [
    { id: 1, label: 'Log_921', type: 'file', icon: <FileText className="w-3 h-3" />, x: -130, y: -50, isTarget: false },
    { id: 2, label: 'Img_202', type: 'media', icon: <ImageIcon className="w-3 h-3" />, x: 140, y: -60, isTarget: false },
    { id: 3, label: 'Chat_History', type: 'chat', icon: <MessageSquare className="w-3 h-3" />, x: -90, y: 80, isTarget: false },
    { id: 4, label: 'Memory_Kyoto', type: 'event', icon: <Sparkles className="w-3 h-3" />, x: 100, y: 60, isTarget: true }, // TARGET
    { id: 5, label: 'Invoice_003', type: 'doc', icon: <FileText className="w-3 h-3" />, x: -10, y: -90, isTarget: false },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-black border border-cyan-900/30 shadow-2xl relative overflow-hidden">
      <div className="bg-[#020204] rounded-[22px] p-6 md:p-10 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT: MEMORY CLOUD --- */}
          <div className="flex-1 w-full relative min-h-[300px] flex items-center justify-center">
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {memoryNodes.map((node, i) => {
                    const isTarget = node.isTarget && state === 'found';
                    const isScanning = state === 'scanning';
                    return (
                        <motion.line
                            key={i}
                            x1="50%" y1="50%"
                            x2={`calc(50% + ${node.x}px)`}
                            y2={`calc(50% + ${node.y}px)`}
                            stroke={isTarget ? "#22d3ee" : "#3f3f46"}
                            strokeWidth={isTarget ? 2 : 1}
                            strokeDasharray={isTarget ? "none" : "4 4"}
                            initial={{ opacity: 0.1 }}
                            animate={{ 
                                opacity: isTarget ? 1 : isScanning ? [0.1, 0.5, 0.1] : 0.1,
                                strokeDashoffset: isScanning ? [0, -20] : 0
                            }}
                            transition={{ duration: isTarget ? 0.3 : 1 + Math.random(), repeat: Infinity, ease: "linear" }}
                        />
                    )
                })}
            </svg>

            {/* Central Core: FLASH */}
            <div className="relative z-10">
                <div className={`absolute inset-0 bg-cyan-500 blur-3xl transition-opacity duration-500 ${state === 'scanning' ? 'opacity-30' : state === 'found' ? 'opacity-50' : 'opacity-10'}`} />
                <div className="w-16 h-16 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.2)] relative z-20">
                    <Zap className={`w-8 h-8 ${state === 'scanning' ? 'text-cyan-400 animate-pulse' : 'text-cyan-500'}`} fill={state === 'found' ? "currentColor" : "none"} />
                    
                    {state === 'scanning' && (
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-6px] rounded-full border-t-2 border-cyan-500"
                        />
                    )}
                </div>
            </div>

            {/* Nodes */}
            {memoryNodes.map((node) => {
                const isActive = (state === 'found' && node.isTarget);
                return (
                    <motion.div
                        key={node.id}
                        className={`absolute px-3 py-2 rounded-xl border flex items-center gap-2 backdrop-blur-md transition-all duration-500 ${
                            isActive 
                            ? 'bg-cyan-950/90 border-cyan-400 scale-110 shadow-[0_0_25px_rgba(34,211,238,0.4)] z-30' 
                            : 'bg-black/60 border-zinc-800 text-zinc-600 z-10'
                        }`}
                        style={{ x: node.x, y: node.y }}
                        animate={{ y: isActive ? node.y : [node.y - 5, node.y + 5, node.y - 5], opacity: isActive ? 1 : state === 'scanning' ? 0.5 : 0.3 }}
                        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.5 } }}
                    >
                        <span className={isActive ? 'text-cyan-300' : 'text-zinc-600'}>{node.icon}</span>
                        <span className={`text-xs font-medium whitespace-nowrap ${isActive ? 'text-white' : 'text-zinc-500'}`}>{node.label}</span>
                    </motion.div>
                )
            })}
          </div>

          {/* --- RIGHT: CHAT --- */}
          <div className="flex-1 w-full space-y-5">
            <div className="flex justify-end">
              <div className="bg-zinc-800 text-white px-5 py-3 rounded-2xl rounded-tr-none text-sm border border-zinc-700 max-w-[80%]">
                What happened during my trip last summer?
              </div>
            </div>
            
            <div className="flex justify-start min-h-[140px]">
              <motion.div 
                className={`w-full max-w-[95%] px-6 py-5 rounded-2xl rounded-tl-none text-sm leading-relaxed border transition-all duration-500 relative overflow-hidden flex flex-col gap-3 ${state === 'found' ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.05)] opacity-100' : 'bg-zinc-900 border-zinc-800 text-zinc-500 opacity-60'}`}
              >
                 {state !== 'found' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90 backdrop-blur-[1px] z-20">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Search className="w-4 h-4 animate-bounce" />
                            <span className="text-xs font-mono">Retrieving Memory...</span>
                        </div>
                    </div>
                 )}

                {/* Context Header */}
                <div className="flex justify-between items-start border-b border-cyan-500/10 pb-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-cyan-400">
                        <Sparkles className="w-3 h-3" /> Memory Injected
                    </div>
                    {/* PERFORMANCE METRICS */}
                    <div className="flex gap-2">
                         <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[9px] text-cyan-300 font-mono">
                            <Gauge className="w-3.5 h-3.5" /> ~520ms
                         </div>
                         <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[9px] text-cyan-300 font-mono">
                            <Layers className="w-3.5 h-3.5" /> 1.2k Tokens
                         </div>
                    </div>
                </div>

                <p>
                  You visited <strong>Kyoto</strong>. You stayed at the <em>Ryokan Yamazaki</em>, visited the Fushimi Inari Shrine on Tuesday, and mentioned the matcha tea was "unforgettable."
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}