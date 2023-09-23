import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UseEffect() {

    const [resourceType,setResourceType] = useState('Posts')
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`).then((resp)=>{
            console.log(resp);
        }).catch((e)=>{
            console.log(e);
        })

        return()=>{  // on unmount it will be called, IT will be called first, then upper wala
            console.log("clearing something");
          }
    }
    
    ,[resourceType])
    
  return (
    <>
    <div>
      <button onClick={()=> setResourceType('Posts')}>Posts</button>
      <button onClick={()=> setResourceType('Users')}>Users</button>
      <button onClick={()=> setResourceType('Comments')}>Comments</button>
    </div>
    <h2>{resourceType}</h2>
    </>
    
  )
}
