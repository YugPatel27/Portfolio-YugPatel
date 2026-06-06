import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.slice(1) || 'hero');
      return undefined;
    }

    setActiveSection('hero');

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.12, 0.24, 0.4, 0.6] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname, sectionIds]);

  return activeSection;
}
