import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const AdminLogin = () => {
    const [user, setUser] = useState({
        password: '',
        name: ''
    })
    let history = useHistory()
    const queryData = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3007/api/user/login`, user)
            .then(res => {
                localStorage.setItem('userToken', res.data)
                return res.data
            })
            .then(res => {
                history.push('/management')
            })
    }
    return (
        <div className="containerLogin">
            <div className="contain">
            <h1 className="titleLogin">Se connecter</h1>
​
        <form onSubmit={queryData} className="formlogin">
            <input className="at" placeholder="Nom" value={user.mail} required type='text' onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input className="lock" placeholder="Mot de passe" name='password' value={user.password} required type='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
​
            <button className='btnLogin' type='submit'>
                Se connecter
                </button>
        </form>
        </div>
        </div>
    )
}
export default AdminLogin;