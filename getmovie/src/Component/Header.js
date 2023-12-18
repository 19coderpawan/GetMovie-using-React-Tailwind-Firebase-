import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Appstate } from '../App'

const Header = () => {
  const Appstateuse=useContext(Appstate);
  return (
    <>
      <div className='text-3xl  font-bold p-3 border-b-2 border-white-500 flex justify-between items-center'>
      <Link to={'/'}>  <span>Get <span className='text-red-500'>Movies</span></span></Link>
      {Appstateuse.login ?
       <Link to={'/addmovie'}>
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' >
          Add Movies <i class="fa-solid fa-plus"></i>
            </button>
        </Link> 
        :
        <Link to={'/Login'}>
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' >
          Login 
            </button>
        </Link> 
      }
      </div>
    </>
  )
}

export default Header
