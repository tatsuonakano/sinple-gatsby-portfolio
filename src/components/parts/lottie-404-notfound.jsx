import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';
import animationData from '../../lottie-json/deno-404.json';
import "../../styles/parts.scss"

const Lottie404NotFound = () => {
  
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
            <div className="lottie-404notfound-heigt" ref={animationContainer}></div>
          </div>
  );
};
export default Lottie404NotFound;