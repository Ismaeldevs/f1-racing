import { motion } from 'framer-motion';
import { Circle, Timer, Zap, Shield, Thermometer } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { tireTypes } from '../../data/guideData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const TireCard = ({ tire, index }) => {
  return (
    <motion.div
      variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
      className="group relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-gray-600 transition-all duration-500"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Background Glow */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${tire.bgColor} rounded-2xl sm:rounded-3xl`}
      />

      {/* Tire Visual */}
      <div className="relative mb-4 sm:mb-6">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <motion.div
            className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 sm:border-4 ${tire.borderColor} flex items-center justify-center text-3xl sm:text-4xl`}
            style={{ backgroundColor: tire.color }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-2 rounded-full border-2 border-gray-800" />
            <div className="absolute inset-3 sm:inset-4 rounded-full border border-gray-600" />
            <span className="text-gray-900 font-black text-base sm:text-lg">{tire.code}</span>
          </motion.div>
        </div>

        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold text-center mb-1 sm:mb-2 ${tire.textColor}`}>
          {tire.name}
        </h3>
        <p className="text-gray-400 text-center text-xs sm:text-sm leading-relaxed px-2">{tire.strategy}</p>
      </div>

      {/* Tire Stats */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
        <div className="text-center">
          <Zap className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 ${tire.textColor}`} />
          <div className="text-white font-semibold text-xs sm:text-sm">{tire.grip}</div>
          <div className="text-gray-500 text-xs">Agarre</div>
        </div>
        <div className="text-center">
          <Shield className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 ${tire.textColor}`} />
          <div className="text-white font-semibold text-xs sm:text-sm">{tire.durability}</div>
          <div className="text-gray-500 text-xs">Duración</div>
        </div>
        <div className="text-center">
          <Timer className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 ${tire.textColor}`} />
          <div className="text-white font-semibold text-xs sm:text-sm">{tire.degradation}</div>
          <div className="text-gray-500 text-xs">Degradación</div>
        </div>
        <div className="text-center">
          <Thermometer className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 ${tire.textColor}`} />
          <div className="text-white font-semibold text-xs sm:text-sm">{tire.lapTime}</div>
          <div className="text-gray-500 text-xs">Tiempo/Vuelta</div>
        </div>
      </div>

      {/* Characteristics */}
      <div className="space-y-1 sm:space-y-2">
        <h4 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center">
          <Circle className="w-3 h-3 mr-1 sm:mr-2" />
          Características:
        </h4>
        {tire.characteristics.map((char, charIndex) => (
          <motion.div
            key={charIndex}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-400 text-xs sm:text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: charIndex * 0.1 }}
          >
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${tire.bgColor} flex-shrink-0`} />
            <span>{char}</span>
          </motion.div>
        ))}
      </div>

      {/* Hover Effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 ${tire.bgColor}`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
    </motion.div>
  );
};

const WeatherConditions = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mt-12"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
        Condiciones Climáticas
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {/* Dry Conditions */}
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">☀️</span>
          </div>
          <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Seco</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Condiciones ideales de pista</p>
          <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full" title="Blandos" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full" title="Medios" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full" title="Duros" />
          </div>
        </div>

        {/* Mixed Conditions */}
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gray-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">🌦️</span>
          </div>
          <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Mixto</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Pista secándose o lluvia ligera</p>
          <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full" title="Intermedios" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full opacity-50" title="Slicks" />
          </div>
        </div>

        {/* Wet Conditions */}
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">🌧️</span>
          </div>
          <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Lluvia</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Lluvia intensa y pista mojada</p>
          <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full" title="Full Wet" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TireGuide = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="tires" className="scroll-mt-20" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Guía de
          </span>
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent ml-2 sm:ml-3">
            Neumáticos
          </span>
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Los neumáticos son fundamentales en F1. Cada compuesto tiene características únicas 
          que afectan directamente la <span className="text-red-400 font-medium">estrategia</span> y el 
          <span className="text-white font-medium">rendimiento</span>.
        </motion.p>
      </motion.div>

      {/* Dry Weather Tires */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16"
      >
        <motion.h4
          variants={fadeInUp}
          className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center"
        >
          Neumáticos de Seco
        </motion.h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-0">
          {tireTypes.slice(0, 3).map((tire, index) => (
            <TireCard key={tire.id} tire={tire} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Wet Weather Tires */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16"
      >
        <motion.h4
          variants={fadeInUp}
          className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center"
        >
          Neumáticos de Lluvia
        </motion.h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-0 max-w-4xl mx-auto">
          {tireTypes.slice(3, 5).map((tire, index) => (
            <TireCard key={tire.id} tire={tire} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Weather Conditions */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="px-2 sm:px-4 lg:px-0"
      >
        <WeatherConditions />
      </motion.div>

      {/* Strategy Tips */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 lg:mx-0"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
          Consejos Estratégicos
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-300">
          <div>
            <h5 className="font-semibold text-blue-400 mb-2 text-sm sm:text-base">En Clasificación:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Q1 y Q2: Usualmente neumáticos medios</li>
              <li>• Q3: Siempre neumáticos blandos</li>
              <li>• El top 10 debe comenzar con neumáticos de Q2</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-blue-400 mb-2 text-sm sm:text-base">En Carrera:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Duro: Para stints largos y una parada</li>
              <li>• Medio: Equilibrio perfecto</li>
              <li>• Blando: Adelantamientos y finales de carrera</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};