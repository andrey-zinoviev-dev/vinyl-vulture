import './App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Register from './Regster'
import React from 'react'

function App() {
  const [loginclick, setLoginclick] = React.useState(false)
  const [regclick, setRegclick] = React.useState(false)

  return (
    <>
      <Header setLoginclick={setLoginclick} setRegclick={setRegclick}>

      </Header>

      <Home>

      </Home>
      
      <Footer>

      </Footer>
     
      {loginclick &&<Login setLoginclick={setLoginclick} setRegclick={setRegclick}>
        
        </Login> }

      {regclick &&<Register setRegclick={setRegclick} setLoginclick={setLoginclick}>

        </Register>}

    </>
  )
}

export default App
