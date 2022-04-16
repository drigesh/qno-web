import React from "react";
import logo from "./../images/qno-logo-transparent.png";

import classes from "./Footer.module.css";

export default function Footer1() {
  return (
    <div
      className={`container-fluid text-center mb-2 px-16  sm:pt-4 md:pb-4 md:pt-16 xl:pt-20  xl:px-40 `}
      style={{ backgroundColor: "#7B7B7B" }}
    >
      <div class="row mb-6 justify-content-between ">
        <div class="col-md-12 col-lg-1 col-12 d-flex justify-content-center p-0">
          <img src={logo} class={`${classes.logo}`}></img>
        </div>
        <div class={`col-12 my-2 col-lg-5 text-left `}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt dfhjaf sjfd
 </div>
        <div class="col-12 col-lg-5   mt-4">
        <div className='font- d-flex   flex-lg-row justify-content-around'>
                            <a className={`block text-center ${classes.font_poppins} `}> About </a>
                            <a className={`block text-center ${classes.font_poppins} `}> Features </a>
                            <a className={`block text-center ${classes.font_poppins} `}> services </a>
                            <a className={`block text-center ${classes.font_poppins} `}> contact </a>
                        </div>
        </div>
      </div>

    <div class="row mb-6 mt-3 align-items-center ">
    <div class=" col-12 col-md-4 mt-auto mb-2  order-1">9144493485</div>
    <div class=" col-12 col-md-8 col-lg-6 offset-lg-2 mb-2  mt-3 d-flex justify-content-around order-3 order-md-2justify-content-sm-around">
 
    <div><i className="fab fa-twitter-square md:mx-1 lg:mx-2 fa-2x"></i></div>
    <div><i className="fab fa-facebook-square md:mx-1 lg:mx-2 fa-2x"></i></div>
    <div><i className="fab fa-linkedin md:mx-1 lg:mx-2 fa-2x"></i></div>
    <div><i className="fab fa-instagram-square md:mx-1 lg:mx-2 mr-auto fa-2x"></i></div>
    </div>
    

    
    <div class="col-12 order-2 col-md-4 order-md-3">xyz@gmail.com</div>
   
    <div class="col-12 col-md-8 col-lg-6 offset-lg-2 order-4 order-md-4 mt-2 row d-flex justify-content-around no-gutters ">

 

    <a className='col-6 offest-3 my-2 col-sm-4 mx-2 flex border-1 rounded-lg  text-2xl py-1 px-2 border-black'>
    <i className="fab fa-google-play my-auto"></i> <p className=' my-auto ml-2'>Play Store </p>
</a>
<a className='col-6 offset-3 my-2 col-sm-4 mx-2 flex border-1 rounded-lg text-2xl py-1 px-2 border-black'>
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
