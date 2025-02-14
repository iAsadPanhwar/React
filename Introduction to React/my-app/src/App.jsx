import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value,setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText = "Asad Ali Panhwar"/>
      <div className="value">{value}</div>
      <button onClick={()=>{
        setValue(value+1)
      }} className="btn">Click me to increment</button>
      <Footer></Footer>
    </div>
  );
}

export default App;
