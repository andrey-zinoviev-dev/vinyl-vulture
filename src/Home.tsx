import React from 'react'
import './Home.css'

export default function Home({}) {
    
  
    return (
     <main className="main">
        <section className='search'>
            <h2>
                Поиск по сайту
            </h2>

            <form className='search__form'>
                <input className='search__input'>
                </input>
                <button className='h__btn'>
                    Найти
                </button>
            </form>  
        </section>
        <section className='intro__cont'>
            <div>
                Контент
            </div>
            <ul>
                <li>

                </li>
            </ul>
        </section>
        <section className='pop__cont'>
            Популярные 
        </section>
        <section className='main__cont'>
            Плитки с заголовком
        </section>
     </main>
    )
  }