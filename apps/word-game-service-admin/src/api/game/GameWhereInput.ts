import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GuessListRelationFilter } from "../guess/GuessListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  guesses?: GuessListRelationFilter;
};
