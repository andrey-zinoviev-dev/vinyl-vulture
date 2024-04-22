import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'
interface RegProps {
    setRegclick: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginclick: React.Dispatch<React.SetStateAction<boolean>>

  }

export default function Register(props: RegProps) {
    return (
        <section className='popup popup_register'>
           <div className='overlay' onClick={() => {props.setRegclick(false)}}></div>
           <div className='container'>
           <button className='buttnx' onClick={() => {props.setRegclick(false)}}>
                X
            </button>
            <h3>Регистрация</h3>
            <Form>
                <input placeholder='Nickname' className='input_style'></input>
                <input placeholder='Email' className='input_style'></input>
                <input placeholder='Password' className='input_style'></input>
                <input placeholder='Confirm Password' className='input_style'></input>
                <button>Регистрация</button>
                <button onClick={() => {
                    props.setRegclick(false)
                    props.setLoginclick(true)
                }}>Уже есть Аккаунт?</button>
            </Form>
           </div> 
        </section>
    )
}