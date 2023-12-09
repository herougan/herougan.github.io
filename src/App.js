import logo from './logo.svg';
import smiling_dog from './resources/dog-smile.gif';
import maine_coon from './resources/maine_coon.gif';
import peach_cat from './resources/peach_cat.gif';
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
        <div className='title-section flex place-content-center items-center w-full'>
          <div>
            <h3>Jay Here</h3>
          </div>
          <div>
            <img src={smiling_dog} id='cat-typing' className="Jay-logo" alt="Cat typing on computer" />
          </div>
        </div>
        <div className='who-section'>
          <div className='who-card card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Test text on the left</p>
            </div>
            <div>
            <img src={peach_cat} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card card-2 flex flex-row place-content-center items-center'>
            <div>
            <img src={maine_coon} id='coffee' alt='' role='decorative'></img> 
            </div>
            <div>
              <p>Test text on the right</p>
            </div>
            {/* Alt Text, but what about decorative alt text */}
          </div>
          <div className='who-card card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Test text on the left</p>
            </div>
            <div>
            <img src={peach_cat} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card card-3 flex flex-row place-content-center items-center'>
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