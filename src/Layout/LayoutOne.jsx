import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutOne = () => {
// ----------- Redax Data
const sliceUser = useSelector((state)=> state.currentUser.value)
const navigate = useNavigate()
  useEffect(()=>{
    if(sliceUser == null){
      navigate('/login')
    }
  },[])


  return (
    <>
    
        <Navbar/>
        <Outlet/>
    
    </>
  )
}

export default LayoutOne