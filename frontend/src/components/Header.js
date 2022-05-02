import React, {Fragment} from 'react'
import logo from './../images/qno-logo.png';

import classes from './Header.module.css';
export default function Header() {

    return (
        <Fragment>
        <div className='w-full "row align-items-center bg-[#088E74]" px-16 xl:px-40 sticky top-0 z-40 relative text-xs sm:text-sm md:text-base lg:text-lg pt-2 pb-2 drop-shadow-md container-fluid bg-[#088E74]} z-10' style={{ backgroundColor: "#088E74" }}>
      <div class="row align-items-center text-white"> 
        <div class="col-md-2 col-6 text-left  order-1 order-md-1">
        <div class={`${classes.br_100} align-items-center order-1 order-md-1`}><img src={logo} class={`${classes.logo}`} alt="logo"></img></div>
        </div>
        <div class="col-md-8 col-sm-12 align-items-center order-3 order-md-2">
        <ul class="d-flex flex-row justify-content-center order-3 order-md-2    ">
            <li class="mx-3  mx-md-3 mx-lg-4 pt-2  hover:underline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Book Now</li>
            <li class="mx-3  mx-md-3 mx-lg-4 pt-2  hover:underline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Services</li>
            <li class="mx-3  mx-md-3 mx-lg-4 pt-2  hover:underline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">About Us</li>
            <li class="mx-3  mx-md-3 mx-lg-4 pt-2  hover:underline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Contact Us</li>
            </ul>
        </div>
        <div class="col-md-2 col-6 order-md-3 order-2">
        <div class="align-items-center hover:underline order-2 order-md-3 text-right text-right  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Profile</div>
        </div>
        </div>
        </div>
        </Fragment>
    )
}
