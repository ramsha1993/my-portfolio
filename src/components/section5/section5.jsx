import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const section5=()=>{


useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

gsap.set('.child-2', {x:'0', y: '0' }) // start fully below itself
const tls = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu-wrapper",
    start: "top top",
    scrub: true,
    pinSpacing:true,
    pin: true,
    markers:true,anticipatePin:1
    
  }
})
tls.to('.child-2', { x: '100'   ,immediateRender:false
})          // step 1: child-2 slides left
    },[])

return(
    <div className="menu-wrapper w-full overflow-hidden h-[100vh] " style={{position:'relative'}}>

        <div className="h-[90vh]  bg-green-500 w-1/2 child-1 rounded-3xl" style={{transform:'translate(0%)'}}></div>
        <div className="h-[90vh] bg-cyan-500 w-1/2 child-2 rounded-3xl" style={{transform:'translate(0%)'}}></div>

{/* <div className=" h-[100vh] bg-[gray] w-[50%] child-3  rounded-3xl"></div> */}
{/* <div className=" h-[100vh] bg-[red] w-[50%] child-4 rounded-3xl"></div> */}




</div>
)

}
export default section5