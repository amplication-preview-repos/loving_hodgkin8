import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GuessTitle } from "../guess/GuessTitle";

export const WordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
