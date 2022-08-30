import React, {useContext, useEffect, useRef, useState} from 'react';
import './AdminLogin.scss'
import {useHttp} from "../../hooks/useHttp";
import {AuthContext} from "../../context/AuthContext";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {loading, error, message, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password:''
    })
    const errorTeg = useRef()
    useEffect(() => {
        if (error) {
            errorTeg.current.innerHTML = error
            clearError()
        } else {
            if (message) {
                errorTeg.current.innerHTML = message
                clearError()
            }
        }
    }, [error, message])
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    // { email: 'vlad@gmail.com', password: '123456' }
    const loginHandler = async () => {
        errorTeg.current.innerHTML = ''
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            navigate(ADMIN_ROUTE)
        } catch (e) {}
    }
    const registerHandler = async () => {
        errorTeg.current.innerHTML = ''
        try {
            await request('/api/auth/register', 'POST', {...form})
        } catch (e) {}
    }

    return (
        <div className={"container admin-wrapper"}>
            <form className={"admin-form"} >
                <h3 className={"admin-form__title"}>Admin Form</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        onChange={changeHandler}
                        name={"email"}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >
                        Password
                    </label>
                    <input
                        onChange={changeHandler}
                        name={"password"}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                <div ref={errorTeg} id="help" className="form-text">
                </div>
                <button
                    onClick={loginHandler}
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary float-end"
                >Enter</button>
                <button
                    onClick={registerHandler}
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary float-end"
                >Register</button>
            </form>
        </div>
    );
};

export default AdminLogin;