import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Testimonios from "./components/Testimonios"
import VisionSection from "./components/VisionSection"

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainSection/>
        <AboutUs/>
        <VisionSection/>
        <Testimonios/>
      </main>
    </>
  )
}

export default App
