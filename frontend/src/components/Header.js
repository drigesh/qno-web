import React, {Fragment, useState} from 'react'
import logo from './../images/qno-logo.png';

import classes from './Header.module.css';
export default function Header() {

    return (
        <Fragment>
        <div className='w-full  px-16 xl:px-40 sticky top-0 bg-white pt-2 pb-2 drop-shadow-md  z-10'>
        <div class="row align-items-center">
        <div class="col-md-2 col-6 text-left  order-1 order-md-1">
        <div class={`${classes.br_100} align-items-center order-1 order-md-1`}><img src={logo} class={`${classes.logo}`} alt="logo"></img></div>
        </div>
        <div class="col-md-8 col-sm-12 align-items-center order-3 order-md-2">
        <ul class="d-flex flex-row justify-content-center order-3 order-md-2    ">
            <li class="mx-3  mx-md-3 mx-lg-5 pt-2  hover:underline">Book Now</li>
            <li class="mx-3  mx-md-3 mx-lg-5 pt-2  hover:underline">Services</li>
            <li class="mx-3  mx-md-3 mx-lg-5 pt-2  hover:underline">About Us</li>
            <li class="mx-3  mx-md-3 mx-lg-5 pt-2  hover:underline">Contact Us</li>
            </ul>
        </div>
        <div class="col-md-2 col-6 order-md-3 order-2">
        <div class="align-items-center hover:underline order-2 order-md-3 text-right text-right ">Profile</div>
        </div>
        </div>
        </div>
        </Fragment>
    )
}
