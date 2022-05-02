
import React from "react";
import searchicon from "../images/searchicon.png";
import locationimg from "../images/location.png";

 export default function Checkin(){

    return (
        <div className="text-center sm:mx-16 xl:mx-20 mt-12 ">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-mono">CHECK-IN-HERE</h1>
        <h5 className="text-l md:text-xl lg:text-2xl text-base">--and discover your waiting time--</h5>
        <div className="bg-red-500 pt-32 mt-40 pb-12 relative">
        <img src={locationimg} alt="no" className="absolute -top-44  left-1/2 -translate-x-1/2 z-10 " style={{width:"306px",heigt:"306px"}}></img>
        <div className="bg-white mx-10 rounded-full flex p-2 "> 
        <div className=""><img src={searchicon} alt="no"></img></div>
        <div className="w-full text-left px-3 pt-3 text-base  border-black">Search for salons
        <hr></hr>
        </div>
        </div>
        </div>
        </div>
    )
}