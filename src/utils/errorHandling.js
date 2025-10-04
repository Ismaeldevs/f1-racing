// 404 Error Handling Utilities

/**
 * Custom 404 error types for different scenarios
 */
export const ErrorTypes = {
  PAGE_NOT_FOUND: 'page_not_found',
  DRIVER_NOT_FOUND: 'driver_not_found',
  RACE_NOT_FOUND: 'race_not_found',
  TEAM_NOT_FOUND: 'team_not_found',
  GENERAL_ERROR: 'general_error'
};

/**
 * Custom error messages for different 404 scenarios
 */
export const ErrorMessages = {
  [ErrorTypes.PAGE_NOT_FOUND]: {
    title: '¡FUERA DE PISTA!',
    message: 'La página que buscas no se encuentra en este circuito',
    suggestion: 'Volvamos al circuito principal'
  },
  [ErrorTypes.DRIVER_NOT_FOUND]: {
    title: '¡PILOTO NO ENCONTRADO!',
    message: 'Este piloto no está en la parrilla de la temporada 2025',
    suggestion: 'Explora otros pilotos en activo'
  },
  [ErrorTypes.RACE_NOT_FOUND]: {
    title: '¡CARRERA CANCELADA!',
    message: 'Esta carrera no está en el calendario oficial de F1',
    suggestion: 'Revisa el calendario completo de la temporada'
  },
  [ErrorTypes.TEAM_NOT_FOUND]: {
    title: '¡EQUIPO RETIRADO!',
    message: 'Esta escudería no compite en la temporada actual',
    suggestion: 'Conoce los equipos oficiales de F1 2025'
  },
  [ErrorTypes.GENERAL_ERROR]: {
    title: '¡ERROR DE SISTEMA!',
    message: 'Algo salió mal en nuestros sistemas de telemetría',
    suggestion: 'Reinicia y vuelve a intentarlo'
  }
};

/**
 * F1 Fun Facts for 404 pages
 */
export const F1Facts = [
  {
    emoji: '🏎️',
    fact: '¿Sabías que los pilotos de F1 pueden perder hasta 3kg de peso corporal durante una carrera debido al calor extremo?'
  },
  {
    emoji: '⚡',
    fact: '¿Sabías que un coche de F1 puede acelerar de 0 a 100 km/h en solo 2.6 segundos?'
  },
  {
    emoji: '🔥',
    fact: '¿Sabías que los frenos de un F1 pueden alcanzar temperaturas de hasta 1000°C durante el frenado?'
  },
  {
    emoji: '🌪️',
    fact: '¿Sabías que los pilotos experimentan fuerzas G de hasta 6.5G en las curvas más cerradas?'
  },
  {
    emoji: '💨',
    fact: '¿Sabías que un coche de F1 podría teóricamente conducir boca abajo en un túnel a más de 180 km/h por la aerodinámica?'
  },
  {
    emoji: '⚙️',
    fact: '¿Sabías que cada coche de F1 tiene más de 300 sensores que envían datos en tiempo real al equipo?'
  },
  {
    emoji: '🏁',
    fact: '¿Sabías que el circuito más largo del calendario es Spa-Francorchamps con 7.004 km por vuelta?'
  },
  {
    emoji: '🚀',
    fact: '¿Sabías que la velocidad máxima registrada en F1 fue de 372.5 km/h por Valtteri Bottas en México?'
  }
];

/**
 * Get random F1 fact for 404 pages
 */
export const getRandomF1Fact = () => {
  const randomIndex = Math.floor(Math.random() * F1Facts.length);
  return F1Facts[randomIndex];
};

/**
 * Navigation suggestions for 404 pages
 */
export const NavigationSuggestions = [
  {
    icon: 'Zap',
    title: 'Pilotos',
    description: 'Conoce a los mejores',
    path: '/#drivers'
  },
  {
    icon: 'Calendar',
    title: 'Calendario',
    description: 'Próximas carreras',
    path: '/#calendar'
  },
  {
    icon: 'Users',
    title: 'Equipos',
    description: 'Escuderías 2025',
    path: '/#teams'
  },
  {
    icon: 'BarChart3',
    title: 'Estadísticas',
    description: 'Datos y récords',
    path: '/#stats'
  },
  {
    icon: 'BookOpen',
    title: 'Guía F1',
    description: 'Aprende sobre F1',
    path: '/#guide'
  }
];

/**
 * Utility to handle different types of 404 errors
 */
export const handle404Error = (errorType = ErrorTypes.PAGE_NOT_FOUND, customMessage = null) => {
  const errorConfig = ErrorMessages[errorType] || ErrorMessages[ErrorTypes.GENERAL_ERROR];
  
  if (customMessage) {
    errorConfig.message = customMessage;
  }
  
  return {
    ...errorConfig,
    fact: getRandomF1Fact(),
    suggestions: NavigationSuggestions,
    timestamp: new Date().toISOString()
  };
};

/**
 * Log 404 errors for analytics (optional)
 */
export const log404Error = (path, errorType = ErrorTypes.PAGE_NOT_FOUND, userAgent = '') => {
  // This could be connected to analytics service
  console.warn('404 Error:', {
    path,
    errorType,
    userAgent,
    timestamp: new Date().toISOString()
  });
  
  // Could also send to analytics service:
  // analytics.track('404_error', { path, errorType, timestamp: Date.now() });
};