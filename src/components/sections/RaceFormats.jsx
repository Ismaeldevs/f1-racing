import { motion } from 'framer-motion';
import { Calendar, Clock, Flag, Zap, Trophy, Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { raceFormats } from '../../data/guideData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const SessionCard = ({ session, index, isActive }) => {
  const getSessionIcon = (sessionName) => {
    if (sessionName.includes('Práctica')) return Play;
    if (sessionName.includes('Clasificación')) return Flag;
    if (sessionName.includes('Sprint')) return Zap;
    if (sessionName.includes('Carrera') || sessionName.includes('Gran Premio')) return Trophy;
    return Clock;
  };

  const SessionIcon = getSessionIcon(session.session);

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-black/80 to-gray-900/80 border rounded-2xl p-6 transition-all duration-500 ${
        isActive ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-800 hover:border-gray-600'
      }`}
      whileHover={{ scale: 1.02, y: -3 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Day Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          session.day === 'Viernes' ? 'bg-green-600/20 text-green-400 border border-green-600/30' :
          session.day === 'Sábado' ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30' :
          'bg-red-600/20 text-red-400 border border-red-600/30'
        }`}>
          {session.day}
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4" />
          <span>{session.duration}</span>
        </div>
      </div>

      {/* Session Info */}
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-xl ${
          isActive ? 'bg-blue-600' : 'bg-gray-800'
        }`}>
          <SessionIcon className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-white font-bold text-lg mb-1">{session.session}</h4>
          <p className="text-gray-400 text-sm mb-2">{session.purpose}</p>
          <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
            isActive ? 'bg-blue-600/20 text-blue-400' : 'bg-gray-800 text-gray-400'
          }`}>
            {session.time}
          </div>
        </div>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

const FormatComparison = ({ format, isLeft = false }) => {
  return (
    <motion.div
      variants={isLeft ? fadeInLeft : fadeInRight}
      className="relative"
    >
      {/* Header */}
      <div className={`text-center mb-8 p-6 rounded-2xl ${
        format.title === 'Formato Normal' 
          ? 'bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30'
          : 'bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-600/30'
      }`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
          format.title === 'Formato Normal' ? 'bg-blue-600' : 'bg-purple-600'
        }`}>
          {format.title === 'Formato Normal' ? (
            <Calendar className="w-8 h-8 text-white" />
          ) : (
            <Zap className="w-8 h-8 text-white" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{format.title}</h3>
        <p className="text-gray-300 text-sm">{format.description}</p>
        
        <div className={`inline-flex items-center mt-3 px-3 py-1 rounded-full text-sm font-medium ${
          format.title === 'Formato Normal' 
            ? 'bg-blue-600/20 text-blue-400'
            : 'bg-purple-600/20 text-purple-400'
        }`}>
          <Clock className="w-4 h-4 mr-1" />
          {format.duration}
        </div>
      </div>

      {/* Sessions Timeline */}
      <div className="space-y-4">
        {format.sessions.map((session, index) => (
          <SessionCard 
            key={index} 
            session={session} 
            index={index}
            isActive={session.session.includes('Carrera') || session.session.includes('Gran Premio')}
          />
        ))}
      </div>

      {/* Key Differences */}
      <motion.div
        className={`mt-6 p-4 rounded-xl border ${
          format.title === 'Formato Normal'
            ? 'bg-blue-600/10 border-blue-600/30'
            : 'bg-purple-600/10 border-purple-600/30'
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <h4 className={`font-semibold mb-2 ${
          format.title === 'Formato Normal' ? 'text-blue-400' : 'text-purple-400'
        }`}>
          Características Clave:
        </h4>
        <ul className="text-gray-300 text-sm space-y-1">
          {format.title === 'Formato Normal' ? (
            <>
              <li>• Tres sesiones de práctica libre</li>
              <li>• Clasificación tradicional Q1-Q2-Q3</li>
              <li>• Una carrera principal el domingo</li>
              <li>• Más tiempo para configurar el coche</li>
            </>
          ) : (
            <>
              <li>• Solo una sesión de práctica</li>
              <li>• Carrera corta el sábado (Sprint)</li>
              <li>• Dos clasificaciones independientes</li>
              <li>• Fin de semana más intenso</li>
            </>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export const RaceFormats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="formats" className="scroll-mt-20" ref={ref}>
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
            Formatos de
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 bg-clip-text text-transparent ml-2 sm:ml-3">
            Carrera
          </span>
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4"
        >
          La F1 utiliza dos formatos diferentes para los fines de semana de carrera. 
          Cada uno ofrece una <span className="text-blue-400 font-medium">experiencia única</span> y diferentes 
          <span className="text-white font-medium"> oportunidades estratégicas</span>.
        </motion.p>
      </motion.div>

      {/* Format Comparison */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-16 px-4"
      >
        <FormatComparison format={raceFormats.normal} isLeft={true} />
        <FormatComparison format={raceFormats.sprint} isLeft={false} />
      </motion.div>

      {/* When Each Format is Used */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-8"
      >
        <h4 className="text-2xl font-bold text-white mb-6 text-center">
          ¿Cuándo se usa cada formato?
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-blue-400 font-bold text-lg mb-2">Formato Normal</h5>
            <p className="text-gray-300 text-sm mb-4">Usado en la mayoría de los Grandes Premios</p>
            <div className="bg-blue-600/20 border border-blue-600/30 rounded-xl p-4">
              <p className="text-blue-300 text-sm">
                <strong>• 21 carreras</strong> por temporada utilizan este formato tradicional 
                que permite más tiempo de preparación y estrategia.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-purple-400 font-bold text-lg mb-2">Formato Sprint</h5>
            <p className="text-gray-300 text-sm mb-4">Usado en eventos especiales</p>
            <div className="bg-purple-600/20 border border-purple-600/30 rounded-xl p-4">
              <p className="text-purple-300 text-sm">
                <strong>• 6 carreras</strong> por temporada ofrecen este formato más intenso 
                con acción desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Strategy Impact */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mt-12 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-3xl p-8"
      >
        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-orange-400" />
          Impacto Estratégico
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">Preparación:</h5>
            <ul className="space-y-1 text-sm">
              <li><strong>Normal:</strong> 3 sesiones para ajustar</li>
              <li><strong>Sprint:</strong> Solo 1 sesión libre</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">Puntos:</h5>
            <ul className="space-y-1 text-sm">
              <li><strong>Normal:</strong> Solo domingo</li>
              <li><strong>Sprint:</strong> Sábado + domingo</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">Riesgo:</h5>
            <ul className="space-y-1 text-sm">
              <li><strong>Normal:</strong> Una oportunidad</li>
              <li><strong>Sprint:</strong> Dos oportunidades</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};