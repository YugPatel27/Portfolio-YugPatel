import { useEffect, useRef, useCallback } from 'react';

export function useOptimizedScroll(callback, options = {}) {
  const {
    threshold = 0.1,
    debounceDelay = 50,
  } = options;

  const rafRef = useRef(null);
  const lastScrollRef = useRef(0);
  const debounceTimerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const now = performance.now();

    if (now - lastScrollRef.current < debounceDelay) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(handleScroll);
      return;
    }

    lastScrollRef.current = now;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      callback();
    }, debounceDelay);
  }, [callback, debounceDelay]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [handleScroll]);
}

export function useIntersectionObserver(ref, options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    callback,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (callback) {
            callback(entry);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, callback]);
}

export function useLazyImageLoad(imageRef) {
  useEffect(() => {
    if (!imageRef.current) return;

    const img = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageElement = entry.target;
            const src = imageElement.dataset.src;

            if (src) {
              imageElement.src = src;
              imageElement.removeAttribute('data-src');
              observer.unobserve(imageElement);
            }
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(img);

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, [imageRef]);
}
