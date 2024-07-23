import React, { useState } from 'react'
import  {questions} from '../../assets/Question.json'
import Results from '../Results/Results';



const Quiz = () => {

const [index, setIndex] = useState(0);
const question = questions[index];
const [totalCorrects, setTotalCorrects] = useState(0)
const [userMessage, setUserMessage] = useState({ message:""});
const [chosenAnswer,setchosenAnswer] = useState({ index : 0, status : ""});
const [completed,setCompleted] = useState(false);
  

  // Handle Next Question
  const handleNextQuestion = ({totalCorrects, totalQuestions}) => {
    if (chosenAnswer.status === "") {
      setUserMessage({ message:"Please choose an answer" })
      return
    }

    setIndex((current) => current + 1);

    setchosenAnswer({ status:"", index:0 });
  }

  const handleSubmit = () => { 
    if (chosenAnswer.status === "") {
      setUserMessage({
        message:"Please choose an answer",
      })
      return
    }

    setCompleted(true)
    
    
  }

  return (
    <>
    {/* checking if the quiz is completed. if yes then show the results or if its not completed show the next button */}
        {!completed ? (
          <>
            <div className='w-[41rem] m-auto mt-32 text-lg bg-white/60 backdrop-blur-sm text-gray-800 flex flex-col gap-5 rounded-xl py-14 px-12'>
            {userMessage.message !== "" && (
              <div className=' px-5 bg-red-200 border border-red-800 rounded-lg py-4 text-lg flex justify-between cursor-pointer'>
                <span>
                  <p>{userMessage.message}</p>
                </span>

              {/* Removes the message when the X button is clicked  */}
                <span
                className=' ml-3'
                onClick={()=>{ setUserMessage({  message: "" })}}>X</span>
              </div>
            )}

            <h1 className='text-xl text-gray-500 font-bold'>Quiz App</h1>
            <hr  className='h-[2px] border-0 bg-gray-500'/>
            <h2 className='text-lg'>{index + 1}. {question.question}</h2>
          <div className='flex h-[180px] mb-3 pl-4 '>
            <ul>
              {
                question.options.map((option, index)=> (
                  <>  
                  {/* checking if the li is clicked or not */}
                    <li key={index} onClick={() => {
                      if (chosenAnswer.status == "") {
                        setUserMessage({ message:"" })
                        // checks if the chosen answer is correct
                        if (option.isCorrect) {
                          setchosenAnswer({
                            status:"correct",
                            index:index
                          }); 
                          // if its correct  add 1 to the answer
                          setTotalCorrects(current => current + 1)
                        } 
                        // the chosen answer is wrong
                        else {
                          setchosenAnswer({
                            status:"wrong",
                            index:index
                          })
                        }
                      }
                    }} 
                    // checking if the chosen answer matches the correct answer in that index.
                    // to be able to know what color to display.

                    className={`${(chosenAnswer.status ==="correct" && chosenAnswer.index === index) 
                    ?" bg-[#abf7b1] border-green-400" : (chosenAnswer.status === "wrong" && chosenAnswer.index === index) 
                    ? "bg-[#ee6b6e] border-[#ff0000]" :""} 
                      border border-gray-800 border-1 rounded-sm  mb-2 w-[500px] py-2 px-3 cursor-pointer 
                      ${chosenAnswer.status !== "" && "cursor-not-allowed"}`}>
                      {option.answer}
                    </li>
                  </>
                ))
              }
              
            </ul>
          </div>
          

            {/* checking if we have reached the last question if no maintain the next button 
                but if yes change to submit button */}

            {index + 1 !== questions.length ? (
              <button onClick={handleNextQuestion} class="overflow-hidden relative w-[130px] m-auto p-2 h-10 bg-black mt-3
              text-white border-none rounded-md text-base font-bold cursor-pointer z-10 group">
                  Next
              <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 
              transition-transformgroup-hover:duration-500 duration-1000 origin-left">
              </span>
              <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 
                group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left">
                </span>

              <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 
                group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left">
                </span>

              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 
                absolute top-2.5 left-2 right-3 z-10">Next</span>
            </button>
            )  :
            (
              <button onClick={handleSubmit}  class="overflow-hidden relative w-[130px] m-auto p-2 h-10 bg-black mt-3
              text-white border-none rounded-md text-base font-bold cursor-pointer z-10 group">
                  Submit
              <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 
              transition-transformgroup-hover:duration-500 duration-1000 origin-left">
              </span>
              <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 
                group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left">
                </span>

              <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 
                group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left">
                </span>

              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 
                absolute top-2.5 left-2 right-3 z-10">Submit</span>
            </button>
            )
            }
            <div className='m-auto text-lg text-gray-500 font-bold'> {index + 1} / {questions.length}</div>
          
        </div>
        </>
      ):
        (
          <>
            <Results totalCorrects =  {totalCorrects} totalQuestions = {questions.length}/>
          </>
        )
    }
    </>
  )
}

export default Quiz
