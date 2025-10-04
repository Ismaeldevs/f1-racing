import { useState, useEffect } from 'react';
import { CalendarMobile } from './CalendarMobile';
import { RaceCalendar } from './Calendar';

export const CalendarAdaptive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Para móviles y tablets, usa la versión simplificada
  if (isMobile) {
    return <CalendarMobile />;
  }

  // Para desktop, usa la versión original
  return <RaceCalendar />;
};