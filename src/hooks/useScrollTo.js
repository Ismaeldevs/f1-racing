import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId) => {
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Element found:', element);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajustar para navbar fija
      console.log('Scrolling to offset:', offsetTop);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  }, []);

  return scrollToSection;
};