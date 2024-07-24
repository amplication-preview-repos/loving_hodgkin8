import { GuessUpdateManyWithoutWordsInput } from "./GuessUpdateManyWithoutWordsInput";

export type WordUpdateInput = {
  description?: string | null;
  word?: string | null;
  guesses?: GuessUpdateManyWithoutWordsInput;
};
