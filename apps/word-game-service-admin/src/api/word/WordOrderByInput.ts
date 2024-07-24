import { SortOrder } from "../../util/SortOrder";

export type WordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  word?: SortOrder;
};
