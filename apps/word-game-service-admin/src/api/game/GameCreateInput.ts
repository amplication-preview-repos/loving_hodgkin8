import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GuessCreateNestedManyWithoutGamesInput } from "./GuessCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  guesses?: GuessCreateNestedManyWithoutGamesInput;
};
