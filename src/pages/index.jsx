
import Home from '../components/home/section3/section1/Section1'

import Header from '../layout/header'
import Places from '@/components/home/places/place'
import Section4 from '../common/Section4'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import burj from '../../public/assets/burj.jpg'
import Footer from '@/layout/footer';
import places from '@/components/home/places/place';
import { useEffect } from 'react'
import Animated from '@/components/animatedhero.jsx/animated';
import gsap from 'gsap'
const index=()=>{
      //  useEffect(() => {
      // const animation = gsap.to(".bg-blue-200", {
      //   y: -100,
      //   scrollTrigger: {
      //     trigger: ".bg-blue-200",
      //     start: "top center",
      //     end: "bottom top",
      //     scrub: 1.5,
      //   }
      //    });e
   //    return () => {
   //          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };    }, []);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll(true);

      const panels = gsap.utils.toArray(".panel:not(:first-child)");

      gsap.set(panels[0], { yPercent: 0, zIndex: 1 }); // First panel
      gsap.set(panels, {
         yPercent: 100,
         zIndex: (i) => i + 2
      });

      const scroll = `+=${panels.length * 100}%`;

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: ".hero",
            start: "top top",
               end:`${scroll}vh`,
               endTrigger:'bottom bottom',
            scrub: true,
            pin: true,
            anticipatePin: 1,
         }
      });

      panels.forEach((panel) => {
         tl.to(panel, {
            yPercent: 0,
            ease: "none"
         }, "+=0.5");
      });

      // CLEANUP on unmount
      return () => {
         // Kill all ScrollTriggers and timelines
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
         gsap.globalTimeline.clear();
      };
   }, []);

      const markers = [
      { name: 'Souq Waqif', coordinates: [25.2854, 51.5331]  },
      { name: 'Museum of Islamic Art	', coordinates: [25.295479, 51.539124], },
      { name: 'National Museum of Qatar', coordinates: [25.28715,51.54829],  },


   ];
    return (
    <div className='overflow-hidden'>

<Header />
         <Animated/>

 <div
        className="hero relative "


      >
       
<Home backgroundImage={'/assets/estate.jpg'} text={<>Future-Proof Living — Today’s <br/> Comfort, Tomorrow’s Value </>} />


<Section4    text={<>ELEVATED LIVING,<br />WITHIN REACH</>} heading={<>Discover Your Dream <br/> Home Today</>}
            desktopBackground='/assets/appr.jpg' btntext={'Explore'}
            className="panel absolute  inset-0 md:block hidden font-roboto w-full  h-[100vh] bg-cover " />
            <Section4   heading={<>Unlock the Door to <br />Your Dream Home</>}
        desktopBackground='/assets/door.jpg' 
            className="panel absolute inset-0 md:block hidden w-full h-[100vh]  bg-cover  bg-[top center] "  btntext={'Explore'} />

</div>
<div className='h-auto w-full bg-white '>
   <div className='flex items-center justify-center mt-10'><h1 className='text-5xl font-light '>Explore Our Global Presence</h1></div>
<Places  center_position={[25.2854, 51.5331] }  markers={markers}/></div>
<Footer />
</div>
    )
}
export default index