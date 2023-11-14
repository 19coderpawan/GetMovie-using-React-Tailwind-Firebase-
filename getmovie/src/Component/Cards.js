import React from 'react'

const Cards = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between p-3 mt-4   '>
        <div className='bg-slate-900 font-bold p-1 ease-linear duration-200  hover:-translate-y-1'>
            <img className='h-76 w-60  mb-3 cursor-pointer rounded-xl hover:border-2  hover:border-white-200  ' src="https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg" alt="img" />
            <h1>Name:- Avengers Endgame</h1>
            <h1>Rating:- 4.6</h1>
            <h1>Year:- 2020</h1>
        </div>
      </div>
    </>
  )
}

export default Cards
