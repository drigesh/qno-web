import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-t to-teal-700 from-green-500 w-full text-white '>            
        
        <div className='w-9/12 sm:w-11/12 md:w-9/12 mx-auto text-center flex-wrap flex pt-6 justify-center'>

            <div className='w-full sm:w-4/12 '>
                <img src='./images/qno-trans-white.png' className=' w-32 mx-auto'/>
                <div className='mx-2 my-3'>
                    Qno is one stop destination for all your salon needs. Use QNO for hassle free Experience.
                </div>
            
            </div>
            <div className='w-6/12 sm:w-2/12 sm:mx-2'>
            <div className='text-lg my-3 font-bold'>
                    COMMUNITY
                </div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>LookBook</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Blogs</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Guide</a></div>
            </div>
            <div className='w-6/12 sm:w-2/12 sm:mx-2'>
            <div className='text-lg my-3 font-bold'>
                    ABOUT QNO
                </div>
                <div className='my-1'><a href="/aboutus" className='hover:underline hover:text-gray-100'>About Us</a></div>
                <div className='my-1'><a href="/contactus" className='hover:underline hover:text-gray-100'>Contact Us</a></div>
                <div className='my-1'><a href="/" className='hover:underline hover:text-gray-100'>Partner With Us</a></div>
            </div>
            <div className='w-full sm:w-3/12'>

                <div className='text-lg my-3 text-center font-bold'>
                    SOCIAL LINKS
                </div>

                <div className='flex justify-center'>
                    <i className="fa-brands fa-linkedin text-2xl m-1"></i>
                    <i className="fa-brands fa-instagram-square text-2xl m-1"></i>
                    <i className="fa-brands fa-facebook-square text-2xl m-1"></i>
                    <i className="fa-brands fa-twitter-square text-2xl m-1"></i>
                    <i className="fa-brands fa-youtube-square text-2xl m-1"></i>
                </div>
                
                <div className='my-2 hidden sm:block'>
                    <a href='http://qnoapp.com'>
                        <img src='https://coindcx.com/assets/new-home/logos/android_dark_download.svg'
                        className='w-32 h-10 rounded-lg mx-auto'
                        />
                    </a>
                </div>
                <div className='my-2 hidden sm:block'>
                    <a href='http://qnoapp.com' >
                        <img src='https://coindcx.com/assets/new-home/logos/apple_dark_download.svg'
                        className='w-32 h-10 rounded-lg mx-auto'
                        />
                    </a>
                </div>
            </div>
        </div>
        <div className='w-full sm:w-9/12 flex mx-auto text-right'>
            <div className='flex justify-end w-6/12'>
                
            </div>
        </div>
        <div className='text-sm py-2 text-center'>
            Copyright 2022 © QNO Pvt Ltd. All rights reserved.
        </div>

    </div>
  )
}
