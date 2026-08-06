import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header name= "Beatrice Addai" role= "Future Software Engineer" email= "beatriceaddai@gmail.com" university= "university: University of Ghana" />
    <Header name= "John Mensah" role= "Data Scientist" email= "john@gmail.com" university= "university: University of Ghana"/>
    <Header name= "Clara Aidoo" role= "Backend Developer" email= "clara@gmail.com" university= "university: University of Ghana"/>
    
    <h2>About Me</h2>
    <p>I am an IT student learning React to improve my IT skils for the future</p>

    <button>Contact Me</button>

    <div>
      <button>View My Projects</button>
    </div>
    
    
   </div>

   
  )
}

export default App
