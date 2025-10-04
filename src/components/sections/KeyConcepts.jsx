import { motion } from 'framer-motion';
import { Info, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { keyConcepts, strategyGuide } from '../../data/guideData';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';

const ConceptCard = ({ concept, index }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Seguridad': return '🚨';
      case 'Tecnología': return '⚙️';
      case 'Reglamento': return '📋';
      case 'Estrategia': return '🎯';
      default: return '💡';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Seguridad': return 'yellow';
      case 'Tecnología': return 'blue';
      case 'Reglamento': return 'orange';
      case 'Estrategia': return 'green';
      default: return 'purple';
    }
  };

  return (
    <motion.div
      variants={scaleIn}
      className={`group relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border ${concept.borderColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-opacity-100 transition-all duration-500 cursor-pointer`}
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Background Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${concept.bgColor} rounded-2xl sm:rounded-3xl`} />

      {/* Header */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${concept.bgColor} ${concept.borderColor} border`}>
            <span className="text-base sm:text-lg">{getCategoryIcon(concept.category)}</span>
            <span className="text-white">{concept.category}</span>
          </div>
          <div className="text-2xl sm:text-4xl">{concept.icon}</div>
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{concept.title}</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{concept.description}</p>
      </div>

      {/* Details */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <div>
          <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
            <Info className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Detalles:
          </h4>
          <ul className="space-y-1 sm:space-y-2">
            {concept.details.map((detail, detailIndex) => (
              <motion.li
                key={detailIndex}
                className="flex items-start space-x-2 text-gray-400 text-xs sm:text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: detailIndex * 0.05 }}
              >
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                  concept.color === 'yellow' ? 'bg-yellow-500' :
                  concept.color === 'blue' ? 'bg-blue-500' :
                  concept.color === 'red' ? 'bg-red-500' :
                  concept.color === 'orange' ? 'bg-orange-500' :
                  concept.color === 'green' ? 'bg-green-500' :
                  concept.color === 'purple' ? 'bg-purple-500' :
                  'bg-cyan-500'
                }`} />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className={`p-3 sm:p-4 rounded-xl ${concept.bgColor} border ${concept.borderColor}`}>
          <h5 className={`font-semibold mb-1 sm:mb-2 flex items-center text-sm sm:text-base ${
            concept.color === 'yellow' ? 'text-yellow-400' :
            concept.color === 'blue' ? 'text-blue-400' :
            concept.color === 'red' ? 'text-red-400' :
            concept.color === 'orange' ? 'text-orange-400' :
            concept.color === 'green' ? 'text-green-400' :
            concept.color === 'purple' ? 'text-purple-400' :
            'text-cyan-400'
          }`}>
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Impacto:
          </h5>
          <p className="text-gray-300 text-xs sm:text-sm">{concept.impact}</p>
        </div>

        {/* Example */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 sm:p-4">
          <h5 className="font-semibold text-gray-300 mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Ejemplo:
          </h5>
          <p className="text-gray-400 text-xs sm:text-sm italic">"{concept.example}"</p>
        </div>
      </div>

      {/* Hover Border Animation */}
      <motion.div
        className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 opacity-0 group-hover:opacity-50 ${concept.borderColor}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const StrategySection = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
    >
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🏁</span>
        {strategyGuide.title}
      </h4>
      
      <p className="text-gray-300 text-center mb-6 sm:mb-8 text-sm sm:text-base px-2">{strategyGuide.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {strategyGuide.strategies.map((strategy, index) => (
          <motion.div
            key={index}
            className="bg-black/40 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            whileHover={{ scale: 1.02, y: -3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h5 className="text-purple-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">{strategy.name}</h5>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{strategy.description}</p>
            
            <div className="space-y-2 sm:space-y-3">
              <div>
                <h6 className="text-green-400 font-semibold text-xs sm:text-sm mb-1">Ventajas:</h6>
                <ul className="text-gray-400 text-xs space-y-1">
                  {strategy.pros.map((pro, proIndex) => (
                    <li key={proIndex} className="flex items-start">
                      <span className="text-green-500 mr-1 text-xs">✓</span>
                      <span className="text-xs">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h6 className="text-red-400 font-semibold text-xs sm:text-sm mb-1">Desventajas:</h6>
                <ul className="text-gray-400 text-xs space-y-1">
                  {strategy.cons.map((con, conIndex) => (
                    <li key={conIndex} className="flex items-start">
                      <span className="text-red-500 mr-1 text-xs">✗</span>
                      <span className="text-xs">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-700">
                <h6 className="text-blue-400 font-semibold text-xs sm:text-sm mb-1">Cuándo usar:</h6>
                <p className="text-gray-400 text-xs">{strategy.when}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const QuickReference = () => {
  const quickFacts = [
    { term: "Undercut", definition: "Parar antes para ganar posición con neumáticos frescos" },
    { term: "Overcut", definition: "Extender el stint para ganar tiempo en pista libre" },
    { term: "DRS", definition: "Sistema que reduce resistencia para facilitar adelantamientos" },
    { term: "Safety Car", definition: "Vehículo que lidera cuando hay peligro en pista" },
    { term: "VSC", definition: "Safety Car virtual que controla velocidad electrónicamente" },
    { term: "ERS", definition: "Sistema de recuperación de energía híbrida" }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
    >
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">📚</span>
        Referencia Rápida
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {quickFacts.map((fact, index) => (
          <motion.div
            key={index}
            className="bg-black/60 border border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-gray-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <h5 className="text-cyan-400 font-bold text-sm sm:text-base mb-1">{fact.term}</h5>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{fact.definition}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const KeyConcepts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Debug: verificar si el componente se está renderizando
  console.log('KeyConcepts component rendered, inView:', inView);

  return (
    <div id="concepts" className="scroll-mt-20" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="text-center mb-12 sm:mb-16 px-4 sm:px-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Conceptos
          </span>
          <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent ml-2 sm:ml-3">
            Clave
          </span>
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
        >
          Domina los términos y conceptos fundamentales que escucharás en cada carrera. 
          Desde <span className="text-purple-400 font-medium">tecnología</span> hasta <span className="text-white font-medium">estrategia</span>, aquí tienes todo lo esencial.
        </motion.p>
      </motion.div>

      {/* Concepts Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2 sm:px-4 lg:px-0"
      >
        {keyConcepts.map((concept, index) => {
          console.log('Rendering concept:', concept.title, 'for mobile'); // Debug log
          return (
            <ConceptCard key={concept.id} concept={concept} index={index} />
          );
        })}
      </motion.div>

      {/* Strategy Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16 px-2 sm:px-4 lg:px-0"
      >
        <StrategySection />
      </motion.div>

      {/* Quick Reference */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16 px-2 sm:px-4 lg:px-0"
      >
        <QuickReference />
      </motion.div>

      {/* Pro Tips */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border border-cyan-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 lg:mx-0"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-400" />
          Tips para Nuevos Fanáticos
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-300">
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Durante la carrera:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Observa las estrategias de neumáticos</li>
              <li>• Presta atención a los tiempos por sector</li>
              <li>• Nota cuándo se activa el DRS</li>
              <li>• Sigue las comunicaciones por radio</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Para entender mejor:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Aprende los circuitos y sus características</li>
              <li>• Sigue las rivalidades entre pilotos</li>
              <li>• Entiende el impacto del clima</li>
              <li>• Observa las batallas por posición</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};