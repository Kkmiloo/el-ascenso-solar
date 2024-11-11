import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PlayIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

// Fondo animado de partículas o fibra óptica
const BackgroundParticles = () => (
  <div className='fixed inset-0 z-0 overflow-hidden'>
    <motion.div
      className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
from-gray-700 via-gray-900 to-black

'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    {/* Efecto de partículas o líneas de conexión */}
    <div className='absolute inset-0 opacity-20'>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute bg-white/10'
          style={{
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}
    </div>
  </div>
);

// Componente de Botón de Menú
const MenuButton = ({
  to,
  icon: Icon,
  children,
}: {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className='flex items-center space-x-3 
        bg-white/20 backdrop-blur-md 
        hover:bg-white/30 
        text-white 
        font-bold 
        py-3 px-6 
        rounded-xl 
        transition-all 
        duration-300 
        transform 
        hover:shadow-lg
        hover:!text-white
        '
    >
      <Icon className='w-6 h-6' />
      <span>{children}</span>
    </Link>
  </motion.div>
);

// Menú Principal
const Menu: React.FC = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Fondo animado */}
      <BackgroundParticles />

      {/* Contenedor del Menú */}
      <motion.div
        className='relative z-10 text-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Título del Juego */}
        <motion.h1
          className='text-6xl font-extrabold text-white mb-12 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-300 to-purple-500'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Energy Empire: El Ascenso Solar
        </motion.h1>

        {/* Contenedor de Botones */}
        <div className='space-y-6 max-w-md mx-auto'>
          <MenuButton to='/jugar' icon={PlayIcon}>
            Iniciar Juego
          </MenuButton>

          <MenuButton to='/settings' icon={CogIcon}>
            Configuraciones
          </MenuButton>


          <MenuButton to='/about' icon={InformationCircleIcon}>
            Acerca de
          </MenuButton>
        </div>

        {/* Versión del Juego */}
      </motion.div>
    </div>
  );
};

export default Menu;
