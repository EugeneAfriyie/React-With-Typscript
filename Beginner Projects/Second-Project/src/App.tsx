import React from 'react'
import Navigation from './Components/Navigation'
import PeolpleToFollow from './Components/PeopleToFollow'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div className="flex justify-center">
        {/* main area */}

        <div className="w-[30%]">
          <PeolpleToFollow/>
        </div>
      </div>
    </div>
  )
}
 
export default App