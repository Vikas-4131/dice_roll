import styled from  "styled-components"
import Home from "./component/Home"
import { useState } from "react"
import Gameplay from "./component/Gameplay"

// const  Button =  styled.button`
// background-color:black;
// color: white;
// padding: 10px;
// `;

function App() {
   const [isgamestared, setIsgamestared] = useState(false)

   const togglegame = () => {
    setIsgamestared((prev) => !prev)
   }


  return (
    <>
      
         {/* <Button>this is a compoent </Button> */
         isgamestared ? <Gameplay/> : <Home toggle = {togglegame}/>
         
         }
         
    
    </>
  )
}

export default App
