import React from 'react'
import { useState } from 'react';


import './Form.css';



export default function Form(props) {

    const [valueName, setValueName] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [showForm, setShowForm] = useState(false)
    

  return (
    
    <div className='form_wrapper'>
        <button onClick={() => {setShowForm(true)}} className='add_btn'>Add Contact</button>
        {showForm && (<form  onClick={(e) =>{e.preventDefault()}}  className='form form_click'>
            <input onChange={(e) => {setValueName(e.target.value)}}
                type='text' 
                placeholder='Name' 
                value={valueName} />
            <input  onChange={(e) => {setValuePhone(e.target.value)}}
                type='number' 
                placeholder='Phone' 
                value={valuePhone} />
            <div className='btn_wrapper'>
                <button onClick={(e) =>{
                    e.preventDefault()
                    setShowForm(false)
                    setValueName('')
                    setValuePhone('')
                    props.putUser(valueName, valuePhone)
                    }} className='form_btn' type='submit'>Add</button>
                <button onClick={(e) =>{
                    e.preventDefault()
                    setShowForm(false)
                    }} className='form_btn' type='submit'>Cancel</button>
            </div>
        </form>)}
    </div>
  )
}
