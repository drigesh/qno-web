import React from 'react'
import FeatureCard from './FeatureCard'

export default function FeaturesPage() {
  return (
    <div className='bg-white'>
        <div className='w-11/12 sm:w-9/12 mx-auto pt-2'>

            <div className='text-4xl text-left md:text-center  md:text-5xl font-bold my-6'>
               Why Qno?
            </div>

            <div className='flex justify-evenly flex-wrap my-10'>
                <FeatureCard icon={'fas fa-check-circle'} head={'Easy Check-In'} desc= {'Check-in with single click and say no to queues.'} />
                <FeatureCard icon={'fas fa-clock'} head={'Save your valuable time'} desc= {'By knowing the estimated waiting time in nearby salons.'} />
                <FeatureCard icon={'fas fa-map-marked-alt'} head={'Discover best Salon'} desc= {'Choice of top-rated salons and services, Compare the prices, reviews and get best one.'} />
                <FeatureCard icon={'fas fa-clipboard'} head={'Keep measurements notes'} desc= {'Save notes of your hair-styles and use these measurements anywhere.'}/>
            </div>


        </div>
    </div>
  )
}
