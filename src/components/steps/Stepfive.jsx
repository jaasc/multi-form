import React from "react";
import thankYou from "../../assets/images/icon-thank-you.svg";
import { MultiForm } from "../Context";

function Stepfive(){
    const { 
        setActiveForm, 
        setUserSubscription 
    } = MultiForm()
    const supportEmail = 'support@loremgaming.com'

    const handleSubmit = () => {
        setActiveForm(0)
        setUserSubscription({
            plan: 'Arcade',
            isYearly: false,
            addOns: [],
        })
    }

    return(
        <div className="flex flex-col bg-magnolia w-full min-h-[calc(100vh-30vh)] text-center md:min-h-screen md:bg-white">
            <div className="bg-white relative z-50 px-[3em] pt-[5em] pb-[3em] rounded-lg mx-[1em] sm:mx-auto mt-[-12vh] shadow-md shadow-lightGray mb-[2em] md:mb-0 md:mt-[2em] max-w-[600px] md:w-full md:shadow-none">
                <div className="mb-[1em]">
                    <img src={thankYou} alt="arcade" className="w-[70px] mx-auto"/>
                </div>
                <h1 className="text-marineBlue text-4xl font-[700]">
                    Thank you!
                </h1>
                <p className="text-coolGray my-[1em] leading-8 text-[18px]">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at&nbsp;
                    <span onClick={() => window.open(`mailto:${supportEmail}`, '_blank')}
                        className="cursor-pointer"
                        >
                        {supportEmail}
                    </span>
                </p>
                <button 
                    className="mt-[2em] bg-marineBlue text-white py-[.5em] px-[1em] rounded z-0" 
                    onClick={handleSubmit}
                    >
                    Home
                </button>
            </div>
        </div>
    )
}

export default Stepfive