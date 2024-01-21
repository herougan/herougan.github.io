import '../App.css';
import '../styles/test.css'

import gsap from "gsap";
import { useLayoutEffect, useState } from 'react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

function App() {  

	gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
		gsap.to(".test-text", {
			xPercent: 30,
			repeat: -1,
			yoyo: true,
			duration: 1,
			yoyoEase: "power2.in"
		  });

		gsap.to(".box_1", {
			xPercent: 30,
			scrollTrigger: {
				trigger: ".box_1",
				markers: true,
				start: "top",
				end: "end",
			},
		})
    });
  })

  return (
    <div className="App">
    	<header className="App-header">
			<div className='test-text'>
				<p>Test Page. Well done - you found it.</p>
			</div>
		</header>
		<div className='stuff_1 place-content-center items-center'>
			<div className='box_1'>

			</div>
		</div>
		<div className='stuff_2 place-content-center items-center'>
			<div className='box_1'>

			</div>
		</div>
    </div>
  );
}

export default App;

// To test that <a> tag thing!
// Maybe other text tags will be okay.
// Later do this till 11pm then sleep STRICTLY.