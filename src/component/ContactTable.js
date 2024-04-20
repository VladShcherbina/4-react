import React from 'react'
import { useState, useEffect } from 'react'

import './ContactTable.css';
import ContactItem from './ContactItem';
import Form from './Form';


export default function ContactTable() {

    const [users, setUsers] = useState([])
    
    const putUser = (valueName, valuePhone) => {
        if (valueName && valuePhone) {
          setUsers([...users, {id: Date.now(), name: valueName, phone: valuePhone}])
        } else {
            alert('Заповніть всі поля')
        }
      }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])

    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id))
    }
   
  return (
      <div>
        <Form putUser = {putUser} />
        <div className='contact_wrapper'>
            {users.map((user) => {
           return(
            <ContactItem key={user.id} user={user} deleteUser={deleteUser} />
           ) 
        })}</div>
      </div>
  )
}
