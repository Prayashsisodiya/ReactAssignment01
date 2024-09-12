import React from 'react'

export default function One() {
    const catchValue = ()=>{
        let x = document.getElementById("hexCode");

        let hexCode = x.value;
        // console.log(hexCode)
        let colorPreviewBox = document.getElementById("colorPreviewBox");
        colorPreviewBox.style.backgroundColor = hexCode;
    }
  return (
    <div>
        <p>Welcome in  one.js </p> <br />
        <div className='box'>
        
      <input type="text" name="colorBox" id="hexCode" placeholder='enter HEX color value' onChange={()=>catchValue()} />
      {/* <button onClick={() => catchValue()}>Submit</button> */} <br />

      <div id="colorPreviewBox"></div><br />
      <textarea name="comment" id='feedback' form="userform"placeholder='Feedback!!'></textarea> <br />

        </div> <br />
      


   
    </div>
  )
}

// 1. Creating the Color Input Field: Implement an input field that accepts HEX color values (e.g., #FFFFFF for white). This will involve managing an input state that updates on every keystroke.

// 2. Displaying the Color Preview: Below the input field, display a large, square div that serves as a preview of the color. The background color of this div should change in real-time as the user types in a HEX color value.

// 3. User Feedback**: Ensure that the application provides feedback to the user if the entered HEX color code is invalid. This could be a simple text message indicating the error.