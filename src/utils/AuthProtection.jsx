import React from 'react'
import { getlocalStorage } from './LocalStorage'
import { Navigate } from 'react-router-dom';

export default function AuthProtection({children}) {
  
    const token = getlocalStorage("token");

     if(token){

        return <Navigate to={'/'} replace/>

     }
     else{
        return children;
     }

}
