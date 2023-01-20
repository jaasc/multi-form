import React from "react";
import { MultiForm } from "../Context";

function Navigate(){
    const { 
      activeForm, 
      setActiveForm,
    } = MultiForm();

    return(
        <div className="bg-white p-[1em] w-full flex justify-between mx-auto md:max-w-[600px]">
          <button 
            className={`text-coolGray hover:text-marineBlue hover:font-[500] ${activeForm === 0 && 'invisible'}`}
            onClick={() => activeForm !== 0 && setActiveForm(activeForm-1)}
            >
              Go Back
          </button>
          <button 
            className="bg-marineBlue text-white py-[.5em] px-[1em] rounded z-0 hover:opacity-[70%] hover:bg-purplishBlue" 
            onClick={() => activeForm !== 4 && setActiveForm(activeForm+1)}
            >
              Next Step
          </button>
      </div>
    )
}

export default Navigate