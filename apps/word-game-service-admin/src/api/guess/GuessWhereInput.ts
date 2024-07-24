import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";

export type GuessWhereInput = {
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  game?: GameWhereUniqueInput;
  word?: WordWhereUniqueInput;
};
