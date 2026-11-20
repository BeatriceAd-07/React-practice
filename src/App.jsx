import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const team = [
    {
      name: "Beatrice Addai",
      role: "Frontend Developer",
      email: "beatriceaddai@gmail.com",
      university: "University of Ghana",
    },
    {
      name: "John Mensah",
      role: "Data Scientist",
      email: "john@gmail.com",
      university: "University of Ghana",
    },
    {
      name: "Clara Abrokwah",
      role: "UI/UX Designer",
      email: "Clara@gmail.com",
      university: "University of Ghana",
    },
  ];
  const [name, setName] = useState("");

  return (
    <>
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => {if (count > 0) setCount(count - 1) }}>
        Decrease
      </button>

      <div>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>

    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />  
    </div>
  </>
  )
};

export default App;
