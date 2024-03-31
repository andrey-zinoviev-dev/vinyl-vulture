import React from 'react'
import './Home.css'
import { popularAlbums } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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

        // const timeout = setTimeout(() =>{
        //     if(popularRef.current) {
        //         if(popularOrder === popularAlbums.length -1) {
        //             popularRef.current.scrollLeft = 0;
        //         } else {
        //             popularRef.current.scrollLeft += Math.ceil(popularRef.current.children[popularOrder].clientWidth);

        //         }
        //         // console.log(popularRef.current.children[popularOrder].clientWidth);
        //     } 
        //     setPopularOrder((prevValue) => {
        //         return prevValue === popularAlbums.length -1 ? 0 : prevValue +1;
        //     })
        // }, 3000)

        // return () => {
        //     clearTimeout(timeout);
        // }
    }, [popularOrder]);

    // console.log(popularOrder);

    return (
     <main className="main">
        <section className='search'>
            <div>
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
            </div>
            <div>
                <h2>
                    Быть в курсе - быть в теме, а значит - иметь ассортимент
                </h2>
                <form>
                    <input placeholder='почта'></input>
                    <button>Подписаться</button>
                </form>
            </div>
        </section>
        <section className='intro__cont'>
            <div className='intro__cont-popular'>
                <div className='intro__cont-popular-navigation-wrapper'>
                    <img className='intro__cont-popular-cover' src={popularAlbums[popularOrder].cover} />
                    <div className='intro__cont-popular-navigation-wrapper-buttons'>
                        <button>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className='intro__cont-popular-albums-wrapper'>
                    <h3>Vinyl Vulture рекомендует</h3>
                    <h2>0{popularOrder + 1} - {popularAlbums[popularOrder].name}</h2>
                    <ul className='intro__cont-popular-albums-wrapper-ul'>
                        {popularAlbums[popularOrder].songs.map((song, index) => {
                            return <li key={song.name+index} style={{color: popularOrder === index ? "black" : "#B4B4B4", backgroundColor: popularOrder === index ? "#FE9E01" : "transparent"}}>
                                <span>0{index + 1}</span>
                                <h4>{song.name}</h4>
                                <span style={{margin: "0 0 0 auto"}}>{song.length}</span>
                                <a href={song.link}>
                                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
                {/* <ul ref={popularRef} className='intro__cont-popular-albs'>
                    {popularAlbums.map((album, index) => {
                        return <li key={index} style={{backgroundImage: `url(${album.cover})`}}>

                        </li>
                    })}
                </ul> */}
                {/* <div className='intro__cont-popular-navigation'>
                    <button onClick={() => {
                        setPopularOrder((prevValue) => {
                            return prevValue === popularAlbums.length -1 ? 0 : prevValue -1;
                        })
                    }} className='intro__cont-popular-btn'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div>
                        <div className='progerss-bar-wrapper'>
                            <div className='progress-bar' style={{width: `${popularOrder/popularAlbums.length * 100}%`}}></div>
                        </div>
                        <p style={{color: "white"}}>{1}/{popularAlbums.length}</p>
                    </div>
                    <button onClick={() => {
                        setPopularOrder((prevValue) => {
                            return prevValue === popularAlbums.length -1 ? 0 : prevValue +1;
                        })
                    }} className='intro__cont-popular-btn'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div> */}

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