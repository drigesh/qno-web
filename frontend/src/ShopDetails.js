import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ShopDetail from './components/shopDetails/ShopDetail';


const services = [{
    name: 'hair cut',
    desc: 'hair cut by scissors',
    time: '15 min',
    price: '100'
  },
  {
    name: 'hair cut',
    desc: 'hair cut by scissors',
    time: '15 min',
    price: '100'
  },
  {
    name: 'hair cut',
    desc: 'hair cut by scissors',
    time: '15 min',
    price: '100'
  },
  {
    name: 'hair cut',
    desc: 'hair cut by scissors',
    time: '15 min',
    price: '100'
  }]
  
  const reviews = [{
    name:'Abu Bakar Siddik',
    sub:'Best Product',
    desc:'This is the best product I have ever used.',
    star: 4.5
  },
  {
    name:'Abu Bakar Siddik',
    sub:'Best Product',
    desc:'This is the best product I have ever used.',
    star: 4.5
  },
  {
    name:'Abu Bakar Siddik',
    sub:'Best Product',
    desc:'This is the best product I have ever used.',
    star: 4.5
  },
  {
    name:'Abu Bakar Siddik',
    sub:'Best Product',
    desc:'This is the best product I have ever used.',
    star: 4.5
  }]


export default function ShopDetails() {
  return (
    <div>
        <Header val={true}/>
        <ShopDetail
        name = "Khokha 1"
        rating = {4.5}
        desc = "1st Shop in Khokha provides good services."
        img = "https://picsum.photos/800/200"
        services = {services}
        reviews = {reviews}
         />
        <Footer />
    </div>  
    
  )
}
