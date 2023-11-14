import React from 'react'

const Header = () => {
  return (
    <>
      <div className='text-3xl  font-bold p-3 border-b-2 border-white-500 flex justify-between items-center'>
        <span>Get <span className='text-red-500'>Movie</span></span>
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' >Add Movie <i class="fa-solid fa-plus"></i></button>
      </div>
    </>
  )
}

export default Header
