import React from 'react'


 
const full_star = '<i className="fa-solid fa-star"></i>';
const half_star = '<i className="fa-solid fa-star-half"></i>' 
const starRatings = num => {
        var stars = '';
        for(let i=1;i<=num;i+=1){
            stars += full_star;
        }
        if(num > Math.floor(num)) stars += half_star;
        return stars;
}


export default function ShopDetail(props) {
    const services = props.services;
    const reviews = props.reviews;
  return (
      
    <div className='w-full md:w-9/12 mx-auto '>
        <div className='flex justify-evenly md:justify-between py-2 md:w-10/12 mx-auto'>
            <div className='md:flex '>
                <p className='text-2xl font-bold my-auto '>{props.name}</p>
                <p className='text-xl md:mx-3 font-bold my-auto'><i className="fa-solid fa-star mx-2 text-yellow-500"></i>{props.rating}</p>
            </div>

            <div className='flex text-md place-items-center font-bold'>
                <div className='mx-2'> Services </div>
                <div className='mx-2'> Reviews </div>
                <div className='mx-2 bg-darkTheme rounded-md text-white px-4 py-2'> Check-in </div>
            </div>
        </div>
        <div className=''>
            <img src={props.img} alt="salon-image" className='w-full my-2' />
        </div>

        <div className='my-10 w-10/12 mx-auto'>
            <div className='text-3xl font-bold'>Services and Pricing</div>
            {
                services.map(service => {
                    return (
                        <div className='rounded-md my-2 flex text-center py-2 shadow-md'>
                            <div className='w-8/12 text-left px-3'>
                                <p className='font-bold my-1'>{service.name}</p>
                                <p className='my-1 text-md'>{service.desc}</p>
                            </div>
                            <div className='w-2/12 my-auto'>
                            <i className="fa-solid fa-clock mx-2"></i>{service.time}
                            </div>
                            <div className='w-2/12 my-auto'>
                            <i className="fa-solid fa-indian-rupee-sign mx-2"></i>{service.price}
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='my-10 w-10/12 mx-auto'>
            <div className='text-3xl font-bold'>Reviews</div>
            {
                reviews.map(review => {
                    return (
                        <div className='my-2 p-2 border-b'>
                            <div className=''>
                                <i className="fa-solid fa-star mr-2 text-yellow-500"></i>{review.star}
                                {/* {starRatings(review.star)} */}
                                {/* <i className="fa-solid fa-star-half"></i> */}
                            </div>
                            <div className='text-md'>
                                {review.desc}
                            </div>
                            <div>
                            <p className='font-bold my-1 text-sm mx-2 text-gray-500'>{review.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
