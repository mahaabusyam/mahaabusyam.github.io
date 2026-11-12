import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <Background />
      <div className="container">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}