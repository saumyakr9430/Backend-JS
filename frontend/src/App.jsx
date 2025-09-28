import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes,setjokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <h1> chai aur full code </h1>
    <p>
      JOKES : {jokes.length}
    </p>
    {
      jokes.map((jokes,index)=>(
      <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
