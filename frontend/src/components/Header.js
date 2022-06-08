import React, {useState} from 'react'
import SignIn from './SignIn';


export default function Header(props) {

    const [show,setShow] = useState(false);

    const [sign,setSign] = useState(1);
    const handleTabChange0 = () =>{
        setSign(0);
        setShow(true);
    }
    const handleTabChange1 = () =>{
        setSign(1);
        setShow(true);
    }




  return (
    <div className={`${ props.val ? 'shadow-md' : 'absolute'}  w-full  z-10`}>
        <SignIn show={show} setShow={setShow} sign={sign} handleTabChange0={handleTabChange0} handleTabChange1={handleTabChange1} />
        <div className='w-full md:w-9/12 flex mx-auto'>
            {props.val? 
            <div className='w-3/12 mx-3 flex place-items-center'>
                <a href='/'> <img src='/images/qno-trans.png' className='w-20'/></a>
            </div>
            : 
            <div className='w-3/12 m-3 flex '>
            <i className="fa-solid fa-circle-down my-auto mx-2 text-md"></i>
            <p className=' hover:underline text-sm'>Get the app</p>
            </div>}
            <div className='w-9/12 flex justify-end '>
                <div className='hover:underline m-3'>
                    LookBook
                </div>
                <div className='hover:underline m-3'>
                    Blogs
                </div>
                <div className='hover:underline m-3' onClick={handleTabChange1}>
                    Sign In
                </div>
                <div className='hover:underline m-3' onClick={handleTabChange0}>
                    Sign up
                </div>
            </div>

        </div>
    </div>
  )
}
