import React from "react";
import { MultiForm } from "../Context";
import Navigate from "./Navigate";

function Steptwo(){
    const {  
        plans, 
        userSubscription,
        setUserSubscription,
        user
    } = MultiForm();

    return(
        <div className="flex flex-col bg-magnolia w-full min-h-[calc(100vh-30vh)] md:min-h-screen md:bg-white">
            <div className="bg-white relative z-50 p-[2em] rounded-lg mx-[1em] sm:mx-auto mt-[-12vh] shadow-md shadow-lightGray mb-[2em] md:mb-0 md:mt-[2em] max-w-[600px] md:w-full md:shadow-none">
                <h1 className="text-marineBlue text-3xl font-[700]">
                    Select your plan
                </h1>
                <p className="text-coolGray my-[.5em]">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="mt-[2em] md:flex">
                    {
                        plans.map((plan, index) => 
                            <div 
                                key={index}
                                onClick={() => setUserSubscription({...userSubscription, plan: plan.name})}
                                className={`border-[1px] border-lightGray rounded-md flex p-[1em] my-[1em] cursor-pointer hover:border-purplishBlue w-full md:even:mx-[1em] md:flex-col ${userSubscription.plan === plan.name && 'bg-alabaster border-purplishBlue'}`}
                                >
                                <div className="px-[1em] md:pl-0">
                                    <img src={plan.icon} alt="arcade" className="h-full w-[60px]"/>
                                </div>
                                <div className="w-full md:mt-[2em]">
                                    <h3 className="text-marineBlue font-[500] capitalize">
                                        {plan.name}
                                    </h3>
                                    <p className="text-coolGray text-[14px]">
                                        {userSubscription.isYearly ? plan.yearly.price : plan.monthly.price}
                                    </p>
                                    {
                                        userSubscription.isYearly &&
                                        <p className="text-marineBlue text-[14px]">
                                            {plan.yearly.duration}
                                        </p>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex justify-center bg-alabaster py-[1em] text-marineBlue">
                    <span>
                        Monthly
                    </span>
                    <label className="inline-flex relative items-center mx-4 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={userSubscription.isYearly} readOnly/>
                        <div 
                            className="w-11 h-6 bg-marineBlue rounded-full peer peer-focus:ring-marineBlue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marineBlue"
                            onClick={() => setUserSubscription({...userSubscription, isYearly: !userSubscription.isYearly})}
                            >
                        </div>
                    </label>
                    <span>
                        Yearly
                    </span>
                </div> 
            </div>
            <div className="mt-auto">
                <Navigate/>
            </div>
        </div>
    )
}

export default Steptwo