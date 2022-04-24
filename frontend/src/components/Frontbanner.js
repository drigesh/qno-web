import React from "react";
import frontbannerimage from '../images/frontbanner.png';
export default function frontbanner(){
    return (
        <section className="h-auto">
        <img src={frontbannerimage} alt="frontbanner"></img>
        </section>
    );
}