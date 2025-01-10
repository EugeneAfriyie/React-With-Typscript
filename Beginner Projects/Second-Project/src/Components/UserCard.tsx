import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

type UserCardProb ={


    index:number;
    person:{
        name: string; 
        following: boolean; 
      }
      handleFollwing: (index: number) => void;
     }

function UserCard({ person,index,handleFollwing }:UserCardProb) {

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </div>
      <button
      onClick={()=> handleFollwing(index)}
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default UserCard;