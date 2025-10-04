import { motion } from 'framer-motion';
import { Play, ChevronDown, Zap, Trophy, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useScrollTo } from '../../hooks/useScrollTo';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

export const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollToSection = useScrollTo();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      {/* Background Video/Image Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Racing Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                width: '200%',
                left: '-50%'
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-red-600/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          {/* Badge - Positioned above title with proper navbar spacing */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
          >
            <Trophy className="w-5 h-5 text-red-600" />
            <span className="text-red-400 font-medium">Temporada 2025 • En Vivo</span>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              VELOCIDAD
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              EXTREMA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experimenta la emoción de la <span className="text-red-400 font-semibold">Fórmula 1</span> como nunca antes. 
            Velocidades extremas, tecnología de vanguardia y la competencia más feroz del automovilismo mundial.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              { icon: Zap, label: "Velocidad Máxima", value: "372 KM/H" },
              { icon: Clock, label: "0-100 KM/H", value: "2.6 SEG" },
              { icon: Trophy, label: "Carreras 2025", value: "24 GP" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 text-center hover:border-red-600/40 transition-colors duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 38, 38, 0.05)" }}
              >
                <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 cursor-pointer rounded-full font-bold text-lg flex items-center space-x-3 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('drivers')}
            >
              <span className="relative z-10">Explorar Pilotos</span>
              <Zap className="w-5 h-5 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 text-white border-2 border-white/20 px-8 py-4 rounded-full cursor-pointer font-medium hover:border-red-600 hover:text-red-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://youtube.com/playlist?list=PLfoNZDHitwjUleAqrgG-OC5gVAL2mv-Mh&si=NwDJfFx_mJONh2IA', '_blank')}
            >
              <Play className="w-5 h-5" />
              <span>Ver Highlights</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center space-y-2 text-gray-400 m-8"
          >
            <span className="text-sm font-medium tracking-wide">DESCUBRE MÁS</span>
            <motion.button
              onClick={() => scrollToSection('drivers')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Side Decorations */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        variants={fadeInLeft}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        <div className="w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-1/4 transform translate-x-1/2"
        variants={fadeInRight}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        <div className="w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};