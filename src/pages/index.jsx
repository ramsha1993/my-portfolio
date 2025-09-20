
import Home from '../components/home/section3/section1/Section1'

import Header from '../layout/header'
import Places from '@/components/home/places/place'
import Section4 from '../common/Section4'
import Footer from '@/layout/footer';
import Animated4 from '@/components/animated4/animated4';

import Animated from '@/components/animatedhero.jsx/animated';


import Animated2 from '../components/animated2/animated2'
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
        className="hero relative w-full h-[120vh] mb-20"


      >
       
<Home backgroundImage={'/assets/estate.jpg'} text={<>Future-Proof Living — Today’s <br/> Comfort, Tomorrow’s Value </>}  className={'rounded-[30px]  panel absolute inset-0 scale-[0.6]'} />

</div>

<Animated4 />

<Animated2 />

{/* <Places  center_position={[25.2854, 51.5331] }  markers={markers}/> */}

<Footer />

</div>
    )
}
export default index