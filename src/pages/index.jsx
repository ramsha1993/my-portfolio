
import Home from '../components/home/section3/section1/Section1'

import Header from '../layout/header'
import Places from '@/components/home/places/place'
import Section4 from '../common/Section4'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import burj from '../../public/assets/burj.jpg'
import Footer from '@/layout/footer';
import places from '@/components/home/places/place';
import { useEffect } from 'react'
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
      { name: 'Mall of the Emirates', coordinates: [25.118009, 55.200367], icon: '/assets/105/Vector.svg' },
      { name: 'Dubai Marina	', coordinates: [25.080562, 55.140911], icon: '/assets/105/Vector2.svg' },
      { name: 'Down Town', coordinates: [25.1951, 55.2744], icon: '/assets/105/Vector4.svg' },


   ];
    return (
    <div className='overflow-hidden'>

<Header />
 <div
        className="hero relative "


      >
       
<Home backgroundImage={'/assets/burj.jpg'} text={<>Future-Proof Living — Today’s <br/> Comfort, Tomorrow’s Value </>} />


<Section4    text={<>ELEVATED LIVING,<br />WITHIN REACH</>} heading={<>Discover Your Dream <br/> Home Today</>}
            desktopBackground='/assets/2.jpg' overlay={true} btntext={'Explore'}
            className="panel absolute  inset-0 md:block hidden  w-full  h-[100vh] bg-cover " />
            <Section4   heading={<>Where Modern Comfort<br/> Meets Timeless Elegance</>}
        desktopBackground='/assets/burj.jpg' overlay={true}
            className="panel absolute inset-0 md:block hidden w-full h-[100vh]  bg-center  "  btntext={'Explore'}/>

</div>
<Places  center_position={[25.0631, 55.2471]}  markers={markers}/>
<Footer />
</div>
    )
}
export default index