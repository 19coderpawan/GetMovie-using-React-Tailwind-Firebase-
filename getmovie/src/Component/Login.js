import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { TailSpin } from 'react-loader-spinner'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { Appstate } from '../App'
import { useContext } from 'react'
const Login = () => {

    const [logindata,Setlogindata]=useState({
        email:'',
        password:''
    })
    const {Setlogin}=useContext(Appstate);
    const navigation=useNavigate();
    const[Loading,SetLoading]=useState(false);
    const handleLoginSubmit=async(e)=>{
        e.preventDefault();
        try {
            SetLoading(true);
            await signInWithEmailAndPassword(Auth,logindata.email,logindata.password);
            swal({
                title:"Welcome to Movie Verse!",
                icon:"success",
                buttons:false,
                timer:2000
            })
            
        } catch (error) {
            SetLoading(false);
            swal({
                title:"Check Your Credentials",
                icon:"error",
                buttons:false,
                timer:2000
            })
            console.log(error);
        }
        Setlogindata({...Setlogindata,email:"",password:""});
        SetLoading(false);
        navigation('/');
        Setlogin(true);
    }

    return (
        <section class="bg-gray-1000">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-7">
                <div class="w-full bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleLoginSubmit}>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your email</label>
                                <input type="email" value={logindata.email}  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(e)=>{Setlogindata({...logindata,email:e.target.value})}}  placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white-900 ">Password</label>
                                <input type="password" value={logindata.password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(e)=>{Setlogindata({...logindata,password:e.target.value})}}  required="" />
                            </div>
                            

                            <button type="submit" class="w-full text-white border-2 hover:border-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            > {Loading?<div className=' w-full flex justify-center items-center '><TailSpin  height={30} color='green' width={70}/></div>:"Login"} </button>
                            <p class="text-sm font-light text-white-500 dark:text-white-400">
                                Don’t have an account yet? <Link to={'/Signup'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Login
