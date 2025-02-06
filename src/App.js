import React, { useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from "./components/Alert";
//import About from "./components/About";

// React-Router-package
// import {
//   BrowserRouter as Router,
//   Routes, // Replace Switch with Routes
//   Route,  // Keep Route as it is
// } from "react-router-dom";

function App() {
  // state for light/dark mode
  const [mode, setMode] = useState('light'); 
  // state for test change in mode
  const [text, settext] = useState('Enable Dark Mode');
  // state for alert message
  const [alert, setalert] = useState(null);

  // state for various theme
  // // const [theme, setThemeColor] = useState('primary');
  // const [ setThemeColor] = useState('primary');
  // // New state for button color
  // const [buttonColor, setButtonColor] = useState('primary');
  
  // Function to change theme color
  // const changeTheme = (color) => {
  //   setThemeColor(color);
  //   if (mode === "light" || mode === "dark") {
  //     document.body.style.backgroundColor = color;
  //     setButtonColor(color); // Change button color with theme
  //   }
  //   showalert(`Theme changed to ${color}`, "success");
  // };

  // Show alert message function
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    // Set timeout to remove alert after 3 seconds
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  // Toggle mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settext('Enable Dark Mode');
      showalert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      settext('Enable Light Mode');
      showalert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
    {/* this is for routing example but this cooment on 17th vedio bcz its create problem when deploy on github page */}
      {/* <Router>
        <Navbar title="TextUtil's" aboutText="About" mode={mode} toggleMode={toggleMode} text={text} changeTheme={changeTheme} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes> Use Routes instead of Switch
            <Route exact path="/about" element={<About />} /> {/* Use element instead of children */}
            {/* <Route exact path="/Home" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} buttonColor={buttonColor} />} />
            </Routes>
        </div>
      </Router> */} 
     
        {/* <Navbar title="TextUtil's" aboutText="About" mode={mode} toggleMode={toggleMode} text={text} changeTheme={changeTheme} /> */}
        <Navbar title="TextUtil's" aboutText="About" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        
        <div className="container my-3">
            {/* <About /> */}
            {/* <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} buttonColor={buttonColor} />  */}
            <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}  /> 
        </div>
    </>
  );
}

export default App;
