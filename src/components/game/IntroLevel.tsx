import { useState } from 'react';
import { motion } from 'framer-motion';

interface IntroLevelProps {
  title: string;
  onClick: () => void;
  image?: string; // URL de la imagen de fondo
}

export const IntroLevel = ({ title, onClick, image }: IntroLevelProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleOnClick = () => {
    setFadeOut(true);
    setTimeout(onClick, 1000); // Espera a que termine la animación antes de ejecutar onClick
  };

  return (
    <div
      className={`w-screen h-screen absolute z-50 flex items-center justify-center cursor-pointer ${
        fadeOut ? 'animate-fade-down' : ''
      }`}
      onClick={handleOnClick}
    >
      <div
        className='absolute w-full h-full '
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover', // Asegura que la imagen cubra todo el fondo
          backgroundPosition: 'center', // Centra la imagen
          filter: 'blur(9px)', // Aplica el desenfoque al fondo
        }}
      ></div>
      <div className='bg-black bg-opacity-70 p-6 rounded-lg text-center animate-fade-in-left'>
        <p className='text-white font-bold text-3xl'>{title}</p>
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              repeat: Infinity,
              duration: 1.5,
            },
          }}
          className='mr-6 transform flex items-center justify-center text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 512 298.04'
            fill='currentColor'
          >
            <path
              fillRule='nonzero'
              d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
