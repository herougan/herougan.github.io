import smiling_dog from '../resources/dog-smile.gif';
import maine_coon from '../resources/maine_coon.gif';
import peach_cat from '../resources/peach_cat.gif';
import peach_goma from '../resources/peach-box-goma.gif';
import peach_hurray from '../resources/peach-hurray.gif';
import thumbs_up_engineer from '../resources/thumbs-up-engineer.gif';
import lethal_company from '../resources/lethal-company.gif'
import gyoza from '../resources/gyoza.gif';
import shine_love from '../resources/shine-love.gif';
import stonks from '../resources/stonks.gif';

import blue_skies from '../resources/blue_skies.jpg';
import garden from '../resources/garden.jpg';
import qr from '../resources/qr.jpg';

import lkc_logo from '../resources/LKC-logo.png';
import maf_logo from '../resources/maf_logo.png';
import alibaba_logo from '../resources/alibaba-logo.png';
import pgsoft_logo from '../resources/pgsoft-logo.png';
import stengg_logo from '../resources/stengg-vector-logo.png';

import spotify from '../resources/spotify.png';
import discord from '../resources/discord.png';
import facebook from '../resources/facebook.png';
import twitter from '../resources/twitter.png';
import github from '../resources/github.png';
import instagram from '../resources/instagram.png';
import youtube from '../resources/youtube.png';
import linkedin from '../resources/linkedin.png';

