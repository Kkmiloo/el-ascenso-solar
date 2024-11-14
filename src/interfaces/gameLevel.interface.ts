import { GameOptionI } from "./gameOption.interface";

export interface GameLevelI {
  level: number; // Número  del nivel
  name: string; // Nombre del nivel
  introduction: string; // Introducción narrativa del nivel
  question: string; // Array de preguntas para el nivel
  options: GameOptionI[];
  incorrectQuestionId: number; // ID de la pregunta que restará vida
  incorrectQuestionMessage: string;
  goal: number;
  installationTime: number;
  moneyPerInstallation: number;
  image?: string;
}
