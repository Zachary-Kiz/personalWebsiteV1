import { useEffect, useRef, useState, useMemo } from 'react';

export function useInView(rawOptions = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

const options = useMemo(() => rawOptions, [JSON.stringify(rawOptions), ref, hasBeenVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        observer.unobserve(entry.target); // Stop observing after first visibility
      }
    }, options);

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [ref, hasBeenVisible];
}