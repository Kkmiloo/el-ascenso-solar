import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a 2 instaladores por $300,000 COP cada uno, permitiendo cumplir con la demanda.',
    consequence:
      'Pudiste cubrir las 50 instalaciones en 30 días, cumpliendo con el contrato.',
    impact: 'Ingresos de $5,000,000 COP (50 instalaciones x $100,000 COP).',
    additionalContext:
      'Invertiste más en personal, pero aseguraste la entrega del proyecto y obtuviste nuevas oportunidades.',
    image: '/options/N3_A.png',
    isCorrect: true,
    numberPanels: 50,
    invest: 300000,
    balance: 5000000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 2,
    text: 'Subcontratar una empresa externa por $800,000 COP, ayudándote a cumplir con el plazo.',
    consequence:
      'Pudiste cubrir las 50 instalaciones, pero tus márgenes fueron más bajos.',
    impact: 'Ingresos de $4,200,000 COP (menos el costo de subcontratación).',
    additionalContext:
      'Cumpliste con el contrato, pero tus ganancias fueron reducidas.',
    image: '/options/N3_B.png',
    numberPanels: 50,
    invest: 800000,
    isCorrect: true,
    balance: 4200000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Intentar gestionar el contrato con tu equipo actual, sin aumentar la capacidad.',
    consequence: 'Solo pudiste instalar 30 paneles, incumpliendo el contrato.',
    impact: 'Ingresos de $3,000,000 COP (30 instalaciones x $100,000 COP).',
    additionalContext:
      'Perdiste oportunidades futuras por no cumplir con el contrato.',
    image: '/options/N3_C.png',
    numberPanels: 30,
    invest: 0,
    isCorrect: false,
    balance: 3000000,
    trustResult: -20,
    reputationResult:-20
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelThree: GameLevelI = {
  level: 3,
  name: 'Nivel 3: "Creciendo la Operación" - Nuevas Oportunidades de Contratos',
  introduction:
    'Tu empresa ha ganado popularidad y ahora tienes la oportunidad de instalar paneles solares en empresas comerciales. La demanda es mayor, con contratos que requieren 50 instalaciones en 30 días. Cada instalación comercial te generará $100,000 COP.',
  question: '¿Cómo gestionarás este contrato de mayor escala?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incumplimiento de contrato". Solo lograste instalar 30 paneles, lo que no cubrió el contrato y afectó tu credibilidad.`,
  goal: 50,
  installationTime: 4.8,
  moneyPerInstallation: 100000,
  image: 'l3.jpg',
};
