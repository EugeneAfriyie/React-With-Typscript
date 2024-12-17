import React, { useRef } from 'react';
import {useState} from 'react'
import UserProfile from './Components/UserProfile';

const App = () => {

  const [name, setname] = useState<string>('Eugene')


  return (
    <div>
      
      name:{name}
      <button onClick={() => setname('Eugene Afriyie')}>Change</button>

      <UserProfile/>
    </div>
  )
}

export default App