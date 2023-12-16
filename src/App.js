import logo from './logo.svg';
import smiling_dog from './resources/dog-smile.gif';
import maine_coon from './resources/maine_coon.gif';
import peach_cat from './resources/peach_cat.gif';
import peach_goma from './resources/peach-box-goma.gif';
import peach_hurray from './resources/peach-hurray.gif';
import blue_skies from './resources/blue_skies.jpeg';
import garden from './resources/garden.jpeg';
import qr from './resources/qr.jpg'

import './App.css';
import { useLayoutEffect, useState } from 'react';
import { style } from './style/index.css';
import { cardStyle } from './style/card.css';
import { bannerCardStyle } from './style/banner-card.css';
import gsap from "gsap";

const roadmap = [

];

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Googlet', id: 4 },
];

function App() {  
  
  /* Hooks */
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    

      let buttons = gsap.utils.toArray<HTMLElement>(".project-card");
      buttons.forEach((button, i) => {
        
        button.addEventListener("mouseenter", () => {
          gsap.to(button, 
            {
              rotationY: 0, scale: 1.05, x: 0, duration: 0.1, overwrite: true, opacity: 1,
            }
          );
        });
        
        button.addEventListener("mouseout", () => {
          gsap.to(button, 
            {
              rotationY: 0, scale: 1.0, x: 0, duration: 0.1, overwrite: true, opacity: 1,
            }
          );
        });
      });




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
        <div className='main-navbar'>
          {/* Hamburger icon that summons a "This does nothing" */}
          {/* <img></img> */}
        </div>
        {/* Title Section */}
        <div className='title-section flex place-content-center items-center w-full'>
          <div className='title-main'>
            <a>Here Jay Here Here Here Here Here</a>
          </div>
          <div className='title-left'>
            <a>Design Thinking</a>
          </div>
          <div className='title-right'>
            <a>Customer Centric</a>
          </div>
          <div>
            <img src={smiling_dog} id='cat-typing' className="Jay-logo" alt="Cat typing on computer" />
          </div>
          {/* <div className='jay-left'>
            <h3>Jay here!</h3>
          </div>
          <div className='jay-right'>
            <h3>Jay here!</h3>
          </div> */}
        </div>
        {/* Who Section (Role) */}
        <div className='who-section'>
          <div className='who-card left role-card card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Designer</p>
            </div>
            <div>
            <img src={peach_cat} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card right role-card card-2 flex flex-row place-content-center items-center'>
            <div>
            <img src={maine_coon} id='coffee' alt='' role='decorative'></img> 
            </div>
            <div>
              <p>Project Manager</p>
            </div>            {/* Alt Text, but what about decorative alt text */}
          </div>
          <div className='who-card left role-card card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Mathematician</p>
            </div>
            <div>
            <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card right role-card card-3 flex flex-row place-content-center items-center'>
            <div>
            <img src={peach_hurray} id='flower' role='decorative'></img>
            </div>
            <p>Nondescript</p>
          </div>
        </div>
        {/* What Section (Project showcases) */}
        <div className='what-section grid grid-cols-3 gap-8'>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={blue_skies} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Backtest your custom trading algorithms against custom datasets.
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          {}
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={garden} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Test text
            </div>
          </div>
        </div>
        {/* Blog Section */}
        <div className='blog-section'>

        {/* Hobbies */}
        <div className='who-card right role-card card-3 flex flex-row place-content-center items-center'>
            <div>
            <img src={peach_hurray} id='flower' role='decorative'></img>
            </div>
            <p>Spin Cyclist</p>
          </div>

        </div>
        {/* Life Backlog (Starchart) */}
        <div className='backlog-section'>

        </div>
        <img src={qr} className="App-logo" alt="logo" />
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
        {/* Socials and Links */}
        <div className='socials-row'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='footer-table grid grid-cols-4 hover:grid-cols-2'>
          <div className='footer-col-1'>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
          </div>
          <div className='footer-col-2'>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            </div>
          <div className='footer-col-3'>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            </div>
          <div className='footer-col-4'>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            <div><p>Hi</p></div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;