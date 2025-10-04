import { motion } from 'framer-motion';
import { TrendingUp, Zap, Trophy, Target, Clock, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { stats, achievements } from '../../data/f1Data';
import { fadeInUp, scaleIn, staggerContainer } from '../../utils/animations';

const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:border-red-600/50 transition-all duration-500 overflow-hidden"
      whileHover={{ scale: 1.05, y: -10 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <motion.div
        className="relative z-10 mb-3 sm:mb-4 lg:mb-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-lg shadow-red-600/25">
          {stat.icon}
        </div>
      </motion.div>

      {/* Value */}
      <div className="relative z-10 mb-2 sm:mb-4">
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
        >
          <CountUp
            end={stat.value}
            duration={2}
            delay={index * 0.2}
            preserveValue
          />
          <span className="text-red-400">{stat.unit}</span>
        </motion.div>
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{stat.title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{stat.description}</p>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-red-600 opacity-0 group-hover:opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const AchievementCounter = ({ achievement, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.1, type: "spring" }}
      >
        <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          {inView && (
            <CountUp
              end={achievement.value}
              duration={2}
              delay={index * 0.2}
              preserveValue
            />
          )}
          {achievement.suffix}
        </span>
      </motion.div>
      <p className="text-gray-300 font-medium">{achievement.title}</p>
    </motion.div>
  );
};

export const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="stats" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      {/* Racing Track Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="racing-track" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 Q 50 0 100 50 T 200 50" stroke="white" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#racing-track)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-green-600/10 border border-green-600/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
          >
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-green-400 font-medium text-sm sm:text-base">Datos en Tiempo Real</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DATOS QUE
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
              IMPRESIONAN
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Números que definen la grandeza de la <span className="text-green-400">Fórmula 1</span>. 
            Desde la velocidad extrema hasta la precisión técnica que hace posible este espectáculo mundial.
          </motion.p>
        </motion.div>

        {/* Technical Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto px-2 sm:px-4 lg:px-0"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Championship Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-12 sm:mb-16 mx-2 sm:mx-4 lg:mx-0"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">F1 en Cifras</h3>
            <p className="text-sm sm:text-base text-gray-300">El alcance global de la competición más prestigiosa del automovilismo</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCounter key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Live Data Dashboard */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-2 sm:px-4 lg:px-0"
        >
          {/* Speed Gauge */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-500 mx-auto mb-2 sm:mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Velocidad Promedio</h4>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-yellow-500 mb-1 sm:mb-2">
              <CountUp end={195} duration={2} preserveValue /> KM/H
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">Durante una carrera completa</p>
            
            {/* Speed Bar */}
            <div className="mt-4 sm:mt-6 bg-gray-800 h-2 sm:h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-500 to-red-600"
                initial={{ width: 0 }}
                animate={inView ? { width: "78%" } : { width: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>
          </div>

          {/* G-Force Meter */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-500 mx-auto mb-2 sm:mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Fuerza G Máxima</h4>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-500 mb-1 sm:mb-2">
              <CountUp end={6.5} decimals={1} duration={2} preserveValue /> G
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">En curvas de alta velocidad</p>
            
            {/* G-Force Indicator */}
            <div className="mt-4 sm:mt-6 flex justify-center space-x-1">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gray-800 rounded-full"
                  animate={inView && i < 7 ? { 
                    backgroundColor: i < 3 ? "#10b981" : i < 5 ? "#f59e0b" : "#ef4444" 
                  } : {}}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>

          {/* Lap Time */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500 mx-auto mb-2 sm:mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Vuelta Más Rápida</h4>
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-500 mb-1 sm:mb-2">1:13.078</div>
            <p className="text-gray-400 text-xs sm:text-sm">Récord actual de Mónaco</p>
            
            {/* Timer Animation */}
            <div className="mt-4 sm:mt-6">
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto border-3 sm:border-4 border-blue-500 rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};