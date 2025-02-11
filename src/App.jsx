import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feed from "./components/Feed"
const App=()=> {
 
  return (

        <BrowserRouter basename="/dashboard">
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/feed" element={<Feed/>} />
              <Route path="/login" element={<div>Login here</div>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    
  
  )
}

export default App
  