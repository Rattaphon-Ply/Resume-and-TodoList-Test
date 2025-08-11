import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let timeoutId;

    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      clearTimeout(timeoutId);

      if (entry.isIntersecting) {
        timeoutId = setTimeout(() => {
          setInView(true);
        }, delay);
      } else {
        timeoutId = setTimeout(() => {
          setInView(false);
        }, delay);
      }
    }, { threshold });

    observer.observe(ref.current);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'opacity, filter',
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
