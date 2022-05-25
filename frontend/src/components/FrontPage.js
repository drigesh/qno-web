import React from 'react'

import './FrontPage.css'
import FrontSearch from './FrontSearch'

export default function FrontPage() {
  return (
    <div className='w-full text-center'>
        <div className='w-full absolute'>
            <img src="/images/qno-dark-trans.png" alt='qno-image' className='mx-auto mt-32 w-48'/>
            <p className=' text-2xl font-bold my-4 text-themeColor'> Check the estimated wait time in top salons near you. </p>
            <FrontSearch />

            

        </div>
        {/* <img src='/images/front-map-light.png'   */}
        <img src='/images/40 min.png'  
        alt='bg-image'
        className='lg:w-full object-cover h-104'/>
        
    </div>
  )
}
