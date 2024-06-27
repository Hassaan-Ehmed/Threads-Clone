import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import {Link, useNavigate}  from 'react-router-dom' 
import { auth } from '../FirebaseConfig';
import { setlocalStorage } from '../utils/LocalStorage';
import { Bounce, toast } from 'react-toastify';
import {getFirestore, addDoc ,collection} from 'firebase/firestore'
import { app } from '../FirebaseConfig'

const firestore =  getFirestore(app);

export default function Signup() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [name,setName] = useState("");

const navigate = useNavigate();


  function createUser(){

    createUserWithEmailAndPassword( auth, email, password )
    .then( async (userCredentials)=>{

      const user = userCredentials.user;


      if(user) {

        const result = await addDoc(collection(firestore,'users'),{
          name:name,
          email:email,
          password:password,
          uid:user.uid
        })
      
        console.log("Checking Docs that i added before<<",result);

        // userCredentials.user.displayName = name;

        navigate("/login"); 
        
      } 
          
      console.log("USER_CRED",userCredentials);

    })
    .catch((error)=>{

      const errorCode = error?.code;
      const errorMsg   = error?.message;

      if(errorCode === "auth/email-already-in-use"){

        toast.error("This user already exsist!", {
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

        
      }


      console.log("Error Msg",errorMsg)
      console.log("Error Code",errorCode)
    }) 


  }


  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#101010] relative'>

<img src="/images/logo2.png" alt=""  className='w-20 absolute top-10 t tablet:top-7'/>

<div className='w-[450px] h-[70%] mt-0 tablet:mt-[4rem] flex flex-col justify-center  items-center z-[2]  '>
    
     <div className='form w-full  flex flex-col gap-4 justify-around items-center p-2 bg-[#101010] z-[2]'>
        <h2 className='font-semibold text-white'>Create account in threads</h2>
     
     <input
     value={name}
  type="text"
  placeholder="Full Name"
  class="input input-md w-full max-w-xs  bg-[#1E1E1E] text-white"
  onChange={(e)=>setName(e?.target?.value)}
  />
     <input
     value={email}
  type="text"
  placeholder="Email"
  class="input input-md w-full max-w-xs  bg-[#1E1E1E] text-white" 
  onChange={(e)=>setEmail(e?.target?.value)}
  />

    <input
    value={password}
    type="text"
  placeholder="Password"
  class="input input-md w-full max-w-xs bg-[#1E1E1E]  text-white"
  onChange={(e)=>setPassword(e?.target?.value)}
  />

<button className='btn w-[320px]' onClick={createUser}>Create Account</button>
     </div>

     <div className='google-provider w-full  flex flex-col gap-7 justify-around items-center p-2 relative z-[2]'>
     {/* <img src="/images/google-logo.png" alt=""  className='absolute top-2'/> */}
        <h2 className='font-semibold text-white flex justify-center items-center'><hr /> or <hr /></h2>
     
<button className='btn w-[320px] btn-outline text-white active:bg-white active:text-black hover:bg-white hover:text-black '><FaGoogle className='text-lg'/> Sign up with Google </button>
<Link to={'/login'} href="/Login" className='absolute -bottom-8 text-gray-300 hover:text-white '>Already have an account ?</Link>

     </div>


</div>


</div>
  )
}
