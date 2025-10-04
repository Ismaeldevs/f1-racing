// Datos para la Guía de Fórmula 1

export const tireTypes = [
  {
    id: 1,
    name: "Blandos",
    code: "C5",
    color: "#FF0000",
    bgColor: "bg-red-600",
    borderColor: "border-red-600",
    textColor: "text-red-400",
    compound: "Más blando",
    grip: "Máximo agarre",
    durability: "Menor duración",
    strategy: "Ideal para clasificación y stint cortos",
    degradation: "Alta",
    lapTime: "Más rápido",
    icon: "🔴",
    characteristics: [
      "Mayor velocidad en vuelta",
      "Se calientan rápidamente",
      "Duran menos vueltas",
      "Perfectos para adelantamientos"
    ]
  },
  {
    id: 2,
    name: "Medios",
    code: "C3",
    color: "#FFFF00",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400",
    compound: "Equilibrado",
    grip: "Agarre moderado",
    durability: "Duración media",
    strategy: "Versátil para la mayoría de estrategias",
    degradation: "Media",
    lapTime: "Equilibrado",
    icon: "🟡",
    characteristics: [
      "Balance entre velocidad y duración",
      "Versátiles en diferentes condiciones",
      "Opción popular para la carrera",
      "Buen rendimiento general"
    ]
  },
  {
    id: 3,
    name: "Duros",
    code: "C1",
    color: "#FFFFFF",
    bgColor: "bg-gray-200",
    borderColor: "border-gray-200",
    textColor: "text-gray-300",
    compound: "Más duro",
    grip: "Menor agarre inicial",
    durability: "Mayor duración",
    strategy: "Estrategias largas y una sola parada",
    degradation: "Baja",
    lapTime: "Más lento inicialmente",
    icon: "⚪",
    characteristics: [
      "Mayor resistencia y duración",
      "Tardan en calentarse",
      "Ideales para stints largos",
      "Menos degradación"
    ]
  },
  {
    id: 4,
    name: "Intermedios",
    code: "INT",
    color: "#00FF00",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    compound: "Lluvia ligera",
    grip: "Agarre en mojado",
    durability: "Variable",
    strategy: "Condiciones húmedas o secándose",
    degradation: "Depende del asfalto",
    lapTime: "Según condiciones",
    icon: "🟢",
    characteristics: [
      "Para pista húmeda",
      "Evacuación de agua moderada",
      "Transición lluvia-seco",
      "Temperatura crítica"
    ]
  },
  {
    id: 5,
    name: "Full Wet",
    code: "WET",
    color: "#0000FF",
    bgColor: "bg-blue-600",
    borderColor: "border-blue-600",
    textColor: "text-blue-400",
    compound: "Lluvia intensa",
    grip: "Máximo agarre en agua",
    durability: "Buena en mojado",
    strategy: "Lluvia fuerte e intensa",
    degradation: "Baja en mojado",
    lapTime: "Lento pero seguro",
    icon: "🔵",
    characteristics: [
      "Para lluvia intensa",
      "Máxima evacuación de agua",
      "Seguridad en condiciones extremas",
      "Velocidades reducidas"
    ]
  }
];

export const raceFormats = {
  normal: {
    title: "Formato Normal",
    description: "El formato tradicional de un fin de semana de F1",
    duration: "3 días",
    sessions: [
      {
        day: "Viernes",
        session: "Práctica Libre 1",
        duration: "90 minutos",
        purpose: "Primeras pruebas y configuración básica",
        time: "FP1",
        icon: "🏎️"
      },
      {
        day: "Viernes",
        session: "Práctica Libre 2",
        duration: "90 minutos",
        purpose: "Simulaciones de carrera y ajustes",
        time: "FP2",
        icon: "🔧"
      },
      {
        day: "Sábado",
        session: "Práctica Libre 3",
        duration: "60 minutos",
        purpose: "Preparación final para clasificación",
        time: "FP3",
        icon: "⚙️"
      },
      {
        day: "Sábado",
        session: "Clasificación",
        duration: "60 minutos",
        purpose: "Definir posiciones de salida",
        time: "Q1, Q2, Q3",
        icon: "🏁"
      },
      {
        day: "Domingo",
        session: "Carrera",
        duration: "2 horas máx",
        purpose: "La competencia principal",
        time: "GP",
        icon: "🏆"
      }
    ]
  },
  sprint: {
    title: "Formato Sprint",
    description: "Formato acelerado con carrera corta el sábado",
    duration: "3 días",
    sessions: [
      {
        day: "Viernes",
        session: "Práctica Libre 1",
        duration: "90 minutos",
        purpose: "Única sesión libre de práctica",
        time: "FP1",
        icon: "🏎️"
      },
      {
        day: "Viernes",
        session: "Clasificación Sprint",
        duration: "60 minutos",
        purpose: "Clasificación para carrera del sábado",
        time: "SQ",
        icon: "⚡"
      },
      {
        day: "Sábado",
        session: "Sprint Shootout",
        duration: "45 minutos",
        purpose: "Clasificación para el Gran Premio",
        time: "SS",
        icon: "🎯"
      },
      {
        day: "Sábado",
        session: "Carrera Sprint",
        duration: "30-45 minutos",
        purpose: "Carrera corta con puntos",
        time: "Sprint",
        icon: "⚡"
      },
      {
        day: "Domingo",
        session: "Gran Premio",
        duration: "2 horas máx",
        purpose: "La carrera principal",
        time: "GP",
        icon: "🏆"
      }
    ]
  }
};

