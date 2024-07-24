import { InputJsonValue } from "../../types";
import { GameUpdateManyWithoutUsersInput } from "./GameUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  games?: GameUpdateManyWithoutUsersInput;
};
