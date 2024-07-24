import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GuessListRelationFilter } from "../guess/GuessListRelationFilter";

export type WordWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  word?: StringNullableFilter;
  guesses?: GuessListRelationFilter;
};
