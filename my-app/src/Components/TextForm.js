import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const[text,setText] = useState('Enter text here');

    function handleClick() {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
      }
      function handleOnChange(event) {
       setText(event.target.value);
      }

  return (
    <div>
    <div className="mb-3">
         <label htmlFor="myBox" className="form-label">{props.title}</label>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button  onClick={handleClick} className="btn btn-primary">Convert to uppercase</button>
    
    </div>
  );
}
