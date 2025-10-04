import { motion } from 'framer-motion';
import { Trophy, Zap, Star, Award, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { pointingSystems } from '../../data/guideData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const PointsTable = ({ system, isLeft = false }) => {
  return (
    <motion.div
      variants={isLeft ? fadeInLeft : fadeInRight}
      className="relative"
    >
      {/* Header */}
      <div className={`text-center mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl ${
        system.title === 'Puntuación Normal' 
          ? 'bg-gradient-to-r from-green-600/20 to-emerald-800/20 border border-green-600/30'
          : 'bg-gradient-to-r from-orange-600/20 to-red-800/20 border border-orange-600/30'
      }`}>
        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
          system.title === 'Puntuación Normal' ? 'bg-green-600' : 'bg-orange-600'
        }`}>
          {system.title === 'Puntuación Normal' ? (
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          ) : (
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          )}
        </div>
        
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{system.title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">{system.description}</p>
      </div>

      {/* Points Table */}
      <div className="bg-black/60 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden">
        <div className={`px-3 sm:px-6 py-3 sm:py-4 ${
          system.title === 'Puntuación Normal' 
            ? 'bg-green-600/20 border-b border-green-600/30'
            : 'bg-orange-600/20 border-b border-orange-600/30'
        }`}>
          <h4 className="text-white font-bold text-sm sm:text-lg">Puntos por Posición</h4>
        </div>
        
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {system.positions.map((pos, index) => (
              <motion.div
                key={pos.position}
                className={`flex items-center justify-between p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                  pos.position <= 3 
                    ? 'bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border-yellow-600/30' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                    pos.position === 1 ? 'bg-yellow-500 text-black' :
                    pos.position === 2 ? 'bg-gray-400 text-black' :
                    pos.position === 3 ? 'bg-orange-500 text-black' :
                    'bg-gray-700 text-white'
                  }`}>
                    {pos.position}
                  </div>
                  <span className={`font-medium text-xs sm:text-sm ${pos.color}`}>{pos.label}</span>
                </div>
                
                <div className={`text-lg sm:text-xl font-bold ${
                  system.title === 'Puntuación Normal' ? 'text-green-400' : 'text-orange-400'
                }`}>
                  {pos.points}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bonus Points */}
      <motion.div
        className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
          system.title === 'Puntuación Normal'
            ? 'bg-green-600/10 border-green-600/30'
            : 'bg-orange-600/10 border-orange-600/30'
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <h5 className={`font-semibold mb-2 flex items-center text-sm sm:text-base ${
          system.title === 'Puntuación Normal' ? 'text-green-400' : 'text-orange-400'
        }`}>
          <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Punto Bonus:
        </h5>
        <div className="text-gray-300 text-xs sm:text-sm">
          <p className="mb-1">
            <strong>Vuelta más rápida:</strong> +{system.bonus.fastestLap.points} punto
          </p>
          <p className="text-xs text-gray-400">
            {system.bonus.fastestLap.condition}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ChampionshipCalculator = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
    >
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center">
        <Award className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-purple-400" />
        Campeonato Mundial
      </h4>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Drivers Championship */}
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h5 className="text-yellow-400 font-bold text-lg sm:text-xl mb-2 sm:mb-3">Campeonato de Pilotos</h5>
          <div className="bg-black/40 rounded-xl p-3 sm:p-4 text-left">
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li>• Suma de puntos individuales por piloto</li>
              <li>• Incluye puntos de carrera + sprint + vuelta rápida</li>
              <li>• Se corona al piloto con más puntos</li>
              <li>• En caso de empate: más victorias gana</li>
            </ul>
          </div>
        </div>

        {/* Constructors Championship */}
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h5 className="text-blue-400 font-bold text-lg sm:text-xl mb-2 sm:mb-3">Campeonato de Clasificación</h5>
          <div className="bg-black/40 rounded-xl p-3 sm:p-4 text-left">
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li>• Suma de puntos de ambos pilotos del equipo</li>
              <li>• Determina el equipo más exitoso</li>
              <li>• Importante para distribución de dinero de premios</li>
              <li>• Prestigio y reconocimiento técnico</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PointsExample = () => {
  const exampleRace = [
    { position: 1, driver: "Verstappen", team: "Red Bull", normalPoints: 25, sprintPoints: 8 },
    { position: 2, driver: "Hamilton", team: "Mercedes", normalPoints: 18, sprintPoints: 7 },
    { position: 3, driver: "Leclerc", team: "Ferrari", normalPoints: 15, sprintPoints: 6 },
    { position: 4, driver: "Norris", team: "McLaren", normalPoints: 12, sprintPoints: 5 }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
    >
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
        Ejemplo Práctico de Puntuación
      </h4>
      
      {/* Mobile: Card Layout */}
      <div className="block sm:hidden space-y-3">
        {exampleRace.map((result, index) => (
          <motion.div
            key={result.position}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  result.position === 1 ? 'bg-yellow-500 text-black' :
                  result.position === 2 ? 'bg-gray-400 text-black' :
                  result.position === 3 ? 'bg-orange-500 text-black' :
                  'bg-gray-700 text-white'
                }`}>
                  {result.position}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{result.driver}</div>
                  <div className="text-gray-400 text-xs">{result.team}</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-gray-400 text-xs mb-1">Carrera Normal</div>
                <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                  {result.normalPoints} pts
                </span>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs mb-1">Sprint</div>
                <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full text-xs font-bold">
                  {result.sprintPoints} pts
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="pb-3 text-gray-300 font-medium text-sm lg:text-base">Posición</th>
              <th className="pb-3 text-gray-300 font-medium text-sm lg:text-base">Piloto</th>
              <th className="pb-3 text-gray-300 font-medium text-sm lg:text-base">Equipo</th>
              <th className="pb-3 text-gray-300 font-medium text-center text-sm lg:text-base">Carrera Normal</th>
              <th className="pb-3 text-gray-300 font-medium text-center text-sm lg:text-base">Sprint</th>
            </tr>
          </thead>
          <tbody>
            {exampleRace.map((result, index) => (
              <motion.tr
                key={result.position}
                className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-3 sm:py-4">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                    result.position === 1 ? 'bg-yellow-500 text-black' :
                    result.position === 2 ? 'bg-gray-400 text-black' :
                    result.position === 3 ? 'bg-orange-500 text-black' :
                    'bg-gray-700 text-white'
                  }`}>
                    {result.position}
                  </div>
                </td>
                <td className="py-3 sm:py-4 text-white font-medium text-sm lg:text-base">{result.driver}</td>
                <td className="py-3 sm:py-4 text-gray-400 text-sm lg:text-base">{result.team}</td>
                <td className="py-3 sm:py-4 text-center">
                  <span className="bg-green-600/20 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    {result.normalPoints} pts
                  </span>
                </td>
                <td className="py-3 sm:py-4 text-center">
                  <span className="bg-orange-600/20 text-orange-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    {result.sprintPoints} pts
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-600/10 border border-blue-600/30 rounded-xl">
        <p className="text-blue-300 text-xs sm:text-sm">
          <strong>Nota:</strong> En un fin de semana sprint, un piloto puede ganar hasta 34 puntos 
          (8 del sprint + 25 de la carrera + 1 de vuelta rápida), mientras que en un fin de semana normal 
          el máximo es 26 puntos (25 + 1 de vuelta rápida).
        </p>
      </div>
    </motion.div>
  );
};

export const PointingSystem = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="points" className="scroll-mt-20" ref={ref}>
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
            Sistema de
          </span>
          <span className="bg-gradient-to-r from-green-500 via-green-600 to-orange-500 bg-clip-text text-transparent ml-2 sm:ml-3">
            Puntuación
          </span>
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4"
        >
          Los puntos determinan los <span className="text-green-400 font-medium">campeones del mundo</span>. Comprende cómo se distribuyen 
          en cada formato y su impacto en el <span className="text-white font-medium">campeonato</span>.
        </motion.p>
      </motion.div>

      {/* Points Tables */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 px-2 sm:px-4 xl:px-0"
      >
        <PointsTable system={pointingSystems.normal} isLeft={true} />
        <PointsTable system={pointingSystems.sprint} isLeft={false} />
      </motion.div>

      {/* Championship Explanation */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16 px-2 sm:px-4 xl:px-0"
      >
        <ChampionshipCalculator />
      </motion.div>

      {/* Practical Example */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-12 sm:mb-16 px-2 sm:px-4 xl:px-0"
      >
        <PointsExample />
      </motion.div>

      {/* Key Facts */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 xl:mx-0"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-indigo-400" />
          Datos Importantes
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-300">
          <div>
            <h5 className="font-semibold text-indigo-400 mb-2 text-sm sm:text-base">Máximo por carrera:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Normal: 26 puntos (25+1)</li>
              <li>• Sprint: 34 puntos (8+25+1)</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-indigo-400 mb-2 text-sm sm:text-base">Vuelta rápida:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• Solo si terminas top 10</li>
              <li>• No aplica en sprint</li>
              <li>• 1 punto adicional</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-indigo-400 mb-2 text-sm sm:text-base">Temporada:</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>• 24 carreras por año</li>
              <li>• 6 son formato sprint</li>
              <li>• Máximo teórico: 650 puntos</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};