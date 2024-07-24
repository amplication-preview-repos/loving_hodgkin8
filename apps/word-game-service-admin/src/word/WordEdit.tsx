import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GuessTitle } from "../guess/GuessTitle";

export const WordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="word" source="word" />
        <ReferenceArrayInput
          source="guesses"
          reference="Guess"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuessTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
