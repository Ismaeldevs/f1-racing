import { Calendar as CalendarIcon, MapPin, Clock, Flag, Timer, Navigation } from 'lucide-react';
import { races } from '../../data/f1Data';

// Componente simple sin animaciones para móviles
const SimplifiedRaceCard = ({ race, isNext = false }) => {
  // Parse date correctly to avoid timezone issues
  const [year, month, day] = race.date.split('-').map(Number);
  const raceDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  
  const raceDateMidnight = new Date(raceDate.getFullYear(), raceDate.getMonth(), raceDate.getDate());
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const isPast = raceDateMidnight < currentDateMidnight;
  const daysUntil = Math.ceil((raceDateMidnight - currentDateMidnight) / (1000 * 60 * 60 * 24));

  return (
    <div className={`bg-gray-900 border rounded-lg p-4 mb-4 ${
      isNext 
        ? 'border-red-500 bg-red-900/20' 
        : isPast 
          ? 'border-gray-600 opacity-70' 
          : 'border-gray-700'
    }`}>
      {/* Header con bandera y título */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{race.country}</span>
          <div>
            <h3 className="text-white font-bold text-sm">{race.name}</h3>
            <p className="text-gray-400 text-xs flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {race.location}
            </p>
          </div>
        </div>
        {isNext && (
          <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            PRÓXIMA
          </div>
        )}
      </div>

      {/* Fecha */}
      <div className="mb-3">
        <div className="flex items-center space-x-2 mb-2">
          <CalendarIcon className="w-4 h-4 text-blue-500" />
          <span className="text-white text-sm">
            {raceDate.toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric',
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        {!isPast && daysUntil > 0 && (
          <div className="bg-red-600/20 border border-red-600/50 rounded p-2">
            <div className="text-center">
              <div className="text-lg font-bold text-white">{daysUntil}</div>
              <div className="text-red-400 text-xs">días restantes</div>
            </div>
          </div>
        )}

        {isPast && (
          <div className="bg-gray-700/50 border border-gray-600 rounded p-2">
            <div className="text-center text-gray-400 text-sm">
              <Flag className="w-4 h-4 mx-auto mb-1" />
              Carrera finalizada
            </div>
          </div>
        )}
      </div>

      {/* Información del circuito */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Circuito:</span>
          <span className="text-white">{race.circuit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Vueltas:</span>
          <span className="text-white">{race.laps}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Distancia:</span>
          <span className="text-white">{race.distance}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Récord:</span>
          <span className="text-yellow-500 font-bold">{race.lapRecord}</span>
        </div>
      </div>

      {/* Botón de acción */}
      <button
        className={`w-full py-2 rounded font-bold text-white text-sm transition-colors ${
          isPast 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : isNext 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-gray-800 hover:bg-gray-700'
        }`}
        onClick={() => {
          if (isPast) {
            window.open(race.resultados, '_blank');
          } else {
            window.open(race.info, '_blank');
          }
        }}
      >
        {isPast ? 'Ver Resultados' : 'Información de la Carrera'}
      </button>
    </div>
  );
};

export const CalendarMobile = () => {
  // Find next race
  const currentDate = new Date();
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const nextRaceIndex = races.findIndex(race => {
    const [year, month, day] = race.date.split('-').map(Number);
    const raceDate = new Date(year, month - 1, day);
    return raceDate >= currentDateMidnight;
  });

  console.log('CalendarMobile rendering, races count:', races.length);
  console.log('Next race index:', nextRaceIndex);

  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header simple */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 border border-purple-600/50 rounded-full px-4 py-2 mb-4">
            <CalendarIcon className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Temporada 2025</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-white">CALENDARIO </span>
            <span className="text-purple-400">F1</span>
          </h2>
          
          <p className="text-gray-300 text-sm">
            24 carreras alrededor del mundo
          </p>
        </div>

        {/* Próxima carrera destacada */}
        {nextRaceIndex !== -1 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-center mb-4 text-white">🏁 Próxima Carrera</h3>
            <SimplifiedRaceCard 
              race={races[nextRaceIndex]} 
              isNext={true} 
            />
          </div>
        )}

        {/* Todas las carreras */}
        <div>
          <h3 className="text-lg font-bold text-center mb-6 text-white">📅 Todas las Carreras</h3>
          
          {/* Grid para móviles: una sola columna */}
          <div className="space-y-4">
            {races.map((race, index) => {
              console.log('Rendering race:', race.name);
              return (
                <SimplifiedRaceCard 
                  key={race.id} 
                  race={race}
                  isNext={index === nextRaceIndex}
                />
              );
            })}
          </div>
        </div>

        {/* Estadísticas simples */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
            <div className="text-lg font-bold text-white">24</div>
            <div className="text-gray-400 text-xs">Carreras</div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
            <div className="text-lg font-bold text-white">21</div>
            <div className="text-gray-400 text-xs">Países</div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
            <div className="text-lg font-bold text-white">7,800</div>
            <div className="text-gray-400 text-xs">KM Total</div>
          </div>
        </div>

        {/* Debug info para verificar funcionamiento */}
        <div className="mt-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
          <div className="text-green-400 text-sm font-bold text-center">✅ CALENDARIO MÓVIL ACTIVO</div>
          <div className="text-green-300 text-xs text-center mt-1">
            Races loaded: {races.length} | Screen: Mobile
          </div>
        </div>
      </div>
    </section>
  );
};