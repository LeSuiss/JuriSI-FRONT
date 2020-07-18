import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

export const ArticleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="Title" />
            <TextInput source="Content" />
            <TextInput source="Tags" />
            <TextInput source="createdAt" />
            <TextInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);