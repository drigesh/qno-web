import React from 'react'
import ShopCard from './ShopCard'
import Carousel from 'react-multi-carousel';

export default function ShopsCarousel(props) {


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
            <ShopCard name='Khoka 1' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Khokha 1'/>
            <ShopCard name='Khokha 2' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Khokha 2'/>
            <ShopCard name='Khokha 3' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Khokha 3'/>
            <ShopCard name='Market Complex 1' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Market Complex 1'/>
            <ShopCard name='Market Complex 2' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Market Complex 2'/>
            <ShopCard name='Market Complex 3' img='https://picsum.photos/400' wtime='10 min' ratings='4.5' add='Market Complex 3'/>
        </Carousel>;

    </div>
  )
}
