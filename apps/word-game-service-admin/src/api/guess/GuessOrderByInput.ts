import { SortOrder } from "../../util/SortOrder";

export type GuessOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isCorrect?: SortOrder;
  gameId?: SortOrder;
  wordId?: SortOrder;
};