export const pointingSystems = {
  normal: {
    title: "Puntuación Normal",
    description: "Sistema de puntos para carreras regulares",
    positions: [
      { position: 1, points: 25, label: "1°", color: "text-yellow-400" },
      { position: 2, points: 18, label: "2°", color: "text-gray-300" },
      { position: 3, points: 15, label: "3°", color: "text-orange-400" },
      { position: 4, points: 12, label: "4°", color: "text-white" },
      { position: 5, points: 10, label: "5°", color: "text-white" },
      { position: 6, points: 8, label: "6°", color: "text-white" },
      { position: 7, points: 6, label: "7°", color: "text-white" },
      { position: 8, points: 4, label: "8°", color: "text-white" },
      { position: 9, points: 2, label: "9°", color: "text-white" },
      { position: 10, points: 1, label: "10°", color: "text-white" }
    ],
    bonus: {
      fastestLap: {
        points: 1,
        condition: "Debe terminar entre los 10 primeros",
        description: "Punto extra por vuelta más rápida"
      }
    }
  },
  sprint: {
    title: "Puntuación Sprint",
    description: "Sistema de puntos para carreras sprint",
    positions: [
      { position: 1, points: 8, label: "1°", color: "text-yellow-400" },
      { position: 2, points: 7, label: "2°", color: "text-gray-300" },
      { position: 3, points: 6, label: "3°", color: "text-orange-400" },
      { position: 4, points: 5, label: "4°", color: "text-white" },
      { position: 5, points: 4, label: "5°", color: "text-white" },
      { position: 6, points: 3, label: "6°", color: "text-white" },
      { position: 7, points: 2, label: "7°", color: "text-white" },
      { position: 8, points: 1, label: "8°", color: "text-white" }
    ],
    bonus: {
      fastestLap: {
        points: 0,
        condition: "No aplica en sprint",
        description: "Sin punto extra en sprint"
      }
    }
  }
};

