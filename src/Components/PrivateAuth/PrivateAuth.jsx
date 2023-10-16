import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const PrivateAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();

    if(loading){
        return <h3 className='text-center pt-[40px]'>Loading...</h3>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};



export default PrivateAuth;