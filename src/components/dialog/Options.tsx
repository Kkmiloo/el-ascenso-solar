import { GameOptionI } from '../../interfaces/gameOption.interface';

interface OptionsProps {
  options: GameOptionI[];
  onSelectOption: (option: GameOptionI) => void;
}

export const Options = ({ options, onSelectOption }: OptionsProps) => {
  
  const optionLetters = ['A)', 'B)', 'C)']
  
  const handleOnClick = (option: GameOptionI) => {
    onSelectOption(option);
  };

  return (
    <div className='text-justify animate-jump-in animate-duration-[800ms] animate-ease-out flex md:flex-row  flex-col items-center justify-center  md:gap-3 p-2 bg-slate-200 m-auto rounded-xl z-40 max-w-6xl'>
      {options.map((option) => (
        <div
          key={option.id}
          className='shadow-lg relative h-full px-4 flex flex-col text-lg font-medium md:w-1/3 w-full bg-slate-600 text-slate-50 rounded-lg cursor-pointer hover:bg-slate-700 m-1  hover:animate-wiggle animate-infinite animate-ease-in animate-duration-[1200ms]'
          onClick={() => handleOnClick(option)}
        >
          <img
            src={option.image}
            alt={option.text}
            className='absolute  w-20 h-20 md:w-28 md:h-28 right-0 -top-10  md:-top-20 md:right-1  text-justify'
          />

          <div className='flex mt-11  pt-2'>
            <p className='text-6xl md:text-8xl  chewy ml-2 self-start mb-16'>
              {optionLetters[option.id - 1]}
            </p>
            <span className='ml-4 md:ml-6 align-top float-left h-full text-base md:text-lg self-start '>
              {option.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
