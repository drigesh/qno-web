import React, { useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ShopDetail from './components/shopCompnents/ShopDetail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {shops_details} from './data/data';
import { setShopsData } from "./redux/actions/productActions";

export default function SelectedShop() {
  let { id } = useParams();
  console.log("my id is ", id);

  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();
  
  const fetchDetails = () => {
    if(Object.keys(state.shopsData).length === 0) {
      // console.log("I was called");
      const response = shops_details
      dispatch(setShopsData(response));
      console.log("this is response",response);
    }
  }

  useEffect(() => {
    fetchDetails();
  },[])

  const data = state.shopsData[id-1];
  console.log("this is data ",data)

  return (
    <div>
    {
      data ? 
        (<div>
        <Header val={true}/>
        <ShopDetail
        name = {data.name}
        rating = {data.rating}
        desc = {data.desc}
        img = {data.img}
        services = {data.services}
        reviews = {data.reviews}
         />
        <Footer />
        </div>)
        :
        (<div>Loading ...</div>)
    }
    </div>  
    
  )
}
