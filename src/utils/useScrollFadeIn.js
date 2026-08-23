import { useEffect, useRef, useState } from 'react';

const useScrollFadeIn = () => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return [ref, isVisible];
};

export default useScrollFadeIn;
