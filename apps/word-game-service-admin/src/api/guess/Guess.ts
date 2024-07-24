import { Game } from "../game/Game";
import { Word } from "../word/Word";

export type Guess = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isCorrect: boolean | null;
  game?: Game | null;
  word?: Word | null;
};
