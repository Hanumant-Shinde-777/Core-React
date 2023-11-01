import { useState } from "react"

function App() {
 const [color, setColor]= useState("DarkGray")
  return (
    <>


<div className="w-full h-screen duration-200"
   style={{backgroundColor:color}} >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
{/* Botton for the White color */}
<button 
//style={{background:"Dark Slate Gray"}}
onClick={() => setColor("DarkSlateGray")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{background:"DarkSlateGray"}}
> DarkSlateGray</button>

{/* Botton for the Gray color */}
<button 
onClick={() => setColor("Gray")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{background:"Gray"}}
> GRAY</button>

{/* Botton for the Red color */}
<button 
onClick={() => setColor("Red")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{background:"Red"}}
> RED</button>

{/* Botton for the Medium Sea Green color */}
<button 
style={{background:"#3CB371"}}
onClick={() => setColor("#3CB371")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//style={{background:"MediumSeaGreen"}}
> GREEN</button>

{/* Botton for the Aquamarine color */}
<button 
style={{background:"#7FFFD4"}}
onClick={() => setColor("#7FFFD4")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//style={{background:"Aquamarine"}}
> BLUE</button>

{/* Botton for the Ocean Aqua color */}
<button
onClick={() => setColor("#00FFFF")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{background:"Aqua"}}
> Aqua</button>
 </div>
    </div>
   </div>
    </>
  )
}

export default App

console.log("Hello world")