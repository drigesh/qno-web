import React from "react";
import Carousel from 'react-elastic-carousel';
import Cardservices from "./Cardservices";

import tcardimg from "../images/tcardimg.png";
import t1 from "../images/t1.jpeg";
import t2 from "../images/t2.jpeg";
import t3 from "../images/t3.jpeg";
import t4 from "../images/t4.jpeg";

import star from "../images/Star1.png";

import data from "../data/carouselimagedata";

export default function Testimonial() {

    const map=data.map(item => {
        console.log(item.image);
        return(
            <Cardservices img={item.image} text={item.text}/>
        )
    })
const breakpoints=[
    {width:300 ,itemsToShow:1},
    {width:440 ,itemsToShow:2},
    {width:700 ,itemsToShow:3},
]

  return (<div style={{ backgroundImage: "url('../images/testimonials.png')" }} className="pt-16 pb-40 mt-16 mb-8 bg-contain bg-cover">

  <div className="bg-[#AFE5DAD9]   sm:mx-16 xl:mx-20 pt-12 pb-14 ">
  <div className="text-center"><h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-mono">TESTEMONIALS</h1><p className="text-l md:text-xl lg:text-2xl text-base">------by customers------</p></div>
    <div
      className="grid grid-cols-4 gap-3 text-left mt-8 px-2 md:mx-20 lg:mx-16 xl:px-40 grid-rows-2 "
    >
    
      <div className=" row-span-2 col-end-5 bg-[#EAEAEA] col-span-5 lg:col-span-2 p-4 flex">
        <div className="br-full w-36">
          <img
            src={t1}
            className="object-fill rounded-full"
            alt="card"
          ></img>
        </div>
        <div className="pl-4">
        <div className="">
        <p className=" text-sm md:text-base text-[#737373] font-bold ">it's accutate to the core,tracks the waiting time in salons around me,
        allows me to check in ,adds name to wait list, and incredible one!</p></div>
        <div className="flex flex-verticle mt-3">
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        </div>
      </div>
      </div>
      <div className=" col-span-5 row-span-2 lg:col-span-2 p-4 bg-[#EAEAEA] flex">
        <div className="br-full w-36">
          <img
            src={t2}
            
            className="object-fill rounded-full "
            alt="card"
          ></img>
        </div>
        <div className="pl-4  text-sm md:text-base"><p className="text-[#737373] font-bold">very thankful for being an absolute saviour.I use it whenever I head to
        the salon jkfdsjkd dfshhjdf odsh oidhhf diof odeisf oisfisd</p>
        <div className="flex flex-verticle mt-3 md:mt-3">
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        </div>
        </div>
        
        
      </div>
      <div className=" col-span-5 lg:col-span-2 row-span-2 p-4 bg-[#EAEAEA]  flex">
        <div className="br-full w-36">
          <img
            src={t3}
            
            className="object-fill  rounded-full "
            alt="card"
          ></img>
        </div>
        <div className="pl-4  text-sm md:text-base"><p className="text-[#737373] font-bold">Incredible.Knowing the approx waitning time in a salon by simply check
        in, allows me to spend the waiting time on better things.</p>
        <div className="flex flex-verticle mt-3">
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        </div>
        </div>

      </div>
      <div className=" col-span-5 row-span-2 lg:col-span-2 p-4 bg-[#EAEAEA] flex">
        <div className="br-full w-36">
          <img
            src={t4}
            
            className="object-fill rounded-full"
            alt="card"
          ></img>
        </div>
        <div className="pl-4  text-sm md:text-base"><p className="text-[#737373]  font-bold">I no longer wait in a salon for my tuen.This service help me check in
        quality and know the approximate waitiing time and it is insane!</p> 
        <div className="flex flex-verticle mt-3">
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        <img src={star} style={{height:"22px",width:"22px"}} className="mx-2" alt="fdsjl"></img>
        </div>
        </div>
      </div>
    </div>
    <div className="mt-12 md:mt-28 text-center px-2 md:mx-40 pb-12 xl:px-40">
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl pt-2 sm:pt-12 font-bold font-mono" >OUR TEAM</h1>
    <h6 className="pb-8 text-l md:text-xl lg:text-2xl text-base">--to make it happen--</h6>
    <Carousel className="px-2 md:px-12 lg:px-24" breakPoints={breakpoints} enableAutoPlay autoPlaySpeed={3000} >
    {map}
    </Carousel>
    </div>
    </div>
    </div>
  );
}
