import { useState, useRef, useEffect } from 'react';
//import man from '../../assets/man.webp';
import robot from '../../assets/robotsito-04.png';
import Typewriter from '../text/Typewriter';
import { useGameStore } from '../../store';

interface DialogProps {
  text: string;
  question?: string;
  showQuestion?: boolean;
  setShowQuestion?: (showQuestion: boolean) => void;
  finishedAnimation? : boolean;
  onNext: () => void;
}

export const Dialog = ({
  text,
  question,
  onNext,
  showQuestion,
  setShowQuestion,
  finishedAnimation,
}: DialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<string[]>([]);

  const { goal, moneyPerInstallation } = useGameStore();
  // Función para dividir el texto en partes según el tamaño del contenedor
  const paginateText = (text: string, charsPerPage: number) => {
    const words = text.split(' ');
    let currentPageText = '';
    const result: string[] = [];

    words.forEach((word) => {
      // Si agregar la palabra excede el límite, empuja la página actual
      if (currentPageText.length + word.length <= charsPerPage) {
        currentPageText += word + ' ';
      } else {
        result.push(currentPageText.trim());
        currentPageText = word + ' '; // Inicia una nueva página
      }
    });

    // Empuja la última página si queda texto
    if (currentPageText) {
      result.push(currentPageText.trim());
    }

    return result;
  };

  // Efecto para calcular el tamaño del contenedor y paginar el texto
  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const containerWidth = containerRef.current.clientWidth;

      // Estimación del número de caracteres por línea y página
      const charsPerLine = Math.floor(containerWidth / 15); // Aproximado, depende del tamaño de la fuente
      const linesPerPage = Math.floor(containerHeight / 20); // Aproximado, depende de la altura de línea
      const charsPerPage = charsPerLine * linesPerPage;

      // Divide el texto en páginas basadas en el tamaño del contenedor
      const textPages = paginateText(text, charsPerPage);
      setPages(textPages);
    }
  }, [text]);

  // Función para avanzar a la siguiente página del diálogo
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (question) {
      if (setShowQuestion) setShowQuestion(true);
      onNext();
      // Ejecuta la función al terminar la última página y tener pregunta
    }
  };

  return (
    <div
      className={`${
        !showQuestion ? 'cursor-pointer' : ''
      }  py-6  px-6 md:py-10 text-gray-800 text-xl font-medium rounded-xl border-4 bg-gray-100 h-auto md:h-[280px] max-h-56 w-full md:max-h-64  max-w-6xl m-auto z-20`}
      onClick={handleNext}
    >
      <div
        ref={containerRef}
        className='h-full overflow-auto flex flex-col justify-between'
      >
        <div
          className={` ${
            showQuestion && question ? 'items-start' : ''
          }  flex h-full `}
        >
          <img src={robot} className=' max-w-28 md:max-w-36 h-fit rounded-xl p-2' />
          <div
            className={`${
              showQuestion ? 'justify-start ' : 'justify-between flex-col'
            } flex  h-full ml-3 md:ml-8 w-full`}
          >
            {currentPage <= pages.length - 1 && !showQuestion && (
              <div>
                {finishedAnimation && (
                  <Typewriter
                    text={pages[currentPage]}
                    delay={30}
                    infinite={false}
                  />
                )}
              </div>
            )}
            {showQuestion && question && (
              <div className='flex flex-col md:flex-row text-base md:text-xl'>
                <div className='flex md:flex-col gap-1 border w-full px-3 rounded-lg bg-gray-200 h-fit md:w-fit mb-2 '>
                  <h2 className='font-bold md:border-b border-r pr-2 border-slate-400 md:mb-2'>
                    Objetivo
                  </h2>
                  <p className='text-red-600'> 🏁: {goal}</p>
                  <p className='text-green-600'>
                    💸: {Intl.NumberFormat().format(moneyPerInstallation)}
                  </p>
                </div>
                <div className='ml-4'>
                  <Typewriter text={question} delay={30} infinite={false} />
                </div>
              </div>
            )}

            {!showQuestion && (
              <div className='animate-bounce w-full'>
                <svg
                  className='m-auto '
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 512 298.04'
                  fill='#334155'
                >
                  <path
                    fillRule='nonzero'
                    d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
