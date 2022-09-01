import React, {useCallback, useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./context/AuthContext";
import {LendingContext} from "./context/LendingContext";
import {useMongoLandingData} from "./hooks/useMongoLandingData";
import {useHttp} from "./hooks/useHttp";

const App = () => {
    const [lendingSettings, setLendingSettings] = useState()
    const {loading, error, message, request, clearError} = useHttp()

    useEffect( () =>  {
        request('/api/data/lending').then(function(value) {
            setLendingSettings(JSON.parse(value))
        })

    },[])

    const {token, login, logout,  userId} = useAuth()

    const isAuthenticated = !!token
    return (
        <AuthContext.Provider value={{
            token, login, logout,  userId, isAuthenticated
        }}>
            <LendingContext.Provider value={{
                lendingSettings, setLendingSettings
            }}>
                <BrowserRouter>
                    <AppRouter isAuthenticated={ isAuthenticated}/>
                </BrowserRouter>
            </LendingContext.Provider>
        </AuthContext.Provider>
    );
}

export default App