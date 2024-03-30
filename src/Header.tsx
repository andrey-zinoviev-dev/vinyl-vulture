import React from 'react'
import './Header.css'
export default function Header({}) {
    
  
    return (
      <header className="header">
        <p className='header__p'>
          <span>V</span>inyl <span>V</span>ulture
        </p>
        <div className='btn__div'>
          <button className="h__btn">
            Log in
          </button>
          <button className="h__btn">
            Sign up
          </button>
        </div>
      </header>
    )
  }