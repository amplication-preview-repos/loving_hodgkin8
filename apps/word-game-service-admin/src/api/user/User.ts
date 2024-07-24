import { JsonValue } from "type-fest";
import { Game } from "../game/Game";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  games?: Array<Game>;
};
