import '../App.css';
import '../styles/test.css'

import gsap from "gsap";
import { useLayoutEffect, useState } from 'react';

function App() {  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
		// gsap.to(".test-text", {
		// 	xPercent: 30,
		// 	repeat: -1,
		// 	yoyo: true,
		// 	duration: 1,
		// 	yoyoEase: "power2.in"
		//   });
    });
  })

  return (
    <div className="App">
    	<header className="App-header">
			<div className='test-text'>
				<p>Mosaic Collage</p>
			</div>
		</header>
		<body>
			{/* Different heights and widths! */}
			<div className='flex flex-col'>
				<div className='flex flex-row'>
					<div><image></image></div>
					<div><image></image></div>
					<div><image></image></div>
				</div>
				<div className='flex flex-row'>
					<div><image></image></div>
					<div><image></image></div>
					<div><image></image></div>
				</div>
				<div className='flex flex-row'>
					<div><image></image></div>
					<div><image></image></div>
					<div><image></image></div>
				</div>
				<div className='flex flex-row'>
					<div><image></image></div>
					<div><image></image></div>
					<div><image></image></div>
				</div>
				<div className='flex flex-row'>
					<div><image></image></div>
					<div><image></image></div>
					<div><image></image></div>
				</div>
			</div>
		</body>
    </div>
  );
}

export default App;

// To test that <a> tag thing!
// Maybe other text tags will be okay.
// Later do this till 11pm then sleep STRICTLY.