import React from 'react'
import { useParams } from 'react-router-dom'

export default function Books() {

    const {id} = useParams()
  return (
    <div className='m-5'>
      <h3>Book {id}</h3>
    </div>
  )
}
