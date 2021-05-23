import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import AuthorImg  from './author.png';



const Portfolio = () => {
  window.open(
              "https://nirit.website", "_blank");
}

export function Home() {
  return (
    <div>
      <h1>Full Screen Responsive Video in React.js</h1>
      <h2>Using Simple Html Video Tag.</h2>
      <p className="date">May 22, 2021</p>
      <article>
      <p className="p-content"><strong>Liquid and Elastic! </strong>Resize the browser window to simulate the responsive behavior.</p>
            <Outlet />
          </article>
    </div>
  )
}



export function CssCode() {
  return (
    <div>
  <code>
  {`
    import BgVideo from './video/vid-bg.mp4';
  `}
  <br />
  <br />
      <br />
      {`
            <video autoPlay loop muted className="bg-vid">
              <source src={BgVideo} type="video/mp4" />
            </video>
            `}
              <br />


  <br />
  </code>
    </div>
  )
}

export function ReactCode() {
  return (
    <div>
      <pre>
  <code>
  {`
  .bg-vid {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  `}
  </code>
</pre>
    </div>
  )
}

export function Author() {
  return (
    <div className="author-container">
      <div>
      <img src={AuthorImg} alt="Autor" />
      <p>Creative <br />& Code:)
      <br /><a href="https://nirit.website" target="_blank">nirit.website</a>
      </p>
      </div>
      <button onClick={Portfolio}>Portfolio</button>
    </div>
  )
}

export function W404() {
  const location = useLocation();
  return (
  <div>
    <h1>No page found at {location.pathname}</h1>
  </div>
)
}
