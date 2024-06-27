import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link , useNavigate } from 'react-router-dom';
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setlocalStorage } from '../utils/LocalStorage';
import { Bounce, toast } from 'react-toastify';
import {getDocs,collection} from 'firebase/firestore'

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
const navigate = useNavigate();


  function loginUser (){

    signInWithEmailAndPassword(auth, email, password).
    then(async(userCredentials)=>{

      const user = userCredentials
      if(user){

        await getDocs(collection())
        console.log("UserCred",userCredentials);
        setlocalStorage("token",`$#&^${userCredentials.user.uid}8080`);

        navigate("/");
        
      }


    })
    .catch((error)=>{

      const errorCode = error.code;
      const errorMsg = error.message;

      if(errorCode === "auth/invalid-credential"){

        toast.error("This user not exsist!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });

          setEmail("");
          setPassword("");  
      }

      console.log("Error Msg",errorMsg);
      console.log("Error Code",errorCode);

    })

  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#101010] relative'>

<img src="/images/logo2.png" alt=""  className='w-20 absolute top-10 t tablet:top-7'/>

<div className='w-[450px] h-[80%] mt-0 tablet:mt-[4rem] flex flex-col justify-center gap-3 items-center z-[2] '>
    
     <div className='form w-full  flex flex-col gap-4 justify-around items-center p-2 bg-[#101010] z-[2]'>
        <h2 className='font-semibold text-white'>Log in with your Email & password</h2>
     <input
      value={email}
  type="text"
  placeholder="Email"
  class="input input-md w-full max-w-xs bg-[#1E1E1E] text-white"
  onChange={(e)=>setEmail(e?.target?.value)}
  />

    <input
    value={password}
    type="text"
  placeholder="Password"
  class="input input-md w-full max-w-xs bg-[#1E1E1E] text-white"
  onChange={(e)=>setPassword(e?.target?.value)}
  />

<button className='btn w-[320px]' onClick={loginUser}>Sign in</button>
     </div>

     <div className='google-provider w-full  flex flex-col gap-7 justify-around items-center p-2 relative z-[2]'>
     {/* <img src="/images/google-logo.png" alt=""  className='absolute top-2'/> */}
        <h2 className='font-semibold text-white flex justify-center items-center'><hr /> or <hr /></h2>
     

<button className='btn w-[320px] btn-outline text-white active:bg-white active:text-black hover:bg-white hover:text-black '><FaGoogle className='text-lg'/> Sign in with Google </button>
<Link to={'/signup'} href="/Login" className='absolute -bottom-8 text-gray-300 hover:text-white '>Don't have an account ?</Link>


     </div>


</div>


</div>
  )
}
