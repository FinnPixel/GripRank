import React, { useEffect, useRef, useState, ReactNode } from "react";
import useWindowSize from "../custom_hooks/useWindowSize";
import { ScrollProvider } from "./scroll_context";
import { Box } from "@mui/material";

interface SmoothScrollData {
  ease: number;
  current: number;
  previous: number;
  rounded: number;
}

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [data, setData] = useState<SmoothScrollData>({
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  });

  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  // update body height whenever content or window height changes
  useEffect(() => {
    setBodyHeight();
  }, [data, windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    const loop = () => {
      smoothScrollingHandler();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, []);

  const smoothScrollingHandler = () => {
    if (!scrollingContainerRef.current) return;

    const current = window.scrollY;

    setData((prevData) => {
      const previous = prevData.previous + (current - prevData.previous) * prevData.ease;
      const rounded = Math.round(previous * 100) / 100;

      scrollingContainerRef.current!.style.transform = `translateY(-${rounded}px)`;

      return {
        ...prevData,
        current,
        previous,
        rounded,
      };
    });
  };

  return (
    <ScrollProvider data={data} setData={setData}>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          minHeight: "100%",
        }}
      >
        <div ref={scrollingContainerRef} style={{ minHeight: "100%", paddingBottom: 0 }}>
          {children}
        </div>
      </Box>
    </ScrollProvider>
  );
};

export default SmoothScroll;
