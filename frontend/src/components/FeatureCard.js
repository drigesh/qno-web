import React from 'react'
export default function FeatureCard(props) {
  return (
    <div className='w-full md:w-1/2 lg:w-1/4 text-center my-2 drop-shadow-md'>
        <div className='bg-white m-2 rounded-xl px-1 pb-2'>
            <i className={`mt-3 mb-2 fas ${props.icon} text-2xl md:text-3xl text-themeColor-700 text-themeColor`}></i>
          <p className='text-base md:text-lg font-bold border-t-1 border-black my-1'> {props.head} </p>
          <p className='text-sm md:text-base'>{props.desc}</p>
        </div>
    </div>
  )
}
