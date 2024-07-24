import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameTitle } from "../game/GameTitle";
import { WordTitle } from "../word/WordTitle";

export const GuessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <ReferenceInput source="word.id" reference="Word" label="word">
          <SelectInput optionText={WordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
