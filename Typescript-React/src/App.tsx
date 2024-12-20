import React, { useRef } from 'react';
import {useState} from 'react'
import UserProfile from './Components/UserProfile';
import ContactForm from './Components/ContactForm';
import Counter from './Components/Counter';
import Fetch from './Fetch';

const App = () => {

  const [name, setname] = useState<string>('Eugene')

  const userInfo = [
   { username:'Eugene',
    age:22,
    email:'groupeight00@gmail.com',
    hobbies:['coding','Footysball']},

   { username:'Afryie',
    age:24,
    email:'groupeight00@gmail.com',
    hobbies:['coding','Footsball']},
  ]


  return (
    // <div>
      
    //   name:{name}
    //   <button onClick={() => name === 'Eugene' ? setname('Eugene Afriyie'): setname('Eugene')}>Change</button>

    //   <UserProfile userInfo={userInfo} />
    // </div>

    // <ContactForm/>

    // <Counter/>
    <Fetch/>
  )
}

export default App