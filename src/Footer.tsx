import React from 'react'
import './Footer.css'

export default function Footer({}) {
    
  
    return (
     <footer className="footer">
        <ul className='footer__ul'>
         <li>
          <a>Публичная оферта</a>
         </li>
         <li>
          <a>Политика обработки данных</a>
         </li>
         <li>
           <a>Сотрудничество</a> 
         </li>
         <li>
          <a>Соц. Сети</a> 
         </li>
          <p>Vynyl Vulture ©</p> 
        </ul>
     </footer>
    )
  }