import React from 'react';
import AuthorImg  from './author.png';



const Portfolio = () => {
  window.open(
              "https://nirit.website", "_blank");
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
