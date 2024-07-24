import { Guess as TGuess } from "../api/guess/Guess";

export const GUESS_TITLE_FIELD = "id";

export const GuessTitle = (record: TGuess): string => {
  return record.id?.toString() || String(record.id);
};
