/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
// import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/cartslice';
import {toast} from 'react-hot-toast'

export  const Product = ({ post }) => {

  const {cart}=useSelector((state)=>(state))
  const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added Successfully")

  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error(" item removed");
  }

  return (
    <>
      <div className='flex flex-col items-center justify-between hover:scale-110 translate duration-300 ease-in shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] gap-3 p-4 mt-10 ml'>
        <div>
          <p className='text-gray-700 font-semibold test-ls truncate w-40'>{post.title}</p>
        </div>
        <div>
          <p>{post.description.split(' ').splice(0,10).join(' ')+'...'}</p> {/* Corrected typo here */}
        </div>
        <div className='h-[180px]'>
          <img src={post.image} alt="no image" className='h-full w-full'/>
        </div>
       <div className='flex justify-between gap-11'>
        <div >
            <p className='text-green-600 font-semibold'>${post.price}</p>
          </div>
          {
            cart.some((p)=>p.id==post.id)?
              (<button className='text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:text-black'  onClick={removeFromCart}>Remove</button>):
              (
                <button className='text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:text-black' onClick={addToCart}>Add item</button>

              )
          }
        </div>
       </div>
    </>
  );
};
