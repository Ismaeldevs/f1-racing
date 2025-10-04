import { motion } from 'framer-motion';
import { BookOpen, Info, Zap, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { TireGuide } from './TireGuide';
import { RaceFormats } from './RaceFormats';
import { PointingSystem } from './PointingSystem';
import { KeyConcepts } from './KeyConcepts';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Guide = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Debug: verificar si el componente se está renderizando
  console.log('Guide component rendered, inView:', inView);

  return (
    <section id="guide" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-white to-gray-400"
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: (i % 8) * 0.2 
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/10 border border-indigo-600/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-400 font-medium">Guía Completa F1</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-white">
            APRENDE FÓRMULA 1
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4">
            Todo lo que necesitas saber para entender y disfrutar al máximo la 
            <span className="text-red-400 font-semibold"> Fórmula 1</span>.
            <br className="hidden sm:block" />
            Te convertiremos en un <span className="text-white font-semibold">experto</span>.
          </p>
        </div>

        {/* Navigation Pills */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 px-4"
        >
          {[
            { icon: "🏎️", label: "Neumáticos", id: "tires", color: "from-red-600 to-orange-500" },
            { icon: "📅", label: "Formatos", id: "formats", color: "from-blue-600 to-purple-500" },
            { icon: "🏆", label: "Puntuación", id: "points", color: "from-yellow-500 to-orange-500" },
            { icon: "🎯", label: "Conceptos", id: "concepts", color: "from-green-500 to-emerald-500" }
          ].map((nav, index) => (
            <motion.button
              key={nav.id}
              className={`group flex items-center space-x-2 sm:space-x-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:${nav.color} border border-gray-700 hover:border-transparent rounded-full px-4 py-3 sm:px-6 sm:py-3 min-h-[48px] transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                document.getElementById(nav.id)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{nav.icon}</span>
              <span className="text-white group-hover:text-gray-50 font-medium text-sm sm:text-base transition-colors duration-300">{nav.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Guide Sections */}
        <div className="space-y-32">
          {/* Tire Guide Section */}
          <TireGuide />

          {/* Race Formats Section */}
          <RaceFormats />

          {/* Pointing System Section */}
          <PointingSystem />

          {/* Key Concepts Section */}
          <KeyConcepts />
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-600/30 rounded-3xl p-12"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              ¡Ahora eres un experto en F1!
            </h3>
            
            <p className="text-xl text-gray-300 mb-8">
              Con estos conocimientos podrás disfrutar cada carrera con una perspectiva 
              completamente nueva. ¿Listo para ver la siguiente carrera?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                className="bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('calendar')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                
              >
                <span>Ver Calendario</span>
                <Zap className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="flex items-center cursor-pointer space-x-2 text-indigo-400 hover:text-indigo-300 font-medium"
                whileHover={{ x: 5 }}
                onClick={() => window.open('https://www.formula1.com/', '_blank')}
              >
                <Info className="w-5 h-5" />
                <span>Más recursos</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};