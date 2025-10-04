import { Calendar as CalendarIcon } from 'lucide-react';

const SimpleRaceCard = ({ race }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 m-2">
      <div className="text-white text-lg font-bold mb-2">{race.name}</div>
      <div className="text-gray-300 text-sm">{race.location}</div>
      <div className="text-gray-400 text-xs mt-2">{race.date}</div>
    </div>
  );
};

export const CalendarTest = () => {
  const testRaces = [
    { id: 1, name: "Gran Premio de Bahréin", location: "Sakhir", date: "2025-03-16" },
    { id: 2, name: "Gran Premio de Arabia Saudí", location: "Jeddah", date: "2025-03-23" },
    { id: 3, name: "Gran Premio de Australia", location: "Melbourne", date: "2025-04-06" }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-600/10 border border-purple-600/30 rounded-full px-6 py-2 mb-6">
            <CalendarIcon className="w-5 h-5 text-purple-600" />
            <span className="text-purple-400 font-medium">Test Calendar</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            CALENDARIO F1
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Version de prueba simple para verificar que funcione en móviles
          </p>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testRaces.map((race) => (
            <SimpleRaceCard key={race.id} race={race} />
          ))}
        </div>

        {/* Debug Info */}
        <div className="mt-8 text-center">
          <div className="bg-green-900/50 border border-green-600 rounded-lg p-4 max-w-md mx-auto">
            <div className="text-green-400 font-bold">DEBUG INFO</div>
            <div className="text-green-300 text-sm mt-2">
              Screen: <span className="block sm:hidden">MOBILE</span>
              <span className="hidden sm:block md:hidden">TABLET</span>
              <span className="hidden md:block">DESKTOP</span>
            </div>
            <div className="text-green-300 text-sm">
              Races rendered: {testRaces.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};