export const keyConcepts = [
  {
    id: 1,
    title: "Safety Car",
    icon: "🚨",
    category: "Seguridad",
    color: "yellow",
    bgColor: "bg-yellow-600/20",
    borderColor: "border-yellow-600",
    description: "Vehículo de seguridad que lidera el pelotón cuando hay peligro en pista",
    details: [
      "Se despliega cuando hay accidentes o condiciones peligrosas",
      "Todos los pilotos deben seguirlo y mantener posición",
      "No se permiten adelantamientos",
      "Se usa para limpiar la pista de forma segura",
      "El Virtual Safety Car (VSC) es una versión digital"
    ],
    impact: "Puede cambiar completamente la estrategia de carrera",
    example: "Si hay un accidente, el Safety Car permite a los comisarios trabajar con seguridad"
  },
  {
    id: 2,
    title: "DRS (Drag Reduction System)",
    icon: "💨",
    category: "Tecnología",
    color: "blue",
    bgColor: "bg-blue-600/20",
    borderColor: "border-blue-600",
    description: "Sistema que reduce la resistencia aerodinámica para facilitar adelantamientos",
    details: [
      "Se activa en zonas específicas del circuito",
      "Solo disponible si estás a menos de 1 segundo del coche delantero",
      "Abre el alerón trasero para reducir drag",
      "Aumenta la velocidad punta en 10-15 km/h",
      "Se desactiva automáticamente al frenar"
    ],
    impact: "Herramienta clave para los adelantamientos",
    example: "En la recta principal, si estás cerca del coche de adelante, puedes usar DRS"
  },
  {
    id: 3,
    title: "Motores",
    icon: "⚡",
    category: "Tecnología",
    color: "red",
    bgColor: "bg-red-600/20",
    borderColor: "border-red-600",
    description: "Unidades de potencia híbridas V6 turbo con sistemas de recuperación de energía",
    details: [
      "Motor V6 turbo de 1.6 litros",
      "Sistema híbrido ERS-K (energía cinética)",
      "Sistema ERS-H (energía del turbo)",
      "Potencia total: 1000 HP",
      "Cada piloto tiene un límite de motores por temporada"
    ],
    impact: "El corazón de la performance del monoplaza",
    example: "Mercedes, Ferrari, Honda y Renault son los fabricantes actuales"
  },
  {
    id: 4,
    title: "Penalizaciones",
    icon: "⚠️",
    category: "Reglamento",
    color: "orange",
    bgColor: "bg-orange-600/20",
    borderColor: "border-orange-600",
    description: "Sanciones por infracciones al reglamento deportivo o técnico",
    details: [
      "Penalizaciones de tiempo: +5s, +10s, +20s",
      "Stop & Go: parada obligatoria en boxes",
      "Drive Through: pasar por pit lane sin parar",
      "Pérdida de posiciones en parrilla",
      "Puntos de penalización en superlicencia"
    ],
    impact: "Pueden determinar el resultado final de la carrera",
    example: "Adelantar fuera de pista puede resultar en +5 segundos"
  },
  {
    id: 5,
    title: "Undercut",
    icon: "📈",
    category: "Estrategia",
    color: "green",
    bgColor: "bg-green-600/20",
    borderColor: "border-green-600",
    description: "Estrategia de parar antes que el rival para ganar posición con neumáticos frescos",
    details: [
      "Parar en boxes antes que el competidor",
      "Aprovechar neumáticos frescos para hacer tiempos rápidos",
      "El rival pierde tiempo con neumáticos degradados",
      "Cuando el rival para, ya has ganado posición",
      "Más efectivo con gran diferencia de degradación"
    ],
    impact: "Estrategia fundamental para ganar posiciones",
    example: "Hamilton para en vuelta 20, Verstappen en 22, Hamilton gana la posición"
  },
  {
    id: 6,
    title: "Overcut",
    icon: "📉",
    category: "Estrategia",
    color: "purple",
    bgColor: "bg-purple-600/20",
    borderColor: "border-purple-600",
    description: "Estrategia de extender el stint más que el rival para ganar posición",
    details: [
      "Continuar en pista cuando el rival para",
      "Aprovechar pista libre para hacer buenos tiempos",
      "Los neumáticos se mantienen en ventana de rendimiento",
      "Parar después con mayor ventaja de tiempo",
      "Requiere que los neumáticos aguanten"
    ],
    impact: "Contraataque al undercut tradicional",
    example: "Verstappen extiende 5 vueltas más y gana posición al parar después"
  },
  {
    id: 7,
    title: "GPS y Telemetría",
    icon: "📡",
    category: "Tecnología",
    color: "cyan",
    bgColor: "bg-cyan-600/20",
    borderColor: "border-cyan-600",
    description: "Sistemas de posicionamiento y recopilación de datos en tiempo real",
    details: [
      "GPS de alta precisión para posicionamiento exacto",
      "Telemetría en tiempo real: velocidad, RPM, temperaturas",
      "Datos de combustible y desgaste de neumáticos",
      "Comunicación constante entre piloto y equipo",
      "Análisis de sectores y comparativas"
    ],
    impact: "Permite estrategias precisas y análisis detallado",
    example: "El equipo sabe exactamente cuándo cada piloto puede parar sin perder posición"
  }
];

export const strategyGuide = {
  title: "Estrategias Principales",
  description: "Las tácticas más utilizadas en la Fórmula 1",
  strategies: [
    {
      name: "Una Parada",
      description: "Estrategia conservadora con una sola parada en boxes",
      pros: ["Menos tiempo perdido en boxes", "Menos riesgo"],
      cons: ["Neumáticos muy degradados al final", "Vulnerable al undercut"],
      when: "Circuitos donde es difícil adelantar"
    },
    {
      name: "Dos Paradas",
      description: "Estrategia más agresiva con dos paradas",
      pros: ["Neumáticos más frescos", "Más opciones estratégicas"],
      cons: ["Más tiempo perdido", "Mayor riesgo"],
      when: "Circuitos con alta degradación"
    },
    {
      name: "Estrategia Alternativa",
      description: "Comenzar con neumáticos diferentes al Q2",
      pros: ["Flexibilidad estratégica", "Puede sorprender"],
      cons: ["Posición de salida comprometida", "Riesgo elevado"],
      when: "Cuando necesitas recuperar posiciones"
    }
  ]
};