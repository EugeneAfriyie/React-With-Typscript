import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa';
import Tab from './Tab';

const Profile = () => {
    const [bannerUrl,setBannerurl] = useState('https://dummyimage.com/1500x400');

    const [profileUrl,setProfileUrl] = useState("https://via.placeholder.com/100");

    const handleBannerChange = (event:any) => {
        const file = event.target.files[0];


        if(file){
            setBannerurl(URL.createObjectURL(file))
        }
    } 

    const handleProfileChange = (event:any) =>{
        const file = event.target.files[0];

        if (file){
            setProfileUrl(URL.createObjectURL(file))
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

        <div className="flex items-center m-4  mt-[2rem] border border-red-500 relative">
                    <div className="flex items-center justify-center m-4 mt-[2rem] border border-red-500 relative">
            <img 
                src={profileUrl} 
                alt="profile img"
                className="w-40 h-40 object-cover rounded-full border-white"
            />
            <button 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
                <label htmlFor="profile-upload" className="cursor-pointer">
                <FaCamera size={24} />
                </label>

                <input type="file" id='profile-upload' accept='image/*'className='hidden' onChange={handleProfileChange} />
            </button>
        </div>


        {/* Channel details  */}

        <div className="ml-4 mt-4 ">
            <h1 className="text-2xl font-bold ml-[4remn]"> Eugene Afriyie</h1>
            <p>1M  Views</p>
            <p className="mt-2">
                This is a short description of the YouTube Channel. It gives an overview of the content and purpose of the channel.
            </p>

            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-rose-500">
                Subscibe
            </button>

        </div>


        </div>

        <Tab/>
    </div>
  )
}

export default Profile