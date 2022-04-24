import React, { Fragment } from "react";
import descriptionimage from '../images/creative.png'
export default function Servicesdescription(){
    return (<Fragment>
    <div className="h-28 bg-gradient-to-b from-[#008B70]"></div>
    <div className=" px-16 xl:px-40 ">
    <div className="row mb-4 mt-4 align-items-center">
    <div className="col-12 col-sm-6  p-0">
    <img className="mx-auto object-scale-down" style={{height:'auto',width:'auto'}}  src={descriptionimage} alt="iamge"></img>
    </div>
    <div className="col-12 col-sm-6  p-0 ">
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-left  ">WE HELP YOU GET QUICK SERVICE</h1>
    <p className="text-l md:text-xl lg:text-2xl mt-px mb-px text-left">--and save time</p>
    <p className="text-sm sm:text-base lg:text-xl ">Have you been waiting for hours to get a haircut? Worry not. 
    We provide the quickest and the most efficient way out of this. From finding the top-rated salons, spas and parlors near you with their   real -time status to suggesting the best haircut that matches your style, QNO does all of it for you with just a click. 
    So Book your appointment now and enjoy the waiting free service.
    </p>
    </div>
    </div>
    </div>
    </Fragment>
)
};