import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, loop = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: loop,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [animationData, loop]);

  return <div ref={containerRef}></div>;
};

export default LottieAnimation;
