
import { useEffect, useState } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
// import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../common/form/Form"; 
import Section2 from '../../components/home'
import Section3 from "../home/section3/Section3";
import Section4 from "../home/Section4";
import Section5 from "../home/section5/Section5";
import Slider from "../../components/Slider";
// import MobileSlider from "../../common/mobileslider/mobileslider";
import SmoothScrollProvider from "../../common/SmoothScrollProvider";
import styles from "../../common/Section1video/Section1Video.module.css";
import Hero from "../../common/Section1video/Hero";


const Home = () => {

  useEffect(() => {
    const animation = gsap.to(".bg-blue-200", {
      y: -100,
      scrollTrigger: {
        trigger: ".bg-blue-200",
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
      }
    });
  
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  useEffect(() => {
    // Run animations only on desktop
    if (window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    const panels = gsap.utils.toArray(".panel:not(:first-child)");

    gsap.set(panels[0], { yPercent: 0, zIndex: 1 });
    gsap.set(panels, {
      yPercent: 100,
      zIndex: (i) => i + 2
    });

    const scroll = `+=${panels.length * 100}%`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: `${scroll}vh`,
        endTrigger:'bottom bottom',
        scrub: 2,
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);



  return (
    <>
    <SmoothScrollProvider>
  
      {/* <Header /> */}

      {/* Desktop animated section */}
      <div
        className="hero relative h-[100vh] w-full"

      >
   
    

          <Hero/>
          
          <Section2
            text={<>ELEVATED LIVING,<br />WITHIN REACH</>}
            backgroundImage="/assets/2.png"
            className="panel md:block hidden inset-0 absolute w-full h-[100vh] z-10"
          />
          <Section4
            heading={<>SOPHISTICATED LIVING IN<br />THE HEART OF JVC</>}
            desktopBackground="/assets/3.jpg"
            btntext="Explore More"
            className="panel md:block hidden inset-0 absolute w-full h-[100vh] z-10 bg-cover bg-center"
          />
          <Section5
            heading={<>CRAFTED FOR THE FEW <br /> WHO EXPECT MORE</>}
            className="panel md:block hidden inset-0 absolute w-full h-[100vh] z-10"
          />
        </div>

      {/* Mobile stacked sections
      <div className="block md:hidden">

        <Section2
          text={<>ELEVATED LIVING,<br />WITHIN REACH</>}
          backgroundImage="/assets/2.png"
          mobileBackgroundImage="/assets/2.png"
          className="w-full h-auto"
        />
        <Section4
          heading={<>SOPHISTICATED LIVING IN<br />THE HEART OF JVC</>}
          desktopBackground="/assets/3.jpg"
          btntext="Explore More"
          className="w-full h-auto bg-cover bg-center"
        />
        <Section5
          heading={<>CRAFTED FOR THE FEW <br /> WHO EXPECT MORE</>}
          className="w-full h-auto"
        />
      </div>

      <Section3 className="panel" />

      {/* Sliders */}
      <div className="hidden md:block">
        <Slider heading="LATEST NEWS" href="/news" buttonheading="View All News" />
      </div>
      <div className="block md:hidden">

        <MobileSlider />
      </div>

      {/* <Form /> */} */}
      <Footer />
      </SmoothScrollProvider>
    </>
  );
};

export default Home;
