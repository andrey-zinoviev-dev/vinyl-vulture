import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'

interface LoginProps {
    setLoginclick: React.Dispatch<React.SetStateAction<boolean>>,
    
  }
export default function Login(props: LoginProps) {
    return (
        <section className='popup popup_login' onClick={() => {props.setLoginclick(false)}} >
            <div className='container'>
                <h3>Войти</h3>
                <button onClick={() => {props.setLoginclick(false)}}>
                    X
                </button>

                <Form>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <button>Войти</button>
                </Form>
            </div>
        </section>
    )
}
