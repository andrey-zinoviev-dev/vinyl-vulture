import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'
interface RegProps {
    setRegclick: React.Dispatch<React.SetStateAction<boolean>>
  }

export default function Register(props: RegProps) {
    return (
        <section className='popup popup_register' onClick={() => {props.setRegclick(false)}}>
           <div className='container'>
            <h3>Регистрация</h3>
            <button onClick={() => {props.setRegclick(false)}}>
                    X
                </button>
            <Form>
                <input placeholder='Nickname'></input>
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>
                <input placeholder='Confirm Password'></input>
                <button onClick={() => {props.setRegclick(false)}}>Регистрация</button>

            </Form>
           </div> 
        </section>
    )
}