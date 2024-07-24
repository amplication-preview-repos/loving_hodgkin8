import { User } from "../user/User";
import { Guess } from "../guess/Guess";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  user?: User | null;
  guesses?: Array<Guess>;
};
