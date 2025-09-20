
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

const animated4=()=>{
    useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
gsap.set('.target-1,.target-2,.target-3',{willChange:'transform'})

const tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.container',
        pin:true,
        scrub:2,
        start:'top top',
        end:"+=2000"
     }

})

tl.to('.target-2',{xPercent:-100,duration:4,ease:  "sine.inOut",delay:2})
tl.to('.target-3',{xPercent:200,duration:0.5,ease:'power1.out'},"<")

tl.to('.target-1',{scale:0.9,ease:'power2.out'},"<")

tl.to('.target-3',{yPercent:-100,duration:4,ease: "slow(0.7,0.7,true)",},"<+1")
tl.to('.target-4',{xPercent:100,duration:0.5,ease:'power1.out',delay:2},"<")
tl.to('.target-3',{xPercent:100,duration:0.5,ease:'ease: "slow(0.7,0.7,true)',delay:2})

tl.to('.target-2',{scale:0.9,duration:2, ease:'power2.out'},"<")

tl.to('.target-4',{yPercent:-100,duration:0.5,ease:"expoScale(0.5,7,none)"},"<+0.3")
// tl.to('.target-3',{scale:0.9,duration:2, ease:'power2.out'},"<")



},[])

    return(
        <div className="relative flex container flex-col h-[100vh] w-full">
<div className="flex w-full">
    <div className="h-[100vh]  target-1 w-1/2  rounded-4xl bg-zinc-700" > </div>
    <div className="h-[100vh] asolute z-10 target-2 w-1/2 bg-green-400  rounded-4xl" style={{backgroundImage:'url(/assets/image.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}> </div>
</div>
<div className="flex w-full"><div className="h-[100vh] target-3 w-1/2  rounded-4xl bg-blue-700" style={{transform:'translate(-100%)',backgroundImage:'url(/assets/6.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} ></div>
<div className="h-[100vh] target-4 w-1/2  rounded-4xl bg-pink-500" style={{transform:'translate(-100%)',backgroundImage:'url(/assets/7.webp)',backgroundSize:'cover',backgroundPosition:'center'}}></div></div>
        </div>
    )
}
export default animated4