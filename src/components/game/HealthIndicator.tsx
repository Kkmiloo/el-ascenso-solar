import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store';

export const HealthIndicator = () => {
  const { lives } = useGameStore();
  const totalLives = 3;

  return (
    <motion.div
      className='bg-gray-800 flex items-center px-4 md:px-6 rounded-full space-x-2 py-1'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <AnimatePresence>
        {[...Array(totalLives)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: index % 2 === 0 ? -10 : 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              rotate: index % 2 === 0 ? 20 : -20,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 10,
            }}
            className='flex items-center'
          >
            {index < lives ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <HeartIcon className='w-6 h-6 text-red-500 drop-shadow-md' />
              </motion.div>
            ) : (
              <HeartIcon className='w-6 h-6 text-gray-600 opacity-50' />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <span className='text-white font-bold text-sm ml-2'>
        {lives}/{totalLives}
      </span>
    </motion.div>
  );
};
