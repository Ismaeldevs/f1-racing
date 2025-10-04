import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

// Animaciones comunes para Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Variantes para hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
  transition: { duration: 0.3 }
};

// Configuración de viewport para intersection observer
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "-100px"
};