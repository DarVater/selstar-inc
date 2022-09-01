import React, {useContext} from 'react';
import {Routes, Route, Navigate, BrowserRouter, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes/routes";
import Landing from "../../pages/Landing/Landing";


const AppRouter = ({isAuthenticated}) => {
    const navigate = useNavigate()
    return (
        isAuthenticated
            ?
            <Routes>
                {authRoutes.map(route =>
                    <Route
                        element={<route.Component/>}
                        path={route.path}
                        exact={true}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Landing/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.Component/>}
                        path={route.path}
                        exact={true}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Landing/>} />
            </Routes>
    );
};

export default AppRouter;