import React from "react";
import logo from "./../images/qno-logo-transparent.png";

import classes from "./Footer.module.css";

export default function Footer1() {
  return (
    <div
      className={`container-fluid text-center   px-16 xl:px-40 sm:pt-4 md:pb-4 pt-4 md:pt-16 xl:pt-20   `}
      style={{ backgroundColor: "#088E74" }}
    >
      <div class="row mb-6 justify-content-between ">
        <div class="col-md-12 col-lg-1 col-12 d-flex justify-content-center p-0">
          <img src={logo} alt='no' class={`${classes.logo}`}></img>
        </div>
        <div class={`col-12 my-2 col-lg-5 text-left `}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt dfhjaf sjfd
 </div>
        <div class="col-12 col-lg-5   mt-4">
        <div className='font- d-flex   flex-lg-row justify-content-around'>
                            <a className={`block text-center ${classes.font_poppins} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125  duration-300`}href='#w'> About </a>
                            <a className={`block text-center ${classes.font_poppins} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125  duration-300`}href='#w'> Features </a>
                            <a className={`block text-center ${classes.font_poppins} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125  duration-300`}href='#w'> services </a>
                            <a className={`block text-center ${classes.font_poppins} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125  duration-300`}href='#w'> contact </a>
                        </div>
        </div>
      </div>

    <div class="row mb-6 mt-3 align-items-center ">
    <div class=" col-12 col-md-4 mt-auto mb-2  order-1">9144493485</div>
    <div class=" col-12 col-md-8 col-lg-6 offset-lg-2 mb-2  mt-3 d-flex justify-content-around order-3 order-md-2justify-content-sm-around">
 
    <div><i className="fab fa-twitter-square md:mx-1 lg:mx-2 fa-2x transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"></i></div>
    <div><i className="fab fa-facebook-square md:mx-1 lg:mx-2 fa-2x transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"></i></div>
    <div><i className="fab fa-linkedin md:mx-1 lg:mx-2 fa-2x transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"></i></div>
    <div><i className="fab fa-instagram-square md:mx-1 lg:mx-2 mr-auto fa-2x transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"></i></div>
    </div>
    

    
    <div class="col-12 order-2 col-md-4 order-md-3">xyz@gmail.com</div>
   
    <div class="col-12 col-md-8 col-lg-6 offset-lg-2 order-4 order-md-4 mt-2 row d-flex justify-content-around no-gutters  ">
<a className='col-8 offest-2 offset-sm-3 my-2 col-sm-5 mx-2 flex border-1 rounded-lg  text-2xl py-1 px-2 border-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' href='#w'>
    <i className="fab fa-google-play my-auto"></i> <p className=' my-auto ml-2'>Play Store </p>
</a>
<a className='col-8 offset-2 offset-sm-3 my-2 col-sm-5 mx-2  flex border-1 rounded-lg text-2xl py-1 px-2 border-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' href='#w'>
    <i className="fab fa-app-store-ios my-auto"></i> <p className=' my-auto ml-2'>App Store </p>
</a>
    </div>
  

    </div>

    <div class={`row ${classes.padlicenseb}`}>
    <div class="col-md-12 ">© Copyright 2022 @ The Clippp Pvt Ltd | All rights reserved</div>
    </div>
    </div>
  );
}
