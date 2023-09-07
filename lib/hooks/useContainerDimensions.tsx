import { useState, useEffect } from "react";

export const useContainerDimensions = (myRef: React.RefObject<HTMLElement>) => {
  type Dimensions = { width: number; height: number };
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getDimensions: () => Dimensions = () => {
      if (myRef.current) {
        return {
          width: myRef.current.offsetWidth,
          height: myRef.current.offsetHeight,
        };
      } else {
        return { width: 0, height: 0 };
      }
    };

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};
