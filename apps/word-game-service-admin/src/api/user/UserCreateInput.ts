import { InputJsonValue } from "../../types";
import { GameCreateNestedManyWithoutUsersInput } from "./GameCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  games?: GameCreateNestedManyWithoutUsersInput;
};
