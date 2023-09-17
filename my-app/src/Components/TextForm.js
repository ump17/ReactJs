import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const[text,setText] = useState('');

    function handleClick() {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
      }
      function handleOnChange(event) {
       setText(event.target.value);
      }

      const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }

  return (
    <div>
    <div className="mb-3">
         <label htmlFor="myBox" className="form-label">{props.title}</label>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button  onClick={handleClick} className="btn btn-primary">Convert To Uppercase</button>
    <button  onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
    <p>Number of words in box are: {text.split(" ").length}</p>
    </div>
  );
}
