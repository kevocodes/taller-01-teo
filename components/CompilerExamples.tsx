import { Code2} from 'lucide-react'

const compilers = [
  {
    name: "GCC",
    fullName: "GNU Compiler Collection",
    icon: <Code2 className="h-12 w-12 text-blue-600 mb-4" />,
    description: "Es un conjunto de compiladores de código abierto ampliamente utilizado en sistemas operativos basados en Unix y Linux. Incluye compiladores para varios lenguajes de programación como C, C++, Objective-C, Fortran, Ada, y otros."
  },
]

export default function CompilerExamples() {
  return (
    <section id="ejemplos" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Ejemplos de Compiladores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compilers.map((compiler, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center mb-4">
                {compiler.icon}
                <h3 className="text-xl font-semibold text-gray-800 text-center">{compiler.name}</h3>
                <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">{compiler.fullName}</h4>
              </div>
              <p className="text-gray-600 text-sm">{compiler.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

