import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";

function App() {
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

  return (
    <div>
      <h1>Our Team</h1>
      {team.map((member) => (
        <Header
        key={member.email}
        {...member} //Spread operator
        />
         
         ))}

    </div>
    
  );

    
}

export default App
