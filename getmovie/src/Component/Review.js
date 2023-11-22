import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { setDoc,doc,updateDoc,query,where,getDocs } from 'firebase/firestore'
import {  Reviewref,Movieref } from '../Firebase'
import { useParams } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
import swal from 'sweetalert'

const Review = ({prevrating,Rated}) => {
  const {id}=useParams();
    const[reviewdata,Setreviewdata]=useState({
        review:"",
        reviewrating:"",
        Movieid:id,
        name:"",
        timestamp:new Date().getTime()
    })
    const[FetchedReview,SetfetchedReview]=useState([]);
   const [loading , Setloading]=useState(false);
    const Share=async()=>{
      if(!reviewdata.review || !reviewdata.reviewrating || !reviewdata.Movieid || !reviewdata.name){
         swal({
          title:"Fill All Details to Share Your Review",
          icon:'error',
          buttons:false,
          timer:1000
         })
         return;
      }
      Setloading(true);
      try {
        await setDoc(doc(Reviewref),reviewdata)
        swal({
          title:"Thank You for sharing",
          icon:'success',
          button:false,
          timer:1000
        })
        const updateref=doc(Movieref,id);
        await updateDoc(updateref,{
          totalrating:prevrating+reviewdata.reviewrating,
          Rated:Rated+1
        })
      } catch (error) {
        swal({
          title:error,
          icon:'error',
          buttons:false,
          timer:1000
        })
      }
      Setreviewdata({review:"",
      reviewrating:"",
      Movieid:id,
      name:""})
      Setloading(false)
    }

    // lets retrive the review data of the specified movie using their id's.
    useEffect(()=>{
      async function getreviewdata(){
        const q=query(Reviewref,where("Movieid","==",id));
        const querySnapshot= await getDocs(q);
        querySnapshot.forEach((doc)=>{
          SetfetchedReview((prev)=>[...prev,doc.data()]);
        })
      }
    })
  return (
    <>
      <div className='mt-6 w-full'>
        <h1 className='text-center mb-1 font-bold'>Share Your Review</h1>
        
        <input
         type='text'
         placeholder='Enter Your Name....'
         className='w-full  p-2 outline-none '
         value={reviewdata.name}
         style={{backgroundColor:'#454545'}}
         onChange={(e)=>Setreviewdata({...reviewdata,name:e.target.value})}
        />
        <input
         type='text'
         placeholder='Share Your Thoughts....'
         className='w-full p-2 mt-2 outline-none '
         style={{backgroundColor:'#454545'}}
         value={reviewdata.review}
         onChange={(e)=>Setreviewdata({...reviewdata,review:e.target.value})}
        />
        <div className='flex flex-row justify-center items-center gap-3'>
        <span className='font-bold'>Rate this movie:-  </span>
        <ReactStars
         count={5}
         edit={true}
         size={25}
         half={true}
         value={reviewdata.reviewrating}
         onChange={(e)=>Setreviewdata({...reviewdata,reviewrating:e})}
        />
        </div>
        <button onClick={Share} className='w-full mt-2 p-2 bg-green-600 font-bold font-serif hover:border-2
         border-blue-500 hover:bg-white hover:text-green-600'>
          {loading ?<div className='flex justify-center'><ThreeCircles height={30} color='red'/></div>  :"Share"}
          </button>
      </div>
      <div>
        <h1></h1>
      </div>
    </>
  )
}

export default Review
