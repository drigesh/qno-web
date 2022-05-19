import React from 'react'

export default function OwnSalonPage() {
  return (
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
            <a href='http://qnoapp.com' className='bg-green-600 p-2 rounded-md text-white font-bold'>
                Parner with Us
            </a>
            </div>
        </div>
        <div className='w-5/12'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XIbQMkuCXOSKPHyBn34oYve_osbNDM2nug&usqp=CAU' 
                className='w-full h-112'
            />
        </div>
    </div>
  )
}
