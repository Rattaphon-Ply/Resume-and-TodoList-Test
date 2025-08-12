import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // ใช้ Intersection Observer ตรวจว่า element เข้า viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // ทำงานครั้งเดียว
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  // ค่อยให้ gsap เล่นตอน inView = true
  useEffect(() => {
    if (!inView || !ref.current) return;

    const el = ref.current;
    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
    });

    return () => {
      gsap.killTweensOf(el);
    };
  }, [
    inView,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
