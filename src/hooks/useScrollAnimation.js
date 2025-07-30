import { useEffect, useRef, useState, useMemo } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const observerOptions = useMemo(() => ({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
    ...options
  }), [options.threshold, options.rootMargin]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      observerOptions
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [observerOptions]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (count, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (triggerAnimation) {
      const timeouts = [];
      for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, i]));
        }, i * delay);
        timeouts.push(timeout);
      }

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [triggerAnimation, count, delay]);

  const startAnimation = () => setTriggerAnimation(true);
  
  return [visibleItems, startAnimation];
};
