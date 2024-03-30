import React from 'react'
import './Home.css'
import { popularAlbums } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Home({}) {
    const [popularOrder, setPopularOrder] = React.useState(0);

    //refs
    const popularRef = React.useRef(null);
    //functions
    function popularNavButtonClick() {
        console.log(popularRef.current);
    }

    return (
     <main className="main">
        <section className='search'>
            <div className='search__text-wrapper'>
                <h2>
                    Найти <span>любую</span> пластинку и стать коллекционером.
                </h2>
                {/* <p><span>V</span><span>V</span></p> */}
            </div>
            <form className='search__form'>
                <input className='search__input'>
                </input>
                <button className='h__btn'>
                    Найти
                </button>
            </form>  
        </section>
        <section className='intro__cont'>
            <div className='intro__cont-popular'>
                <button onClick={popularNavButtonClick} className='intro__cont-popular-btn' style={{left: -75}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <ul ref={popularRef} className='intro__cont-popular-albs'>
                    {popularAlbums.map((album) => {
                        return <li key={album.name} style={{backgroundImage: `url(${album.cover})`}}>
                            <p>{album.name}</p>
                            <span>{album.price}</span>
                            <span>{album.published.getDate()}</span>
                        </li>
                    })}
                </ul>
                <div>
                    <div></div>
                    <p>{1}/{popularAlbums.length}</p>
                </div>
                <button onClick={popularNavButtonClick} className='intro__cont-popular-btn' style={{right: -75}}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

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