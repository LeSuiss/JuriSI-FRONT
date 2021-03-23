
import Axios from 'axios';
import {useRedirect} from "react-admin"

const bcrypt = require('bcryptjs')

export default {
    // called when the user attempts to log in
    login: async ({username, password}) =>{  
        console.log('logging')
        let result = false
        await Axios.post(`http://localhost:3002/admin/login`, {username, password})
            .then(response => { 
                console.log(response.data); 
                if( !!response.data.isAuth){
                    result = true ;
                    return localStorage.setItem('jwt_token', response.data.jwt_token)}
                } 
                )
            .catch(err=>console.log(err))
        // accept all username/password combinations
        console.log('result from loggin:', result)
        return result? Promise.resolve() : Promise.reject();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('jwt_token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('jwt_token');
            return Promise.reject({ redirectTo: '/' });
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async (props) => {
        console.log('checking Authentification', localStorage.getItem('jwt_token'))
        
        let result 
        if (!!localStorage.getItem('jwt_token')){
            await Axios.post(`http://localhost:3002/admin/checkAuth`, {jwt_token:localStorage.getItem('jwt_token')})
            .then(response =>{
                console.log('response')
                result = response.data})
            .catch(err=>console.log(err))
        } 
        if (result.isAuth){
            return Promise.resolve()
        } 
        else{
            if (!!localStorage.getItem('jwt_token')) localStorage.removeItem('jwt_token');
            return Promise.reject({ redirectTo: '/' });

        }


    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
