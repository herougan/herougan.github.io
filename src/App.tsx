import smiling_dog from './resources/dog-smile.gif';
import maine_coon from './resources/maine_coon.gif';
import peach_cat from './resources/peach_cat.gif';
import peach_goma from './resources/peach-box-goma.gif';
import peach_hurray from './resources/peach-hurray.gif';
import blue_skies from './resources/blue_skies.jpg';
import garden from './resources/garden.jpg';
import qr from './resources/qr.jpg';

import './App.css';
import './styles/index.css'
import './styles/card.css'
import './styles/banner-card.css'

import gsap from "gsap";
import { useLayoutEffect, useState } from 'react';

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
      // ===== Start =====
    
      // Nav bar rotate effect
      let nav_items = gsap.utils.toArray<HTMLElement>(".navbar-item");
      nav_items.forEach((nav_item, i) => {
        
        nav_item.addEventListener("mouseenter", () => {
          gsap.to(nav_item, 
            {
              rotationZ: 180, x: 0, duration: 0.5, overwrite: true, opacity: 1, ease: 'circ.out',
            }
          );
        });
        
        nav_item.addEventListener("mouseout", () => {
          gsap.to(nav_item, 
            {
              rotationZ: 0, x: 0, duration: 0.5, overwrite: true, opacity: 1, ease: 'circ.out',
            }
          );
        });
      });

      // Words moving effect
      let title_left = document.getElementsByClassName("title-left")[0];
      let title_right = document.getElementsByClassName("title-right")[0];
      let title_left_a = document.getElementsByClassName("title-left-a")[0];
      let title_right_a = document.getElementsByClassName("title-right-a")[0];
      // Todo, grab the anchors instead of the div.
      gsap.to(title_left, 
        {
          x: 100, repeat: -1, yoyo: true, duration: 10, yoyoEase: "power2.in",
        })
      gsap.to(title_right, 
        {
          x: -100, repeat: -1, yoyo: true, duration: 10, yoyoEase: "power2.in",
        })
        // Fix the easing here - it should ease on both sides
        title_left_a.addEventListener("mouseenter", () => {
          gsap.to(title_left_a, {
            color: "#FF9999",
          }) 
        })
        title_left_a.addEventListener("mouseout", () => {
          gsap.to(title_left_a, {
            color: "white",
          }) 
        })
        // Fix the easing here - it should ease on both sides
        title_right_a.addEventListener("mouseenter", () => {
          gsap.to(title_right_a, {
            color: "#FF9999",
          }) 
        })
        title_right_a.addEventListener("mouseout", () => {
          gsap.to(title_right_a, {
            color: "white",
          }) 
        })
    
      // Project card flip effect
      let project_cards = gsap.utils.toArray<HTMLElement>(".project-card");
      project_cards.forEach((project_card, i) => {
        
        project_card.addEventListener("mouseenter", () => {
          gsap.to(project_card, 
            {
              rotationY: 0, scale: 1.05, x: 0, duration: 0.1, overwrite: true, opacity: 1,
            }
          );
        });
        
        project_card.addEventListener("mouseout", () => {
          gsap.to(project_card, 
            {
              rotationY: 0, scale: 1.0, x: 0, duration: 0.1, overwrite: true, opacity: 1,
            }
          );
        });
      });
      
      // Who card
      let who_cards = gsap.utils.toArray<HTMLElement>(".who-card");
      who_cards.forEach((who_card, i) => {

        who_card.addEventListener("mouseenter", () => {
          gsap.to(who_card, {
            rotationY: 0, scale: 1.05, duration: 0.2
          })
          gsap.to(who_card, {
            rotationX: 0, scale: 1.05, duration: 0.2
          })
        })

        who_card.addEventListener("mouseout", () => {
          gsap.to(who_card, {
            rotationY: 0, scale: 1.02, duration: 0.2
          })
          gsap.to(who_card, {
            rotationX: 0, scale: 1.0, duration: 0.2
          })
        })

      });

      // ===== End =====
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
        <div className='main-navbar grid grid-cols-4'>
          {/* Hamburger icon that summons a "This does nothing" */}
          {/* <img></img> */}
          {/* Jay */}
          <div className='navbar-item'><a>-</a></div>
          {/* SAR */}
          <div className='navbar-item'><a>-</a></div>
          {/* Break */}
          <div className='navbar-item'><a><i>-</i></a></div>
          {/* TradeHunter */}
          <div className='navbar-item'><a>-</a></div>
          {/* Light Switch */}
        </div>
        {/* Title Section */}
        <div className='title-section flex place-content-center items-center w-full'>
          <div className='title-main'>
            <a>Here Jay Here Here Here Here Here</a>
          </div>
          <div className='title-left'>
            <a className='title-left-a'>Design Thinking</a>
          </div>
          <div className='title-right'>
            <a className='title-right-a'>Customer Centric</a>
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
          <div className='switch-board'>
            <div className='switch'></div>
            <div className='switch-pendulum'></div>
          </div>
          <div className='who-card left card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Designer</p>
            </div>
            <div>
            <img src={peach_cat} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card right card-2 flex flex-row place-content-center items-center'>
            <div>
            <img src={maine_coon} id='coffee' alt='' role='decorative'></img> 
            </div>
            <div>
              <p>Project Manager</p>
            </div>            {/* Alt Text, but what about decorative alt text */}
          </div>
          <div className='who-card left card-1 flex flex-row place-content-center items-center'>
            <div>
              <p>Mathematician</p>
            </div>
            <div>
            <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card right card-3 flex flex-row place-content-center items-center'>
            <div>
            <img src={peach_hurray} id='flower' role='decorative'></img>
            </div>
            <p>Engineer</p>
          </div>
        </div>
        {/* What Section (Project showcases) */}
        <div className='what-section grid grid-cols-3 gap-8'>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={blue_skies} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-title'>
              ...
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
        <div className='who-card right card-3 flex flex-row place-content-center items-center'>
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
        <div className='socials-row grid grid-cols-5'>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter X</div>
          <div>LinkedIn</div>
          <div>Github</div>
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