
import Image from "next/image"
import { useEffect } from "react"

const animated3=({})=>{


    return(<><div className={`absolute h-[100vh]  transform transition 1s ease-out  mx-auto flex items-center inset-0 hero-2  w-[98%]   `} style={{borderRadius:'145px',transform:'scale(0.4)',backgroundImage:'url(/assets/3.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
<div class="reveal-container transition transform 0.5s ease-out" style={{    clipPath: 'inset(0% 0% 0% 100%)'
}}>
  <p class="text-to-reveal px-2 text-[90px] w-full text-left text-white"> Classic Capsules</p>
</div>
{/* <Image src={'/assets/3.jpg'} fill className="object-cover hero-sub" style={{borderRadius:'145px'}}/> */}
    </div>
    
<div className={`absolute inset-0 h-[100vh]  transform transition 1s ease-out mx-auto flex items-center  hero-3  w-[98%]   `} style={{borderRadius:'145px',backgroundImage:'url(/assets/image-2.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
<div class="reveal-container-2 " style={{    clipPath: 'inset(0% 0% 0% 100%)'
}}>
  <p class="text-to-reveal px-2 text-[90px] w-full text-left text-white"> Classic Capsules</p>
</div>
{/* <Image src={'/assets/2.webp'} fill className="object-cover hero-sub" style={{borderRadius:'145px'}}/> */}
    </div>
    </>
)
}
export default animated3