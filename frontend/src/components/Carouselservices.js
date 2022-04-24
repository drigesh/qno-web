import React from "react";
import Carousel from 'react-elastic-carousel';
import Cardservices from "./Cardservices";
import './Carouselservices.css';
import data from "../data/carouselimagedata";

export default function Carouselservices(){

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

return (
    <div className="bg-[#AFE5DA] text-center mt-16 sm:mx-16 xl:mx-20 pb-10 px-9 sm:px-12 md:px-40">
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl pt-2 sm:pt-12 font-bold" >SERVICES</h1>
    <h6 className="pb-8 text-l md:text-xl lg:text-2xl text-base">----we provide----</h6>
    <Carousel className="px-2 md:px-12 lg:px-24" breakPoints={breakpoints} enableAutoPlay autoPlaySpeed={3000} >
  {map}
    </Carousel>
    </div>
)
}