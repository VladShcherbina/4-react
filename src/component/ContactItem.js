import React from 'react'
import './ContactItem.css'

export default function ContactItem(props) {

  return (
    <div  className='contact'>
        <h4>Name: {props.user.name}</h4>
        <h4>Phone: {props.user.phone}</h4>
        <button onClick={(e) => {
            props.deleteUser(props.user.id)
        }} className='delBtn'>Delete</button>
    </div>
  )
}
