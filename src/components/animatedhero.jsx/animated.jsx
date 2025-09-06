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
    gsap.set(".child, .child-2, .child-3, .child-4", { transformOrigin: "center center" });
    gsap.set(boxRef,{scale:0})
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroanimation",
        start: "top top",
        scrub: true,
        pin: true,
        anticipatePin:1// debug
      },
    });

tl.from('.child',{scale:0})
    tl.to(".child", { scaleX: 0.002,  duration:1 })
      .to(".child", { scaleY: 1, duration: 1})
         
                .to(".child", { scaleX: 0.6, duration: 1})
        // .to(".child-3", { scaleX: 0, duration: 0.3 },"-=0.2")

   
  
                    .to(".child", { scaleX: 1, duration: 0.4},)
                                              

   

           .to(".child-2", { scaleX: 1, scaleY: 1, duration: 1},"<")

      .to(".child-3", { scaleX: 1,scaleY:1, duration: 2},"<")
   
         .to(".child-4", { scaleX: 1,scaleY:1, duration: 4},"<")

 .to(boxRef.current,{scale:1 ,transformOrigin: "center center", duration:7 },"-=1")
tl.from(leftRef.current, { x: '0', duration: 2 });
tl.from(rightRef.current, { x:'0', duration: 2 });
 tl.to(boxRef.current, { scale: 1, transformOrigin: "center center", duration: 2 });
tl.to(leftRef.current, { x: "-100%", duration: 2 },);
tl.to(rightRef.current, {x: "100%", duration: 2 },"<")
   .to(".child-4", { opacity:0, duration: 1},"<")
tl.to('.child-5',{opacity:1,duration:1},"<")

  });

  return () => ctx.revert();
}, []);


    return(
<div className="heroanimation h-[100vh] w-full ">
<Home backgroundImage={'/assets/hero.png'} text={<>Future-Proof Living — Today’s <br/> Comfort, Tomorrow’s Value </>} className={'absolute inset-0 '} />
<div className=" absolute inset-0 child scale-0 "     style={{
   background: "#7a0c07"  }}
></div>
        {/* <div className='bg-zinc absolute child inset-0 scale-0' style={{background:'brown'}}>hi</div> */}
        <div className=" absolute inset-0 child-2 scale-0" style={{
  backgroundImage: "url('/assets/1.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>
              <div className="absolute inset-0 child-3 scale-0" style={{
  backgroundImage: "url('/assets/2.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>             
 <div className="absolute inset-0 child-3 scale-0"  style={{
  backgroundImage: "url('/assets/3 (3).jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>

<div className=" absolute inset-0 child-4 scale-0" style={{
       
  backgroundImage: "url('/assets/4 (2).jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>
<div className="absolute inset-0 flex scale-0 items-center justify-center" 
 ref={boxRef}>

  <div    className="w-1/2 h-[100vh] bg-cyan-700 overflow-hidden flex items-center justify-center animate-splitLeft"
    ref={leftRef}
  style={{
    // background: "white"
  }}
  >
    <h3
      className=" w-[100%]   text-xl tracking-tighter md:text-4xl lg:text-5xl text-white flex items-center justify-center text-center  font-medium leading-snug sm:leading-normal md:leading-relaxed w-[100%]"
      style={{
        transform: "translateX(50%)",textWrap:'balance',whiteSpace:'nowrap' // Show left half of full text
  
      }}
    >
Discover a seamless blend of <br /> creativity, expertise, and enduring <br /> growth across all industries.
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
      className=" w-[100%]    text-xl  md:text-4xl lg:text-5xl flex items-center justify-center text-white  text-center tracking-tighter font-medium leading-snug sm:leading-normal md:leading-relaxed w-[100%]"
      style={{
        transform: "translate(-50%)",textWrap:'balance',whiteSpace:'nowrap' // Show right half of full tex
      }}
    >
Discover a seamless blend of <br /> creativity, expertise, and enduring <br /> growth across all industries.

      {/* Experience a harmonious blend of <br /> innovation, excellence, and sustainable <br /> growth across diverse industries. */}
    </h3>
  </div> 
  </div>
  <Section4    heading={<>ELEVATED LIVING,<br />WITHIN REACH</>} 
            desktopBackground='/assets/building.jpg' btntext={'Explore'}
            className=" absolute child-5 inset-0 opacity-0 md:block hidden w-full  h-[100vh] bg-cover " />
        </div>
    )
}
export default animated