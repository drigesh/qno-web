import React from 'react'

export default function OwnSalonPage() {
  return (
      <div className='bg-slate-100 pt-32 -z-10 relative'>
    <div className='w-9/12 mx-auto sm:flex text-center'>
        <div className='sm:hidden'>
            <img src='./images/partner-shop-img.png' 
                className='w-6/12 mx-auto'
            />
        </div>
        <div className='sm:text-left sm:w-7/12 my-auto'>
            <div className='text-3xl md:text-5xl font-bold my-4'>
            Own a Hair and beauty business?
                Bring it online.
            </div>
            <div className='text-md md:text-xl'>
            qno gives maximum visibility to the salons on every channel to win over new customers.
            turn a vision into a legacy with qno.
            </div>
            {/* <div></div> */}
            <div className='flex mt-5 pb-5 justify-center'>
            <button href='http://qnoapp.com' className='sm:mr-auto bg-darkTheme py-2 px-3 rounded-md text-white font-bold'>
                Partner with Us
            </button>
            </div>
        </div>
        <div className='hidden sm:block sm:w-5/12'>
            <img src='./images/partner-shop-img.png' 
                className='w-10/12 mx-auto'
            />
        </div>
    </div>
    </div>
  )
}
