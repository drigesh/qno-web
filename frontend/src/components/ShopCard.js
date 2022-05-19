import React from 'react'
import {FaStar} from 'react-icons/fa'

export default function ShopCard(props) {
  return (
    <div className='box-border w-60 bg-white mt-3 mb-8 mx-auto rounded-xl '>
        <img src={props.img} alt="shops_img" className='h-44 w-full rounded-t-xl'/>

        <div className='border-1 border-gray-300 rounded-b-xl h-24 relative'>
            <div className='px-2'>
                <p className='text-md font-bold mt-1'>{props.name}</p>
                <p className='text-xs p-0'>{props.add}</p>
            </div>
            <div className='flex w-full bottom-2 px-3 absolute'>
                <p className='font-bold text-md w-4/12'>{props.wtime}</p>
                
                <p className='font-bold text-md w-8/12 text-end'> 
                <FaStar className='text-yellow-500 text-md inline-block mx-2 mb-1'/>
                {props.ratings}</p>
                
            </div>
        </div>
    </div>
  )
}
