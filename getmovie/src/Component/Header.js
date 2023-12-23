import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Appstate } from '../App'
import swal from 'sweetalert'
import { signOut } from 'firebase/auth';
import { Auth } from '../Firebase';


const Header = () => {
  const Appstateuse=useContext(Appstate);
  const navigation=useNavigate();
  const {Setlogin}=useContext(Appstate);
  const handleLogOut=async(e)=>{
    e.preventDefault();
    try {
      await signOut(Auth);
      swal({
        title:"Come back Soon?",
        icon:"success",
        buttons:false,
        timer:1000
      })
      Setlogin(false);
      navigation('/login');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='text-3xl  font-bold p-3 border-b-2 border-white-500 flex justify-between items-center'>
      <Link to={'/'}>  <span>Get <span className='text-red-500'>Movies</span></span></Link>
      {Appstateuse.login ?
      <div>
       <Link to={'/addmovie'}>
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' >
          Add Movies <i class="fa-solid fa-plus"></i>
            </button>
        </Link> 
        <button className='text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2' onClick={handleLogOut}>
          Logout </button>
            </div>
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
