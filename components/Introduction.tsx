import { Terminal, GitCompare, Code} from 'lucide-react'

export default function Introduction() {
  return (
    <section id="introduccion" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Los Compiladores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
              <Code className="h-8 w-8 mr-2 text-blue-600" />
              ¿Qué es un compilador?
            </h3>
            <p className="text-gray-600 text-lg">
              Info aca
            </p>
          </div>
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
              <Terminal className="h-8 w-8 mr-2 text-blue-600" />
              Importancia
            </h3>
            <ul className="text-gray-600 text-lg list-disc list-inside">
              <li>Importancia 1</li>
              <li>Importancia 2</li>
              <li>Importancia 3</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
              <GitCompare className="h-8 w-8 mr-2 text-blue-600" />
              Compilador vs Intérprete
            </h3>
            <div className="text-gray-600 text-lg">
              <div className="mb-4">
                <h4 className="font-semibold text-blue-600">Compilador:</h4>
                <p>Info del compilador</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600">Intérprete:</h4>
                <p>Info del interprete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

