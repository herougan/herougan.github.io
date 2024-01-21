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
import rocky_playtime from '../resources/rocky_playtime.gif';
import fresh_look from '../resources/fresh_look.gif';
import mochi_work from "../resources/mochi_work.gif"

import blue_skies from '../resources/blue_skies.jpg';
import garden from '../resources/garden.jpg';
import qr from '../resources/qr.jpg';
import arrow from '../resources/arrow.png';

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

import gsap, { SteppedEase } from "gsap";
import { useLayoutEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // ===== Start =====

      let light_switch = gsap.utils.toArray<HTMLElement>('.light-switch')[0]; // Dark mode
      let pendulum = gsap.utils.toArray<HTMLElement>('.pendulum')[0]; // Spin it around
      let root = gsap.utils.toArray<HTMLElement>('#root')[0];

      // ---- Pendulum ----
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
      });

      gsap.fromTo(".pendulum", 
      1, 
      {rotation:-60, duration: 8,}, 
      {rotation:60, repeat:-1, yoyo:true, duration: 8, ease: "power2.inOut"});

      // ---- Title ----
      gsap.fromTo(".title-antipasto", {
        xPercent: -100,
      }, {
        delay: 0.1,
        duration: 0.5,
        xPercent: 0,
      })
      gsap.fromTo(".title-secondi", {
        xPercent: -100,
      }, {
        delay: 0.15,
        duration: 0.9,
        xPercent: 0,
      })

      // ---- Moving Title ----
      // let title_left = document.getElementsByClassName("title-left")[0];
      // let title_right = document.getElementsByClassName("title-right")[0];
      // let title_left_a = document.getElementsByClassName("title-left-a")[0];
      // let title_right_a = document.getElementsByClassName("title-right-a")[0];
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

      gsap.fromTo(".what-intro", {
        opacity: 0.3,
        duration: 5,
        scrollTrigger: {
          trigger: ".what-intro",
          // markers: true,  
        },
      }, {
        scrollTrigger: {
          trigger: ".what-intro",
          // markers: true,
        },
        opacity: 1,
        duration: 5,
      });

      // ---- Arrow ----
      gsap.to(".scaling_arrow", {
        yPercent: -500,
        opacity: 0.5,
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".scaling_arrow",
          start: "top 88%",
        }
      });

      // ---- Cards ----
      let who_cards = gsap.utils.toArray<HTMLElement>(".who-card");
      who_cards.forEach((who_card, i) => {

        gsap.fromTo(who_card, {
          opacity: 0,
          yPercent: 4,
        },
        {
          scrollTrigger: {
            trigger: who_card,
            start: "top 77%",
          }, 
          opacity: 1,
          duration: 2,
          yPercent: 0,
        });
        
      });
    
      // Project card flip effect
      let project_cards = gsap.utils.toArray<HTMLElement>(".project-card");
      project_cards.forEach((project_card, i) => {

        gsap.fromTo(project_card, {
          opacity: 0,
          yPercent: 5,
        },
        {
          scrollTrigger: {
            trigger: project_card,
            start: "top 86%",
          }, 
          opacity: 1,
          duration: 2,
          yPercent: 0,
        });
        
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

  return (
    <div className="App">
      <div className="App-header">
        {/* Title Section */}
        <a href="#contacts">
        <div className='title-contact absolute'>
            C
          </div></a>
        <div className='title-section grid grid-rows-2 md:flex-row-reverse md:flex md:grid-rows-none items-center place-content-center'>
        {/* place-content-center items-center */}
          {/* <div className='title-container grid grid-cols-2 gap-8'> */}
            <div className='title-picture'>
              {/* <div className='title-absolute-border'></div> */}
              <img src={smiling_dog} id='dog-typing' className="Jay-logo" alt="Cat typing on computer" />
            </div>
            <div className='title-space'>

            </div>
            <div className='title-container flex items-end'>
              <div className='title-main flex flex-col items-start content-end text-left'>
                <div className="title-antipasto"><a>Hi, Jay here</a></div>
                <div className='title-secondi'><a>Nice of you to drop by!</a></div>
              </div>
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
        <div className='who-section flex flex-col items-center'>
          <div className='who-card left flex flex-row place-content-center'>
            <div className='who-card__text text-left text-first'>
              <p><Typewriter
                    onInit={(typewriter) => {
                      typewriter.changeDelay(75);
                      typewriter.typeString('I started as a tinkerer from a tiny age. My creations were janky, but I was so delighted whenever I could find any use for them.')
                        .start();
                    }}
                  />
              </p>
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
              <p>Then, in my career, I learned to design and develop projects - whether it be for colleagues or customers.
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
          <div className='experience-row grid grid-rows-5 sm:grid-rows-2 grid-flow-col md:flex md:space-x-11 place-content-center'>
              <div className='place-content-center flex'>
                <img src={maf_logo}></img>
              </div>
              <div className='place-content-center flex'>
                <img src={lkc_logo}></img>
              </div>
              <div className='place-content-center flex'>
                <img src={alibaba_logo}></img>
              </div>
              <div className='place-content-center flex'>
                <img src={pgsoft_logo}></img>
              </div>
              <div className='place-content-center flex'>
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
            <div className='scaling_arrow'>
              <img src={arrow} alt="arrow going up"></img>
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
            <p>What are your new year's resolutions? 🚦🚧<i>(WIP)</i></p>
            <img></img>
        </div>
        <div className='what-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <a href="https://github.com/herougan/TradeHunter" target="_blank">
          <div id="project-1" className='project-card'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={stonks} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            {/* <div className='project-title'>
              ...
            </div> */}
            <div className='project-desc'>
              Create and backtest trading robo-advisors against custom datasets.
            </div>
          </div></a>
          <div id="project-2"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={peach_goma} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Hela
            </div>
          </div>
          <div id="project-3"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={shine_love} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Opuloats
            </div>
          </div>

          <div id="project-4"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={gyoza} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              DealGPT
            </div>
          </div>
          <div id="project-5"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={fresh_look} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Drop-In
            </div>
          </div>
          <div id="project-6"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={lethal_company} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Great Asset
            </div>
          </div>

          <div id="project-7"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={mochi_work} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Jay's Coffee
            </div>
          </div>
          <div id="project-8"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={thumbs_up_engineer} id='engineering' alt="gears and wrenches" role='decorative'></img>
            </div>
            <div className='project-desc'>
              Splitthat
            </div>
          </div>
          <div id="project-9"  className='project-card dark'>
            <div className="shade"></div>
            <div className='project-card-img'>
              <img src={rocky_playtime} id='engineering' alt="gears and wrenches" role='decorative'></img>
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
        <div id="contacts" className='socials-row flex space-x-11 place-content-center'>
          {/* <div><img src={spotify}></img></div>
          <div><img src={discord}></img></div>
          <div><img src={facebook}></img></div> */}
          <div><a href="https://twitter.com/herougan" target="_blank"><img alt="twitter link" src={twitter}></img></a></div>
          <div><a href="https://github.com/herougan" target="_blank"><img alt="github link" src={github}></img></a></div>
          {/* <div><img src={instagram}></img></div>
          <div><img src={youtube}></img></div> */}
          <div><a href="https://www.linkedin.com/in/jiahao-zhang-jay/" target="_blank"><img alt="linkedin link" src={linkedin}></img></a></div>
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