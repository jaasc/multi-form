import React from "react";
import { MultiForm } from "../Context";

const style = {
    label: 'text-[14px]',
    input: 'block w-full rounded-lg focus:outline-none border-[1px] border-lightGray px-[1em] py-[.5em] mb-[.5em] hover:border-purplishBlue'
}

function Stepone(){
    const { 
        user, 
        setUser,
        setActiveForm
    } = MultiForm()

    const handleSubmit = (e) => {
        console.log('clicked')
        e.preventDefault()
        setActiveForm(1)
        setUser({
            name: '',
            email: '',
            phone: ''
        })
    }

    return(
        <form 
            className="flex flex-col bg-magnolia w-full min-h-[calc(100vh-30vh)] md:min-h-screen md:bg-white"
            onSubmit={handleSubmit}
            >
            <div className="bg-white relative z-50 p-[2em] rounded-lg mx-[1em] sm:mx-auto mt-[-12vh] shadow-md shadow-lightGray md:mt-[2em] max-w-[600px] md:w-full md:shadow-none">
                <h1 className="text-marineBlue text-3xl font-[700]">
                    Personal info
                </h1>
                <p className="text-coolGray my-[.5em]">
                    Please provide your name, email address, and phone number.
                </p>
                <div className="my-[1em] text-marineBlue">
                    <label htmlFor="name" className={style.label}>
                        Name
                    </label>
                    <input 
                        id="name" 
                        type="text" 
                        value={user.name}
                        placeholder="e.g. Stephen King"
                        onChange={e => setUser({...user, name:e.target.value})} 
                        className={style.input} 
                        required
                        />
                    <label htmlFor="email" className={style.label}>
                        Email Address
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        value={user.email}
                        placeholder="e.g. stephenking@lorem.com" 
                        onChange={e => setUser({...user, email:e.target.value})} 
                        className={style.input} 
                        required
                        />
                    <label htmlFor="phone" className={style.label}>
                        Phone Number
                    </label>
                    <input 
                        id="phone" 
                        type="tel" 
                        data-filter="(\+|(\+[1-9])?[0-9]*)"
                        value={user.phone}
                        placeholder="e.g. +1 234 567 890" 
                        onChange={e => setUser({...user, phone:e.target.value})} 
                        className={style.input} 
                        required
                        />
                </div>
            </div>
            <div className="mt-auto bg-white p-[1em] text-right">
                <button 
                    className="bg-marineBlue text-white py-[.5em] px-[1em] rounded z-0 hover:opacity-[70%] hover:bg-purplishBlue" 
                    type="submit"
                    >
                    Next Step
                </button>
            </div>
        </form>
    )
}

export default Stepone