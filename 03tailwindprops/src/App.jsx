import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componts/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Hitesh",
    age:23
  }

  return (
    <>

    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Telwind test</h1>
     
   <Card username = "Elizabeth Olsen" btnText="Click me" />
   <br/>
   <Card username=" Ana de Armas" btnText ="Visit me"/>

 
    </>
  )
}

export default App
//3.35
