import React from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { arrivals } from "./utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Arrivals.css"
export default function Arrivals() {
  const listRef = React.useRef<HTMLUListElement>(null);

  return (
    <section className="arrivals">
      <h2>Новинки <p>Vinyl</p> <p>Vulture</p></h2>
      <div>
        <ul ref={listRef} className="arrivals__ul">
          {arrivals.map((arrivalRecord, index) => {
            return <li key={index}>
              {arrivalRecord.fire && <p className="arrivals__ul-li-fire">hot</p>}
              <button className="arrivals__ul-li-fav">
                <FontAwesomeIcon icon={faHeart} />
              </button>
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
      </div>
    </section>
  )
}