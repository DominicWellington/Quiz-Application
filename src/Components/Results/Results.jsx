import React from 'react'
import { useNavigate } from 'react-router-dom'

const Results = ({totalCorrects,totalQuestions}) => {
    const navigate = useNavigate();
    const handleRestart = () =>  {
      navigate('/'); 
  }

  return (
        
        <>
        <div className='w-[41rem] m-auto mt-32 text-lg bg-white/60 backdrop-blur-sm
         text-gray-800 flex flex-col gap-5 rounded-xl py-14 px-12'>
            
        <h1 className='text-xl text-gray-500 font-bold'>Quiz App</h1>
        <hr  className='h-[2px] border-0 bg-gray-500'/>
        <h2 className='text-lg text-gray-500 font-bold'>
          Scored {totalCorrects} out of {totalQuestions} Questions Correctly
        </h2>
        <button onClick={handleRestart} className=' w-40 mt-5 mx-auto py-1 bg-black rounded-md text-white '>
          Restart
        </button>
      
    </div>
    </>
      
  )
}

export default Results
