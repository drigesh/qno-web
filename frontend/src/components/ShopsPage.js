import React,{useEffect} from 'react'
import 'react-multi-carousel/lib/styles.css';
import ShopsCarousel from './ShopsCarousel';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { setShopsData } from "../redux/actions/productActions";
import {shops_details} from '../data/data';

export default function ShopsPage() {

  const state = useSelector(state => state);
  // console.log('show state',state);

  const dispatch = useDispatch();
  const fetchDetails = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    // .catch(err => {
    //   console.log(err);
    // })
    const response = shops_details;
    dispatch(setShopsData(response));
    // console.log(response.data);
    // console.log("this is reducer state",state);
  }

  useEffect(() => {
    fetchDetails();
  },[])
    
  return (
    <div className='bg-slate-50 py-4 '>

    <ShopsCarousel/>
    
    
    </div>
  )
}
