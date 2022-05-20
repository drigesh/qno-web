import React from 'react'

export default function OwnSalonPage() {
  return (
      <div className='bg-slate-100 '>
    <div className='w-9/12 mx-auto flex'>
        <div className='w-7/12 my-auto'>
            <div className='text-5xl font-bold my-4'>
                Own a Salon?
            </div>
            <div className='text-xl'>
                Do you own a salon, spa, beauty parlour and want to partner with Us?
                Join Us.
            </div>
            {/* <div></div> */}
            <div className='flex my-5'>
            <button href='http://qnoapp.com' className='bg-darkTheme py-2 px-3 rounded-md text-white font-bold'>
                Parner with Us
            </button>
            </div>
        </div>
        <div className='w-5/12'>
            <img src='./images/partner-shop-img.png' 
                className='w-10/12 mx-auto'
            />
        </div>
    </div>
    </div>
  )
}
