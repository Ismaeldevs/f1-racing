import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { drivers } from '../../data/f1Data';
import { fadeInUp, staggerContainer, hoverScale } from '../../utils/animations';

const DriverCard = ({ driver, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500"
      whileHover="hover"
    >
      {/* Card Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ backgroundColor: driver.teamColor }}
      />

      {/* Header with Team Color */}
      <div 
        className="h-2 w-full"
        style={{ backgroundColor: driver.teamColor }}
      />

      <div className="p-6">
        {/* Driver Avatar */}
        <div className="relative mb-6">
          <motion.div
            className="relative w-24 h-24 mx-auto mb-4"
            variants={hoverScale}
          >
            <img
              src={driver.avatar}
              alt={driver.name}
              className="w-full h-full object-cover rounded-full border-3 border-gray-700 group-hover:border-red-600 transition-colors duration-300"
            />
            <div 
              className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: driver.teamColor }}
            />
          </motion.div>

          {/* Championship Badge */}
          {driver.championships > 0 && (
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
            >
              {driver.championships}
            </motion.div>
          )}
        </div>

        {/* Driver Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{driver.name}</h3>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span 
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: `${driver.teamColor}20`,
                color: driver.teamColor,
                border: `1px solid ${driver.teamColor}40`
              }}
            >
              {driver.team}
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>#{driver.number}</span>
            <span>•</span>
            <span>{driver.country}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-2xl font-bold text-white">{driver.wins}</span>
            </div>
            <span className="text-xs text-gray-400">Victorias</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Target className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-2xl font-bold text-white">{driver.podiums}</span>
            </div>
            <span className="text-xs text-gray-400">Podios</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-2xl font-bold text-white">{driver.points}</span>
            </div>
            <span className="text-xs text-gray-400">Puntos 2024</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Star className="w-4 h-4 text-blue-500 mr-1" />
              <span className="text-2xl font-bold text-white">{driver.championships}</span>
            </div>
            <span className="text-xs text-gray-400">Títulos</span>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl cursor-pointer font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/25"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(driver.perfil, '_blank');
          }}
        >
          Ver Perfil Completo
        </motion.button>
      </div>
    </motion.div>
  );
};

export const Drivers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="drivers" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 rounded-full px-6 py-2 mb-6"
          >
            <Trophy className="w-5 h-5 text-red-600" />
            <span className="text-red-400 font-medium">Pilotos Estrella</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              LOS MEJORES
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              DEL MUNDO
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Conoce a los pilotos más talentosos y valientes del planeta. Cada uno de ellos representa 
            la excelencia, la velocidad y la determinación que define la <span className="text-red-400">Fórmula 1</span>.
          </motion.p>
        </motion.div>

        {/* Drivers Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {drivers.map((driver, index) => (
            <DriverCard key={driver.id} driver={driver} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center space-x-3 cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.formula1.com/en/drivers', '_blank')}
          >
            <span>Ver Todos los Pilotos</span>
            <TrendingUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};