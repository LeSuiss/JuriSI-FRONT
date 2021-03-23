import React from 'react';
import { List, Datagrid, ReferenceArrayInput, ReferenceInput, SelectArrayInput,Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, SelectInput } from 'react-admin';



export const Listing = ({table, fields}) => (props)=>
    <List {...props}>
        <Datagrid rowClick="edit">
            {fields.map((x,y)=>{
               // if (x.slice(0,2).toLowerCase() ==="fk") return <SelectInput key={y} source={x}/>

                return <TextField key={y} source={x}/>}) 
            } 
        </Datagrid>
    </List>
;

const displayFieldsWithUserInteraction = (component) => ({table, fields})=>{
    
    return  props => (
        <component {...props}>
            <SimpleForm >
            {fields.map((x,y)=>{
                if (x.slice(0,2).toLowerCase() ==="fk") {
                    return <ReferenceInput source={x} reference={x.slice(3,4).toUpperCase()+x.slice(4,x.length).toLowerCase()+'s'}>
                   <SelectInput optionText="code" placeholder="hoho"/>
               </ReferenceInput>}
    
                    return <TextInput key={y} source={x}/>}) 
                } 
            </SimpleForm>
        </component>
    );
}

export const Editing = displayFieldsWithUserInteraction(Edit)
export const Creating = displayFieldsWithUserInteraction(Create)

