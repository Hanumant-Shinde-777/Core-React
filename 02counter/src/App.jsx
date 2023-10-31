import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [Counter, setReminder] = useState(15) 
 
//Declaring Counter value
//let Counter = 15

const addValue = () =>{
 // console.log("Valued add Succefully",Math.random());
 
 Counter = Counter+1
 setReminder(Counter)
 console.log("Clicked", Counter);
}
const removeValue = () =>{
setReminder(Counter -1)
}
  return (
    <>
      <h1>Here we go with react..</h1>
     
      <h3> Counter Value:{Counter}</h3>
      <button
      onClick={addValue}
      > add value {Counter} </button>
      <br/>
      <button 
      onClick={removeValue}> remove value{Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App


// 252
