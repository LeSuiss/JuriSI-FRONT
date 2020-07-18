import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

const fields = ["id", "Title", "Content", "Tags", "createdAt", "updatedAt"]

export const ArticleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {fields.map((x,y)=> <TextField key={y} source={x}/>)}
        </Datagrid>
    </List>
);

export const ArticleEdit = props => (
    <Edit {...props}>
        <SimpleForm >
            {fields.map((x,y)=> <TextInput key={y} source={x}/>)}
        </SimpleForm>
    </Edit>
); 

export const ArticleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {fields.map((x,y)=> <TextInput key={y} source={x}/>)}
        </SimpleForm>
    </Create>
);

