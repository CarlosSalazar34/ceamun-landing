import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import VisionSection from "./components/VisionSection"

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainSection/>
        <AboutUs/>
        <VisionSection/>
      </main>
    </>
  )
}

export default App
