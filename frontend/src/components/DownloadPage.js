import React from 'react'

export default function DownloadPage() {
  return (
    <div className='bg-slate-100 py-6 pb-32 hidden md:block'>
    <div className='w-9/12 mx-auto flex '>
        <div className='w-7/12 my-auto'>
            <div className='text-5xl font-bold my-4'>
            Download our app.
            </div>
            <div className='text-xl w-11/12'>
            Check the estimated wait time and add your name to the online waiting queue or book an appointment for top-rated salons near you.
            </div>
            {/* <div></div> */}
            <div className='flex my-5'>
            <a href='http://qnoapp.com'>
                <img src='https://coindcx.com/assets/new-home/logos/android_dark_download.svg'
                className='w-40 h-12 rounded-md'
                />
            </a>
            <a href='http://qnoapp.com'>
                <img src='https://coindcx.com/assets/new-home/logos/apple_dark_download.svg'
                className='w-40 h-12 mx-4 rounded-md'
                />
            </a>
            </div>
        </div>
        <div className='w-5/12 my-auto'>
            <img src='./images/get-the-app-img.png' 
                className='w-full xl:-ml-12 '
            />
        </div>
        </div>
    </div>
  )
}
