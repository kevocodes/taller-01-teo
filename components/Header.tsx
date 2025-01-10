import { Binary } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Binary className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Syntax error mis huev*s</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#introduccion" className="text-gray-600 hover:text-blue-600">Los compiladores</a></li>
            <li><a href="#fases" className="text-gray-600 hover:text-blue-600">Fases</a></li>
            <li><a href="#ejemplos" className="text-gray-600 hover:text-blue-600">Ejemplos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

