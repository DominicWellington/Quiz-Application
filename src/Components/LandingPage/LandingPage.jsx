import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/questions");
  };


  return (
    <div className="flex justify-center text-center flex-col mt-52">
      <h2 className="m-6 text-4xl ">Welcome To My Quiz Application </h2>

      <div>
        <button onClick={handleNextPage}
          class="overflow-hidden relative w-32 p-2 h-10 bg-black text-white border-none rounded-md 
          text-xl font-bold cursor-pointer z-10 group" >
          Start !
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 
            group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 
            group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 
            group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span
            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 
            absolute top-2.5 left-2 right-3 z-10">
            Start !
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
