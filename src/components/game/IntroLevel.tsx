import { useState } from 'react';

interface IntroLevelProps {
  title: string;
  onClick: () => void;
}

export const IntroLevel = ({ title, onClick }: IntroLevelProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleOnClick = () => {
    setFadeOut(true);
    setTimeout(onClick, 1000); // Espera a que termine la animación antes de ejecutar onClick
  };

  return (
    <div
      className={`bg-gray-900 w-screen h-screen absolute z-50 flex items-center justify-center cursor-pointer ${
        fadeOut ? 'animate-fade-down' : ''
      }`}
      onClick={handleOnClick}
    >
      <div className='text-center animate-fade-in-left'>
        <p className='text-white font-bold text-3xl '>{title}</p>
        <div className='mt-8 animate-bounce'>
          <svg
            className='m-auto'
            xmlns='http://www.w3.org/2000/svg'
            width='42'
            height='42'
            viewBox='0 0 512 298.04'
            fill='white'
          >
            <path
              fillRule='nonzero'
              d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
