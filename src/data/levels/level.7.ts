import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Abrir sedes locales en México y Brasil, contratando gerentes locales por $700,000 COP cada uno.',
    consequence:
      'Pudiste realizar las 500 instalaciones, cumpliendo con el contrato internacional.',
    impact: 'Ingresos de $100,000,000 COP',
    additionalContext:
      'Invertiste mucho en abrir sedes locales, pero lograste cumplir con todo el contrato y aseguraste futuras oportunidades en América Latina.',
    isCorrect: true,
    numberPanels: 500,
    invest: 1400000,
    balance: 100000000,
    image: '/options/N7_A.png',
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 2,
    text: 'Subcontratar una empresa de logística internacional por $5,000,000 COP para gestionar las instalaciones en ambos países.',
    consequence:
      'Lograste realizar 400 instalaciones, pero no cubriste toda la demanda.',
    impact: 'Ingresos de $80,000,000 COP.',
    additionalContext:
      'La subcontratación ayudó a cumplir la mayor parte del contrato, pero con menos margen y sin asegurar futuras oportunidades en la región.',
    isCorrect: true,
    numberPanels: 400,
    invest: 5000000,
    balance: 80000000,
    image: '/options/N3_B.png',
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 3,
    text: 'Intentar gestionar el proyecto internacional sin abrir sedes ni contratar gerentes locales',
    consequence:
      'Solo pudiste realizar 300 instalaciones, lo que no fue suficiente para cumplir con el contrato.',
    impact: 'Ingresos de $60,000,000 COP.',
    additionalContext:
      'Perdiste oportunidades internacionales y tu reputación global se vio afectada.',
    isCorrect: false,
    numberPanels: 300,
    invest: 0,
    balance: 60000000,
    image: '/options/N7_C.png',
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelSeven: GameLevelI = {
  level: 7,
  name: 'Nivel 7: "Expansión Internacional" - Energía Solar en América Latina',
  introduction:
    'Tu empresa ha dado un salto internacional y ha firmado contratos para realizar 500 instalaciones solares en México y Brasil. Cada instalación genera $200,000 COP, pero la logística internacional y la gestión de equipos en diferentes países será un desafío.',
  question:
    '¿Cómo gestionarás la expansión internacional y el cumplimiento de este contrato?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa internacional". Al solo completar 300 instalaciones, no pudiste cumplir con el contrato y afectaste tu capacidad para expandirte globalmente`,
  goal: 500,
  installationTime: 5,
  moneyPerInstallation: 200000,
  image: 'l7.jpg',
};
