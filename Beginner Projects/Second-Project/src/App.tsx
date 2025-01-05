import React from 'react'
import Navigation from './Components/Navigation'
import PeolpleToFollow from './Components/PeopleToFollow'
import TrendsList from './Components/TrandList'
import TopicsList from './Components/TopicsList'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div className="flex justify-center">
        {/* main area */}

        <div className="w-[30%]">
          <PeolpleToFollow/>
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
    </div>
  )
}
 
export default App