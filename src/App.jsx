import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Questions from './Components/Questions/Questions'
import { Routes, Route} from 'react-router-dom'
import Results from './Components/Results/Results'





const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/questions' element={<Questions/>} />
       <Route path='/results' element = {<Results/>}/>
      </Routes>
    </div>
  )
}

export default App
