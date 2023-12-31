import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
/*The useParams hook returns an object of key/value pairs of the dynamic params from the current URL 
that were matched by the <Route path>. 
Child routes inherit all params from their parent routes.*/
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc,doc } from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Review from './Review'
const DetailPage = () => {
    const{id}=useParams();
    const [data,Setdata]=useState({
        name:"",
        Year:"",
        Rating:0,
        Description:"",
        DownloadLink:"",
        img:"",
        Rated:0
    });
    const [loading,Setloading]=useState(false);
    useEffect(()=>{
      
      async function getdata(){
        Setloading(true);
        const fetcheddata= doc(db,"movie",id);
        const displayfetchdata= await getDoc(fetcheddata);
        Setdata(displayfetchdata.data());
        Setloading(false);
      }
      
      getdata();
    },[id])
    // console.log("here is my Download Link"+data.DownloadLink)
  return (
    <>
    {loading?<div className=' w-full flex justify-center items-center '><ThreeCircles/></div>:
      <div className='flex flex-col md:flex-row md:items-start items-center w-full justify-center mt-4 p-3'>
        <img className='h-96 md:w-80  md:sticky top-4' src={data.img} alt='Wait'/>
        <div className='ml-3 w-full  md:w-1/2'>
            <h1 className='text-3xl font-bold text-gray-400'>{data.name} <span className='text-xl'>({data.Year})</span></h1>
            <ReactStars
            size={25}
            count={5}
            value={data.Rated===0?data.Rating:data.totalrating/data.Rated}
            edit={false}
            half={true} />
            <p>{data.Description}</p> 
            <Review prevrating={data.Rating} Rated={data.Rated} DownLink={data.DownloadLink} />
        </div>
      </div>
}
    </>
  )
}

export default DetailPage
