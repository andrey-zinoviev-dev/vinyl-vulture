import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Header({}) {
    
  
    return (
      <header className="header">
        <p className='header__p'>
          <span>V</span>inyl <span>V</span>ulture
        </p>
        <form className='search__form'>
                <input placeholder='Найти любую пластинку' className='search__input'></input>
                <button className='h__btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form> 
        <div className='btn__div'>
          <button className="h__btn">
            Вход
          </button>
          <button className="h__btn">
            Регистрация
          </button>
        </div>
      </header>
    )
  }