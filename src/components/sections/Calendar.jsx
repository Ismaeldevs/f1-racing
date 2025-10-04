import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, Flag, Timer, Navigation } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { races } from '../../data/f1Data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const RaceCard = ({ race, index, isNext = false }) => {
  // Parse date correctly to avoid timezone issues
  const [year, month, day] = race.date.split('-').map(Number);
  const raceDate = new Date(year, month - 1, day); // month is 0-indexed
  const currentDate = new Date();
  
  // Normalize both dates to midnight in local timezone
  const raceDateMidnight = new Date(raceDate.getFullYear(), raceDate.getMonth(), raceDate.getDate());
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const isPast = raceDateMidnight < currentDateMidnight;
  const daysUntil = Math.ceil((raceDateMidnight - currentDateMidnight) / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
      className={`relative group bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-500 ${
        isNext 
          ? 'border-red-600 shadow-lg shadow-red-600/25' 
          : isPast 
            ? 'border-gray-700 opacity-75' 
            : 'border-gray-800 hover:border-gray-600'
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Next Race Indicator */}
      {isNext && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            PRÓXIMA
          </div>
        </div>
      )}

      {/* Country Flag Header */}
      <div className={`relative h-20 flex items-center justify-center text-6xl ${
        isPast ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <span className="relative z-10">{race.country}</span>
        
        {/* Animated Racing Lines */}
        {!isPast && (
          <div className="absolute inset-0 opacity-20">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-white w-full"
                style={{ top: `${30 + i * 20}%` }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 2 + i * 0.5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 0.3 
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Race Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2">{race.name}</h3>
          <div className="flex items-center space-x-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{race.location}</span>
          </div>
        </div>

        {/* Date & Countdown */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <CalendarIcon className="w-4 h-4 text-blue-500" />
            <span className="text-white font-medium">
              {raceDate.toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          
          {!isPast && daysUntil > 0 && (
            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-red-400 text-sm font-medium">Faltan</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{daysUntil}</div>
                  <div className="text-red-400 text-sm">días</div>
                </div>
              </div>
            </div>
          )}

          {isPast && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-center space-x-2">
                <Flag className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500 text-sm font-medium">Carrera Finalizada</span>
              </div>
            </div>
          )}
        </div>

        {/* Circuit Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Circuito</span>
            </div>
            <span className="text-white text-sm font-medium">{race.circuit}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Timer className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Vueltas</span>
            </div>
            <span className="text-white text-sm font-medium">{race.laps}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flag className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Distancia</span>
            </div>
            <span className="text-white text-sm font-medium">{race.distance}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Récord</span>
            </div>
            <span className="text-yellow-500 text-sm font-bold">{race.lapRecord}</span>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className={`w-full py-3 cursor-pointer rounded-xl font-bold text-white transition-all duration-300 ${
            isPast 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : isNext 
                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800' 
                : 'bg-gray-800 hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            if (isPast) {
              window.open(race.resultados, '_blank');
            } else if (isNext) {
              window.open(race.info, '_blank');
            } else {
              window.open(race.info, '_blank');
            }
          }}
        >
          {isPast ? 'Ver Resultados' : (isNext ? 'Información de Carrera' : 'Información de Carrera')}
        </motion.button>
      </div>
    </motion.div>
  );
};

export const RaceCalendar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Find next race using consistent date parsing
  const currentDate = new Date();
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const nextRaceIndex = races.findIndex(race => {
    const [year, month, day] = race.date.split('-').map(Number);
    const raceDate = new Date(year, month - 1, day);
    return raceDate >= currentDateMidnight;
  });

  return (
    <section id="calendar" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: (i % 12) * 0.1 
              }}
            />
          ))}
        </div>
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
            className="inline-flex items-center space-x-2 bg-purple-600/10 border border-purple-600/30 rounded-full px-6 py-2 mb-6"
          >
            <CalendarIcon className="w-5 h-5 text-purple-600" />
            <span className="text-purple-400 font-medium">Temporada 2025</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CALENDARIO
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              ÉPICO
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            24 carreras alrededor del mundo. Circuitos legendarios, nuevos desafíos y la emoción de la 
            <span className="text-purple-400"> Fórmula 1</span> en su máxima expresión.
          </motion.p>
        </motion.div>

        {/* Next Race Highlight */}
        {nextRaceIndex !== -1 && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Próxima Carrera</h3>
              <p className="text-gray-400">No te pierdas la acción en vivo</p>
            </div>
            <div className="max-w-md mx-auto">
              <RaceCard 
                race={races[nextRaceIndex]} 
                index={0} 
                isNext={true} 
              />
            </div>
          </motion.div>
        )}

        {/* All Races Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Todas las Carreras</h3>
            <p className="text-gray-400">Calendario completo de la temporada 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {races.map((race, index) => (
              <RaceCard 
                key={race.id} 
                race={race} 
                index={index}
                isNext={index === nextRaceIndex}
              />
            ))}
          </div>
        </motion.div>

        {/* Season Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Total de Carreras", value: "24", icon: Flag },
            { label: "Países Visitados", value: "21", icon: MapPin },
            { label: "Kilómetros Totales", value: "7,800", icon: Navigation }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-800 rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05, borderColor: "#6366f1" }}
            >
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};