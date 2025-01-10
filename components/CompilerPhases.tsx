'use client'

import { useState } from 'react'
import {FileSearch} from 'lucide-react'

const phases = [
  {
    title: "Análisis léxico",
    icon: <FileSearch className="h-8 w-8 text-blue-600" />,
    description: "info",
    example: `info`
  },
]

export default function CompilerPhases() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section id="fases" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Fases de un Compilador</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                activePhase === index ? 'ring-4 ring-blue-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setActivePhase(index)}
            >
              <div className="flex items-center mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">{phase.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Ejemplo:</h4>
                <pre 
                  className="text-xs text-gray-800 whitespace-pre-wrap overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: phase.example }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

