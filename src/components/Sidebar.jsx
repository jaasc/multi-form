import React from "react";
import { MultiForm } from "./Context";

function Sidebar(){
    const { activeForm } = MultiForm();
    
    const steps = [
        {
            stepNo: 'step 1',
            description: 'your info'
        },
        {
            stepNo: 'step 2',
            description: 'select plan'
        },
        {
            stepNo: 'step 3',
            description: 'add-ons'
        },
        {
            stepNo: 'step 4',
            description: 'summary'
        },
    ]

    return(
        <div className="z-[10] bg-sidebar-mobile bg-purplishBlue bg-top bg-cover text-white min-h-[30vh] max-h-[calc(100vh-1em)] sticky md:top-[.5em] p-[2em] flex justify-center md:rounded-2xl md:m-[.5em] md:block md:bg-sidebar-desktop md:bg-center md:w-[30%]">
            {
                steps.map((step, index) => 
                    <div className="flex uppercase font-[500] mb-[1em] justify-center md:justify-start" key={index}>
                        <div>
                            <p className={`border-[1px] rounded-[50%] border-white m-[1em] py-[.3em] px-[.8em] ${activeForm === index && 'bg-lightBlue text-marineBlue border-lightBlue'}`}>
                                {index+1}
                            </p>
                        </div>
                        <div className="flex-col justify-center hidden md:flex">
                            <p className="text-coolGray">
                                {step.stepNo}
                            </p>
                            <h3 className="tracking-[1px]">
                                {step.description}
                            </h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar