import React from 'react'

type useData = {
    username:string;
    age:number;
    email:string;
    hobbies:string[];
}

type userinfoProp ={
    userInfo: useData[]
}

const UserProfile: React.FC<userinfoProp> =({userInfo}) => {


  return (
   <>
    <h1>UserProfile Info</h1>
    <ul>
     {   userInfo.map(({username,age,email,hobbies},index) =>(
            <ul key={index}>
                <li>UserName: {username}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
            <li>Email: {username}</li>
            <li>{hobbies.map(item =>(
                <ul>
                    <li key={item}>{item}</li>
                </ul>
            ))}</li>
            </ul>
        ))}
    </ul>

    <br />
    <br />
    <br />
   </>
  )
}

export default UserProfile