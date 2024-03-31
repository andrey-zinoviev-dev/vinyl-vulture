import React from 'react'
import './Home.css'
import { popularAlbums } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
    const [popularOrder, setPopularOrder] = React.useState(0);

    //refs
    const popularRef = React.useRef<HTMLUListElement>(null);
    //functions
    function popularNavButtonClick() {
        console.log(popularRef.current);
    }
    // console.log(popularAlbums.length);
    React.useEffect(() => {

        console.log(popularOrder);

        const timeout = setTimeout(() =>{
            if(popularRef.current) {
                if(popularOrder === popularAlbums.length -1) {
                    popularRef.current.scrollLeft = 0;
                } else {
                    popularRef.current.scrollLeft += Math.ceil(popularRef.current.children[popularOrder].clientWidth);

                }
                // console.log(popularRef.current.children[popularOrder].clientWidth);
            } 
            setPopularOrder((prevValue) => {
                return prevValue === popularAlbums.length -1 ? 0 : prevValue +1;
            })
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    }, [popularOrder]);

    // console.log(popularOrder);

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

                <ul ref={popularRef} className='intro__cont-popular-albs'>
                    {popularAlbums.map((album, index) => {
                        return <li key={index} style={{backgroundImage: `url(${album.cover})`}}>

                        </li>
                    })}
                </ul>
                <div className='intro__cont-popular-navigation'>
                    <button onClick={popularNavButtonClick} className='intro__cont-popular-btn'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={popularNavButtonClick} className='intro__cont-popular-btn'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <div className='progerss-bar-wrapper'>
                        <div className='progress-bar' style={{width: `${popularOrder/popularAlbums.length * 100}%`}}></div>
                    </div>
                    <p style={{color: "white"}}>{1}/{popularAlbums.length}</p>
                </div>

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