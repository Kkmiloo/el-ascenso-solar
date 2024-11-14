import { motion, AnimatePresence } from 'framer-motion';
import { BackwardIcon } from '@heroicons/react/24/solid';

interface GameOverProps {
  onRestart: () => void;
}

export const GameOver = ({ onRestart }: GameOverProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 flex items-center justify-center bg-red-100/80 backdrop-blur-sm overflow-y-auto p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Título */}
          <motion.h1
            className='text-3xl font-extrabold mb-6 text-red-800 text-center'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fin del Juego
          </motion.h1>

          {/* Botón de Reinicio */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              className='px-8 py-4 bg-red-500 text-white rounded-full text-xl font-bold hover:bg-red-600 transition-all shadow-lg flex items-center space-x-2'
              onClick={onRestart}
            >
              <BackwardIcon className='w-6 h-6' />
              <span>Intentar de Nuevo</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameOver;
