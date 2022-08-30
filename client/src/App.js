import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./context/AuthContext";
import {LendingContext} from "./context/LendingContext";

const App = () => {
    const [lendingSettings, setLendingSettings] = useState()
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