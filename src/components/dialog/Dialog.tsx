import { useRef, useState } from 'react';
//import man from '../../assets/man.webp';
import robot from '../../assets/robotsito-04.png';
import robotQuestion from '../../assets/robotsito-07.png';

import Typewriter from '../text/Typewriter';
import { useGameStore } from '../../store';

interface DialogProps {
  text: string;
  question?: string;
  showQuestion?: boolean;
  setShowQuestion?: (showQuestion: boolean) => void;
  showIntroText?: boolean;
  onNext: () => void;
}
export const Dialog = ({
  text,
  question,
  onNext,
  showQuestion,
  setShowQuestion,
  showIntroText,
}: DialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [animationFinished, setAnimationFinished] = useState(false);
  const [animationFinishedIntro, setAnimationFinishedIntro] = useState(false);

  const { goal, moneyPerInstallation } = useGameStore();

  const handleNext = () => {

    if (!animationFinished || !animationFinishedIntro) {
      setAnimationFinished(true);
      setAnimationFinishedIntro(true);
    } else if (question) {
      if (setShowQuestion) setShowQuestion(true);
      setAnimationFinished(false);
      setAnimationFinishedIntro(false);

      onNext();
    }
  };

  return (
    <div
      className={`${
        !showQuestion ? 'cursor-pointer' : ''
      }  py-6  px-6 md:py-10 text-gray-800 text-xl text-justify font-medium rounded-xl border-4 bg-gray-100  md:h-[280px] w-full h-auto max-w-6xl min-h-44 md:min-h-52 m-auto z-20`}
      onClick={handleNext}
    >
      <div ref={containerRef} className='h-full flex flex-col justify-between'>
        <div
          className={` ${
            showQuestion && question ? 'items-start' : ''
          } flex h-full `}
        >
          <img
            src={showQuestion ? robotQuestion : robot}
            className=' max-w-28 md:max-w-36 h-fit rounded-xl p-2'
          />
          <div
            className={`${
              showQuestion
                ? 'justify-start '
                : 'justify-between flex-col text-base md:text-xl'
            } flex  h-full ml-3 md:ml-8 w-full`}
          >
            {!showQuestion && (
              <div>
                {showIntroText && (
                  <Typewriter
                    text={text}
                    delay={30}
                    animationFinished={animationFinishedIntro}
                    onComplete={() => setAnimationFinishedIntro(true)}
                  />
                )}
              </div>
            )}
            {showQuestion && question && (
              <div className='flex flex-col md:flex-row '>
                <div className='flex md:flex-col gap-1 border w-full px-3 rounded-lg bg-gray-200 h-fit md:w-fit mb-2 '>
                  <h2 className='font-bold md:border-b md:border-r-0 border-r pr-2 border-slate-400 md:mb-2'>
                    Objetivo
                  </h2>
                  <p className='text-red-600'> 🏁: {goal}</p>
                  <p className='text-green-600'>
                    💸: {Intl.NumberFormat().format(moneyPerInstallation)}
                  </p>
                </div>
                <div className='ml-4'>
                  <Typewriter
                    text={question}
                    delay={30}
                    animationFinished={animationFinished}
                    onComplete={() => setAnimationFinished(true)}
                  />
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
