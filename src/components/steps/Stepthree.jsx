import React, { useEffect, useState } from "react";
import { FaCheck } from 'react-icons/fa';
import { MultiForm } from "../Context";
import Navigate from "./Navigate";

function Stepthree(){
    const { 
        addOns, 
        userSubscription, 
        setUserSubscription 
    } = MultiForm()
    const [newAddon, setNewAddon] = useState(userSubscription.addOns)

    const handleChange = (e) => {
        const { value } = e.target
        newAddon.find(add => add === value)? setNewAddon(list => list.filter(add => add !== value)) : setNewAddon(list => [...list, value])
    }
    
    useEffect(() => {
        setUserSubscription(plan => ({...plan, addOns: newAddon }))    
    }, [newAddon])

    
    return(
        <div className="flex flex-col bg-magnolia w-full min-h-[calc(100vh-30vh)] md:min-h-screen md:bg-white">
            <div className="bg-white relative z-50 p-[2em] rounded-lg mx-[1em] sm:mx-auto mt-[-12vh] shadow-md shadow-lightGray md:mt-[2em] max-w-[600px] mb-[2em] md:mb-0 md:w-full md:shadow-none">
                <h1 className="text-marineBlue text-3xl font-[700]">
                    Pick add-ons
                </h1>
                <p className="text-coolGray my-[.5em]">
                    Add-ons help enhance your gaming experience.
                </p>
                <div className="mt-[2em]">
                    {
                        addOns.map((addons, index) =>  
                            <div 
                                key={index}
                                className={`border-[1px] border-lightGray rounded-md flex p-[1em] my-[1em] cursor-default hover:border-purplishBlue ${newAddon.find(add => add === addons.title) && 'bg-alabaster'}`} 
                                >
                                <div className="px-[1em] flex items-center">
                                    <label className="relative flex items-center justify-center cursor-pointer" htmlFor={`chckbox${index}`}>
                                        <input 
                                            type="checkbox" 
                                            id={`chckbox${index}`} 
                                            value={addons.title}
                                            onChange={handleChange}
                                            className={`appearance-none h-6 w-6 rounded-md border-[1px] border-coolGray ${newAddon.find(add => add === addons.title) && 'bg-purplishBlue'}`} />
                                        <FaCheck className="h-3 w-3 text-white absolute"/>
                                    </label>
                              </div>
                                <div className="w-full">
                                    <h3 className="text-marineBlue font-[500] capitalize">
                                        {addons.title}
                                    </h3>
                                    <p className="text-coolGray text-[14px]">
                                        {addons.description}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-purplishBlue text-[14px]">
                                        +{userSubscription.isYearly ? addons.yearly : addons.monthly}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="mt-auto">
                <Navigate/>
            </div>
        </div>
    )
}

export default Stepthree