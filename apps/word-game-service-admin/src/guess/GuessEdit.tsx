import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameTitle } from "../game/GameTitle";
import { WordTitle } from "../word/WordTitle";

export const GuessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <ReferenceInput source="word.id" reference="Word" label="word">
          <SelectInput optionText={WordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
