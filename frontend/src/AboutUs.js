import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

export default function AboutUs() {
  return (
    <div>
    <Header val={true} />
    
    {/* About Qno */}
    <div className='w-9/12 mx-auto my-4'>
      <div className='text-4xl font-bold my-6'>
        Who We Are?
      </div>
      <div className='text-md px-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sollicitudin quam. Etiam tristique bibendum sapien, sed 
      pulvinar nibh aliquam vitae. Integer vel sem venenatis, dignissim augue ultrices, sodales nulla. Sed egestas turpis a sapien
       molestie dapibus. Curabitur et augue tempus, tincidunt mi a, consectetur tortor. Suspendisse velit felis, tempus nec libero
        quis, gravida pulvinar nulla. Aliquam maximus rhoncus ex. Nullam nec diam leo. Nunc tortor tellus, dignissim non maximus 
        pulvinar, molestie nec diam.Nunc non diam luctus, euismod ligula eu, sodales dolor. Morbi aliquet lorem a nibh ultrices, 
        ac efficitur lacus ultrices. Suspendisse potenti. Duis accumsan ipsum non tortor rutrum ultricies. Duis sodales molestie 
        velit, et ullamcorper lorem finibus a. Curabitur pellentesque in lorem id hendrerit. Phasellus vel auctor odio. Quisque 
        ac tristique velit. In est est, gravida tincidunt vehicula et, ullamcorper vitae felis. Phasellus id tincidunt est, 
        euismod vestibulum ipsum. Vestibulum luctus lacinia est, non laoreet dui iaculis nec. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Mauris vestibulum laoreet augue, vitae sodales nulla pellentesque in. Morbi tincidunt lacus 
        velit, et fringilla justo volutpat in.
      </div>
    </div>


    {/* Founding Story */}
    <div className='w-9/12 mx-auto my-4'>
      <div className='text-4xl font-bold my-6'>
        How It was Founded
      </div>
      <div className='text-md px-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sollicitudin quam. Etiam tristique bibendum sapien, sed 
      pulvinar nibh aliquam vitae. Integer vel sem venenatis, dignissim augue ultrices, sodales nulla. Sed egestas turpis a sapien
       molestie dapibus. Curabitur et augue tempus, tincidunt mi a, consectetur tortor. Suspendisse velit felis, tempus nec libero
        quis, gravida pulvinar nulla. Aliquam maximus rhoncus ex. Nullam nec diam leo. Nunc tortor tellus, dignissim non maximus 
        pulvinar, molestie nec diam.Nunc non diam luctus, euismod ligula eu, sodales dolor. Morbi aliquet lorem a nibh ultrices, 
        ac efficitur lacus ultrices. Suspendisse potenti. Duis accumsan ipsum non tortor rutrum ultricies. Duis sodales molestie 
        velit, et ullamcorper lorem finibus a. Curabitur pellentesque in lorem id hendrerit. Phasellus vel auctor odio. Quisque 
        
      </div>
    </div>

    {/* Vision of Qno */}
    <div className='w-9/12 mx-auto my-4'>
      <div className='text-4xl font-bold my-6'>
        Vision of QNO
      </div>
      <div className='text-md px-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sollicitudin quam. Etiam tristique bibendum sapien, sed 
      pulvinar nibh aliquam vitae. Integer vel sem venenatis, dignissim augue ultrices, sodales nulla. Sed egestas turpis a sapien
       molestie dapibus. Curabitur et augue tempus, tincidunt mi a, consectetur tortor. Suspendisse velit felis, tempus nec libero
        quis, gravida pulvinar nulla. Aliquam maximus rhoncus ex. Nullam nec diam leo. Nunc tortor tellus, dignissim non maximus 
        pulvinar, molestie nec diam.Nunc non diam luctus, euismod ligula eu, sodales dolor. Morbi aliquet lorem a nibh ultrices, 
        ac efficitur lacus ultrices. Suspendisse potenti. Duis accumsan ipsum non tortor rutrum ultricies. Duis sodales molestie 
        velit, et ullamcorper lorem finibus a. Curabitur pellentesque in lorem id hendrerit. Phasellus vel auctor odio. Quisque 
        ac tristique velit. In est est, gravida tincidunt vehicula et, ullamcorper vitae felis. Phasellus id tincidunt est, 
      </div>
    </div>

    {/* About Qno */}
    <div className='w-9/12 mx-auto my-4'>
      <div className='text-4xl font-bold my-6'>
        Team
      </div>

      <div className='text-md px-4'>
        <div className='flex justify-center my-4'>
          <div className='text-center relative'>
            {/* <div className='absolute w-48'>
              <i class="fa-brands fa-linkedin text-5xl"></i>
            </div> */}
            <img src='./images/drigesh.jpg' className='w-48 h-56 mx-4 hover:grayscale'/>
            <p className='font-bold mt-2 text-gray-600'>Drigesh Anuragi</p>
            <p className='text-sm'>Co-founder</p>
          </div>
          <div className='text-center'>
            <img src='./images/abu.jpg' className='w-48 h-56 mx-4 hover:grayscale'/>
            <p className='font-bold mt-2 text-gray-600'>V Abubakar Siddik</p>
            <p className='text-sm'>Co-founder</p>
          </div>
        </div>
        <div className='flex justify-center mt-20'>
        <div className='text-center relative'>
            <img src='./images/dhwani.png' className='w-48 h-56 mx-4 hover:grayscale'/>
            <p className='font-bold mt-2 text-gray-600'>Dhwani Doshi</p>
            <p className='text-sm'>Designer</p>
          </div>
          <div className='text-center'>
            <img src='./images/shubham.jpeg' className='w-48 h-56 mx-4 hover:grayscale'/>
            <p className='font-bold mt-2 text-gray-600'>Shubham Mondal</p>
            <p className='text-sm'>Backend Developer</p>
          </div>
          <div className='text-center'>
            <img src='./images/kuldeep.jpeg' className='w-48 h-56 mx-4 hover:grayscale'/>
            <p className='font-bold mt-2 text-gray-600'>Kuldeep Ranjan</p>
            <p className='text-sm'>Frontend Developer</p>
          </div>
        </div>
      </div>

    </div>

    <Footer />
    </div>
  )
}
