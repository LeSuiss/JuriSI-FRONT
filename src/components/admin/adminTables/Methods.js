import React from 'react';
import {List, Create, Edit, SimpleForm, Datagrid,} from 'react-admin';
import {ReferenceField, UrlField, NumberField, FileField, EmailField, BooleanField, ImageField, DateField, TextField,} from 'react-admin'
import { TextInput, ReferenceArrayInput, ReferenceInput, SelectArrayInput, DateInput, SelectInput } from 'react-admin';


export const Listing = ({ table, fields }) => (props) =>
    <List {...props}>
        <Datagrid rowClick="edit">
            {fields.map((x, y) => {
                if (x.indexOf("fk") > -1 ) return  (                
                    <ReferenceField label={x.slice(3, x.length)}  source="id" reference={x.slice(3, 4).toUpperCase() + x.slice(4, x.length).toLowerCase() + 's'}>
                        <TextField source={"code"} />
                    </ReferenceField>)
                if (x.indexOf("boolean_") > -1) return <BooleanField source={x} /> 
                if (x.indexOf("date_") > -1) return <DateField source={x} /> 
                if (x.indexOf("email_") > -1) return <EmailField source={x} /> 
                if (x.indexOf("file_") > -1) return <FileField source={x} title="title" /> 
                if (x.indexOf("img_") > -1) return <ImageField url={x} /> 
                if (x.indexOf("number_") > -1) return <NumberField source={x} /> 
                if (x.indexOf("url") > -1) return <UrlField source={x} /> 

                return <TextField key={y} source={x} />
            })
            }
        </Datagrid>
    </List>
    ;

const displayEditOrCreate = (Component) => ({ table, fields }) => {
    console.log("fields", fields)
    console.log("table", table)
    return props => (
        <Component {...props}>
            <SimpleForm >
                {fields.map((x, y) => {
                    if (x.indexOf("fk_") > -1) {
                        return <ReferenceInput source={x} reference={x.slice(3, 4).toUpperCase() + x.slice(4, x.length).toLowerCase() + 's'}>
                            <SelectInput optionText="code" placeholder="hoho" />
                        </ReferenceInput>
                    }
                    if (x.indexOf("boolean_") > -1) return <BooleanInput source={x} /> 
                    if (x.indexOf("date_") > -1) return <DateInput source={x} /> 
                    if (x.indexOf("email_") > -1) return <EmailInput source={x} /> 
                    if (x.indexOf("file_") > -1) return <FileInput source={x} title="title" /> 
                    if (x.indexOf("img_") > -1) return <ImageInput url={x} /> 
                    if (x.indexOf("number_") > -1) return <NumberInput source={x} /> 
                    if (x.indexOf("url") > -1) return <UrlInput source={x} /> 

                    return <TextInput key={y} source={x} />
                })}
            </SimpleForm>
        </Component>
    );
}

export const Editing = displayEditOrCreate(Edit)
export const Creating = displayEditOrCreate(Create)

