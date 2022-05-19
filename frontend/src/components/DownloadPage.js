import React from 'react'

export default function DownloadPage() {
  return (
    <div className='w-9/12 mx-auto flex'>
        <div className='w-7/12 my-auto'>
            <div className='text-5xl font-bold my-4'>
                Get the App in Phone.
            </div>
            <div className='text-xl'>
                Download the app from Play Store or App Store to get a smooth Experience.
            </div>
            {/* <div></div> */}
            <div className='flex my-5'>
            <a href='http://qnoapp.com'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-RsGSnFAr00Dzhk6MZXlXQcC7vVZLaSxEg&usqp=CAU'
                className='w-40 h-12 rounded-md'
                />
            </a>
            <a href='http://qnoapp.com'>
                <img src='https://e7.pngegg.com/pngimages/316/826/png-clipart-etazhi-app-store-logo-brand-font-google-play-apple-store-text-logo.png'
                className='w-40 h-12 mx-4 rounded-md'
                />
            </a>
            </div>
        </div>
        <div className='w-5/12'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XIbQMkuCXOSKPHyBn34oYve_osbNDM2nug&usqp=CAU' 
                className='w-full h-112'
            />
        </div>
    </div>
  )
}
