import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },
    {
      title: "hey Another todo",
      desc: "I am a good Another todo"
    },
    {
      title: "hey yet Another todo",
      desc: "I am a good yet Another todo"
    },

  ])

  const Todo = ({ todo }) => {
    return (<>
    <div className="m-4 border border-1 border-red">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </div>
    </>)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is true</button>}
      {/* Codintional Rendering */}
      {/* {showbtn && <button>I will be shown only when second button is clicked</button>} */}
      <div className="card">
        
        {/* Rendering Lists */}
        {todos.map((todo)=>{
          return <Todo key = {todo.titletitle} todo={todo}/>
        })}
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
