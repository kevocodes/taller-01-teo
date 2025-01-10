import Header from '../components/Header'
import Introduction from '../components/Introduction'
import CompilerPhases from '../components/CompilerPhases'
import CompilerExamples from '../components/CompilerExamples'
import Footer from '../components/Footer'
import Background from '../components/Background'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Background />
      <Header />
      <main className="flex-grow relative z-10">
        <Introduction />
        <CompilerPhases />
        <CompilerExamples />
      </main>
      <Footer />
    </div>
  )
}

