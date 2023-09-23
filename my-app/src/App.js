import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import axios from "axios";
import UseEffect from './Components/UseEffect';
import {Routes,Route}  from 'react-router-dom';
import AboutUs from './Components/AboutUs';

function App() {

   const [mode, setMode] = useState('dark');
  
  const toggleMode1=()=>{
    if(mode==='dark')
    setMode('light');
   else
    setMode('dark');
  }

  const testingApiCall=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      console.log(response);
    }).catch((e)=>{
      console.log(e);
    })
  }


  return (
   <>
<Navbar title="UtilsApp" mode={mode} toggleMode={toggleMode1}></Navbar>
<Routes>
<Route path="/" element={
  <div className='Container mx-5 my-5'>
  <TextForm title='Enter text here: '/>
  <button className='btn btn-danger' onClick={testingApiCall} > Call Api</button>
  </div>
}/>
<Route path="/aboutUs" element={<AboutUs/>}/>
</Routes>


<div className="container my-5">
  <UseEffect></UseEffect>
</div>

   </>
  );
}

export default App;
