'use client'

import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'

export default function MiddlewareCode() {
  const [copied, setCopied] = useState(false)

  const codeString = `import { LongMemory } from 'longmemory-sdk';

// 1. Configure User Session
const memory = new LongMemory({
  apiKey: process.env.LM_API_KEY,
  userId: "user_123" 
});

// 2. Just ask. We inject context + route to LLM.
const response = await memory.ask("Book my usual table");

console.log(response);
// -> "Booking table at Sushi Zen (No Peanuts)..."`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Glow Effect behind the code */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20"></div>
      
      <div className="relative rounded-xl overflow-hidden bg-[#0e0e10] border border-zinc-800 shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-3 text-xs text-zinc-500 font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3" /> Demo example
            </span>
          </div>
          <button 
            onClick={handleCopy}
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto">
          <pre className="font-mono text-sm md:text-[15px] leading-loose">
            <code>
              <span className="text-purple-400">import</span> <span className="text-yellow-300">{'{ LongMemory }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'longmemory-sdk'</span>;{'\n\n'}
              
              <span className="text-gray-500 italic">// 1. Configure User Session</span>{'\n'}
              <span className="text-purple-400">const</span> <span className="text-blue-400">memory</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">LongMemory</span>({'{'}{'\n'}
              {'  '}apiKey: <span className="text-blue-300">process.env.LM_API_KEY</span>,{'\n'}
              {'  '}userId: <span className="text-green-400">"user_123"</span>{'\n'}
              {'}'});{'\n\n'}

              <span className="text-gray-500 italic">// 2. Just ask. We inject context + route to your preffered LLM.</span>{'\n'}
              <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> memory.<span className="text-blue-400">ask</span>(
              <span className="text-green-400">"Book my usual table"</span>);{'\n\n'}

              console.log(response);{'\n'}
              <span className="text-gray-500 italic">//  "Booking table at Sushi Zen (No Peanuts)..."</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}