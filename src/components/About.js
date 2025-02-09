import React from 'react';

function About(props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white',
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="my-3">About Page</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or more.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character and word count statistics. It is useful for writing text with word/character limits.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This word counter software works in any web browser such as Google Chrome, Mozilla Firefox, Opera, Safari, Internet Explorer, and Microsoft Edge.
              </div>
            </div>
          </div>
          
        </div>

        {/* Agar extra closing div error kar raha tha, usko hata diya */}
      </div>
    </>
  );
}

export default About;
