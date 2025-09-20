
import { useEffect } from "react";
import Animated3 from "../animated3/animated3"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const animate=()=>{
    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
gsap.set('.hero-3,.hero-4,hero-sub',{yPercent:130,scale:1.2})
const tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.hero-1',
        start:'top top',
        pin:true,
        end:'+=4000',
        scrub:2,
    }
})
tl.to('.hero-2',{
delay:4
})
tl.to('.hero-2',{
    scale:1,borderRadius:60,duration:4,ease:'power1.in'
})
tl.to('.reveal-container',{
  clipPath: 'inset(0% 0% 0% 0%)', // This reveals the text fully
  duration:3,
  ease: 'power2.out'
})

tl.to('.hero-3',{
  yPercent: 0,scale:1,borderRadius:60,duration:4,ease:"expoScale(0.5,7,none)",
})

tl.to('.hero-2',{scale:0.9,duration:1},"<")

tl.to('.reveal-container-2',{
  clipPath: 'inset(0% 0% 0% 0%)', // This reveals the text fully
  duration: 3,
  ease: 'power2.out'
})
tl.to('.hero-4',{
  yPercent: 0,scale:1,borderRadius:60,duration:4,ease:"expoScale(0.5,7,none)"

})
tl.to('.hero-3',{scale:0.9,duration:2},"<")
tl.to('.reveal-container-3',{
  clipPath: 'inset(0% 0% 0% 0%)', // This reveals the text fully
  duration: 4,
  ease: 'power1.out'
})

},[])
    return(
        <div className="h-[100vh] w-full flex flex-col items-center justify-center hero-1 relative">
<div class="marquee-container flex items-center h-full justify-center">
  <div class="marquee flex items-center justify-center gap-56 ">
    <span className="text-white text-medium text-[80px] " style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
        <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium translate -transform-x-[-50%] text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium translate -transform-x-[-50%] text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium translate -transform-x-[-50%] text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
       <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
    <span className="text-white text-medium text-[80px]" style={{fontFamily:'Host Grotesk'}}>Skylines</span>
  </div>
   
</div>
   <Animated3   />
        </div>
    )
}
export default animate