import React from 'react'
import { getlocalStorage } from './LocalStorage'
import { Navigate } from 'react-router-dom';

export default function RouteProtection({children}) {

    // const navigate = useNavigate();

    const token = getlocalStorage("token");


    try{

    
        if(!token){


            return <Navigate to={'/login'} replace/>

        }else{
    
      return  children
            
        }
    

    }catch(error){
        console.log("Error in Route Protection File",error);
    }
    

    

  
}
