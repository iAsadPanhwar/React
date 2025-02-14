import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
function App() {
  

  return (
    <>
    <Navbar></Navbar>
    
    <div className="cards">
      <Card title = "card 1" description = "card 1 desc" />
      <Card title = "card 2" description = "card 2 desc" />
      <Card title = "card 3" description = "card 2 desc" />
      <Card title = "card 4" description = "card 3 desc" />
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
