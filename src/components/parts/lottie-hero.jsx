import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';
import animationData from '../../lottie-json/44037-gatsby.json';
import "../../styles/parts.scss"

const LottieHero = () => {
  
  let animationContainer = createRef();
  let anim = null;
  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData
    });
    return () => anim.destroy(); 
  }, []);
  return (
          <div>
            <div className="lottie-hero-heigt" ref={animationContainer}></div>
          </div>
  );
};
export default LottieHero;