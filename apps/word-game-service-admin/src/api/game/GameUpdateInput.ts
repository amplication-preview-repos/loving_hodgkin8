import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GuessUpdateManyWithoutGamesInput } from "./GuessUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  guesses?: GuessUpdateManyWithoutGamesInput;
};
