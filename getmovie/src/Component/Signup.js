import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../Firebase'
import { TailSpin } from 'react-loader-spinner'
import swal from 'sweetalert'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { addDoc } from 'firebase/firestore'

const Signup = () => {
   const [Signupdata,SetSignupdata]=useState({
    name:"",
    email:"",
    password:""
   })
   const [Loading,SetLoading]=useState(false);
   const navigation=useNavigate();
   const handleSubmit=async(e)=>{
     e.preventDefault();
     if(!Signupdata.name || !Signupdata.email || !Signupdata.password){
    swal({
        title:"Fill out all the details Please!",
        icon:"error",
        buttons:false,
        timer:2000
    })
    return;
     }

     try {
        SetLoading(true);
        await createUserWithEmailAndPassword(Auth,Signupdata.email,Signupdata.password);
        swal({
            title:"Your are Registered Thank you for Joining Us!",
            icon:"success",
            buttons:false,
            timer:2000
        })

     } catch (error) {
         SetLoading(false);
         swal({
            title:"Enable to Register Try again !",
            icon:"error",
            button:false,
            timer:2000
         })
     }
     SetLoading(false);
     SetSignupdata({...Signupdata,name:"",email:"",password:""})
     navigation('/login');
   }

    return (
        <section class="bg-gray-1000">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-7">
                <div class="w-full bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register Yourself
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your name</label>
                                <input type="name" value={Signupdata.name} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(e)=>{SetSignupdata({...Signupdata,name:e.target.value})}} placeholder="Name" required="" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your email</label>
                                <input type="email" value={Signupdata.email} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(e)=>{SetSignupdata({...Signupdata,email:e.target.value})}} placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white-900 ">Password</label>
                                <input type="password" value={Signupdata.password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(e)=>{SetSignupdata({...Signupdata,password:e.target.value})}} required="" />
                            </div>
                            
                            <button type="submit" class="w-full text-white border-2 hover:border-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {Loading ? <div className=' w-full flex justify-center items-center '><TailSpin  height={30} color='red' width={70}/></div>:"Signup"}
                            </button>
                            <p class="text-sm font-light text-white-500 dark:text-white-400">
                                Already have a Account ? <Link to={'/Login'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
