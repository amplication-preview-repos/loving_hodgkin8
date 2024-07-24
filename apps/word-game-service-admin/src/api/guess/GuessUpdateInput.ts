import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";

export type GuessUpdateInput = {
  isCorrect?: boolean | null;
  game?: GameWhereUniqueInput | null;
  word?: WordWhereUniqueInput | null;
};
