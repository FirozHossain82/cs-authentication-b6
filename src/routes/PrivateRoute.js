import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProviders.js';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/Home/LoadingSpinner.js';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return<LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;

    }

    return <Navigate state={{from:location}} to='/login' replace ></Navigate>
};

export default PrivateRoute;