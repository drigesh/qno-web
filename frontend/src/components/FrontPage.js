import React, { useEffect } from 'react'
import FrontSearch from './FrontSearch'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { setFrontPageData } from "../redux/actions/productActions";


export default function FrontPage() {
  const state = useSelector(state => state);
  // console.log('show state',state);

  const dispatch = useDispatch();
  const fetchDetails = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .catch(err => {
      console.log(err);
    })
    dispatch(setFrontPageData(response.data));
    // console.log(response.data);
    // console.log("this is reducer state",state);
  }

  useEffect(() => {
    fetchDetails();
  },[])

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


      {/* Delete it */}


    </div>
  )
}
