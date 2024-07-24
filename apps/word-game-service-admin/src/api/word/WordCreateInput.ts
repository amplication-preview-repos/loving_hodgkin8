import { GuessCreateNestedManyWithoutWordsInput } from "./GuessCreateNestedManyWithoutWordsInput";

export type WordCreateInput = {
  description?: string | null;
  word?: string | null;
  guesses?: GuessCreateNestedManyWithoutWordsInput;
};
