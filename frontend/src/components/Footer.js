import React from 'react'

export default function Footer() {
  return (
    <div className='bg-darkTheme w-full text-white '>
        {/* <div className='w-9/12 mx-auto py-3 flex justify-between'>
            <div className='w-3/12'>
                <img src='./images/qno-trans-white.png' className='mx-auto w-32'/>
            </div>
        </div>

            <div className='w-3/12'>
                <button className='w-40 mt-3  py-2 bg-white text-gray-600 rounded-md font-bold text-xl'> Guwahati </button>
            </div> */}
            
        
        <div className='w-9/12 mx-auto flex pt-6 justify-center'>

            <div className='w-4/12 '>
                <img src='./images/qno-trans-white.png' className=' w-32'/>
                <div className='mx-2 my-3'>
                    Qno is one stop destination for all your salon needs. Use QNO for hassle free Experience.
                </div>
            
                {/* <div className=''>
                    <p className='m-1 px-2 text-sm'>Phone: +91 6264179044</p>
                    <p className='m-1 px-2 text-sm'>Email: qnoindia@gmail.com</p>
                    <p className='m-1 px-2 text-sm'>Address: IIT Guwahati (Assam)</p>
                </div> */}
            </div>
            <div className='w-2/12 mx-2'>
            <div className='text-lg my-3'>
                    COMMUNITY
                </div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>LookBook</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Blogs</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Guide</a></div>
            </div>
            <div className='w-2/12 mx-2'>
            <div className='text-lg my-3'>
                    ABOUT QNO
                </div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>About Us</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Contact Us</a></div>
                <div className='my-1'><a href="http://qnoapp.com" className='hover:underline hover:text-gray-100'>Partner With Us</a></div>
            </div>
            <div className='w-3/12'>

                <div className='text-lg my-3 text-center'>
                    SOCIAL LINKS
                </div>

                <div className='flex justify-center'>
                    <i className="fa-brands fa-linkedin text-2xl m-1"></i>
                    <i className="fa-brands fa-instagram-square text-2xl m-1"></i>
                    <i className="fa-brands fa-facebook-square text-2xl m-1"></i>
                    <i className="fa-brands fa-twitter-square text-2xl m-1"></i>
                    <i className="fa-brands fa-youtube-square text-2xl m-1"></i>
                </div>
                
                <div className='my-2'>
                    <a href='http://qnoapp.com'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-RsGSnFAr00Dzhk6MZXlXQcC7vVZLaSxEg&usqp=CAU'
                        className='w-32 h-10 rounded-lg mx-auto'
                        />
                    </a>
                </div>
                <div className='my-2'>
                    <a href='http://qnoapp.com' >
                        <img src='https://e7.pngegg.com/pngimages/316/826/png-clipart-etazhi-app-store-logo-brand-font-google-play-apple-store-text-logo.png'
                        className='w-32 h-10 rounded-lg mx-auto'
                        />
                    </a>
                </div>
                

            </div>
        </div>
        <div className='w-9/12 flex mx-auto text-right'>
            
        
            <div className='flex justify-end w-6/12'>
                
            </div>
        </div>
        <div className='text-sm py-2 text-center'>
            Copyright 2022 © QNO Pvt Ltd. All rights reserved.
        </div>

    </div>
  )
}
