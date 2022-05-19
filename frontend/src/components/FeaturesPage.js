import React from 'react'
import FeatureCard from './FeatureCard'

export default function FeaturesPage() {
  return (
    <div className='bg-white'>
        <div className='w-9/12 mx-auto pt-2'>

            <div className='text-5xl font-bold my-6'>
                Features we provide.
            </div>

            <div className='flex justify-evenly flex-wrap my-10'>
                <FeatureCard icon={'fas fa-check-circle'} head={'Easy Online Check-In'} desc= {'Check-in online with App/website and head to the salon before your turn.'} />
                <FeatureCard icon={'fas fa-clock'} head={'Save your valuable time'} desc= {'Now dont need to be in Salon. Just discover real-time waiting time on the Clippp.'} />
                <FeatureCard icon={'fas fa-map-marked-alt'} head={'Discover nearby Salon'} desc= {'Click on the map or type the location, and find all the saloons nearby.'} />
                <FeatureCard icon={'fas fa-clipboard'} head={'Get similar requirements as before'} desc= {'Have a option to get the style as you took last time.'} />

            </div>


        </div>
    </div>
  )
}
