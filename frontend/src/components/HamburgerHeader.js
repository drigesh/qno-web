import { useState } from "react"; // import state
import logo from './../images/qno-logo.png';
import classes from './Header.module.css';
import userimage from './../images/userimage.png';



export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  py-8 bg-[#088E74] px-8 md:px-16 xl:px-40 sticky top-0 z-40 text-xs  sm:text-sm md:text-base text-white lg:text-lg pt-2 pb-2 drop-shadow-md container-fluid">
      <a href="/">
      <img src={logo} class={`${classes.logo}`} alt="logo"></img>
      </a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center text-white text-base -bold justify-content-between ">
            <li className=" my-6 uppercase">
            <a href="/">
            <img src={userimage} class={`${classes.userimage}`} alt="userimage"></img>
            </a>
            </li>  
            <li className="border-b border-gray-400 my-6 uppercase">
              <a  className="hover:text-green" href="/about">Book Now</a>
              </li>
              <li className="border-b border-gray-400 my-6 uppercase">
              <a className="hover:text-green" href="/portfolio">Services</a>
            </li>
            <li className="border-b border-gray-400 my-6 uppercase">
            <a className="hover:text-green" href="/contact">About Us</a>
          </li>
              <li className="border-b border-gray-400 my-6 uppercase">
              <a className="hover:text-green" href="/contact">Contact Us</a>
              </li>

            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex justify-content-between align-items-center text-base  sm:text-sm md:text-base text-white lg:text-lg">
   
        <li>
            <a  className="hover:text-green" href="/about">Book Now</a>
          </li>
          <li>
            <a className="hover:text-green" href="/portfolio">Services</a>
          </li>
          <li>
            <a className="hover:text-green" href="/contact">About Us</a>
          </li>
          <li>
          <a className="hover:text-green" href="/contact">Contact Us</a>
        </li>
     
 
        <li>
        <a href="/">
        <img src={userimage} class={`${classes.userimage}`} alt="userimage"></img>
        </a>
      </li>

        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background:#088E74;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}