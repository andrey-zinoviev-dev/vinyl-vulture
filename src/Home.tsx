import React from 'react'
import './Home.css'
import { popularAlbums } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'
import Arrivals from './Arrivals'
import RAP from './assets/2281b612721133.5626c3e5bc694.png'
import INDIE from './assets/Unpeeled.jpg'
import SHOEGAZE from './assets/c82dfe541389f8f05554a444091b34be.500x500x1.jpg'
import Soundtrack from './assets/81gC318-4KL._UF894,1000_QL80_.jpg'
export default function Home() {
    const [popularOrder, setPopularOrder] = React.useState(0);

    //refs
    const popularRef = React.useRef<HTMLUListElement>(null);
    //functions
    function popularNavButtonClick() {
        // console.log(popularRef.current);
    }
    // console.log(popularAlbums.length);
    React.useEffect(() => {

        // console.log(popularOrder);

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
        <ul className='social'>
            <li>
                <FontAwesomeIcon icon={faVk} />
            </li>
            <li>
                <FontAwesomeIcon icon={faTelegram} />
            </li>
            <li>
                <FontAwesomeIcon icon={faInstagram} />
            </li>
        </ul>
        {/* <section className='main__promo'>
            <h1>VINYL VULTURE // VINYL VULTURE // VINYL VULTURE // VINYL VULTURE //</h1>
        </section> */}
        <section className='search'>
            {/* <h2></h2> */}
            {/* <form className='search__form'>
                <input placeholder='Найти любую пластинку' className='search__input'></input>
                <button className='h__btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>  */}
            {/* <div>

                <h2>
                    Найти <span>любую</span> пластинку и стать коллекционером.
                </h2>
                <form className='search__form'>
                    <input className='search__input'>
                    </input>
                    <button className='h__btn'>
                        Найти
                    </button>
                </form> 
            </div> */}
            {/* <div>
                <h2>
                    Быть в курсе - быть в теме, а значит - иметь ассортимент
                </h2>
                <form>
                    <input placeholder='почта'></input>
                    <button>Подписаться</button>
                </form>
            </div> */}
        </section>
        <Arrivals />
        <section className='intro__cont'>
            <h2><p>Vinyl</p> <p>Vulture</p> рекомендует</h2>
            <div className='intro__cont-popular'>
                <div className='intro__cont-popular-navigation-wrapper'>
                    <img className='intro__cont-popular-cover' src={popularAlbums[popularOrder].cover} />
                    <div className='intro__cont-popular-navigation-wrapper-buttons'>
                        <button onClick={() => {
                            setPopularOrder((prevValue) => {
                                return prevValue === 0 ? 0 : prevValue - 1;
                            })
                        }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={() => {
                            setPopularOrder((prevValue) => {
                                return prevValue === popularAlbums.length -1 ? 0 : prevValue + 1;
                            })
                        }}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className='intro__cont-popular-albums-wrapper'>
                    <h2>0{popularOrder + 1} - {popularAlbums[popularOrder].name}</h2>
                    <ul className='intro__cont-popular-albums-wrapper-ul'>
                        {popularAlbums[popularOrder].songs.map((song, index) => {
                            return <li key={song.name+index} /*style={{color: popularOrder === index ? "black" : "#B4B4B4", backgroundColor: popularOrder === index ? "#FE9E01" : "transparent"}}*/ >
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
        <section className='genre__cont'>
            <button className='genre__bigd'>
                <p className='genre__insaded-txt2'> Metal </p>
                <div className='genre__insaded-overlay'>

                 </div>
            </button>
             <div className='genre__littled'>
                {/* маленький д */}
                
                <button className='genre__insaded' style={{backgroundImage:`url(${RAP})`}}>
                    <p className='genre__insaded-txt1'>RAP</p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
                <button className='genre__insaded' style={{backgroundImage:`url(${INDIE})`}}>
                    <p className='genre__insaded-txt1'>Indie</p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
                <button className='genre__insaded'style={{backgroundImage:`url(${SHOEGAZE})`}}>
                    <p className='genre__insaded-txt1'>ShoeGaze</p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
                <button className='genre__insaded'style={{backgroundImage:`url(${Soundtrack})`}}>
                    <p className='genre__insaded-txt1'>Soundtrack</p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
             </div>
        </section>
        <section className='main__cont'>
            хз чо пока что
        </section>
     </main>
    )
  }