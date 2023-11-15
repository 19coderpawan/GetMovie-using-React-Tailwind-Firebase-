import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='text-3xl  font-bold p-3 border-b-2 border-white-500 flex justify-between items-center'>
      <Link to={'/'}>  <span>Get <span className='text-red-500'>Movie</span></span></Link>
       <Link to={'/addmovie'}>
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' >
          Add Movie 
          <i class="fa-solid fa-plus"></i>
            </button>
        </Link> 
            
      </div>
    </>
  )
}

export default Header
