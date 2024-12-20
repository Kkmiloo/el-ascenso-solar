import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  'Inicia tu aventura',
  'Desarrollo y estrategia',
  'El camino hacia el éxito',
  'Bienvenido al Juego',
];
interface IntroductionProps {
  onStart: () => void;
}

export const Introduction = ({ onStart }: IntroductionProps) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const totalDialogues = 4;

  const handleNextDialogue = () => {
    if (currentDialogueIndex < totalDialogues - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const dialogueVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className='relative flex flex-col items-center justify-between 
      w-full max-w-6xl m-auto p-10 gap-8 h-auto 
    bg-white
      rounded-2xl 
      border-4 border-slate-700 
      shadow-2xl 
      overflow-hidden'
    >
      {/* Efecto de líneas de fondo */}

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-5xl mb-4 font-bold'
      >
        {titles[currentDialogueIndex]}
      </motion.h1>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentDialogueIndex}
          variants={dialogueVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          className='text-justify'
        >
          {currentDialogueIndex === 0 && (
            <>
              <p className='text-xl mb-8 max-w-4xl mx-auto'>
                ¡Es hora de demostrar tu visión, ingenio y liderazgo! En este
                emocionante viaje, tomarás el rol de un emprendedor ambicioso
                que ha decidido transformar el mundo con soluciones innovadoras
                en energía solar.
              </p>
              <p className='text-xl mb-8 max-w-4xl mx-auto'>
                <strong>Tu misión: </strong>construir desde cero una empresa que
                desarrolle tecnologías solares, aportando al crecimiento
                sostenible y rentable.
              </p>
            </>
          )}

          {currentDialogueIndex === 1 && (
            <p className='text-xl mb-8 max-w-4xl mx-auto'>
              A lo largo del juego, te enfrentarás a decisiones clave que
              pondrán a prueba tu capacidad para tomar decisiones estratégicas,
              gestionar recursos y liderar equipos. Comenzarás solo,
              desarrollando prototipos de paneles solares desde tu hogar. Con
              cada elección, tu empresa crecerá, incorporando talento y
              expandiéndose a nuevos mercados.
            </p>
          )}

          {currentDialogueIndex === 2 && (
            <p className='text-xl mb-8 max-w-4xl mx-auto'>
              <strong>Tu objetivo es claro:</strong> convertirte en el CEO de
              una empresa líder en energía solar, transformando hogares,
              empresas, y ciudades con energía limpia. ¿Estás listo para
              iluminar el futuro con tu visión?
            </p>
          )}

          {currentDialogueIndex === 3 && (
            <p className='text-xl mb-8 font-bold max-w-4xl mx-auto'>
              ¡Adelante, emprendedor! El futuro de la energía está en tus manos.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      <div className='z-10'>
        {currentDialogueIndex < totalDialogues - 1 ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextDialogue}
            className='p-4 
            bg-gradient-to-r from-cyan-500 to-blue-600 
            text-white 
            rounded-lg 
            hover:from-cyan-600 hover:to-blue-700 
            transition-all 
            duration-300 
            shadow-lg 
            hover:shadow-xl'
          >
            Continuar
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='p-4 
            bg-gradient-to-r from-green-500 to-emerald-600 
            text-white 
            rounded-lg 
            hover:from-green-600 hover:to-emerald-700 
            transition-all 
            duration-300 
            shadow-lg 
            hover:shadow-xl'
            onClick={onStart}
          >
            ¡Comenzar Juego!
          </motion.button>
        )}
      </div>
    </div>
  );
};
