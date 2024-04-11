import React from "react"
import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons"
import { arrivals } from "./utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Arrivals.css"

export default function Arrivals() {
  const listRef = React.useRef<HTMLUListElement>(null);

  const [activeIndex, setActiveIndex] = React.useState<{index: number, back: boolean}>({index: 0, back: false});

  //pagination
  const dotsArray = [];
  for(let i = 0; i < Math.ceil(arrivals.length/5); i+=1) {
    dotsArray.push(i);
  }

  React.useEffect(() => {
    console.log(activeIndex);
    const autoScrollInterval = setInterval(() => {
      setActiveIndex((prevValue) => {
        return {...prevValue, index: prevValue.index + 1, back: false};
      })
    }, 3000);
    if(listRef.current) {

      if(activeIndex.index === 0) {
        listRef.current.scrollLeft = listRef.current.scrollLeft - (Math.ceil(listRef.current.clientWidth*(activeIndex.index + 1)))
      } else {
        if(activeIndex.index > dotsArray.length - 1) {
          setActiveIndex((prevValue) => {
            return {...prevValue, index: 0, back: true};
          })
        }
        listRef.current.scrollLeft = activeIndex.back ? listRef.current.scrollLeft - (Math.ceil(listRef.current.clientWidth*(activeIndex.index))) : listRef.current.scrollLeft + (Math.ceil(listRef.current.clientWidth*activeIndex.index));
      }
    }
    return () => {
      clearInterval(autoScrollInterval);
    }
  }, [activeIndex])

  return (
    <section className="arrivals">
      <h2>Новинки <p>Vinyl</p> <p>Vulture</p></h2>
      <div>
        <ul ref={listRef} className="arrivals__ul">
          {arrivals.map((arrivalRecord, index) => {
            return <li key={index}>
              <div className="arrivals__ul-li-signs">
                {arrivalRecord.fire && <p className="arrivals__ul-li-fire">hot</p>}
                <button className="arrivals__ul-li-fav">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <img src={arrivalRecord.cover}></img>
              <div className="arrivals__ul-li-text">
                <p>{arrivalRecord.author.name}</p>
                <p className="arrivals__ul-li-author">{arrivalRecord.name}</p>
                <div className="arrivals__ul-li-action-div">
                  <button>Купить</button>
                  <span>{arrivalRecord.price} р</span>
                </div>
              </div>
            </li>
          })}
        </ul>
        <div className="arrivals__navigation">
          <button onClick={() => {
            // console.log(listRef.current && listRef.current.children[activeIndex].clientWidth);
            // listRef.current.scrollLeft = listRef.current.scrollLeft + listRef.current.scrollLeft.chil
            setActiveIndex((prevValue) => {
              return prevValue.index === 0 ? {index: dotsArray.length - 1, back: false} : {...prevValue, index: prevValue.index -1, back: true}
            })
          }} >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <ul className="arrivals__dots">        
            {dotsArray.map((arrival, index) => {
              return <li>
                <button style={{backgroundColor: activeIndex.index === index ? "#646cff" : "#1A1A1A", height: activeIndex.index === index ? "10px" : "7px"}} onClick={() => {
                  // console.log(arrival.name)
                }}></button>
              </li>
            })}
          </ul>
          <button onClick={() => {

            setActiveIndex((prevValue) => {
              return prevValue.index === dotsArray.length - 1 ? {index: 0, back: true} : {...prevValue, index: prevValue.index + 1, back: false};
            })
          }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  )
}