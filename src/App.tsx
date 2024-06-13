import './App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import PopUp from './PopUp'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [popupclick, setPopUpclick] = React.useState(false)
  const [loginpopup, setLoginPopUp] = React.useState(true)

  return (
    <>
      <Header setPopUpclick={setPopUpclick} setLoginPopUp={setLoginPopUp}>

      </Header>

      {/* <Home>

      </Home> */}

      <Outlet>
        
      </Outlet>
      
      <Footer>

      </Footer>
      
      {popupclick && <PopUp setPopUpclick={setPopUpclick} loginpopup={loginpopup} setLoginPopUp={setLoginPopUp}>

      </PopUp>}
     
    </>
  )
}

export default App
