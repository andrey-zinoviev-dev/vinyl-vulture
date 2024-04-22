import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'

interface LoginProps {
    setLoginclick: React.Dispatch<React.SetStateAction<boolean>>,
    setRegclick: React.Dispatch<React.SetStateAction<boolean>>
    
  }
export default function Login(props: LoginProps) {
    return (
        <section className='popup popup_login'>
           <div className='overlay' onClick={() => {props.setLoginclick(false)}}></div>
           <div className='container'>
           <button className='buttnx' onClick={() => {props.setLoginclick(false)}}>
                X
            </button>
            <h3>Войти</h3>
            <Form>
                <input placeholder='Email' className='input_style'></input>
                <input placeholder='Password' className='input_style'></input>
                <button className='buttn_login'>Войти</button>
                <button onClick={() => {
                    props.setLoginclick(false)
                    props.setRegclick(true)
                }}>Завести Аккаунт</button>
                <a>Забыли пароль?</a>
                </Form>
            </div>
        </section>
      
    )
}
