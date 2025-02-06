// Importing the necessary React library and the useState hook for state management
import React, { useState } from "react";

export default function TextForm(props) {
  // State to manage the text input
  const [text, setText] = useState("Enter text here.."); // Initial state value set to 'Enter text here'
  // Initial state value
  const [fontStyle, setFontStyle] = useState("Arial"); // State for font style

  // text = "new text"; // This is the wrong way to change state; it directly modifies the state
  // setText("new text"); // This is the correct way to update the state using the setter function

  // Function to handle the "Convert to UpperCase" button click event
  const handliClik = () => {
    console.log("UpperCase was clicked...!!!!!!11" + text); // Logs a message and the current text
    let newText = text.toUpperCase(); // Converts the text to uppercase
    setText(newText); // Updates the state with the new uppercase text
    props.showalert("Converted to UpperCase", "success");
    
  };
  const handliClik1 = () => {
    console.log("LowerCase was clicked...!!!!!!11" + text); // Logs a message and the current text
    let newText = text.toLowerCase(); // Converts the text to uppercase
    setText(newText); // Updates the state with the new uppercase text
    props.showalert("Converted to LowerCase", "success");
  };
  //------clear text
  const cleartext = () => {
    console.log("Succesfully clear all text...!!!!!!11" + text); // Logs a message and the current text
    let newText = "";
    setText(newText);
    props.showalert("Text Cleared", "success");
  };
  //-----font chanege
  const changeFont = () => {
    console.log("Successfully changed font...!!!!!!11" + text);
    setFontStyle((prevStyle) =>
      prevStyle === "Arial" ? "Courier New" : "Arial"
    );
    props.showalert("Converted to OtherFont", "success");
  };
//-----copy Text
  const handlecopy = () => {
    console.log("Successfully Copy Text...!!!!!!11" + text);
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard", "success");
  };

  //--------remove extra Space
  const RemoveSpace= () =>{
    console.log("Successfully remove space...!!!!!!11" + text);
    //------use Rejex Logic 
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showalert("Remove Extra Space", "success");
  }
  // Function to handle the onChange event of the textarea (allows typing in the textarea)
  const handleonchage = (event) => {
    // Added 'event' as a parameter to use it correctly
    console.log("On change !!!!!!11"); // Logs a message when text is changed
    setText(event.target.value); // Updates the state with the current value of the textarea
  };

  return (
    <>                
      <div className="container" style={{color:props.mode==='light' ?'#042743':'white'}}>
        {/* Displaying the heading passed as a prop */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* Textarea for user input; its value is controlled by the state */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchage}
            style={{fontFamily: fontStyle ,backgroundColor:props.mode==='light' ?'white':'#042743' ,color:props.mode==='light' ?'black':'white'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        {/* Button to trigger conversion of text to uppercase */}
        <button className="btn btn-primary mx-1" style={{ backgroundColor : props.buttonColor}}  onClick={handliClik}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' || 'light' ? 'primary' : props.buttonColor}} onClick={handliClik1}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={cleartext}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={changeFont}>
          Font Change
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={RemoveSpace}>
         Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light' ?'black':'white'}}>
        <h3 style={{color:props.mode==='light' ?'black':'white'}}>Your Text Summary</h3>
        {/* text.split(" ").length ka matlab hota hai string ko space ke basis par todna aur total parts ya words ka count nikalna. */}
        <p style={{color:props.mode==='light' ?'black':'white'}}>
          {text.split(" ").length} words and {text.length} charators
        </p>
        <p style={{color:props.mode==='light' ?'black':'white'}}>{0.008 * text.length} Minutes read</p>
        <h4  style={{color:props.mode==='light' ?'black':'white'}}>Priview </h4>
        <p style={{color:props.mode==='light' ?'black':'white'}}>{text.length>0?text:"Enter something in the textbox above to preview it here..!!"}</p>
      </div>
    </>
  );
}
