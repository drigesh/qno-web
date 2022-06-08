import React from 'react'
import ShopCard from './ShopCard'
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from "react-redux";
import { current_time } from '../data/data';


export default function ShopsCarousel(props) {
  const state = useSelector(state => state);
  const shopsData = state.shopsData;
  const shopArray = Object.values(shopsData);
  console.log("this is shopsData",shopsData);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        semidesktop:{
          breakpoint: { max: 1500, min: 1170 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1170, min: 800 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };    

  return (
    <div>
        <Carousel
            className='w-8/12 mx-auto'
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            //   customTransition="all .5"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {shopArray.map((shop,key) => {
              const wt = (shop.last_time - current_time)/60;
              return(<ShopCard name={shop.name} img={shop.img} wtime={wt} ratings={shop.rating} add={shop.add} key={key} id={shop.id}/>)
            })}
            
        </Carousel>;

    </div>
  )
}
