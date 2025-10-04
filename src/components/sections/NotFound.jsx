import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search, AlertTriangle, Zap, Calendar, Users, BarChart3, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { handle404Error, log404Error, ErrorTypes } from '../../utils/errorHandling';

export const NotFound = ({ errorType = ErrorTypes.PAGE_NOT_FOUND, customMessage = null }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Get error configuration
  const errorConfig = handle404Error(errorType, customMessage);

  // Icon mapping for navigation suggestions
  const iconMap = {
    'Zap': Zap,
    'Calendar': Calendar,
    'Users': Users,
    'BarChart3': BarChart3,
    'BookOpen': BookOpen,
    'Search': Search
  };

  useEffect(() => {
    // Log 404 error for analytics
    log404Error(window.location.pathname, errorType, navigator.userAgent);
  }, [errorType]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleNavigate = (path) => {
    window.location.href = path;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Racing Lines */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              style={{
                top: `${15 + i * 12}%`,
                width: '100%',
                left: '0'
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: (i % 12) * 0.1 
                }}
              />
            ))}
          </div>
        </div>

        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-4xl mx-auto"
        >
          {/* Error Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
          >
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-400 font-medium">Error de Navegación</span>
            <motion.div
              className="w-2 h-2 bg-red-600 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main 404 Display */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.h1
              className="text-8xl sm:text-9xl lg:text-[12rem] font-black mb-4 leading-none"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(220, 38, 38, 0.5)",
                  "0 0 40px rgba(220, 38, 38, 0.8)",
                  "0 0 20px rgba(220, 38, 38, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              {errorConfig.title}
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 mb-8"
            >
              {errorConfig.message}
            </motion.div>
          </motion.div>

          {/* Racing Car Animation */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 relative overflow-hidden"
          >
            <motion.div
              className="text-6xl sm:text-8xl"
              animate={{ 
                x: ['-50px', 'calc(100vw - 100px)'],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                x: { duration: 8, repeat: Infinity, ease: "linear" },
                rotate: { duration: 2, repeat: Infinity }
              }}
            >
              🏎️
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-sm text-gray-500 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Buscando la ruta correcta...
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {errorConfig.suggestion}. Parece que tomaste una curva equivocada. 
            ¡No te preocupes, incluso los mejores pilotos se salen de pista!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button
              className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 overflow-hidden min-w-[200px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoHome}
            >
              <Home className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Ir al Inicio</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 text-white border-2 border-white/20 px-8 py-4 rounded-full font-medium hover:border-red-600 hover:text-red-400 transition-all duration-300 min-w-[200px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoBack}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver Atrás</span>
            </motion.button>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12"
          >
            {errorConfig.suggestions.slice(0, 5).map((item, index) => {
              const IconComponent = iconMap[item.icon] || Search;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded-xl p-4 text-center hover:border-red-600/40 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(220, 38, 38, 0.05)",
                    borderColor: "rgba(220, 38, 38, 0.6)"
                  }}
                  onClick={() => handleNavigate(item.path)}
                >
                  <IconComponent className="w-6 h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                  <div className="text-gray-400 text-xs">{item.description}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Fun F1 Facts */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {errorConfig.fact.emoji} Dato Curioso F1
            </h3>
            <p className="text-gray-300 text-lg">
              {errorConfig.fact.fact}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};