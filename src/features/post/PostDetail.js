import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { removePost } from "../post/postSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';




const PostDetail = () => {
  const posts=useSelector((state)=>state.posts)
  const {state}=useLocation()
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const {title,date,content,id}=state
  
const removeItem=()=>{
  dispatch(removePost(id))
  navigate("/")
  window.location.reload()
}


  return (
    <div className='container m-auto details p-4 mt-md-5 border border-1 border-secondary'>
      <h1 className='text-center mt-md-3'>{title}</h1>
      <p className='details-content'>{content}</p>
      <p className='text-end '>{format(new Date(date), 'MM/dd/yyyy')}</p>
      <div className='d-flex justify-content-between align-items-center btn-div'>
      <button className='border-0 bg-primary text-light fw-bold rounded-3 py-1 px-3' onClick={()=>navigate("/")}>Back To Home</button>
      <button className='border-0 bg-danger text-light fw-bold rounded-3 py-1 px-3' onClick={removeItem}>Delete</button>
      </div>
    </div>
  )
}

export default PostDetail
