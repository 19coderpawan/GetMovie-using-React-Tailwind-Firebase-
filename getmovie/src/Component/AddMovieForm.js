import React, { useState } from 'react'
import {TailSpin} from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
import { Movieref } from '../Firebase'
import swal from 'sweetalert';

const AddMovieForm = () => {
    const [formdata ,setformdata]=useState({
        name:"",
        Year:"",
        Rating:"",
        Description:"",
        img:""
    })
    const [loading ,Setloading]=useState(false);

    const Addmovie=async()=>{
      Setloading(true);
      try {
        await addDoc(Movieref,formdata);
        swal({
          title:"Successfully Added the Item",
          icon:"success",
          buttons:false,
          timer:3000
        })
      } catch (error) {
        swal({
          title:error,
          icon:"error",
          buttons:false,
          timer:3000
        })
      }
      setformdata({name:"",Year:"",Rating:"",Description:"",img:""})
      Setloading(false);
    }
  return (
    <>
      <section class="text-gray-600 body-font relative overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-3xl font-xl title-font mb-4 text-white animate-pulse">Add Your Movies </h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white font-bold font-serif  ">Name</label>
            <input type="text" id="name" value={formdata.name} name="name"  class="w-full bg-white rounded border border-gray-300
             focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>setformdata({...formdata,name:e.target.value})}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-white font-bold font-serif ">Year</label>
            <input type="text" id="text" name="text" value={formdata.Year} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setformdata({...formdata,Year:e.target.value})}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-white font-bold font-serif ">Rating</label>
            <input type="text" id="text" name="text" value={formdata.Rating} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setformdata({...formdata,Rating:e.target.value})}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-white font-bold font-serif ">Image Link</label>
            <input type="text" id="text" name="text" value={formdata.img} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setformdata({...formdata,img:e.target.value})}/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white font-bold font-serif ">Description</label>
            <textarea id="message" name="message" value={formdata.Description} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setformdata({...formdata,Description:e.target.value})}></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={Addmovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {loading ?<TailSpin height={30} color='red' width={70}/> :"Add"}
            </button>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AddMovieForm
