import React from 'react'


 
// const full_star = '<i className="fa-solid fa-star"></i>';
// const half_star = '<i className="fa-solid fa-star-half"></i>' 
// const starRatings = num => {
//         var stars = '';
//         for(let i=1;i<=num;i+=1){
//             stars += full_star;
//         }
//         if(num > Math.floor(num)) stars += half_star;
//         return stars;
// }


export default function ShopDetail(props) {
    const services = props.services;
    const reviews = props.reviews;
  return (
      
    <div className='w-full md:w-9/12 mx-auto mt-4'>
        <div className='flex justify-evenly md:justify-between py-2 md:w-10/12 mx-auto'>
            <div className='md:flex '>
                <p className='text-2xl font-bold my-auto '>{props.name}</p>
                <p className='text-xl md:mx-3 font-bold my-auto'><i className="fa-solid fa-star mx-2 text-yellow-500"></i>{props.rating}</p>
            </div>

            <div className='flex text-md place-items-center font-bold'>
                <div className='mx-3' > <a href='#services' className='hover:text-black'>  Services </a> </div>
                <div className='mx-3' > <a href='#reviews' className='hover:text-black'> Reviews </a> </div>
                <div className='mx-2 bg-darkTheme rounded-md text-white px-4 py-2'> Check-in </div>
            </div>
        </div>
        <div className=''>
            <img src={props.img} alt="salon-image" className='md:w-10/12 mx-auto my-2 h-52' />
        </div>

        <div className='my-10 w-10/12 mx-auto'>
            <div className='text-3xl font-bold' id='services'>Services and Pricing</div>
            {
                Object.keys(services).map((service,key) => {
                    return (
                        <div className='rounded-md my-2 flex text-center py-2 shadow-md'>
                            <div className='w-8/12 text-left px-3'>
                                <p className='font-bold my-1'>{services[service].name}</p>
                                <p className='my-1 text-md'>{services[service].desc}</p>
                            </div>
                            <div className='w-2/12 my-auto'>
                            <i className="fa-solid fa-clock mx-2"></i>{services[service].time}
                            </div>
                            <div className='w-2/12 my-auto'>
                            <i className="fa-solid fa-indian-rupee-sign mx-2"></i>{services[service].price}
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='my-10 w-10/12 mx-auto'>
            <div className='text-3xl font-bold' id='reviews'>Reviews</div>
            {
                reviews.map(review => {
                    return (
                        <div className='my-2 p-2 border-b'>
                            <div className=''>
                                <i className="fa-solid fa-star mr-2 text-yellow-500"></i>{review.rating}
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
