import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  setLoginclick: React.Dispatch<React.SetStateAction<boolean>>,
  setRegclick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header(props: HeaderProps) {
    
  
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
          <button onClick={() => {props.setLoginclick ((prevValue:boolean) => {return !prevValue;})

          }}
          
           className="h__btn">
            Вход
          </button>
          <button onClick={() => {props.setRegclick ((prevValue:boolean) => {return !prevValue;})
          }} className="h__btn">
            Регистрация
          </button>
        </div>
      </header>
    )
  }