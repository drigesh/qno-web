import React from 'react'
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function ShopCard(props) {
  const min = props.wtime % 60;
  const hr = Math.floor(props.wtime/60)
  return (
    <div className='box-border w-60 bg-white mt-3 mb-8 mx-auto rounded-xl '>
      <Link to = {`shop/${props.id}`} className='hover:text-black'>
        <img src={props.img} alt="shops_img" className='h-44 w-full rounded-t-xl'/>

        <div className='border-1 border-gray-300 rounded-b-xl h-24 relative'>
            <div className='px-2'>
                <p className='text-md font-bold mt-1'>{props.name}</p>
                <p className='text-xs p-0'>{props.add}</p>
            </div>
            <div className='flex w-full bottom-2 px-2 absolute'>
                <p className='font-bold text-md w-4/12'><i className="fa-regular fa-clock pr-2 text-sm"></i>{hr < 10 ? '0'+hr : hr}:{min < 10 ? '0'+min : min}</p>
                
                <p className='font-bold text-md w-8/12 text-end'> 
                <FaStar className='text-yellow-500 text-md inline-block mx-2 mb-1'/>
                {props.ratings}</p>
                
            </div>
        </div>
        </Link>
    </div>
  )
}
