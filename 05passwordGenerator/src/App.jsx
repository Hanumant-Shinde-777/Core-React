import { useState,useCallback } from 'react'

 import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNUmberAllowed] = useState
  (false);

  const [charAllowed, setCharAllowed] = useState
  (false);

const [password, setPassword] = useState ("");

const passwordGererator = useCallback(()=>{

  let pass =""
  let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

for(let i=1; i<=Array.length; i++){
  //const element = Array[i];
  let char = Math.floor(Math.random() * str.length + 1)
pass = str.charAt(char)
}
setPassword(pass)

},[length, numberAllowed, charAllowed, setPassword])
  return (
<>
{/* <h1 className='text-4xl text-center
text-white'>
  password Genarator</h1> */}

<div className="w-full max-w-md mx-auto shadow-md
 rounded-lg x-4 my-8
 bg-gray-800  text-orange-500">
  <h1 className='text-white text-center my-3'>
    Password Genrator</h1>
 
 <div className='className=" flex shadow rounded-lg 
 overflow-hidden mb-4"'> 
<input type='text'
value={password}
className='outline-none w-full py-1 px-3'
placeholder='password'
readOnly
/>
 </div>
   </div>

</>
  )
}

export default App


//