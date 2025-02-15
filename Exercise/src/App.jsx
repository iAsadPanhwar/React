import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [Cards, setCards] = useState([])

  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {Cards.map((card)=>{
          return <div key={card.iD} className="cards">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: UserId: {card.userId}</span>
          </div>
        })}
       
      </div>
    </>
  )
}

export default App
