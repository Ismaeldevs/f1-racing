import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Trophy, Calendar, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { teams } from '../../data/f1Data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const TeamCard = ({ team, index }) => {
  return (
    <motion.div
      variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
      className="group relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-500"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Team Color Header */}
      <div 
        className="relative h-24 flex items-center justify-center overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` 
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})`,
              `linear-gradient(135deg, ${team.secondaryColor}, ${team.primaryColor})`,
              `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-black text-white mb-1">{team.name}</h3>
          <p className="text-white/80 text-sm font-medium">{team.fullName}</p>
        </div>

        {/* Racing Stripes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-1 bg-white"
              style={{ left: `${25 + i * 25}%` }}
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        {/* Team Stats */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-3xl font-bold text-white">{team.championships}</span>
            </div>
            <span className="text-gray-400 text-sm">Campeonatos</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-3xl font-bold text-white">{team.firstEntry}</span>
            </div>
            <span className="text-gray-400 text-sm">Debut</span>
          </div>
        </div>

        {/* Team Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-white font-medium">{team.principal}</p>
              <p className="text-gray-400 text-sm">Director del Equipo</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-white font-medium">{team.headquarters}</p>
              <p className="text-gray-400 text-sm">Sede Principal</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-white font-medium">{team.chassis}</p>
              <p className="text-gray-400 text-sm">Chasis 2025</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Zap className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-white font-medium">{team.powerUnit}</p>
              <p className="text-gray-400 text-sm">Unidad de Potencia</p>
            </div>
          </div>
        </div>

        {/* Drivers */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Pilotos Actuales
          </h4>
          <div className="space-y-2">
            {team.drivers.map((driver, driverIndex) => (
              <div 
                key={driverIndex}
                className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3"
              >
                <span className="text-white font-medium">{driver}</span>
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: team.primaryColor }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 cursor-pointer"
          style={{ 
            background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` 
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 10px 30px ${team.primaryColor}40`
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(team.teamUrl, '_blank')}
        >
          Explorar Equipo
        </motion.button>
      </div>
    </motion.div>
  );
};

export const Teams = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="teams" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
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
            className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/30 rounded-full px-6 py-2 mb-6"
          >
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-400 font-medium">Equipos Oficiales</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              EQUIPOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              LEGENDARIOS
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cada equipo representa décadas de innovación, pasión y excelencia técnica. 
            Descubre las escuderías que han marcado la historia de la <span className="text-blue-400">Fórmula 1</span>.
          </motion.p>
        </motion.div>

        {/* Teams Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {teams.map((team, index) => (
            <TeamCard key={team.id} team={team} index={index} />
          ))}
        </motion.div>

        {/* Championship Banner */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="mt-16 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/30 rounded-2xl p-8 text-center"
        >
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Clasificación de los equipos de 2025</h3>
          <p className="text-gray-300 mb-4">
            La batalla por la supremacía técnica y el prestigio máximo en la Fórmula 1
          </p>
          <motion.button
            className="inline-flex cursor-pointer items-center space-x-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-full font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.formula1.com/en/results/2025/team", '_blank')}
          >
            <span>Ver Clasificación</span>
            <Trophy className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};