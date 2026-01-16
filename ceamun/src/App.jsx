import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Testimonios from "./components/Testimonios"
import VisionSection from "./components/VisionSection"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainSection/>
        <AboutUs/>
        <VisionSection/>
        <Testimonios/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
