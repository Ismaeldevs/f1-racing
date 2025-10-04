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
    <div
      className={`relative group bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border rounded-2xl sm:rounded-3xl transition-all duration-500 ${
        isNext 
          ? 'border-red-600 shadow-lg shadow-red-600/25' 
          : isPast 
            ? 'border-gray-700 opacity-75' 
            : 'border-gray-800 hover:border-gray-600'
      }`}
    >
      {/* Next Race Indicator */}
      {isNext && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <div className="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold animate-pulse">
            PRÓXIMA
          </div>
        </div>
      )}

      {/* Country Flag Header */}
      <div className={`relative h-16 sm:h-20 flex items-center justify-center text-4xl sm:text-6xl ${
        isPast ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <span className="relative z-10">{race.country}</span>
        
        {/* Animated Racing Lines - Simplified for mobile */}
        {!isPast && (
          <div className="hidden sm:block absolute inset-0 opacity-20">
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

      <div className="p-3 sm:p-6">
        {/* Race Title */}
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">{race.name}</h3>
          <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{race.location}</span>
          </div>
        </div>

        {/* Date & Countdown */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-start space-x-1 sm:space-x-2 mb-2">
            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span className="text-white font-medium text-xs sm:text-sm leading-tight">
              {raceDate.toLocaleDateString('es-ES', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </div>
          
          {!isPast && daysUntil > 0 && (
            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2 sm:p-3">
              <div className="flex items-center justify-between">
                <span className="text-red-400 text-xs sm:text-sm font-medium">Faltan</span>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white">{daysUntil}</div>
                  <div className="text-red-400 text-xs sm:text-sm">días</div>
                </div>
              </div>
            </div>
          )}

          {isPast && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-2 sm:p-3">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <Flag className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                <span className="text-gray-500 text-xs sm:text-sm font-medium">Finalizada</span>
              </div>
            </div>
          )}
        </div>

        {/* Circuit Info - Compacted for mobile */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Navigation className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm">Circuito</span>
            </div>
            <span className="text-white text-xs sm:text-sm font-medium truncate">{race.circuit}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm">Vueltas</span>
            </div>
            <span className="text-white text-xs sm:text-sm font-medium">{race.laps}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Flag className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm">Distancia</span>
            </div>
            <span className="text-white text-xs sm:text-sm font-medium">{race.distance}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm">Récord</span>
            </div>
            <span className="text-yellow-500 text-xs sm:text-sm font-bold">{race.lapRecord}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-2 sm:py-3 cursor-pointer rounded-lg sm:rounded-xl font-bold text-white transition-all duration-300 text-sm sm:text-base ${
            isPast 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : isNext 
                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800' 
                : 'bg-gray-800 hover:bg-gray-700'
          }`}
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
          {isPast ? 'Ver Resultados' : (isNext ? 'Info Carrera' : 'Info Carrera')}
        </button>
      </div>
    </div>
  );
};

export const RaceCalendar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Debug logging for mobile
  console.log('RaceCalendar rendering, inView:', inView);
  console.log('Races data:', races?.length);

  // Find next race using consistent date parsing
  const currentDate = new Date();
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const nextRaceIndex = races.findIndex(race => {
    const [year, month, day] = race.date.split('-').map(Number);
    const raceDate = new Date(year, month - 1, day);
    return raceDate >= currentDateMidnight;
  });

  return (
    <section id="calendar" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Simplified Decorative Grid for mobile performance */}
      <div className="hidden sm:block absolute inset-0 opacity-5">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/10 border border-purple-600/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <span className="text-purple-400 font-medium text-sm sm:text-base">Temporada 2025</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CALENDARIO
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              ÉPICO
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            24 carreras alrededor del mundo. Circuitos legendarios, nuevos desafíos y la emoción de la 
            <span className="text-purple-400"> Fórmula 1</span> en su máxima expresión.
          </p>
        </div>

        {/* Next Race Highlight */}
        {nextRaceIndex !== -1 && (
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Próxima Carrera</h3>
              <p className="text-sm sm:text-base text-gray-400">No te pierdas la acción en vivo</p>
            </div>
            <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
              <RaceCard 
                race={races[nextRaceIndex]} 
                index={0} 
                isNext={true} 
              />
            </div>
          </div>
        )}

        {/* All Races Grid */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Todas las Carreras</h3>
            <p className="text-sm sm:text-base text-gray-400">Calendario completo de la temporada 2025</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {races.map((race, index) => {
              console.log('Rendering race card:', race.name, 'for mobile'); // Debug
              return (
                <RaceCard 
                  key={race.id} 
                  race={race} 
                  index={index}
                  isNext={index === nextRaceIndex}
                />
              );
            })}
          </div>
        </div>

        {/* Season Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            { label: "Total de Carreras", value: "24", icon: Flag },
            { label: "Países Visitados", value: "21", icon: MapPin },
            { label: "Kilómetros Totales", value: "7,800", icon: Navigation }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-purple-600 transition-colors duration-300"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};