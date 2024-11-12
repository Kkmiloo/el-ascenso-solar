import { GameOptionI } from '../interfaces/gameOption.interface';

export const shuffleOptions = (options: GameOptionI[]) => {
  const randomizedOptions = [...options];


  for (let i = randomizedOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [randomizedOptions[i], randomizedOptions[j]] = [
      randomizedOptions[j],
      randomizedOptions[i],
    ];
  }

  return randomizedOptions.map((option, index) => ({
    ...option,
    id: index + 1,
  }));
};
