import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feed from "./components/Feed"
import Login from "./components/Login"
import { Provider } from "react-redux"
import devmergStore from "./utils/devmergStore"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Editprofile from "./components/Editprofile"
import Pendingrequest from "./components/Pendingrequest"
import AllAcceptrequest from "./components/AllAcceptRequest"
import FriendProfile from "./components/FriendProfile"
const App=()=> {
 
  return (
    <Provider store={devmergStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/feed" element={<Feed/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/edit" element={<Editprofile/>}></Route>
              <Route path="/request/pending" element={<Pendingrequest/>}></Route>
              <Route path="/request/accept" element={<AllAcceptrequest/>}></Route>
              <Route path="/profile/friend/:reqId" element={<FriendProfile/>}></Route>
            </Route>
          </Routes>
          <Routes>
            <Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
     </Provider>
  
  )
}

export default App
  