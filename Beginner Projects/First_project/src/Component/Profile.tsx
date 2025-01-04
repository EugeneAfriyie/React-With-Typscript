import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
    const [bannerUrl,setBannerurl] = useState('https://dummyimage.com/1500x400');

    const [profileUrl,setProfileUrl] = useState("https://via.placeholder.com/100");

    const handleBannerChange = (event:any) => {
        const file = event.target.files[0];


        if(file){
            setBannerurl(URL.createObjectURL(file))
        }
    } 

  return (
    <div className='relative w-[94%] ml-[5rem]'>
        <div className="relative">
            <img
             src={bannerUrl} 
             alt="background image" 
             className='w-full h-60 object-cover' 
             />

             <button className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                <label htmlFor="banner-upload" className='cursor-pointer'>
                    <FaCamera size={24}/>
                </label>

                <input type="file" id='banner-upload' accept='image/*' className='hidden'
                
                
                onChange={handleBannerChange}/>
             </button>

        </div>

        {/* Channel Logo  */}

        <div className="flex items-center m-4  mt-[2rem] border border-red-500">
            <img 
                src={profileUrl} 
                alt="prolile img"
                className='w-40 h-40 0bject-cover rounded-full border-white relative'
              />

            <button className="absolute  -ml-[6rem] z-10 mt-[10rem] p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600">
                <label htmlFor="proflie-upload"
                       className='cursor-pointer'>

                <FaCamera size={24}/>
                </label>
            </button>

        </div>
    </div>
  )
}

export default Profile