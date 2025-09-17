import React, { useEffect, useRef } from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { scale } from 'framer-motion';
import Home from "../home/section3/section1/Section1";
import Section4 from '../../common/Section4'
const animated=()=>{
const leftRef=useRef()
const rightRef=useRef()
const boxRef=useRef()
 useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    let ctx = gsap.context(() => {
      // Set initial properties for the child elements


 
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroanimation",
          start: "top top",
            scrub: 1,

          end: '+=5000',
          pin: true,
        },
      });

      // Animating the child elements with scaling and clip-path expansion from the center
    gsap.set('.child,.child-2,.child-3',{scale:0})
    gsap.set('.child-5',{y:'100%'})
 // Correctly animate the 'child' element
 tl.fromTo(".child", { scaleX: 0.002, scaleY: 0 }, { scaleY: 1, duration: 1 })
 .to(".child",{scaleX:1,duration:1})
 // Animate subsequent children with a smooth scale-up
 tl.to(".child-2", { scale: 1, duration: 1.5 }, "<0.3");
 tl.to(".child-3", { scale: 1, duration: 2 }, "<0.3");
//  tl.to(".child-4", { scale: 1, duration: 2.5 }, "<0.5");

 tl.to(boxRef.current, { 
 scale: 1, 
 duration: 3, 
  transformOrigin: "center center", 
 }, "<0.4")
 tl.from(leftRef.current, { x: '0', duration: 2 });
tl.from(rightRef.current, { x:'0', duration: 2 });
  tl.to(".child-2", {opacity:0}, )
    .to(".child-3", {opacity:0}, )
       .to(".child", {opacity:0}, )
        .to(".child-4", {opacity:0}, )
        .to(".child-1", {opacity:0}, )
tl.to(leftRef.current, { x: "-100%", duration: 2,opacity:1 },);
tl.to(rightRef.current, {x: "100%", duration: 2,opacity:1 },"<")


tl.to('.child-5',{y:0,duration:2},)
tl.to('.child-5',{duration:1})

    });

    return () => ctx.revert();
  }, []);

    return(
<div className="heroanimation h-[100vh] w-full "  style={{
 
   
  }}>
<Home backgroundImage={'/assets/hero.png'} text={<>Future-Proof Living — Today’s <br/> Comfort, Tomorrow’s Value </>} className={'absolute inset-0 child-1'} />
<div className=" absolute inset-0 child  "     style={{
   background: "#7a0c07",willChange:'transform'  }}
></div>
        {/* <div className='bg-zinc absolute child inset-0 scale-0' style={{background:'brown'}}>hi</div> */}
        <div className=" absolute inset-0 child-2 "  style={{willChange:'transform',
                  // clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" ,

  backgroundImage: "url('/assets/2 (2).webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}></div>
              {/* <div className="absolute inset-0 bg-blue-500 child-3 " style={{
                willchange:'clip-path',
  // backgroundImage: "url('/assets/2.webp')",
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" ,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}></div>              */}
 <div className="absolute inset-0 child-3 "  style={{
  backgroundImage: "url('/assets/3 (3).webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",willChange:'transform',
          // clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" ,
}}></div>

<div className=" absolute inset-0 child-4   " style={{
          // clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" ,
       
  backgroundImage: "url('/assets/4 (2).jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",willChange:'transform',        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" ,
}}></div>
<div className="absolute inset-0 flex  items-center justify-center" 
 ref={boxRef} style={{scale:0}}>


  <div    className="w-1/2 h-[100vh] bg-cyan-700 overflow-hidden flex items-center justify-center animate-splitLeft"
    ref={leftRef}
  style={{
    // background: "white"
  }}
  >
    <h3
      className="    text-xl tracking-tighter md:text-4xl lg:text-6xl text-white flex items-center justify-center text-center  font-medium leading-snug sm:leading-normal md:leading-relaxed w-[100%]"
      style={{
        transform: "translateX(50%)",textWrap:'balance',whiteSpace:'nowrap' // Show left half of full text
  
      }}
    >
Discover a Seamless Blend of <br /> creativity, expertise, and enduring <br /> growth across all industries.
      {/* Experience a harmonious blend of > innovation, excellence, and sustainable  growth across diverse industries. */}
    </h3>
  </div>

  <div
    className="w-1/2 !h-[100vh]  tracking-tighter bg-cyan-700  overflow-hidden flex items-center justify-center animate-splitRight"
    ref={rightRef}
      style={{
    // background: "white"
  }}
  >
    <h3
      className="   text-xl  md:text-4xl lg:text-6xl flex items-center justify-center text-white  text-center  font-medium leading-snug sm:leading-normal md:leading-relaxed w-[100%]"
      style={{
        transform: "translate(-50%)",textWrap:'balance',whiteSpace:'nowrap' // Show right half of full tex
      }}
    >
Discover a Seamless Blend of <br /> creativity, expertise, and enduring <br /> growth across all industries.

      {/* Experience a harmonious blend of <br /> innovation, excellence, and sustainable <br /> growth across diverse industries. */}
    </h3>
  </div> 
  </div>
  {/* <Section4    heading={<>Elevated Living,<br />With in Reach</>} 
            desktopBackground='/assets/building.jpg' btntext={'Explore'}
            className=" absolute child-5 inset-0  md:block hidden w-full h-[100vh] bg-cover " /> */}
        </div>
    )
}
export default animated