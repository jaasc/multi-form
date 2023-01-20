import React, { useEffect, useState } from "react";
import { MultiForm } from "../Context";
import Navigate from "./Navigate";

function Stepfour(){
    const { 
        userSubscription, 
        plans, 
        addOns,
        setActiveForm 
    } = MultiForm()
    const [cost, setCost] = useState([])

    useEffect(() => {
        setCost(item => [...item, userSubscription.isYearly ? (plans.find(list => list.name === userSubscription.plan)).yearly.price : (plans.find(list => list.name === userSubscription.plan)).monthly.price])
        userSubscription.addOns.map(list => userSubscription.isYearly ? 
            setCost(item => [...item, (addOns.find(add => add.title === list)).yearly]) : 
            setCost(item => [...item, (addOns.find(add => add.title === list)).monthly])
        )
        setCost(price => price.map(item => +(item.slice(1, -3))))
    }, [])

    return(
        <div className="flex flex-col bg-magnolia w-full min-h-[calc(100vh-30vh)] md:min-h-screen md:bg-white">
            <div className="bg-white relative z-50 p-[2em] rounded-lg mx-[1em] sm:mx-auto mt-[-12vh] shadow-md shadow-lightGray md:mt-[2em] max-w-[600px] md:w-full md:shadow-none">
                <h1 className="text-marineBlue text-3xl font-[700]">
                    Finishing up
                </h1>
                <p className="text-coolGray my-[.5em]">
                    Double-check everything looks OK before confirming.
                </p>
                <div className="mt-[2em]">
                    <div className="bg-alabaster rounded-md p-[1em] my-[1em]">
                        <div className="flex justify-between w-full">
                            <div>
                                <h3 className="capitalize text-marineBlue font-[500]">
                                    {userSubscription.plan} ({userSubscription.isYearly? 'Yearly': 'Monthly'})
                                </h3>
                                <button 
                                    className="text-coolGray text-[14px] font-[400] underline hover:text-purplishBlue"
                                    onClick={() => setActiveForm(1)}
                                    >
                                    Change
                                </button>
                            </div>
                            <div>
                                <p className="text-[14px] text-marineBlue font-[500]">
                                    {userSubscription.isYearly ? (plans.find(list => list.name === userSubscription.plan)).yearly.price : (plans.find(list => list.name === userSubscription.plan)).monthly.price}
                                </p>
                            </div>
                        </div>
                        <hr className="my-[1em]"/>
                        {
                            userSubscription.addOns.map((list, index) => 
                                <div className="w-full flex justify-between mb-[.5em]" key={index}>
                                    <p className="text-coolGray text-[14px] font-[400]">
                                        {list}
                                    </p>
                                    <p className="text-[14px] text-marineBlue font-[500]">
                                        +{userSubscription.isYearly ? (addOns.find(add => add.title === list)).yearly : (addOns.find(add => add.title === list)).monthly}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className="w-full flex justify-between px-[1em]">
                        <p className="text-coolGray font-[400]">
                            Total(per {userSubscription.isYearly? 'year' : 'month'})
                        </p>
                        <p className="text-purplishBlue font-[500] text-[18px]">
                            ${cost.reduce((sum, total) => sum+total, 0)}/{userSubscription.isYearly? 'yr' : 'mo'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <Navigate/>
            </div>
        </div>
    )
}

export default Stepfour