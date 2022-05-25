import React from 'react'
export default function Header(props) {
  return (
    <div className={`${ props.val ? 'shadow-md' : 'absolute'}  w-full  z-10`}>
        <div className='w-full md:w-9/12 flex mx-auto'>
            {props.val? 
            <div className='w-3/12 mx-3 flex place-items-center'>
                <a href='/'> <img src='/images/qno-trans.png' className='w-20'/></a>
            </div>
            : 
            <div className='w-3/12 m-3 flex '>
            <i class="fa-solid fa-circle-down my-auto mx-2 text-md"></i>
            <p className=' hover:underline text-sm'>Get the app</p>
            </div>}
            <div className='w-9/12 flex justify-end '>
                <div className='hover:underline m-3'>
                    LookBook
                </div>
                <div className='hover:underline m-3'>
                    Blogs
                </div>
                <div className='hover:underline m-3'>
                    Sign In
                </div>
                <div className='hover:underline m-3'>
                    Sign up
                </div>
            </div>

        </div>
    </div>
  )
}
