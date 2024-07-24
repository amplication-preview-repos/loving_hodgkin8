import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { WORD_TITLE_FIELD } from "../word/WordTitle";

export const GuessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Guesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isCorrect" source="isCorrect" />
        <ReferenceField label="game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="word" source="word.id" reference="Word">
          <TextField source={WORD_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
