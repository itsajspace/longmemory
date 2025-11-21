'use client'

import { motion } from 'framer-motion'
import { User, Coffee, Utensils, MapPin, AlertCircle } from 'lucide-react'

export default function PreferenceIllustration() {
  const preferences = [
    { icon: <Utensils className="w-4 h-4" />, label: "Loves Sushi", x: -120, y: -60 },
    { icon: <AlertCircle className="w-4 h-4" />, label: "No Peanuts", x: 120, y: -40 },
    { icon: <Coffee className="w-4 h-4" />, label: "Oat Milk Only", x: -80, y: 80 },
    { icon: <MapPin className="w-4 h-4" />, label: "Lives in NYC", x: 90, y: 70 },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-10 relative">
      
      {/* --- LEFT: THE USER & BUBBLES --- */}
      <div className="relative w-full md:w-1/2 h-[400px] flex items-center justify-center">
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
              <stop offset="50%" stopColor="rgba(34, 211, 238, 0.4)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
            </linearGradient>
          </defs>
          {preferences.map((pref, i) => (
            <motion.line
              key={i}
              x1="50%" y1="50%"
              x2={`calc(50% + ${pref.x}px)`}
              y2={`calc(50% + ${pref.y}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </svg>

        {/* Center User */}
        <motion.div 
          animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.2)', '0 0 50px rgba(34,211,238,0.6)', '0 0 20px rgba(34,211,238,0.2)'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative z-10 w-20 h-20 rounded-full bg-black border border-cyan-500 flex items-center justify-center"
        >
          <User className="w-10 h-10 text-cyan-400" />
        </motion.div>

        {/* Orbiting Bubbles */}
        {preferences.map((pref, i) => (
          <motion.div
            key={i}
            className="absolute z-20 px-4 py-2 rounded-full bg-black/80 border border-cyan-500/30 text-cyan-100 flex items-center gap-2 shadow-lg backdrop-blur-md"
            style={{ x: pref.x, y: pref.y }}
            animate={{ 
              y: [pref.y - 10, pref.y + 10, pref.y - 10],
              scale: [1, 1.05, 1],
              borderColor: ['rgba(34,211,238,0.3)', 'rgba(34,211,238,0.8)', 'rgba(34,211,238,0.3)']
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          >
            <span className="text-cyan-400">{pref.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">{pref.label}</span>
          </motion.div>
        ))}
      </div>

      {/* --- RIGHT: THE CONTEXTUAL RESPONSE --- */}
      <div className="w-full md:w-1/2 space-y-8 px-6">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Knows your users preferences</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            No need to repeat yourself. LongMemory constantly learns from interactions, building a dynamic profile of user preferences.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end">
             <div className="bg-zinc-800 text-gray-200 px-5 py-3 rounded-2xl rounded-tr-none max-w-[80%]">
                Order me a coffee.
             </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-start"
          >
             <div className="bg-gradient-to-br from-cyan-950/40 to-black border border-cyan-500/40 text-cyan-50 px-5 py-4 rounded-2xl rounded-tl-none max-w-[90%] shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <p>Ordering your usual: <strong>Large Latte with Oat Milk</strong> (No sugar). Picking up at the downtown cafe.</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">✓ Pref: Oat Milk</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">✓ Pref: Downtown</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}