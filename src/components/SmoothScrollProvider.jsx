"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {


  useEffect(() => {

    const lenis = new Lenis({

      lerp: 0.08,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      touchMultiplier: 1.2,

      smoothTouch: false,

      anchors: true,

    });



    let frame;



    const raf = (time) => {

      lenis.raf(time);

      frame = requestAnimationFrame(raf);

    };



    frame = requestAnimationFrame(raf);



    return () => {

      cancelAnimationFrame(frame);

      lenis.destroy();

    };


  }, []);




  return <>{children}</>;
}