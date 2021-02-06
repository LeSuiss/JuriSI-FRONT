import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';



export const Listing = (fields) => (props)=>
    <List {...props}>
        <Datagrid rowClick="edit">
            {fields.map((x,y)=> <TextField key={y} source={x}/>)}
        </Datagrid>
    </List>
;

export const Editing = (fields)=> props => (
    <Edit {...props}>
        <SimpleForm >
            {fields.map((x,y)=> <TextInput key={y} source={x}/>)}
        </SimpleForm>
    </Edit>
); 

export const Creating = (fields) =>(props) => (
    <Create {...props}>
        <SimpleForm>
            {fields.map((x,y)=> <TextInput key={y} source={x}/>)}
        </SimpleForm>
    </Create>
);

