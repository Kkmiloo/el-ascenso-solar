import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export const GameLayout = () => {
  return (
    <div
      className='relative min-w-full min-h-screen 
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
      from-gray-900 via-black to-gray-800
      flex flex-col 
      figtree 
      overflow-hidden'
    >
      {/* Efecto de fondo con líneas sutiles */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        {/* <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'></div> */}
        {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent'></div> */}
      </div>

      {/* Efecto de partículas/puntos de fondo */}
      <div className='absolute inset-0 z-0 opacity-20'>
        {/* <div
          className='absolute inset-0 
          bg-[radial-gradient(#ffffff_1px,_transparent_1px)] 
          [background-size:16px_16px]'
        ></div> */}
      </div>

      {/* Contenido principal con efecto de desvanecimiento */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='relative z-10 flex-grow'
      >
        <Outlet />
      </motion.main>

      {/* Footer opcional con efecto de desvanecimiento */}
      <footer
        className='relative z-10 p-4 text-center text-gray-400 
        bg-black/30 backdrop-blur-sm'
      >
        <p className='text-sm'>
          © {new Date().getFullYear()} Solar Startup Simulator
        </p>
      </footer>
    </div>
  );
};
