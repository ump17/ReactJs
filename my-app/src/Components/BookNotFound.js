import React from 'react'
import { Navigate } from 'react-router-dom'

export default function BookNotFound() {

//   return (
//      <div className='m-5'>
//        <h3><bold>404: </bold>Book not found</h3>
//      </div>
//   )
return <Navigate to="/"></Navigate>
}
