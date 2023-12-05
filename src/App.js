import logo from './logo.svg';
import './App.css';
import { useLayoutEffect, useState } from 'react';
import { style } from './index.css';
import gsap from "gsap";

const roadmap = [

];

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function App() {  
  
  /* Hooks */
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    
    });
  })

  /* Lists */
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className='title-section flex'>
          <div>
            <h3>Jay Here</h3>
          </div>
          <div>
            <img src={logo} id='cat-typing' className="Jay-logo" alt="Cat typing on computer" />
          </div>
        </div>
        <div className='who-section'>
          <div className='who-card card-1'>
            <p></p>
            <img src={logo} id='engineering' alt="gears and wrenches" role='decorative'></img>
          </div>
          <div className='who-card card-2'>
            <p></p>
            <img src={logo} id='coffee' alt='' role='decorative'></img> 
            {/* Alt Text, but what about decorative alt text */}
          </div>
          <div className='who-card card-3'>
            <p></p>
            <img src={logo} id='flower' role='decorative'></img>
          </div>
        </div>
        <div className='what-section'>

        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{listItems}</ul>
      </header>
      <footer>
        <div className='socials-row'>

        </div>
        <div className='footer-table'>
          <div className='footer-col-1'></div>
          <div className='footer-col-2'></div>
          <div className='footer-col-3'></div>
          <div className='footer-col-4'></div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/* Ideas 

"Subscribe" - sends them an email
(Shit, this requires database and stuff
  - unless I can find a plugin that
  does this codeless)


  ===== Main Page: Who am I =====

  Minimalist but also slightly brutalist vibe

  Main .gif in the centre

  Text on the left that floats in
  Text on the right that floats in

  Colour change to whole site at different sections
  A dog which runs around

  Sections:

    Intro
    
    Who

    Thingies
      - Subscribe button
      - Random infographics (LinkedIn + Web Post)


  ===== Backlog Page: The Me-log/Me Backlog =====

*/