"use client";

import { useState } from "react";
import {
  Code,
  FileCode,
  FileOutput,
  FileSearch,
  Layers,
  Zap,
} from "lucide-react";

const phases = [
  {
    title: "Análisis léxico",
    icon: <FileSearch className="h-8 w-8 text-blue-600" />,
    description:
      "Divide el código fuente en tokens (unidades léxicas básicas como palabras clave, identificadores, números, etc.). Esta fase es crucial para identificar los elementos básicos del lenguaje de programación.",
    example: `Entrada: <b>int x = 5</b>;
Salida: 
  <b>Tokens: int (palabra clave), 
  x (identificador), = (operador),
  5 (constante), 
  ; (símbolo).</b>`,
  },
  {
    title: "Análisis sintáctico",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    description:
      "Analiza la estructura gramatical del programa, generalmente creando un árbol de sintaxis abstracta. Verifica si la secuencia de tokens sigue las reglas gramaticales del lenguaje.",
    example: `Entrada: <b>if (x > 0) { printf("positivo"); }</b>

Salida:<b> 
                if
              /  \\
            >      stmt
            / \\       |
          x   0    printf
                        |
                    "positivo"</b> `,
  },
  {
    title: "Análisis semántico",
    icon: <FileCode className="h-8 w-8 text-blue-600" />,
    description:
      "Verifica la coherencia semántica del programa, como la comprobación de tipos y el alcance de las variables. Esta fase asegura que las operaciones y asignaciones sean válidas según las reglas del lenguaje.",
    example: `Entrada: <b>int x = "Hello";</b>
Salida: <b>Error semántico: No se puede asignar una cadena a una variable de tipo entero.</b>

Entrada: <b>int y = 5 + 3;</b>
Salida: <b>Correcto: La asignación es válida, ambos operandos son enteros.</b>`,
  },
  {
    title: "Generación de código intermedio",
    icon: <Layers className="h-8 w-8 text-blue-600" />,
    description:
      "Crea una representación intermedia del programa que es más fácil de procesar y optimizar. Esta representación es independiente de la máquina y permite aplicar optimizaciones generales.",
    example: `Entrada: <b>int a = b + c * d;</b>

El compilador podría traducir esta expresión en las siguientes instrucciones de código intermedio:

<b>t1 = c * d
t2 = b + t1
a = t2</b>`,
  },
  {
    title: "Optimización de código",
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    description:
      "Mejora el código intermedio para que sea más eficiente en términos de tiempo de ejecución y uso de memoria. Esta fase puede incluir eliminación de código muerto, propagación de constantes, y otras técnicas de optimización.",
    example: `Entrada:
<b>t1 = 4 * 2
t2 = t1 + 3
x = t2</b>

Salida optimizada:
<b>x = 11</b>

El compilador ha realizado la <b>evaluación de constantes</b> en tiempo de compilación.`,
  },
  {
    title: "Generación de código objetivo",
    icon: <FileOutput className="h-8 w-8 text-blue-600" />,
    description:
      "Produce el código final en el lenguaje objetivo, generalmente código máquina o bytecode. Esta fase traduce el código intermedio optimizado a instrucciones específicas de la arquitectura de destino.",
    example: `Entrada (código intermedio): <b>x = a + b</b>

Salida (ensamblador x86):
<b>MOV AX, [a]
ADD AX, [b]
MOV [x], AX</b>

Este código carga 'a' en EAX, suma 'b' a EAX, y guarda el resultado en 'x'.`,
  },
];

export default function CompilerPhases() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="fases"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Fases de un Compilador
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                activePhase === index
                  ? "ring-4 ring-blue-500 transform scale-105"
                  : "hover:shadow-xl"
              }`}
              onClick={() => setActivePhase(index)}
            >
              <div className="flex items-center mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">
                  {phase.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Ejemplo:
                </h4>
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
  );
}
