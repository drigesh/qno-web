import React from 'react'

export default function StatsPage() {
  return (
    <div className='py-10 bg-slate-100'>
    <div className='w-8/12 bg-gradient-to-t from-navy to-cyan-500 py-12 mx-auto rounded-xl flex text-white text-center'>

        <div className='w-4/12 '>
            <div>
            <i class="fa-solid fa-user text-2xl"></i>
            {/* <i className="fa-regular fa-user text-xl"></i> */}
            </div>
            <p className='text-5xl font-bold mt-3 mb-2 border-r-2 border-white'> 153+ </p>
            <p className='text-xl'> Users </p>
        </div>
        <div className='w-4/12'>
            <div><i className="fa-solid fa-shop text-2xl"></i></div>
            <p className='text-5xl font-bold mt-3 mb-2 border-r-2 border-white'> 7+ </p>
            <p className='text-xl'> Salons </p>
        </div>
        <div className='w-4/12'>
            <div><i class="fa-solid fa-comments text-2xl"></i></div>
            <p className='text-5xl font-bold mt-3 mb-2'> 54+ </p>
            <p className='text-xl'> Reviews </p>
        </div>

    </div>
    </div>
  )
}
