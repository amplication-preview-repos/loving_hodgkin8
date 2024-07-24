import { Guess } from "../guess/Guess";

export type Word = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  word: string | null;
  guesses?: Array<Guess>;
};
