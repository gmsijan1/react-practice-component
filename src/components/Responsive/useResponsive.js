import { useEffect, useState } from "react";

export default function useResponsive() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...size,
    isMobile: size.width <= 768,
    isTablet: size.width > 768 && size.width <= 1024,
    isDesktop: size.width > 1024,
  };
}
