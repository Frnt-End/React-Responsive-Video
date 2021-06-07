import React,  { useState, useEffect, useReducer } from 'react';
import './App.css';
import { CssCode, ReactCode, Author } from './tabs';
import BgVideo from './video/vid-bg.mp4';



function App() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
}

  return (
  <>
  <video autoPlay loop muted className="bg-vid">
    <source src={BgVideo} type="video/mp4" />
  </video>
    <div className="container">
    <div className="main-content-top">
      <h1>Full Screen Responsive Video in React.js</h1>
      <h2>Using Simple Html Video Tag.</h2>
      <p className="date">May 22, 2021</p>
      <article>
      <p className="p-content"><strong>Liquid and Elastic! </strong>Resize the browser window to simulate the responsive behavior.</p>
          </article>
    </div>

    <div className="main-content-bottom">
    <div className="tabs-container">
    <h4>..and here is a quick CODE preview:</h4>
      <div className="tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} >
              React
           </button>

           <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              CSS
           </button>
        </div>

         <div className="tabs-content">
             <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <h3>In the Component:</h3>
              <CssCode />
              </div>
              <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <h3>Style Settings:</h3>
              <ReactCode />
              </div>
          </div>
          </div>

          <div className="author-note">
          <p>
              <strong>...and that's it folks! </strong>
                    <br />
                  <strong>Keep on learning and spread the joy..!</strong>
                  <br />
                  ▪️<a href="https://github.com/Frnt-End/Spread-the-JOY">  Back to the Repo</a>
          </p>
                </div>

      </div>
      <div className="author">
       <Author />
      </div>
    </div>
    </>
  );
}

export default App;
