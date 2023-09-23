import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import axios from "axios";

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

<div className="container mt-5">
<TextForm title="Enter text here: "></TextForm>
<button className='btn btn-danger' onClick={testingApiCall} > Call Api</button>
</div>

   </>
  );
}

export default App;