import '../App.css';
import '../styles/index.css'
import '../styles/card.css'
import '../styles/banner-card.css'

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
  var [dark, setDark] = useState(false);
  var [clicked, setClicked] = useState(false);

  function handleClick() {
    setCount(count + 1);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // ===== Start =====
    
      // Nav bar rotate effect
      // let nav_items = gsap.utils.toArray<HTMLElement>(".navbar-item");
      // nav_items.forEach((nav_item, i) => {
        
      //   nav_item.addEventListener("mouseenter", () => {
      //     gsap.to(nav_item, 
      //       {
      //         rotationZ: 180, x: 0, duration: 0.5, overwrite: true, opacity: 1, ease: 'circ.out',
      //       }
      //     );
      //   });
        
      //   nav_item.addEventListener("mouseout", () => {
      //     gsap.to(nav_item, 
      //       {
      //         rotationZ: 0, x: 0, duration: 0.5, overwrite: true, opacity: 1, ease: 'circ.out',
      //       }
      //     );
      //   });
      // });

      // gsap.to(".pendulum", {
      //   rotation: 30, repeat: -1, yoyo: true, duration: 1,
      // })

      let light_switch = gsap.utils.toArray<HTMLElement>('.light-switch')[0]; // Dark mode
      let pendulum = gsap.utils.toArray<HTMLElement>('.pendulum')[0]; // Spin it around
      let root = gsap.utils.toArray<HTMLElement>('#root')[0];

      light_switch.addEventListener("mouseup", () => {
        if (clicked) {
          clicked = !clicked;
          return;
        }
        clicked = true;
        dark = !dark;

        if (dark) {
          gsap.to(root, {
            backgroundColor: "#1c1819",
          })
          light_switch.classList.add('light');
        } else {
          gsap.to(root, {
            backgroundColor: "#9D8189",
          })
          light_switch.classList.remove('light');
        }
      })

      gsap.fromTo(".pendulum", 
      1, 
      {rotation:-60, duration: 8,}, 
      {rotation:60, repeat:-1, yoyo:true, duration: 8, ease: "power2.inOut"})

      // // Words moving effect
      // let title_left = document.getElementsByClassName("title-left")[0];
      // let title_right = document.getElementsByClassName("title-right")[0];
      // let title_left_a = document.getElementsByClassName("title-left-a")[0];
      // let title_right_a = document.getElementsByClassName("title-right-a")[0];
      // // Todo, grab the anchors instead of the div.
      // // gsap.to(title_left, 
      // //   {
      // //     x: 100, repeat: -1, yoyo: true, duration: 10, yoyoEase: "power2.in",
      // //   })
      // // gsap.to(title_right, 
      // //   {
      // //     x: -100, repeat: -1, yoyo: true, duration: 10, yoyoEase: "power2.in",
      // //   })
      //   // Fix the easing here - it should ease on both sides
      //   title_left_a.addEventListener("mouseenter", () => {
      //     gsap.to(title_left_a, {
      //       color: "#FF9999",
      //     }) 
      //   })
      //   title_left_a.addEventListener("mouseout", () => {
      //     gsap.to(title_left_a, {
      //       color: "white",
      //     }) 
      //   })
      //   // Fix the easing here - it should ease on both sides
      //   title_right_a.addEventListener("mouseenter", () => {
      //     gsap.to(title_right_a, {
      //       color: "#FF9999",
      //     }) 
      //   })
      //   title_right_a.addEventListener("mouseout", () => {
      //     gsap.to(title_right_a, {
      //       color: "white",
      //     }) 
      //   })
      
      // Who card
      // let who_cards = gsap.utils.toArray<HTMLElement>(".who-card");
      // who_cards.forEach((who_card, i) => {

      //   who_card.addEventListener("mouseenter", () => {
      //     gsap.to(who_card, {
      //       rotationY: 0, scale: 1.05, duration: 0.2
      //     })
      //     gsap.to(who_card, {
      //       rotationX: 0, scale: 1.05, duration: 0.2
      //     })
      //   })

      //   who_card.addEventListener("mouseout", () => {
      //     gsap.to(who_card, {
      //       rotationY: 0, scale: 1.02, duration: 0.2
      //     })
      //     gsap.to(who_card, {
      //       rotationX: 0, scale: 1.0, duration: 0.2
      //     })
      //   })

      // });
    
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
      <div className="App-header">
        {/* Title Section */}
        <div className='title-section flex items-center place-content-center'>
        {/* place-content-center items-center */}
          {/* <div className='title-container grid grid-cols-2 gap-8'> */}
            <div className='title-container flex items-end'>
              <div className='title-main flex flex-col items-start content-end text-left'>
                <div><a>Hi, Jay here</a></div>
                <div className='title-secondi'><a>Nice of you to drop by!</a></div>
              </div>
            </div>
            <div className='title-space'>

            </div>
            <div className='title-picture'>
              <img src={smiling_dog} id='dog-typing' className="Jay-logo" alt="Cat typing on computer" />
            </div>
          {/* </div> */}
          {/* Title Concept */}
          {/* <div className='title-left'>
            <a className='title-left-a'>Design Thinking</a>
          </div>
          <div className='title-right'>
            <a className='title-right-a'>Customer Centric</a>
          </div> */}
          <div className='light-switch'>
          </div>
        </div>
        {/* Who Section (Role) */}
        <div className='who-intro'>
            <p>(Mobile-view is kinda iffy right now! View on your lappies for a better experience)</p>
            <img></img>
        </div>
        <div className='who-section flex flex-col items-center'>
          <div className='who-card left flex flex-row place-content-center'>
            <div className='who-card__text text-left'>
              <p>I started as a tinkerer from a tiny age. My creations were janky, but I was so delighted whenever I could find any use for them.</p>
            </div>
            <div className='who-card__space'>

            </div>
            <div className='who-card__img'>
              <img src={peach_cat} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='pendulum'>
              <div className='pendulum__string'></div>
              <div className='pendulum__weight'></div>
            </div>
          </div>
          <div className='who-card left flex flex-row place-content-center'>
            <div className='who-card__text text-left'>
              <p>Then, in my career, I learned to design and develop products - whether it be for colleagues or customers.
              </p>
            </div>
            <div className='who-card__space'>

            </div>
            <div className='who-card__img'>
              <img src={maine_coon} id='coffee' alt='' role='decorative'></img> 
            </div>
          </div>
        </div>
		    {/* Where Section */}
        <div className='where-section'>
          {/* STengg, PGSoft, Alibaba, NTU School of medicine, NTU SPMS, Mafint */}
          <div className='experience-row flex space-x-11 place-content-center'>
              <div>
                <img src={maf_logo}></img>
              </div>
              <div>
                <img src={lkc_logo}></img>
              </div>
              <div>
                <img src={alibaba_logo}></img>
              </div>
              <div>
                <img src={pgsoft_logo}></img>
              </div>
              <div>
                <img src={stengg_logo}></img>
              </div>
            </div>
        </div>
        {/* Who Section (Role) */}
        <div className='who-section flex flex-col items-center'>
          <div className='who-card left flex flex-row place-content-center'>
            <div className='who-card__text text-left'>
              <p>I'm passionate about learning how to build a product people want, getting the word out, and delivering value to them.</p>
            </div>
            <div className='who-card__space'>

            </div>
            <div className='who-card__img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
          </div>
          <div className='who-card left flex flex-row place-content-center'>
            <div className='who-card__text text-left'>
              <p>My new years resolution? To achieve the goals I've set out for myself, and to <a href="/road"><b>scale, scale, scale!</b></a></p>
              {/* <p>For hobbies... I love cooking! I love spinning, and I love reading!
              </p>
              <p>
                <i>Feel free to connect with me on LinkedIn! I won't bite!</i>
              </p> */}
            </div>
            <div className='who-card__space'>

            </div>
            <div className='who-card__img'>
              <img src={peach_hurray} id='flower' role='decorative'></img>
            </div>
          </div>
        </div>
        {/* What Section (Project showcases) */}
        <div className='what-intro'>
            <p>Here are some of the things I've done! ❤️</p>
            <img></img>
        </div>
        <div className='what-section grid grid-cols-3 gap-8'>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={stonks} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            {/* <div className='project-title'>
              ...
            </div> */}
            <div className='project-desc'>
              Create and backtest trading robo-advisors against custom datasets.
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Hela
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={shine_love} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Opuloats
            </div>
          </div>

          <div className='project-card'>
            <div className='project-card-img'>
              <img src={gyoza} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              DealGPT
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={garden} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Drop-In
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={lethal_company} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Great Asset
            </div>
          </div>

          <div className='project-card'>
            <div className='project-card-img'>
              <img src={thumbs_up_engineer} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              WIP
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-img'>
              <img src={thumbs_up_engineer} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              WIP
            </div>
          </div>
        </div>
        
        <div className='what-intro mt-5'>
          <p>Check out my work on github, and connect with me on LinkedIn!</p>
        </div>

        {/* Life Backlog (Starchart) */}
        <div className='backlog-section'>

        </div>
      </div>
      <div>
        {/* Socials and Links */}
        <div className='socials-row flex space-x-11 place-content-center'>
          {/* <div><img src={spotify}></img></div>
          <div><img src={discord}></img></div>
          <div><img src={facebook}></img></div> */}
          <div><img src={twitter}></img></div>
          <div><a href="https://github.com/herougan"><img src={github}></img></a></div>
          {/* <div><img src={instagram}></img></div>
          <div><img src={youtube}></img></div> */}
          <div><a href="https://www.linkedin.com/in/jiahao-zhang-jay/"><img src={linkedin}></img></a></div>
          {/* <div><a id="linkedin" href="https://www.linkedin.com/in/jiahao-zhang-jay/"></a></div> */}
          {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
          {/* <p>Reach out to me on...</p> */}
        </div>
        <div className='footer-table grid grid-cols-4 hover:grid-cols-2'>
          {/* <div className='footer-col-1'>
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
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;