import React from "react";
import icon from '../images/Icon.png';
import icon2 from '../images/Icon-2.png';
import icon3 from '../images/Icon-3.png';
import icon1 from '../images/Icon-1.png';

export default function Features(){
return(
    <div className="pt-16  mt-16 pb-16" style={{backgroundImage:"url('../images/featuresbg.png')"}}>
    <div className="bg-[#AFE5DAD9] row pt-12 pb-14 px-16 m-0 lg:px-40 xl:px-64">
    <div className="col-12 text-center mb-2">
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">FEATURES</h1>
    <h5 className="text-l md:text-xl lg:text-2xl text-base">--to make your--</h5>
    <h6 className="text-l md:text-xl lg:text-2xl text-base">life easier</h6>
    </div>
    <div className="col-md-3 px-0 text-center md:border-r-2 border-black " >
    <img className="mx-auto   px-24 sm:px-12"  src={icon} alt="icon"></img>
    <p className="px-2 mt-2">Check the real time status of saloons</p>
    </div>
    <div className="col-md-3 px-0 text-center md:border-r-2 border-black ">  
     <img className="mx-auto  px-24 sm:px-12"  src={icon1} alt="icon"></img>
    <p className="px-2 mt-2">Check the real time status of saloons</p></div>
    <div className="col-md-3 px-0 text-center md:border-r-2 border-black ">  
      <img className="mx-auto px-24 sm:px-12 "  src={icon2} alt="icon"></img>
    <p className="px-2 mt-2">Check the real time status of saloons</p></div>
    <div className="col-md-3 px-0 text-center">   
     <img className="mx-auto  px-24 sm:px-12"   src={icon3} alt="icon"></img>
    <p className="px-2 mt-2">Check the real time status of saloons</p></div>
    </div>
    </div>
);
};