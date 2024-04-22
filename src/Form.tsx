import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface FormProps {
    children: React.ReactNode,
}

export default function Form(props: FormProps) {

 return(
    <form className='popup__form'>
        {props.children}
    </form>
  )

 }