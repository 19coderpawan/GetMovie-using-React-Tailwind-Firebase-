import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore'
import {Movieref} from '../Firebase'
import { ThreeCircles } from 'react-loader-spinner'
import {Link} from 'react-router-dom'
const Cards = () => {
    const [data, Setdata] = useState([])
    useEffect(()=>{
       async function getdata(){
        Setloading(true);
        const fetcheddata=await getDocs(Movieref);
         fetcheddata.forEach(doc => {
            Setdata((pre)=>[...pre,{...doc.data(),id:doc.id}]);
         });
         Setloading(false)
       }
       getdata();
    },[])
    const [loading,Setloading]=useState(false);
    return (
        <>
            <div> <h1 className='text-center mt-3 font-bold font-serif'>Download all Movies for free Instantly!</h1> </div>
            <div className='flex flex-wrap  p-3 mt-4 justify-between '>
          {loading ?<div className=' w-full flex justify-center items-center '><ThreeCircles/></div>:
                data.map((e, i) => {
                    return (
                 <Link to={`/detail/${e.id}`}>
                 <div key={i} className='bg-slate-900 font-bold p-3  transition-all duration-700 border-2
                rounded-xl m-3 
                hover:-translate-y-4 mt-9'>
                            <img className=' h-70 w-60  mt-1 cursor-pointer rounded-xl hover:border-2 
                    hover:border-white-200 ' src={e.img}
                                alt="img" />
                            <h1 >Name:- <span className='truncate text-sm'>{e.name}</span></h1>
                            <h1 className='flex flex-row items-center gap-1'>Rating:-
                                <ReactStars
                                    size={20}
                                    count={5}
                                    value={e.Rating}
                                    edit={false}
                                    half={true} />
                            </h1>
                            <h1>Year:- <span>{e.Year}</span></h1>
                        </div>
                 </Link>       
                    )
                })}
            </div>
        </>
    )
}

export default Cards
