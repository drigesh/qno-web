import React, { useRef } from 'react'
import { useDetectOutsideClick } from "./useDetectOutsideClick";



export default function FrontSearch() {

  // const [dropDownLocation,setDropDownLocation] = useState(false);

  const dropDownLocationRef = useRef(null);
  const [dropDownLocation, setDropDownLocation] = useDetectOutsideClick(dropDownLocationRef, false);
  const onClickLocation = () => setDropDownLocation(!dropDownLocation);

  const dropDownServiceRef = useRef(null);
  const [dropDownService, setDropDownService] = useDetectOutsideClick(dropDownServiceRef, false);
  const onClickService = () => setDropDownService(!dropDownService);

  return (
    <div className='my-8 w-11/12 md:w-6/12 mx-auto flex h-12 rounded-md bg-white shadow-sm'>
    <div className='w-4/12 my-auto flex relative' onClick={onClickLocation} >

        <i className="fa-solid fa-location-dot text-xl mx-3 text-themeColor"></i>

        <input className='rounded-l-md' placeholder='Location'></input>

        <div className={`absolute bg-gray-50 rounded-b-md top-9 left-10 max-w-48 text-md ${dropDownLocation ? "visible" : "hidden"} z-10`} ref={dropDownLocationRef}>
          <a href='/' className='block my-2 mx-3 border-b'> Khokha IITG</a>
          <a href='/' className='block my-2 mx-3 border-b'> Market Complex IITG</a>
        </div>

        
        
    </div>
    <p className='my-auto text-2xl'> | </p>
    <div className='w-8/12 my-auto flex relative' onClick={onClickService}>
        {/* <FiSearch className=''/> */}
        <i className="fa-solid fa-magnifying-glass text-xl mx-3 text-themeColor"></i>
        <input className='w-8/12 rounded-r-md' placeholder='Services'></input>

        <div className={`absolute bg-gray-50 rounded-b-md top-9 left-10 max-w-11/12 text-md ${dropDownService ? "visible" : "hidden"} z-10`} ref={dropDownServiceRef}>
          <a href='/' className='block my-2 mx-4 border-b'> Haircut</a>
          <a href='/' className='block my-2 mx-4 border-b'> Beard</a>
          <a href='/' className='block my-2 mx-4 border-b'> Hair Color</a>
          <a href='/' className='block my-2 mx-4 '> Bleach</a>
        </div>
    </div>
    </div>
  )
}
