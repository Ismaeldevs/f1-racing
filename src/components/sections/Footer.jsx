import { motion } from 'framer-motion';
import { 
  Zap, 
  Youtube, 
  Twitter, 
  Instagram, 
  Facebook,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

export const Footer = () => {
  const scrollToSection = useScrollTo();

  const navigationLinks = [
    { label: 'Inicio', id: 'home' },
    { label: 'Pilotos', id: 'drivers' },
    { label: 'Equipos', id: 'teams' },
    { label: 'Calendario', id: 'calendar' },
    { label: 'Estadísticas', id: 'stats' }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube', color: 'text-red-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'text-blue-600' }
  ];

  const quickInfo = [
    { icon: Mail, text: 'info@f1racing.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'Monaco, Monte Carlo' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"
            style={{
              top: `${10 + i * 15}%`,
              width: '200%',
              left: '-50%'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInLeft} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="w-10 h-10 text-red-600" />
                <motion.div
                  className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
                F1 RACING
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu destino definitivo para toda la emoción, datos y noticias de la Fórmula 1. 
              Vive la velocidad como nunca antes.
            </p>


          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Navegación</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block cursor-pointer text-gray-400 hover:text-red-400 transition-colors duration-200 hover:pl-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>



          {/* Latest Updates */}
          <motion.div variants={fadeInRight} className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Últimas Noticias</h4>
            <div className="space-y-4">
              {[
                {
                  title: "Nueva regulación técnica 2025",
                  date: "Hace 2 horas",
                  link: "#"
                },
                {
                  title: "Verstappen renueva contrato",
                  date: "Hace 1 día",
                  link: "#"
                },
                {
                  title: "Calendario provisional 2026",
                  date: "Hace 3 días",
                  link: "#"
                }
              ].map((news, index) => (
                <motion.a
                  key={index}
                  href={news.link}
                  className="block group hover:bg-gray-800/50 rounded-lg p-3 transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <h6 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors duration-200 flex items-center">
                    {news.title}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h6>
                  <p className="text-gray-500 text-sm">{news.date}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 F1 Racing. Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-600 fill-current" />
              </motion.div>
              <span>para 𝑀.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a 
                href="/404" 
                className="hover:text-white transition-colors duration-200 cursor-not-allowed"
                whileHover={{ y: -1 }}
              >
                Términos de Servicio
              </motion.a>
              <motion.a 
                href="/404" 
                className="hover:text-white transition-colors duration-200 cursor-not-allowed"
                whileHover={{ y: -1 }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a 
                href="/404" 
                className="hover:text-white transition-colors duration-200 cursor-not-allowed"
                whileHover={{ y: -1 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>


    </footer>
  );
};