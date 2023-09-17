import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';


function App() {

   const [mode, setMode] = useState('dark');
  
  const toggleMode1=()=>{
    if(mode==='dark')
    setMode('light');
   else
    setMode('dark');
  }


  return (
   <>
<Navbar title="UtilsApp" mode={mode} toggleMode={toggleMode1}></Navbar>

<div className="container mt-5">
<TextForm title="Enter text here: "></TextForm>
</div>

   </>
  );
}

export default App;
