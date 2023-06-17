import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  style: CSSProperties;
  targetClass: string;
  cascadeDelay?: number;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ style, targetClass, cascadeDelay = 100 }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      const elements = document.querySelectorAll(targetClass);
      scrollReveal().reveal(elements, {
        reset: false,
        distance: '60px',
        delay: 400,
        duration: 2800,
        interval: cascadeDelay,
        origin: 'top',
      });
    }
  }, [targetClass, cascadeDelay]);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    />
  );
};

const ScrollRight: FC<ScrollRevealProps> = ({ style, targetClass, cascadeDelay = 100 }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      const elements = document.querySelectorAll(targetClass);
      scrollReveal().reveal(elements, {
        reset: false,
        distance: '60px',
        delay: 400,
        duration: 2800,
        interval: cascadeDelay,
        origin: 'right',
      });
    }
  }, [targetClass, cascadeDelay]);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    />
  );
};

const ScrollLeft: FC<ScrollRevealProps> = ({ style, targetClass, cascadeDelay = 100 }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      const elements = document.querySelectorAll(targetClass);
      scrollReveal().reveal(elements, {
        reset: false,
        distance: '60px',
        delay: 400,
        duration: 2800,
        interval: cascadeDelay,
        origin: 'left',
      });
    }
  }, [targetClass, cascadeDelay]);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    />
  );
};

export {ScrollReveal, ScrollRight, ScrollLeft};
